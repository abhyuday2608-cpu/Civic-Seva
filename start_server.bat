@echo off
title CivicSeva National e-Governance Server
color 1F
echo ================================================================
echo       CivicSeva: National Unified e-Pramaan Platform
echo ================================================================
echo.
echo [1/3] Navigating to project directory...
cd /d "%~dp0"

echo [2/3] Launching CivicSeva Portal and Admin Dashboard in Browser...
timeout /t 2 /nobreak >nul
start http://localhost:8080/admin.html
start http://localhost:8080/index.html

echo [3/3] Starting Python HTTP/API Server & SQLite Database on Port 8080...
echo ----------------------------------------------------------------
echo   Active on: http://localhost:8080
echo   Admin Session Dashboard: http://localhost:8080/admin.html
echo   Press Ctrl+C to stop the server anytime.
echo ----------------------------------------------------------------
echo.
python -u server.py

pause
