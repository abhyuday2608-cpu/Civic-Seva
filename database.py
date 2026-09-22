# -*- coding: utf-8 -*-
"""
CivicSeva Database Engine
SQLite3 Persistent Storage for Citizens, Active Sessions, Applications,
Document Vault, and System Audit Logs.
"""

import sqlite3
import os
import hashlib
import secrets
from datetime import datetime

DB_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "civicseva.db")

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def hash_password(password):
    return hashlib.sha256(password.encode('utf-8')).hexdigest()

def init_db():
    conn = get_db()
    cursor = conn.cursor()

    # 1. Citizens Table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS citizens (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        full_name TEXT NOT NULL,
        initials TEXT NOT NULL,
        aadhaar_masked TEXT NOT NULL,
        mobile TEXT NOT NULL,
        role TEXT DEFAULT 'Verified Citizen',
        created_at TEXT NOT NULL
    )
    ''')

    # 2. Active Sessions Table (Tracks logged-in persons)
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS sessions (
        token TEXT PRIMARY KEY,
        citizen_id INTEGER NOT NULL,
        ip_address TEXT DEFAULT '127.0.0.1',
        user_agent TEXT DEFAULT 'Chrome/Windows 11',
        status TEXT DEFAULT 'active',
        created_at TEXT NOT NULL,
        last_active TEXT NOT NULL,
        FOREIGN KEY (citizen_id) REFERENCES citizens (id)
    )
    ''')

    # 3. Applications Table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS applications (
        ref_id TEXT PRIMARY KEY,
        citizen_id INTEGER NOT NULL,
        service_name TEXT NOT NULL,
        applicant_name TEXT NOT NULL,
        aadhaar_masked TEXT NOT NULL,
        mobile TEXT NOT NULL,
        state TEXT NOT NULL,
        district TEXT NOT NULL,
        status TEXT NOT NULL,
        current_stage INTEGER NOT NULL,
        remarks TEXT,
        officer_name TEXT,
        submitted_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        FOREIGN KEY (citizen_id) REFERENCES citizens (id)
    )
    ''')

    # 4. Application Tracking History Stages
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS application_history (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        ref_id TEXT NOT NULL,
        stage_num INTEGER NOT NULL,
        stage_title TEXT NOT NULL,
        description TEXT NOT NULL,
        officer TEXT NOT NULL,
        completed_at TEXT,
        FOREIGN KEY (ref_id) REFERENCES applications (ref_id)
    )
    ''')

    # 5. Document Vault Table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS vault_documents (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        citizen_id INTEGER NOT NULL,
        doc_name TEXT NOT NULL,
        doc_type TEXT NOT NULL,
        file_size TEXT NOT NULL,
        sha256_hash TEXT NOT NULL,
        digilocker_verified INTEGER DEFAULT 1,
        pin_locked INTEGER DEFAULT 0,
        uploaded_at TEXT NOT NULL,
        FOREIGN KEY (citizen_id) REFERENCES citizens (id)
    )
    ''')

    # 6. Audit Logs Table (Full audit trail of logins & actions)
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS audit_logs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        action TEXT NOT NULL,
        citizen_id INTEGER,
        citizen_name TEXT,
        details TEXT NOT NULL,
        ip_address TEXT DEFAULT '127.0.0.1',
        timestamp TEXT NOT NULL
    )
    ''')

    # 7. Services Catalog
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS services (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        category TEXT NOT NULL,
        ministry TEXT NOT NULL,
        processing_days INTEGER NOT NULL,
        fee TEXT NOT NULL,
        url TEXT NOT NULL
    )
    ''')

    # 8. System Settings (SMS Gateway, Telecom Integrations)
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS system_settings (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL,
        updated_at TEXT NOT NULL
    )
    ''')

    # Seed default SMS settings if not present
    cursor.execute("SELECT COUNT(*) FROM system_settings WHERE key = 'sms_provider'")
    if cursor.fetchone()[0] == 0:
        now_dt = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        defaults = [
            ("sms_provider", "fast2sms", now_dt),
            ("fast2sms_api_key", "", now_dt),
            ("twilio_account_sid", "", now_dt),
            ("twilio_auth_token", "", now_dt),
            ("twilio_from_number", "", now_dt),
            ("is_live_sms_active", "0", now_dt)
        ]
        cursor.executemany("INSERT OR REPLACE INTO system_settings (key, value, updated_at) VALUES (?, ?, ?)", defaults)

    # Seed Initial Data if empty
    cursor.execute('SELECT COUNT(*) FROM citizens')
    if cursor.fetchone()[0] == 0:
        now_str = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
        # Primary Demo Citizen
        pwd_hash = hash_password("NationalPortal@2026")
        cursor.execute('''
        INSERT INTO citizens (username, password_hash, full_name, initials, aadhaar_masked, mobile, role, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ''', ("abhyuday.citizen", pwd_hash, "Abhyuday Sharma", "AS", "XXXX-XXXX-4521", "9876543210", "Verified Citizen", now_str))
        
        citizen_id = cursor.lastrowid

        # Seed an Active Session for immediate visibility
        initial_token = secrets.token_hex(24)
        cursor.execute('''
        INSERT INTO sessions (token, citizen_id, ip_address, user_agent, status, created_at, last_active)
        VALUES (?, ?, ?, ?, ?, ?, ?)
        ''', (initial_token, citizen_id, "127.0.0.1 (Localhost)", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)", "active", now_str, now_str))

        # Initial Application
        app_ref = "CS-2026-849201"
        cursor.execute('''
        INSERT INTO applications (ref_id, citizen_id, service_name, applicant_name, aadhaar_masked, mobile, state, district, status, current_stage, remarks, officer_name, submitted_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (app_ref, citizen_id, "Income Certificate", "Abhyuday Sharma", "XXXX-XXXX-4521", "9876543210", "Delhi (NCT)", "Central District", "Under Officer Review", 3, "Field report submitted by Revenue Inspector. Tehsildar digital signature pending.", "Sh. Rajeshwar Verma (SDM / Tehsildar)", "2026-09-18 10:30:00", now_str))

        # Tracking History for CS-2026-849201
        stages = [
            (app_ref, 1, "Application Submitted & Paid", "Application filed online via CivicSeva Unified Portal. Fee of ₹50 verified via Bharatkosh PG.", "System Automated Gateway", "2026-09-18 10:30:00"),
            (app_ref, 2, "DigiLocker Document Verification", "Aadhaar e-KYC, Bank Statement, and Residence proof verified cryptographically.", "NIC CIDR e-KYC Engine", "2026-09-19 14:15:00"),
            (app_ref, 3, "Tehsildar / Sub-Divisional Review", "Revenue Inspector inspection completed with favorable income assessment (< ₹3,00,000 p.a.).", "Sh. Rajeshwar Verma (SDM / Tehsildar)", "2026-09-21 11:20:00"),
            (app_ref, 4, "Digital Certificate Generation & Dispatch", "Awaiting official DSC signature and repository publishing to citizen vault.", "National e-Pramaan Engine", None)
        ]
        cursor.executemany('''
        INSERT INTO application_history (ref_id, stage_num, stage_title, description, officer, completed_at)
        VALUES (?, ?, ?, ?, ?, ?)
        ''', stages)

        # Seed Documents in Vault
        docs = [
            (citizen_id, "Aadhaar Card (UIDAI Verified)", "Identity & Residence", "320 KB", "7a1b49f2b8c9e0d1...8492", 1, 1, "2026-09-15 09:00:00"),
            (citizen_id, "Permanent Account Number (PAN)", "Tax Identification", "240 KB", "f4e8d2c1b9a7...1024", 1, 0, "2026-09-16 11:30:00"),
            (citizen_id, "Secondary School Certificate (CBSE Class X)", "Education Proof", "1.2 MB", "98b7c6d5e4f3...4096", 1, 0, "2026-09-17 16:45:00")
        ]
        cursor.executemany('''
        INSERT INTO vault_documents (citizen_id, doc_name, doc_type, file_size, sha256_hash, digilocker_verified, pin_locked, uploaded_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ''', docs)

        # Audit Log
        cursor.execute('''
        INSERT INTO audit_logs (action, citizen_id, citizen_name, details, ip_address, timestamp)
        VALUES (?, ?, ?, ?, ?, ?)
        ''', ("PORTAL_INIT", citizen_id, "Abhyuday Sharma", "Initial seed data loaded for CivicSeva portal.", "127.0.0.1", now_str))

        # Services Catalog
        services = [
            ("Income Certificate", "Certificates", "Ministry of Revenue & State Affairs", 7, "₹50", "./apply.html?svc=income"),
            ("Ration Card / NFSA", "Social Welfare", "Department of Food & Public Distribution", 15, "Free", "./apply.html?svc=ration"),
            ("Land Records (Bhulekh / ROR)", "Revenue & Land", "Department of Land Resources", 1, "₹20", "./apply.html?svc=land"),
            ("Caste & Community Certificate", "Certificates", "Ministry of Social Justice & Empowerment", 14, "₹50", "./apply.html?svc=caste"),
            ("Old Age & Senior Pension", "Social Welfare", "Ministry of Rural Development", 21, "Free", "./apply.html?svc=pension"),
            ("Birth & Death Registration", "Certificates", "Office of Registrar General of India", 7, "₹30", "./apply.html?svc=birth"),
            ("Driving License & Vahan Services", "Transport", "Ministry of Road Transport & Highways", 10, "₹200", "./apply.html?svc=dl"),
            ("Trade License & MSME Registration", "Commercial", "Ministry of Micro, Small & Medium Enterprises", 5, "₹100", "./apply.html?svc=trade")
        ]
        cursor.executemany('''
        INSERT INTO services (name, category, ministry, processing_days, fee, url)
        VALUES (?, ?, ?, ?, ?, ?)
        ''', services)

    conn.commit()
    conn.close()
    print("Database initialized successfully at:", DB_PATH)

if __name__ == '__main__':
    init_db()
