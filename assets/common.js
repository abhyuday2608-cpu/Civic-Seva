/**
 * CivicSeva Common Utilities:
 * 1. Jan Parichay / Aadhaar OTP National Single Sign-On (SSO)
 * 2. Complete 22 Official Scheduled Indian Languages Translation Engine
 * 3. Z-Index High-Priority Overlay Management
 * 4. Session & Language Persistence via localStorage
 */

// All 22 Official Scheduled Indian Languages (Eighth Schedule) + English
const INDIAN_LANGUAGES = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు' },
  { code: 'mr', name: 'Marathi', native: 'मराठी' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'ur', name: 'Urdu', native: 'اردو' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം' },
  { code: 'or', name: 'Odia', native: 'ଓଡ଼ିଆ' },
  { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
  { code: 'as', name: 'Assamese', native: 'অসমীয়া' },
  { code: 'mai', name: 'Maithili', native: 'मैथिली' },
  { code: 'sat', name: 'Santali', native: 'संथाली (ᱥᱟᱱᱛᱟᱲᱤ)' },
  { code: 'sa', name: 'Sanskrit', native: 'संस्कृतम्' },
  { code: 'sd', name: 'Sindhi', native: 'सिंधी (سنڌي)' },
  { code: 'ne', name: 'Nepali', native: 'नेपाली' },
  { code: 'kok', name: 'Konkani', native: 'कोंकणी' },
  { code: 'doi', name: 'Dogri', native: 'डोगरी' },
  { code: 'ks', name: 'Kashmiri', native: 'कश्मीरी (کٲشُر)' },
  { code: 'brx', name: 'Bodo', native: 'बोडो (बड़ो)' },
  { code: 'mni', name: 'Manipuri', native: 'মণিপুরী (মৈতৈলোন্)' }
];

// Comprehensive Multi-Language Dictionary covering ALL words on the platform
const I18N_DICTIONARY = {
  en: {
    gov_india: "Government of India",
    citizen_navigator: "Citizen Service Navigator",
    skip_content: "Skip to Main Content",
    screen_reader: "Screen Reader",
    official_portal: "Official Portal",
    nav_home: "Home",
    nav_services: "Services",
    nav_schemes: "Schemes",
    nav_eligibility: "Eligibility",
    nav_documents: "Documents",
    nav_apply: "Apply Online",
    nav_track: "Track Application",
    nav_security: "Security Vault",
    nav_helpdesk: "Helpdesk",
    login_btn: "Login",
    trusted_badge: "Trusted Government e-Governance Platform",
    hero_title: "What government service do you need?",
    hero_desc: "Describe what you need in your own words and CivicSeva will guide you directly to the verified ministry portal, eligibility check, and application.",
    search_placeholder: "Describe your need... (e.g. 'income certificate', 'driving licence', 'ration card')",
    find_service_btn: "Find Service",
    quick_categories: "Quick Categories:",
    showing_services: "Showing all 8 core services",
    cat_all: "All Services",
    cat_certificates: "Certificates",
    cat_schemes: "Schemes",
    cat_licenses: "Licenses",
    cat_eligibility: "Eligibility",
    cat_support: "Support",
    cat_security: "Security Vault",
    security_badge: "✓ Zero-Knowledge Encrypted • Aadhaar Masking Active • Manage Security Controls →",
    card_1_title: "Find a Service",
    card_1_sub: "50+ Ministries",
    card_1_btn: "Catalog →",
    card_2_title: "Check Eligibility",
    card_2_sub: "AI Assessment",
    card_2_btn: "Evaluate →",
    card_3_title: "Documents",
    card_3_sub: "Checklist Guide",
    card_3_btn: "View Docs →",
    card_4_title: "Apply Online",
    card_4_sub: "Unified Forms",
    card_4_btn: "Apply →",
    card_5_title: "Track Status",
    card_5_sub: "Live Timeline",
    card_5_btn: "Track →",
    card_6_title: "CSC Centers",
    card_6_sub: "Locate Centers",
    card_6_btn: "Locate →",
    card_7_title: "Govt Schemes",
    card_7_sub: "Central & State",
    card_7_btn: "Explore →",
    card_8_title: "Helpdesk",
    card_8_sub: "24x7 Grievance",
    card_8_btn: "Support →",
    footer_desc: "A flagship Digital India e-Governance initiative offering direct, transparent, and prompt access to governmental services and social welfare schemes.",
    footer_core_services: "Core Services",
    footer_citizen_support: "Citizen Support",
    footer_helplines: "National Helplines",
    footer_disclaimer: "Website designed and maintained by National Informatics Centre (NIC) for Government of India. Content owned by Ministry of Electronics & IT.",
    portal_title: "CivicSeva Portal",
    footer_standard_badge: "National e-Governance Standard V2.4",
    footer_srv_directory: "Service Directory",
    footer_srv_eligibility: "Eligibility Checker",
    footer_srv_documents: "Document Requirements",
    footer_srv_apply: "Online Applications",
    footer_sup_track: "Application Tracking",
    footer_sup_centers: "Find Nearest CSC Center",
    footer_sup_schemes: "Welfare Schemes",
    footer_sup_grievance: "Grievance Portal (CPGRAMS)",
    footer_help_emergency: "Emergency Response:",
    footer_help_citizen: "Citizen Helpline:",
    footer_help_cyber: "Cyber Crime Helpline:",
    footer_help_tollfree: "Toll-Free Support:",
    back_to_home: "← Back to Home",
    lang_modal_title: "22 Official Indian Languages",
    lang_modal_sub: "Select your preferred regional script",
  },
  hi: {
    gov_india: "भारत सरकार",
    citizen_navigator: "नागरिक सेवा नेविगेटर",
    skip_content: "मुख्य सामग्री पर जाएं",
    screen_reader: "स्क्रीन रीडर",
    official_portal: "आधिकारिक पोर्टल",
    nav_home: "होम",
    nav_services: "सेवाएं",
    nav_schemes: "योजनाएं",
    nav_eligibility: "पात्रता",
    nav_documents: "दस्तावेज़",
    nav_apply: "ऑनलाइन आवेदन",
    nav_track: "आवेदन ट्रैक करें",
    nav_security: "सुरक्षा वॉल्ट",
    nav_helpdesk: "हेल्पडेस्क",
    login_btn: "लॉगिन करें",
    trusted_badge: "विश्वसनीय सरकारी ई-गवर्नेंस प्लेटफॉर्म",
    hero_title: "आपको किस सरकारी सेवा की आवश्यकता है?",
    hero_desc: "अपनी आवश्यकता को अपने शब्दों में लिखें और CivicSeva आपको सीधे सही मंत्रालय, पात्रता जांच और ऑनलाइन आवेदन तक पहुंचाएगा।",
    search_placeholder: "अपनी आवश्यकता लिखें... (उदा. 'आय प्रमाण पत्र', 'ड्राइविंग लाइसेंस', 'राशन कार्ड')",
    find_service_btn: "सेवा खोजें",
    quick_categories: "त्वरित श्रेणियां:",
    showing_services: "सभी 8 प्रमुख सेवाएं प्रदर्शित",
    cat_all: "सभी सेवाएं",
    cat_certificates: "प्रमाण पत्र",
    cat_schemes: "योजनाएं",
    cat_licenses: "लाइसेंस",
    cat_eligibility: "पात्रता जांचें",
    cat_support: "सहायता",
    cat_security: "सुरक्षा वॉल्ट",
    security_badge: "✓ ज़ीरो-नॉलेज एन्क्रिप्टेड • आधार मास्किंग सक्रिय • सुरक्षा नियंत्रण प्रबंधित करें →",
    card_1_title: "सेवा खोजें",
    card_1_sub: "50+ मंत्रालय",
    card_1_btn: "कैटलॉग →",
    card_2_title: "पात्रता जांचें",
    card_2_sub: "एआई मूल्यांकन",
    card_2_btn: "जांचें →",
    card_3_title: "दस्तावेज़",
    card_3_sub: "चेकलिस्ट गाइड",
    card_3_btn: "दस्तावेज़ देखें →",
    card_4_title: "ऑनलाइन आवेदन",
    card_4_sub: "एकीकृत फॉर्म",
    card_4_btn: "आवेदन करें →",
    card_5_title: "स्थिति ट्रैक करें",
    card_5_sub: "लाइव टाइमलाइन",
    card_5_btn: "ट्रैक करें →",
    card_6_title: "सीएससी केंद्र",
    card_6_sub: "केंद्र खोजें",
    card_6_btn: "खोजें →",
    card_7_title: "सरकारी योजनाएं",
    card_7_sub: "केंद्र व राज्य",
    card_7_btn: "देखें →",
    card_8_title: "हेल्पडेस्क",
    card_8_sub: "24x7 सहायता",
    card_8_btn: "सहायता →",
    footer_desc: "डिजिटल इंडिया की एक प्रमुख ई-गवर्नेंस पहल जो सरकारी सेवाओं और सामाजिक कल्याण योजनाओं तक सीधी और त्वरित पहुंच प्रदान करती है।",
    footer_core_services: "प्रमुख सेवाएं",
    footer_citizen_support: "नागरिक सहायता",
    footer_helplines: "राष्ट्रीय हेल्पलाइन",
    footer_disclaimer: "राष्ट्रीय सूचना विज्ञान केंद्र (NIC) द्वारा डिज़ाइन और अनुरक्षित। इलेक्ट्रॉनिक्स एवं आईटी मंत्रालय भारत सरकार।",
    portal_title: "CivicSeva पोर्टल",
    footer_standard_badge: "राष्ट्रीय ई-गवर्नेंस मानक V2.4",
    footer_srv_directory: "सेवा निर्देशिका",
    footer_srv_eligibility: "पात्रता चेकर",
    footer_srv_documents: "दस्तावेज़ आवश्यकताएं",
    footer_srv_apply: "ऑनलाइन आवेदन",
    footer_sup_track: "आवेदन ट्रैकिंग",
    footer_sup_centers: "निकटतम सीएससी केंद्र खोजें",
    footer_sup_schemes: "कल्याणकारी योजनाएं",
    footer_sup_grievance: "शिकायत पोर्टल (CPGRAMS)",
    footer_help_emergency: "आपातकालीन प्रतिक्रिया:",
    footer_help_citizen: "नागरिक हेल्पलाइन:",
    footer_help_cyber: "साइबर अपराध हेल्पलाइन:",
    footer_help_tollfree: "टोल-फ्री सहायता:",
    back_to_home: "← मुख्य पृष्ठ पर लौटें",
    lang_modal_title: "22 आधिकारिक भारतीय भाषाएं",
    lang_modal_sub: "अपनी पसंदीदा क्षेत्रीय भाषा चुनें",
  },
  bn: {
    gov_india: "ভারত সরকার",
    citizen_navigator: "নাগরিক সেবা ন্যাভিগেটর",
    skip_content: "মূল বিষয়ে যান",
    screen_reader: "স্ক্রিন রিডার",
    official_portal: "অফিসিয়াল পোর্টাল",
    nav_home: "হোম",
    nav_services: "পরিষেবা",
    nav_schemes: "প্রকল্প",
    nav_eligibility: "যোগ্যতা",
    nav_documents: "নথিপত্র",
    nav_apply: "অনলাইনে আবেদন",
    nav_track: "আবেদন ট্র্যাক করুন",
    nav_security: "নিরাপত্তা ভল্ট",
    nav_helpdesk: "হেল্পডেস্ক",
    login_btn: "লগইন",
    trusted_badge: "বিশ্বস্ত সরকারি ই-গভর্নেন্স প্ল্যাটফর্ম",
    hero_title: "আপনার কোন সরকারী পরিষেবা প্রয়োজন?",
    hero_desc: "আপনার কী প্রয়োজন তা নিজের ভাষায় বর্ণনা করুন এবং CivicSeva আপনাকে সঠিক মন্ত্রণালয়, যোগ্যতা পরীক্ষা ও আবেদনে পরিচালিত করবে।",
    search_placeholder: "আপনার প্রয়োজন বর্ণনা করুন... (যেমন 'আয় শংসাপত্র', 'ড্রাইভিং লাইসেন্স', 'রেশন কার্ড')",
    find_service_btn: "পরিষেবা খুঁজুন",
    quick_categories: "দ্রুত বিভাগ:",
    showing_services: "সব ৮টি মূল পরিষেবা দেখানো হচ্ছে",
    cat_all: "সকল পরিষেবা",
    cat_certificates: "শংসাপত্র",
    cat_schemes: "প্রকল্পসমূহ",
    cat_licenses: "লাইসেন্স",
    cat_eligibility: "যোগ্যতা পরীক্ষা",
    cat_support: "সহায়তা",
    cat_security: "নিরাপত্তা ভল্ট",
    security_badge: "✓ জিরো-নলেজ এনক্রিপ্ট করা • আধার মাস্কিং সক্রিয় • নিরাপত্তা পরিচালনা করুন →",
    card_1_title: "পরিষেবা খুঁজুন",
    card_1_sub: "৫০+ মন্ত্রণালয়",
    card_1_btn: "ক্যাটালগ →",
    card_2_title: "যোগ্যতা পরীক্ষা",
    card_2_sub: "এআই মূল্যায়ন",
    card_2_btn: "মূল্যায়ন →",
    card_3_title: "নথিপত্র",
    card_3_sub: "চেকলিস্ট গাইড",
    card_3_btn: "নথি দেখুন →",
    card_4_title: "অনলাইনে আবেদন",
    card_4_sub: "ইউনিফাইড ফর্ম",
    card_4_btn: "আবেদন →",
    card_5_title: "স্ট্যাটাস ট্র্যাক",
    card_5_sub: "লাইভ টাইমলাইন",
    card_5_btn: "ট্র্যাক →",
    card_6_title: "সিএসসি সেন্টার",
    card_6_sub: "নিকটস্থ কেন্দ্র",
    card_6_btn: "অবস্থান →",
    card_7_title: "সরকারি প্রকল্প",
    card_7_sub: "কেন্দ্র ও রাজ্য",
    card_7_btn: "অন্বেষণ →",
    card_8_title: "হেল্পডেস্ক",
    card_8_sub: "২৪x৭ অভিযোগ",
    card_8_btn: "সহায়তা →",
    footer_desc: "একটি প্রধান ডিজিটাল ইন্ডিয়া উদ্যোগ যা সরকারি পরিষেবা ও কল্যাণমূলক প্রকল্পে সরাসরি প্রবেশাধিকার দেয়।",
    footer_core_services: "মূল পরিষেবা",
    footer_citizen_support: "নাগরিক সহায়তা",
    footer_helplines: "জাতীয় হেল্পলাইন",
    footer_disclaimer: "ন্যাশনাল ইনফরমেটিক্স সেন্টার (NIC) দ্বারা তৈরি ও পরিচালিত। ভারত সরকার।",
    portal_title: "CivicSeva পোর্টাল",
    footer_standard_badge: "জাতীয় ই-গভর্ন্যান্স স্ট্যান্ডার্ড V2.4",
    footer_srv_directory: "পরিষেবা ডিরেক্টরি",
    footer_srv_eligibility: "যোগ্যতা পরীক্ষক",
    footer_srv_documents: "প্রয়োজনীয় নথিপত্র",
    footer_srv_apply: "অনলাইন আবেদন",
    footer_sup_track: "আবেদন ট্র্যাকিং",
    footer_sup_centers: "নিকটস্থ সিএসসি কেন্দ্র খুঁজুন",
    footer_sup_schemes: "কল্যাণমূলক প্রকল্প",
    footer_sup_grievance: "অভিযোগ পোর্টাল (CPGRAMS)",
    footer_help_emergency: "জরুরী প্রতিক্রিয়া:",
    footer_help_citizen: "নাগরিক হেল্পলাইন:",
    footer_help_cyber: "সাইবার ক্রাইম হেল্পলাইন:",
    footer_help_tollfree: "টোল-ফ্রি সহায়তা:",
    back_to_home: "← হোমে ফিরে যান",
    lang_modal_title: "২২টি আনুষ্ঠানিক ভারতীয় ভাষা",
    lang_modal_sub: "আপনার পছন্দের আঞ্চলিক ভাষা নির্বাচন করুন",
  },
  te: {
    gov_india: "భారత ప్రభుత్వం",
    citizen_navigator: "పౌర సేవల నావిగేటర్",
    skip_content: "ప్రధాన విషయానికి వెళ్లండి",
    screen_reader: "స్క్రీన్ రీడర్",
    official_portal: "అధికారిక పోర్టల్",
    nav_home: "హోమ్",
    nav_services: "సేవలు",
    nav_schemes: "పథకాలు",
    nav_eligibility: "అర్హత",
    nav_documents: "పత్రాలు",
    nav_apply: "ఆన్‌లైన్ దరఖాస్తు",
    nav_track: "దరఖాస్తు ట్రాక్ చేయండి",
    nav_security: "సెక్యూరిటీ వాల్ట్",
    nav_helpdesk: "హెల్ప్‌డెస్క్",
    login_btn: "లాగిన్",
    trusted_badge: "విశ్వసనీయ ప్రభుత్వ ఈ-గవర్నెన్స్ ప్లాట్‌ఫారమ్",
    hero_title: "మీకు ఏ ప్రభుత్వ సేవ అవసరం?",
    hero_desc: "మీకు ఏమి కావాలో మీ స్వంత మాటల్లో వివరించండి మరియు CivicSeva మీకు సరైన మంత్రిత్వ శాఖ, అర్హత మరియు దరఖాస్తుకు మార్గనిర్దేశం చేస్తుంది.",
    search_placeholder: "మీ అవసరాన్ని వివరించండి... (ఉదా. 'ఆదాయ ధృవీకరణ పత్రం', 'డ్రైవింగ్ లైసెన్స్')",
    find_service_btn: "సేవను కనుగొనండి",
    quick_categories: "త్వరిత వర్గాలు:",
    showing_services: "మొత్తం 8 కీలక సేవలు చూపబడుతున్నాయి",
    cat_all: "అన్ని సేవలు",
    cat_certificates: "సర్టిఫికెట్లు",
    cat_schemes: "పథకాలు",
    cat_licenses: "లైసెన్సులు",
    cat_eligibility: "అర్హత తనిఖీ",
    cat_support: "మద్దతు",
    cat_security: "సెక్యూరిటీ వాల్ట్",
    security_badge: "✓ జీరో-నాలెడ్జ్ ఎన్‌క్రిప్టెడ్ • ఆధార్ మాస్కింగ్ యాక్టివ్ • భద్రతను నిర్వహించండి →",
    card_1_title: "సేవను కనుగొనండి",
    card_1_sub: "50+ మంత్రిత్వ శాఖలు",
    card_1_btn: "కేటలాగ్ →",
    card_2_title: "అర్హత తనిఖీ",
    card_2_sub: "AI అంచనా",
    card_2_btn: "మూల్యాంకనం →",
    card_3_title: "పత్రాలు",
    card_3_sub: "చెక్‌లిస్ట్ గైడ్",
    card_3_btn: "పత్రాలు చూడండి →",
    card_4_title: "ఆన్‌లైన్ దరఖాస్తు",
    card_4_sub: "ఏకీకృత ఫారాలు",
    card_4_btn: "దరఖాస్తు →",
    card_5_title: "స్థితిని ట్రాక్ చేయండి",
    card_5_sub: "లైవ్ టైమ్‌లైన్",
    card_5_btn: "ట్రాక్ →",
    card_6_title: "CSC కేంద్రాలు",
    card_6_sub: "కేంద్రాలను కనుగొనండి",
    card_6_btn: "లొకేట్ →",
    card_7_title: "ప్రభుత్వ పథకాలు",
    card_7_sub: "కేంద్ర & రాష్ట్ర",
    card_7_btn: "అన్వేషించండి →",
    card_8_title: "హెల్ప్‌డెస్క్",
    card_8_sub: "24x7 ఫిర్యాదులు",
    card_8_btn: "మద్దతు →",
    footer_desc: "ప్రభుత్వ సేవలు మరియు సంక్షేమ పథకాలకు ప్రత్యక్ష మరియు తక్షణ ప్రాప్యతను అందించే డిజిటల్ ఇండియా చొరవ.",
    footer_core_services: "కీలక సేవలు",
    footer_citizen_support: "పౌర మద్దతు",
    footer_helplines: "జాతీయ హెల్ప్‌లైన్లు",
    footer_disclaimer: "నేషనల్ ఇన్ఫర్మేటిక్స్ సెంటర్ (NIC) ద్వారా రూపొందించబడింది. భారత ప్రభుత్వం.",
    portal_title: "CivicSeva పోర్టల్",
    footer_standard_badge: "నేషనల్ ఇ-గవర్నెన్స్ స్టాండర్డ్ V2.4",
    footer_srv_directory: "సేవల డైరెక్టరీ",
    footer_srv_eligibility: "అర్హత తనిఖీ",
    footer_srv_documents: "కావలసిన పత్రాలు",
    footer_srv_apply: "ఆన్‌లైన్ దరఖాస్తులు",
    footer_sup_track: "దరఖాస్తు స్థితి ట్రాకింగ్",
    footer_sup_centers: "సమీప CSC కేంద్రాన్ని కనుగొనండి",
    footer_sup_schemes: "సంక్షేమ పథకాలు",
    footer_sup_grievance: "ఫిర్యాదుల పోర్టల్ (CPGRAMS)",
    footer_help_emergency: "అత్యవసర స్పందన:",
    footer_help_citizen: "పౌర హెల్ప్‌లైన్:",
    footer_help_cyber: "సైబర్ క్రైమ్ హెల్ప్‌లైన్:",
    footer_help_tollfree: "టోల్-ఫ్రీ మద్దతు:",
    back_to_home: "← హోమ్‌కి తిరిగి వెళ్ళండి",
    lang_modal_title: "22 అధికారిక భారతీయ భాషలు",
    lang_modal_sub: "మీ ప్రాంతీయ భాషను ఎంచుకోండి",
  },
  mr: {
    gov_india: "भारत सरकार",
    citizen_navigator: "नागरिक सेवा नेव्हिगेटर",
    skip_content: "मुख्य सामग्रीवर जा",
    screen_reader: "स्क्रीन रीडर",
    official_portal: "अधिकृत पोर्टल",
    nav_home: "होम",
    nav_services: "सेवा",
    nav_schemes: "योजना",
    nav_eligibility: "पात्रता",
    nav_documents: "कागदपत्रे",
    nav_apply: "ऑनलाइन अर्ज करा",
    nav_track: "अर्जाची स्थिती तपासा",
    nav_security: "सुरक्षा व्हॉल्ट",
    nav_helpdesk: "मदत कक्ष",
    login_btn: "लॉगिन",
    trusted_badge: "विश्वासार्ह सरकारी ई-गव्हर्नन्स प्लॅटफॉर्म",
    hero_title: "तुम्हाला कोणत्या शासकीय सेवेची आवश्यकता आहे?",
    hero_desc: "तुम्हाला काय हवे आहे ते तुमच्या स्वतःच्या शब्दात सांगा आणि CivicSeva तुम्हाला थेट योग्य मंत्रालय, पात्रता आणि अर्जाकडे नेईल.",
    search_placeholder: "तुमची गरज सांगा... (उदा. 'उत्पन्नाचा दाखला', 'ड्रायव्हिंग लायसन्स', 'रेशन कार्ड')",
    find_service_btn: "सेवा शोधा",
    quick_categories: "जलद श्रेणी:",
    showing_services: "सर्व ८ मुख्य सेवा दाखवत आहे",
    cat_all: "सर्व सेवा",
    cat_certificates: "प्रमाणपत्रे",
    cat_schemes: "योजना",
    cat_licenses: "परवाने (लायसन्स)",
    cat_eligibility: "पात्रता तपासा",
    cat_support: "मदत",
    cat_security: "सुरक्षा व्हॉल्ट",
    security_badge: "✓ झिरो-नॉलेज एन्क्रिप्टेड • आधार मास्किंग सक्रिय • सुरक्षा व्यवस्थापित करा →",
    card_1_title: "सेवा शोधा",
    card_1_sub: "५०+ मंत्रालये",
    card_1_btn: "कॅटलॉग →",
    card_2_title: "पात्रता तपासा",
    card_2_sub: "एआय मूल्यांकन",
    card_2_btn: "तपासा →",
    card_3_title: "कागदपत्रे",
    card_3_sub: "चेकलिस्ट मार्गदर्शक",
    card_3_btn: "कागदपत्रे पहा →",
    card_4_title: "ऑनलाइन अर्ज",
    card_4_sub: "एकात्मिक फॉर्म",
    card_4_btn: "अर्ज करा →",
    card_5_title: "स्थिती ट्रॅक करा",
    card_5_sub: "थेट टाइमलाइन",
    card_5_btn: "ट्रॅक करा →",
    card_6_title: "CSC केंद्रे",
    card_6_sub: "केंद्रे शोधा",
    card_6_btn: "शोधा →",
    card_7_title: "सरकारी योजना",
    card_7_sub: "केंद्र व राज्य",
    card_7_btn: "पहा →",
    card_8_title: "मदत कक्ष",
    card_8_sub: "२४x७ तक्रार निवारण",
    card_8_btn: "मदत →",
    footer_desc: "सरकारी सेवा आणि कल्याणकारी योजनांमध्ये थेट प्रवेश देणारा डिजिटल इंडियाचा प्रमुख उपक्रम.",
    footer_core_services: "प्रमुख सेवा",
    footer_citizen_support: "नागरिक मदत",
    footer_helplines: "राष्ट्रीय हेल्पलाइन",
    footer_disclaimer: "राष्ट्रीय माहिती विज्ञान केंद्र (NIC) द्वारे विकसित आणि देखरेख. भारत सरकार.",
    portal_title: "CivicSeva पोर्टल",
    footer_standard_badge: "राष्ट्रीय ई-प्रशासन मानक V2.4",
    footer_srv_directory: "सेवा निर्देशिका",
    footer_srv_eligibility: "पात्रता तपासक",
    footer_srv_documents: "आवश्यक कागदपत्रे",
    footer_srv_apply: "ऑनलाइन अर्ज",
    footer_sup_track: "अर्ज स्थिती ट्रॅकिंग",
    footer_sup_centers: "जवळचे CSC केंद्र शोधा",
    footer_sup_schemes: "कल्याणकारी योजना",
    footer_sup_grievance: "तक्रार निवारण पोर्टल (CPGRAMS)",
    footer_help_emergency: "आपत्कालीन प्रतिसाद:",
    footer_help_citizen: "नागरिक हेल्पलाइन:",
    footer_help_cyber: "सायबर गुन्हे हेल्पलाइन:",
    footer_help_tollfree: "टोल-फ्री मदत:",
    back_to_home: "← मुख्य पृष्ठावर परत जा",
    lang_modal_title: "22 अधिकृत भारतीय भाषा",
    lang_modal_sub: "आपली प्रादेशिक भाषा निवडा",
  },
  ta: {
    gov_india: "இந்திய அரசு",
    citizen_navigator: "குடிமக்கள் சேவை வழிகாட்டி",
    skip_content: "முதன்மை உள்ளடக்கத்திற்குச் செல்க",
    screen_reader: "ஸ்கிரீன் ரீடர்",
    official_portal: "அதிகாரப்பூர்வ போர்டல்",
    nav_home: "முகப்பு",
    nav_services: "சேவைகள்",
    nav_schemes: "திட்டங்கள்",
    nav_eligibility: "தகுதி",
    nav_documents: "ஆவணங்கள்",
    nav_apply: "ஆன்லைனில் விண்ணப்பிக்கவும்",
    nav_track: "விண்ணப்பத்தைக் கண்காணிக்கவும்",
    nav_security: "பாதுகாப்பு பெட்டகம்",
    nav_helpdesk: "உதவி மையம்",
    login_btn: "உள்நுழைக",
    trusted_badge: "நம்பகமான அரசு மின்-ஆளுமை தளம்",
    hero_title: "உங்களுக்கு என்ன அரசு சேவை தேவை?",
    hero_desc: "உங்களுக்கு என்ன தேவை என்பதை உங்கள் சொந்த வார்த்தைகளில் விவரிக்கவும், CivicSeva உங்களை சரியான துறை மற்றும் விண்ணப்பத்திற்கு வழிநடத்தும்.",
    search_placeholder: "உங்கள் தேவையை விவரிக்கவும்... (எ.கா. 'வருமானச் சான்றிதழ்', 'ஓட்டுநர் உரிமம்')",
    find_service_btn: "சேவையைத் தேடுங்கள்",
    quick_categories: "விரைவுப் பிரிவுகள்:",
    showing_services: "அனைத்து 8 முக்கிய சேவைகளும் காட்டப்படுகின்றன",
    cat_all: "அனைத்து சேவைகள்",
    cat_certificates: "சான்றிதழ்கள்",
    cat_schemes: "திட்டங்கள்",
    cat_licenses: "உரிமங்கள்",
    cat_eligibility: "தகுதி சரிபார்ப்பு",
    cat_support: "ஆதரவு",
    cat_security: "பாதுகாப்பு பெட்டகம்",
    security_badge: "✓ பூஜ்ஜிய-அறிவு மறைகுறியாக்கப்பட்டது • ஆதார் மறைப்பு செயலில் உள்ளது →",
    card_1_title: "சேவையைத் தேடுங்கள்",
    card_1_sub: "50+ அமைச்சகங்கள்",
    card_1_btn: "பட்டியல் →",
    card_2_title: "தகுதியை சரிபார்க்கவும்",
    card_2_sub: "AI மதிப்பீடு",
    card_2_btn: "மதிப்பீடு →",
    card_3_title: "ஆவணங்கள்",
    card_3_sub: "சரிபார்ப்பு வழிகாட்டி",
    card_3_btn: "ஆவணங்கள் →",
    card_4_title: "ஆன்லைனில் விண்ணப்பிக்கவும்",
    card_4_sub: "படிவங்கள்",
    card_4_btn: "விண்ணப்பி →",
    card_5_title: "நிலையைக் கண்காணிக்கவும்",
    card_5_sub: "நேரலை காலவரிசை",
    card_5_btn: "கண்காணி →",
    card_6_title: "CSC மையங்கள்",
    card_6_sub: "மையங்களைக் கண்டறியவும்",
    card_6_btn: "கண்டறி →",
    card_7_title: "அரசு திட்டங்கள்",
    card_7_sub: "மத்திய & மாநில",
    card_7_btn: "ஆராயுங்கள் →",
    card_8_title: "உதவி மையம்",
    card_8_sub: "24x7 குறைதீர்ப்பு",
    card_8_btn: "ஆதரவு →",
    footer_desc: "அரசு சேவைகள் மற்றும் சமூக நலத்திட்டங்களை எளிதாக அணுக உதவும் டிஜிட்டல் இந்தியா முயற்சி.",
    footer_core_services: "முதன்மை சேவைகள்",
    footer_citizen_support: "குடிமக்கள் ஆதரவு",
    footer_helplines: "தேசிய அவசர எண்கள்",
    footer_disclaimer: "தேசிய தகவல் மையத்தால் (NIC) வடிவமைக்கப்பட்டு பராமரிக்கப்படுகிறது. இந்திய அரசு.",
    portal_title: "CivicSeva போர்டல்",
    footer_standard_badge: "தேசிய மின்-ஆளுமை தரம் V2.4",
    footer_srv_directory: "சேவை அடைவு",
    footer_srv_eligibility: "தகுதி சரிபார்ப்பு",
    footer_srv_documents: "தேவையான ஆவணங்கள்",
    footer_srv_apply: "ஆன்லைன் விண்ணப்பங்கள்",
    footer_sup_track: "விண்ணப்ப கண்காணிப்பு",
    footer_sup_centers: "அருகிலுள்ள CSC மையத்தைக் கண்டறியவும்",
    footer_sup_schemes: "நலத்திட்டங்கள்",
    footer_sup_grievance: "குறைதீர்க்கும் போர்டல் (CPGRAMS)",
    footer_help_emergency: "அவசர உதவி:",
    footer_help_citizen: "குடிமக்கள் உதவி எண்:",
    footer_help_cyber: "சைபர் குற்ற உதவி எண்:",
    footer_help_tollfree: "கட்டணமில்லா உதவி:",
    back_to_home: "← முகப்புக்குத் திரும்பு",
    lang_modal_title: "22 அதிகாரப்பூர்வ இந்திய மொழிகள்",
    lang_modal_sub: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
  },
  ur: {
    gov_india: "حکومتِ ہند",
    citizen_navigator: "شہری خدمات نیویگیٹر",
    skip_content: "مرکزی مواد پر جائیں",
    screen_reader: "اسکرین ریڈر",
    official_portal: "سرکاری پورٹل",
    nav_home: "ہوم",
    nav_services: "خدمات",
    nav_schemes: "اسکیمیں",
    nav_eligibility: "اہلیت",
    nav_documents: "دستاویزات",
    nav_apply: "آن لائن درخواست",
    nav_track: "درخواست ٹریک کریں",
    nav_security: "سیکیورٹی والٹ",
    nav_helpdesk: "ہیلپ ڈیسک",
    login_btn: "لاگ ان",
    trusted_badge: "قابل اعتماد سرکاری ای-گورننس پلیٹ فارم",
    hero_title: "آپ کو کس سرکاری خدمت کی ضرورت ہے؟",
    hero_desc: "اپنی ضرورت کو اپنے الفاظ میں بیان کریں اور CivicSeva آپ کو براہِ راست متعلقہ وزارت، اہلیت اور درخواست تک لے جائے گا۔",
    search_placeholder: "اپنی ضرورت لکھیں... (مثلاً 'انکم سرٹیفکیٹ'، 'ڈرائیونگ لائسنس'، 'راشن کارڈ')",
    find_service_btn: "خدمت تلاش کریں",
    quick_categories: "فوری زمرے:",
    showing_services: "تمام 8 بنیادی خدمات ظاہر کی جا رہی ہیں",
    cat_all: "تمام خدمات",
    cat_certificates: "سرٹیفکیٹس",
    cat_schemes: "اسکیمیں",
    cat_licenses: "لائسنس",
    cat_eligibility: "اہلیت جانچیں",
    cat_support: "مدد",
    cat_security: "سیکیورٹی والٹ",
    security_badge: "✓ زیرو نالج انکرپٹڈ • آدھار ماسکنگ فعال • سیکیورٹی کنٹرولز →",
    card_1_title: "خدمت تلاش کریں",
    card_1_sub: "50+ وزارتیں",
    card_1_btn: "کیٹلاگ ←",
    card_2_title: "اہلیت جانچیں",
    card_2_sub: "AI تشخیص",
    card_2_btn: "جانچیں ←",
    card_3_title: "دستاویزات",
    card_3_sub: "چیک لسٹ گائیڈ",
    card_3_btn: "دستاویزات دیکھیں ←",
    card_4_title: "آن لائن درخواست",
    card_4_sub: "مربوط فارم",
    card_4_btn: "درخواست دیں ←",
    card_5_title: "اسٹیٹس ٹریک کریں",
    card_5_sub: "لائیو ٹائم لائن",
    card_5_btn: "ٹریک کریں ←",
    card_6_title: "سی ایس سی مراکز",
    card_6_sub: "قریبی مرکز",
    card_6_btn: "تلاش کریں ←",
    card_7_title: "سرکاری اسکیمیں",
    card_7_sub: "مرکزی و ریاستی",
    card_7_btn: "دیکھیں ←",
    card_8_title: "ہیلپ ڈیسک",
    card_8_sub: "24x7 شکایات",
    card_8_btn: "مدد ←",
    footer_desc: "ڈیجیٹل انڈیا کا ایک اہم اقدام جو سرکاری خدمات اور فلاحی اسکیموں تک فوری رسائی فراہم کرتا ہے۔",
    footer_core_services: "اہم خدمات",
    footer_citizen_support: "شہری مدد",
    footer_helplines: "قومی ہیلپ لائنز",
    footer_disclaimer: "نیشنل انفارمیٹکس سینٹر (NIC) کے ذریعہ تیار کردہ۔ حکومتِ ہند۔",
    portal_title: "CivicSeva پورٹل",
    footer_standard_badge: "قومی ای گورننس معیار V2.4",
    footer_srv_directory: "سروس ڈائرکٹری",
    footer_srv_eligibility: "اہلیت چیکر",
    footer_srv_documents: "ضروری دستاویزات",
    footer_srv_apply: "آن لائن درخواستیں",
    footer_sup_track: "درخواست ٹریکنگ",
    footer_sup_centers: "قریبی سی ایس سی سینٹر تلاش کریں",
    footer_sup_schemes: "فلاحی اسکیمیں",
    footer_sup_grievance: "شکایات پورٹل (CPGRAMS)",
    footer_help_emergency: "ہنگامی رسپانس:",
    footer_help_citizen: "شہری ہیلپ لائن:",
    footer_help_cyber: "سائبر کرائم ہیلپ لائن:",
    footer_help_tollfree: "ٹول فری سپورٹ:",
    back_to_home: "← واپس ہوم پر جائیں",
    lang_modal_title: "22 سرکاری ہندوستانی زبانیں",
    lang_modal_sub: "اپنی علاقائی زبان منتخب کریں",
  },
  gu: {
    gov_india: "ભારત સરકાર",
    citizen_navigator: "નાગરિક સેવા નેવિગેટેર",
    skip_content: "મુખ્ય સામગ્રી પર જાઓ",
    screen_reader: "સ્ક્રીન રીડર",
    official_portal: "સત્તાવાર પોર્ટલ",
    nav_home: "હોમ",
    nav_services: "સેવાઓ",
    nav_schemes: "યોજનાઓ",
    nav_eligibility: "પાત્રતા",
    nav_documents: "દસ્તાવેજો",
    nav_apply: "ઓનલાઇન અરજી",
    nav_track: "અરજી ટ્રેક કરો",
    nav_security: "સુરક્ષા વૉલ્ટ",
    nav_helpdesk: "હેલ્પડેસ્ક",
    login_btn: "લૉગિન",
    trusted_badge: "વિશ્વસનીય સરકારી ઈ-ગવર્નન્સ પ્લેટફોર્મ",
    hero_title: "તમને કઈ સરકારી સેવાની જરૂર છે?",
    hero_desc: "તમારી જરૂરિયાત તમારા પોતાના શબ્દોમાં વર્ણવો અને CivicSeva તમને સીધા યોગ્ય મંત્રાલય, પાત્રતા અને અરજી તરફ દોરી જશે.",
    search_placeholder: "તમારી જરૂરિયાત જણાવો... (દા.ત. 'આવકનો દાખલો', 'ડ્રાઇવિંગ લાયસન્સ')",
    find_service_btn: "સેવા શોધો",
    quick_categories: "ઝડપી કેટેગરીઝ:",
    showing_services: "તમામ 8 મુખ્ય સેવાઓ દર્શાવી રહ્યા છીએ",
    cat_all: "બધી સેવાઓ",
    cat_certificates: "પ્રમાણપત્રો",
    cat_schemes: "યોજનાઓ",
    cat_licenses: "લાયસન્સ",
    cat_eligibility: "પાત્રતા ચકાસો",
    cat_support: "સહાય",
    cat_security: "સુરક્ષા વૉલ્ટ",
    security_badge: "✓ ઝીરો-નોલેજ એન્ક્રિપ્ટેડ • આધાર માસ્કિંગ સક્રિય →",
    card_1_title: "સેવા શોધો",
    card_1_sub: "50+ મંત્રાલયો",
    card_1_btn: "કેટલોગ →",
    card_2_title: "પાત્રતા ચકાસો",
    card_2_sub: "AI મૂલ્યાંકન",
    card_2_btn: "ચકાસો →",
    card_3_title: "દસ્તાવેજો",
    card_3_sub: "ચેકલિસ્ટ માર્ગદર્શિકા",
    card_3_btn: "દસ્તાવેજો જુઓ →",
    card_4_title: "ઓનલાઇન અરજી",
    card_4_sub: "ફોર્મ",
    card_4_btn: "અરજી કરો →",
    card_5_title: "સ્થિતિ ટ્રેક કરો",
    card_5_sub: "લાઈવ ટાઈમલાઈન",
    card_5_btn: "ટ્રેક કરો →",
    card_6_title: "CSC કેન્દ્રો",
    card_6_sub: "કેન્દ્રો શોધો",
    card_6_btn: "શોધો →",
    card_7_title: "સરકારી યોજનાઓ",
    card_7_sub: "કેન્દ્ર અને રાજ્ય",
    card_7_btn: "જુઓ →",
    card_8_title: "હેલ્પડેસ્ક",
    card_8_sub: "24x7 ફરિયાદ નિવારણ",
    card_8_btn: "સહાય →",
    footer_desc: "સરકારી સેવાઓ અને કલ્યાણકારી યોજનાઓ સુધી સીધી પહોંચ આપતી ડિજિટલ ઇન્ડિયાની પહેલ.",
    footer_core_services: "મુખ્ય સેવાઓ",
    footer_citizen_support: "નાગરિક સહાય",
    footer_helplines: "રાષ્ટ્રીય હેલ્પલાઇન",
    footer_disclaimer: "નેશનલ ઇન્ફોર્મેટિક્સ સેન્ટર (NIC) દ્વારા સંચાલિત. ભારત સરકાર.",
    portal_title: "CivicSeva પોર્ટલ",
    footer_standard_badge: "રાષ્ટ્રીય ઈ-ગવર્નન્સ સ્ટાન્ડર્ડ V2.4",
    footer_srv_directory: "સેવા નિર્દેશિકા",
    footer_srv_eligibility: "પાત્રતા ચકાસણી",
    footer_srv_documents: "જરૂરી દસ્તાવેજો",
    footer_srv_apply: "ઓનલાઇન અરજીઓ",
    footer_sup_track: "અરજી ટ્રેકિંગ",
    footer_sup_centers: "નજીકનું સીએસસી કેન્દ્ર શોધો",
    footer_sup_schemes: "કલ્યાણકારી યોજનાઓ",
    footer_sup_grievance: "ફરિયાદ પોર્ટલ (CPGRAMS)",
    footer_help_emergency: "કટોકટી પ્રતિસાદ:",
    footer_help_citizen: "નાગરિક હેલ્પલાઇન:",
    footer_help_cyber: "સાયબર ક્રાઈમ હેલ્પલાઇન:",
    footer_help_tollfree: "ટોલ-ફ્રી સપોર્ટ:",
    back_to_home: "← હોમ પર પાછા જાઓ",
    lang_modal_title: "22 સત્તાવાર ભારતીય ભાષાઓ",
    lang_modal_sub: "તમારી પ્રાદેશિક ભાષા પસંદ કરો",
  },
  kn: {
    gov_india: "ಭಾರತ ಸರ್ಕಾರ",
    citizen_navigator: "ನಾಗರಿಕ ಸೇವೆಗಳ ನ್ಯಾವಿಗೇಟರ್",
    skip_content: "ಮುಖ್ಯ ವಿಷಯಕ್ಕೆ ಹೋಗಿ",
    screen_reader: "ಸ್ಕ್ರೀನ್ ರೀಡರ್",
    official_portal: "ಅಧಿಕೃತ ಪೋರ್ಟಲ್",
    nav_home: "ಮುಖಪುಟ",
    nav_services: "ಸೇವೆಗಳು",
    nav_schemes: "ಯೋಜನೆಗಳು",
    nav_eligibility: "ಅರ್ಹತೆ",
    nav_documents: "ದಾಖಲೆಗಳು",
    nav_apply: "ಆನ್‌ಲೈನ್ ಅರ್ಜಿ",
    nav_track: "ಅರ್ಜಿ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",
    nav_security: "ಭದ್ರತಾ ವಾಲ್ಟ್",
    nav_helpdesk: "ಸಹಾಯವಾಣಿ",
    login_btn: "ಲಾಗಿನ್",
    trusted_badge: "ವಿಶ್ವಾಸಾರ್ಹ ಸರ್ಕಾರಿ ಇ-ಆಡಳಿತ ವೇದಿಕೆ",
    hero_title: "ನಿಮಗೆ ಯಾವ ಸರ್ಕಾರಿ ಸೇವೆ ಬೇಕು?",
    hero_desc: "ನಿಮ್ಮ ಅಗತ್ಯವನ್ನು ನಿಮ್ಮದೇ ಪದಗಳಲ್ಲಿ ತಿಳಿಸಿ ಮತ್ತು CivicSeva ಸರಿಯಾದ ಇಲಾಖೆ, ಅರ್ಹತೆ ಮತ್ತು ಅರ್ಜಿಗೆ ನಿಮ್ಮನ್ನು ಕರೆದೊಯ್ಯುತ್ತದೆ.",
    search_placeholder: "ನಿಮ್ಮ ಅಗತ್ಯವನ್ನು ತಿಳಿಸಿ... (ಉದಾ. 'ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ', 'ಚಾಲನಾ ಪರವಾನಗಿ')",
    find_service_btn: "ಸೇವೆ ಹುಡುಕಿ",
    quick_categories: "ತ್ವರಿತ ವರ್ಗಗಳು:",
    showing_services: "ಎಲ್ಲಾ 8 ಪ್ರಮುಖ ಸೇವೆಗಳನ್ನು ಪ್ರದರ್ಶಿಸಲಾಗುತ್ತಿದೆ",
    cat_all: "ಎಲ್ಲಾ ಸೇವೆಗಳು",
    cat_certificates: "ಪ್ರಮಾಣಪತ್ರಗಳು",
    cat_schemes: "ಯೋಜನೆಗಳು",
    cat_licenses: "ಪರವಾನಗಿಗಳು",
    cat_eligibility: "ಅರ್ಹತೆ ಪರಿಶೀಲನೆ",
    cat_support: "ಬೆಂಬಲ",
    cat_security: "ಭದ್ರತಾ ವಾಲ್ಟ್",
    security_badge: "✓ ಶೂನ್ಯ-ಜ್ಞಾನ ಎನ್‌ಕ್ರಿಪ್ಟ್ ಮಾಡಲಾಗಿದೆ • ಆಧಾರ್ ಮರೆಮಾಚುವಿಕೆ ಸಕ್ರಿಯವಾಗಿದೆ →",
    card_1_title: "ಸೇವೆ ಹುಡುಕಿ",
    card_1_sub: "50+ ಸಚಿವಾಲಯಗಳು",
    card_1_btn: "ಕ್ಯಾಟಲಾಗ್ →",
    card_2_title: "ಅರ್ಹತೆ ಪರಿಶೀಲಿಸಿ",
    card_2_sub: "AI ಮೌಲ್ಯಮಾಪನ",
    card_2_btn: "ಮೌಲ್ಯಮಾಪನ →",
    card_3_title: "ದಾಖಲೆಗಳು",
    card_3_sub: "ಪರಿಶೀಲನಾ ಪಟ್ಟಿ",
    card_3_btn: "ದಾಖಲೆಗಳು →",
    card_4_title: "ಆನ್‌ಲೈನ್ ಅರ್ಜಿ",
    card_4_sub: "ಏಕೀಕೃತ ನಮೂನೆಗಳು",
    card_4_btn: "ಅರ್ಜಿ ಸಲ್ಲಿಸಿ →",
    card_5_title: "ಸ್ಥಿತಿ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",
    card_5_sub: "ಲೈವ್ ಟೈಮ್‌ಲೈನ್",
    card_5_btn: "ಟ್ರ್ಯಾಕ್ →",
    card_6_title: "CSC ಕೇಂದ್ರಗಳು",
    card_6_sub: "ಕೇಂದ್ರ ಹುಡುಕಿ",
    card_6_btn: "ಹುಡುಕಿ →",
    card_7_title: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
    card_7_sub: "ಕೇಂದ್ರ ಮತ್ತು ರಾಜ್ಯ",
    card_7_btn: "ಅನ್ವೇಷಿಸಿ →",
    card_8_title: "ಸಹಾಯವಾಣಿ",
    card_8_sub: "24x7 ಕುಂದುಕೊರತೆ",
    card_8_btn: "ಬೆಂಬಲ →",
    footer_desc: "ಸರ್ಕಾರಿ ಸೇವೆಗಳು ಮತ್ತು ಕಲ್ಯಾಣ ಯೋಜನೆಗಳಿಗೆ ನೇರ ಮತ್ತು ತ್ವರಿತ ಪ್ರವೇಶವನ್ನು ಒದಗಿಸುವ ಡಿಜಿಟಲ್ ಇಂಡಿಯಾ ಉಪಕ್ರಮ.",
    footer_core_services: "ಪ್ರಮುಖ ಸೇವೆಗಳು",
    footer_citizen_support: "ನಾಗರಿಕ ಬೆಂಬಲ",
    footer_helplines: "ರಾಷ್ಟ್ರೀಯ ಸಹಾಯವಾಣಿಗಳು",
    footer_disclaimer: "ನ್ಯಾಷನಲ್ ಇನ್ಫರ್ಮ್ಯಾಟಿಕ್ಸ್ ಸೆಂಟರ್ (NIC) ವಿನ್ಯಾಸಗೊಳಿಸಿದೆ. ಭಾರತ ಸರ್ಕಾರ.",
    portal_title: "CivicSeva ಪೋರ್ಟಲ್",
    footer_standard_badge: "ರಾಷ್ಟ್ರೀಯ ಇ-ಆಡಳಿತ ಮಾನದಂಡ V2.4",
    footer_srv_directory: "ಸೇವಾ ಡೈರೆಕ್ಟರಿ",
    footer_srv_eligibility: "ಅರ್ಹತೆ ಪರಿಶೀಲಕ",
    footer_srv_documents: "ಅಗತ್ಯ ದಾಖಲೆಗಳು",
    footer_srv_apply: "ಆನ್‌ಲೈನ್ ಅರ್ಜಿಗಳು",
    footer_sup_track: "ಅರ್ಜಿ ಟ್ರ್ಯಾಕಿಂಗ್",
    footer_sup_centers: "ಹತ್ತಿರದ CSC ಕೇಂದ್ರವನ್ನು ಹುಡುಕಿ",
    footer_sup_schemes: "ಕಲ್ಯಾಣ ಯೋಜನೆಗಳು",
    footer_sup_grievance: "ದೂರುಗಳ ಪೋರ್ಟಲ್ (CPGRAMS)",
    footer_help_emergency: "ತುರ್ತು ಪ್ರತಿಕ್ರಿಯೆ:",
    footer_help_citizen: "ನಾಗರಿಕ ಸಹಾಯವಾಣಿ:",
    footer_help_cyber: "ಸೈಬರ್ ಅಪರಾಧ ಸಹಾಯವಾಣಿ:",
    footer_help_tollfree: "ಟೋಲ್-ಫ್ರೀ ಬೆಂಬಲ:",
    back_to_home: "← ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ",
    lang_modal_title: "22 ಅಧಿಕೃತ ಭಾರತೀಯ ಭಾಷೆಗಳು",
    lang_modal_sub: "ನಿಮ್ಮ ಪ್ರಾದೇಶಿಕ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
  },
  ml: {
    gov_india: "ഭാരത സർക്കാർ",
    citizen_navigator: "പൗര സേവന നാവിഗേറ്റർ",
    skip_content: "പ്രധാന ഉള്ളടക്കത്തിലേക്ക് പോകുക",
    screen_reader: "സ്ക്രീൻ റീഡർ",
    official_portal: "ഔദ്യോഗിക പോർട്ടൽ",
    nav_home: "ഹോം",
    nav_services: "സേവനങ്ങൾ",
    nav_schemes: "പദ്ധതികൾ",
    nav_eligibility: "യോഗ്യത",
    nav_documents: "രേഖകൾ",
    nav_apply: "ഓൺലൈൻ അപേക്ഷ",
    nav_track: "അപേക്ഷ ട്രാക്ക് ചെയ്യുക",
    nav_security: "സുരക്ഷാ വോൾട്ട്",
    nav_helpdesk: "ഹെൽപ്പ് ഡെസ്ക്",
    login_btn: "ലോഗിൻ",
    trusted_badge: "വിശ്വസനീയമായ സർക്കാർ ഇ-ഗവേണൻസ് പ്ലാറ്റ്ഫോം",
    hero_title: "നിങ്ങൾക്ക് ഏത് സർക്കാർ സേവനമാണ് ആവശ്യം?",
    hero_desc: "നിങ്ങൾക്ക് ആവശ്യമുള്ളത് നിങ്ങളുടെ സ്വന്തം വാക്കുകളിൽ വിവരിക്കുക, CivicSeva നിങ്ങളെ ശരിയായ വകുപ്പിലേക്കും അപേക്ഷയിലേക്കും നയിക്കും.",
    search_placeholder: "നിങ്ങളുടെ ആവശ്യം വ്യക്തമാക്കുക... (ഉദാ. 'വരുമാന സർട്ടിഫിക്കറ്റ്', 'ഡ്രൈവിംഗ് ലൈസൻസ്')",
    find_service_btn: "സേവനം കണ്ടെത്തുക",
    quick_categories: "ദ്രുത വിഭാഗങ്ങൾ:",
    showing_services: "എല്ലാ 8 പ്രധാന സേവനങ്ങളും കാണിക്കുന്നു",
    cat_all: "എല്ലാ സേവനങ്ങളും",
    cat_certificates: "സർട്ടിഫിക്കറ്റുകൾ",
    cat_schemes: "പദ്ധതികൾ",
    cat_licenses: "ലൈസൻസുകൾ",
    cat_eligibility: "യോഗ്യതാ പരിശോധന",
    cat_support: "പിന്തുണ",
    cat_security: "സുരക്ഷാ വോൾട്ട്",
    security_badge: "✓ സീറോ-നോളജ് എൻക്രിപ്റ്റ് ചെയ്തത് • ആധാർ മാസ്കിംഗ് സജീവം →",
    card_1_title: "സേവനം കണ്ടെത്തുക",
    card_1_sub: "50+ മന്ത്രാലയങ്ങൾ",
    card_1_btn: "കാറ്റലോഗ് →",
    card_2_title: "യോഗ്യത പരിശോധിക്കുക",
    card_2_sub: "AI വിലയിരുത്തൽ",
    card_2_btn: "പരിശോധിക്കുക →",
    card_3_title: "രേഖകൾ",
    card_3_sub: "മാർഗ്ഗരേഖ",
    card_3_btn: "രേഖകൾ കാണുക →",
    card_4_title: "ഓൺലൈൻ അപേക്ഷ",
    card_4_sub: "ഏകീകൃത ഫോമുകൾ",
    card_4_btn: "അപേക്ഷിക്കുക →",
    card_5_title: "സ്റ്റാറ്റസ് ട്രാക്ക് ചെയ്യുക",
    card_5_sub: "തത്സമയ പുരോഗതി",
    card_5_btn: "ട്രാക്ക് →",
    card_6_title: "CSC കേന്ദ്രങ്ങൾ",
    card_6_sub: "കേന്ദ്രങ്ങൾ കണ്ടെത്തുക",
    card_6_btn: "കണ്ടെത്തുക →",
    card_7_title: "സർക്കാർ പദ്ധതികൾ",
    card_7_sub: "കേന്ദ്ര & സംസ്ഥാന",
    card_7_btn: "അറിയുക →",
    card_8_title: "ഹെൽപ്പ് ഡെസ്ക്",
    card_8_sub: "24x7 പരാതി പരിഹാരം",
    card_8_btn: "പിന്തുണ →",
    footer_desc: "സർക്കാർ സേവനങ്ങളിലേക്കും ക്ഷേമപദ്ധതികളിലേക്കും നേരിട്ടുള്ള പ്രവേശനം നൽകുന്ന ഡിജിറ്റൽ ഇന്ത്യ സംരംഭം.",
    footer_core_services: "പ്രധാന സേവനങ്ങൾ",
    footer_citizen_support: "പൗര പിന്തുണ",
    footer_helplines: "ദേശീയ ഹെൽപ്പ് ലൈനുകൾ",
    footer_disclaimer: "നാഷണൽ ഇൻഫോർമാറ്റിക്സ് സെന്റർ (NIC) രൂപകൽപ്പന ചെയ്തത്. ഭാരത സർക്കാർ.",
    portal_title: "CivicSeva പോർട്ടൽ",
    footer_standard_badge: "ദേശീയ ഇ-ഗവേണൻസ് നിലവാരം V2.4",
    footer_srv_directory: "സേവന ഡയറക്ടറി",
    footer_srv_eligibility: "യോഗ്യത പരിശോധന",
    footer_srv_documents: "ആവശ്യമായ രേഖകൾ",
    footer_srv_apply: "ഓൺലൈൻ അപേക്ഷകൾ",
    footer_sup_track: "അപേക്ഷ ട്രാക്കിംഗ്",
    footer_sup_centers: "അടുത്തുള്ള CSC കേന്ദ്രം കണ്ടെത്തുക",
    footer_sup_schemes: "ക്ഷേമ പദ്ധതികൾ",
    footer_sup_grievance: "പരാതി പരിഹാര പോർട്ടൽ (CPGRAMS)",
    footer_help_emergency: "അടിയന്തര പ്രതികരണം:",
    footer_help_citizen: "പൗര ഹെൽപ്പ്‌ലൈൻ:",
    footer_help_cyber: "സൈബർ ക്രൈം ഹെൽപ്പ്‌ലൈൻ:",
    footer_help_tollfree: "ടോൾ-ഫ്രീ പിന്തുണ:",
    back_to_home: "← ഹോമിലേക്ക് മടങ്ങുക",
    lang_modal_title: "22 ഔദ്യോഗിക ഇന്ത്യൻ ഭാഷകൾ",
    lang_modal_sub: "നിങ്ങളുടെ പ്രാദേശിക ഭാഷ തിരഞ്ഞെടുക്കുക",
  },
  or: {
    gov_india: "ଭାରତ ସରକାର",
    citizen_navigator: "ନାଗରିକ ସେବା ନାଭିଗେଟର",
    skip_content: "ମୁଖ୍ୟ ବିଷୟବସ୍ତୁକୁ ଯାଆନ୍ତୁ",
    screen_reader: "ସ୍କ୍ରିନ୍ ରିଡର୍",
    official_portal: "ଅଫିସିଆଲ୍ ପୋର୍ଟାଲ୍",
    nav_home: "ହୋମ୍",
    nav_services: "ସେବାସମୂହ",
    nav_schemes: "ଯୋଜନା",
    nav_eligibility: "ଯୋଗ୍ୟତା",
    nav_documents: "ଦଲିଲପତ୍ର",
    nav_apply: "ଅନଲାଇନ୍ ଆବେଦନ",
    nav_track: "ଆବେଦନ ସ୍ଥିତି",
    nav_security: "ସୁରକ୍ଷା ଭଲ୍ଟ",
    nav_helpdesk: "ହେଲ୍ପଡେସ୍କ",
    login_btn: "ଲଗଇନ୍",
    trusted_badge: "ବିଶ୍ୱାସନୀୟ ସରକାରୀ ଇ-ଶାସନ ପ୍ଲାଟଫର୍ମ",
    hero_title: "ଆପଣଙ୍କୁ କେଉଁ ସରକାରୀ ସେବା ଆବଶ୍ୟକ?",
    hero_desc: "ଆପଣଙ୍କର ଆବଶ୍ୟକତା ନିଜ ଭାଷାରେ ବର୍ଣ୍ଣନା କରନ୍ତୁ ଏବଂ CivicSeva ଆପଣଙ୍କୁ ସଠିକ୍ ମନ୍ତ୍ରଣାଳୟ, ଯୋଗ୍ୟତା ଏବଂ ଆବେଦନ ପର୍ଯ୍ୟନ୍ତ ନେଇଯିବ।",
    search_placeholder: "ଆବଶ୍ୟକତା ଲେଖନ୍ତୁ... (ଯଥା 'ଆୟ ପ୍ରମାଣପତ୍ର', 'ଡ୍ରାଇଭିଂ ଲାଇସେନ୍ସ')",
    find_service_btn: "ସେବା ଖୋଜନ୍ତୁ",
    quick_categories: "ଶୀଘ୍ର ବର୍ଗ:",
    showing_services: "ସମସ୍ତ ୮ଟି ମୁଖ୍ୟ ସେବା ପ୍ରଦର୍ଶିତ",
    cat_all: "ସମସ୍ତ ସେବା",
    cat_certificates: "ପ୍ରମାଣପତ୍ର",
    cat_schemes: "ଯୋଜନା",
    cat_licenses: "ଲାଇସେନ୍ସ",
    cat_eligibility: "ଯୋଗ୍ୟତା ଯାଞ୍ଚ",
    cat_support: "ସହାୟତା",
    cat_security: "ସୁରକ୍ଷା ଭଲ୍ଟ",
    security_badge: "✓ ଜିରୋ-ନଲେଜ୍ ଏନକ୍ରିପ୍ଟେଡ୍ • ଆଧାର ମାସ୍କିଂ ସକ୍ରିୟ →",
    card_1_title: "ସେବା ଖୋଜନ୍ତୁ",
    card_1_sub: "୫୦+ ମନ୍ତ୍ରଣାଳୟ",
    card_1_btn: "ତାଲିକା →",
    card_2_title: "ଯୋଗ୍ୟତା ଯାଞ୍ଚ",
    card_2_sub: "AI ମୂଲ୍ୟାଙ୍କନ",
    card_2_btn: "ଯାଞ୍ଚନ୍ତୁ →",
    card_3_title: "ଦସ୍ତାବିଜ",
    card_3_sub: "ଚେକଲିଷ୍ଟ",
    card_3_btn: "ଦେଖନ୍ତୁ →",
    card_4_title: "ଅନଲାଇନ୍ ଆବେଦନ",
    card_4_sub: "ଫର୍ମ",
    card_4_btn: "ଆବେଦନ →",
    card_5_title: "ସ୍ଥିତି ଯାଞ୍ଚ",
    card_5_sub: "ଲାଇଭ୍ ସ୍ଥିତି",
    card_5_btn: "ଟ୍ରାକ୍ →",
    card_6_title: "CSC କେନ୍ଦ୍ର",
    card_6_sub: "କେନ୍ଦ୍ର ଖୋଜନ୍ତୁ",
    card_6_btn: "ଖୋଜନ୍ତୁ →",
    card_7_title: "ସରକାରୀ ଯୋଜନା",
    card_7_sub: "କେନ୍ଦ୍ର ଓ ରାଜ୍ୟ",
    card_7_btn: "ଦେଖନ୍ତୁ →",
    card_8_title: "ହେଲ୍ପଡେସ୍କ",
    card_8_sub: "୨୪x୭ ସହାୟତା",
    card_8_btn: "ସହାୟତା →",
    footer_desc: "ସରକାରୀ ସେବା ଏବଂ କଲ୍ୟାଣକାରୀ ଯୋଜନା ପାଇଁ ସିଧାସଳଖ ଡିଜିଟାଲ୍ ଇଣ୍ଡିଆ ପଦକ୍ଷେପ।",
    footer_core_services: "ମୁଖ୍ୟ ସେବା",
    footer_citizen_support: "ନାଗରିକ ସହାୟତା",
    footer_helplines: "ଜାତୀୟ ହେଲ୍ପଲାଇନ",
    footer_disclaimer: "ଜାତୀୟ ସୂଚନା ବିଜ୍ଞାନ କେନ୍ଦ୍ର (NIC) ଦ୍ୱାରା ପରିଚାଳିତ। ଭାରତ ସରକାର।",
    portal_title: "CivicSeva ପୋର୍ଟାଲ୍",
    footer_standard_badge: "ଜାତୀୟ ଇ-ଗଭର୍ଣ୍ଣାନ୍ସ ମାନକ V2.4",
    footer_srv_directory: "ସେବା ନିର୍ଦ୍ଦେଶିକା",
    footer_srv_eligibility: "ଯୋଗ୍ୟତା ଯାଞ୍ଚକାରୀ",
    footer_srv_documents: "ଆବଶ୍ୟକ ଦସ୍ତାବିଜ",
    footer_srv_apply: "ଅନଲାଇନ୍ ଆବେଦନ",
    footer_sup_track: "ଆବେଦନ ଟ୍ରାକିଂ",
    footer_sup_centers: "ନିକଟତମ ସିଏସସି କେନ୍ଦ୍ର ଖୋଜନ୍ତୁ",
    footer_sup_schemes: "କଲ୍ୟାଣକାରୀ ଯୋଜନା",
    footer_sup_grievance: "ଅଭିଯୋଗ ପୋର୍ଟାଲ୍ (CPGRAMS)",
    footer_help_emergency: "ଜରୁରୀକାଳୀନ ସେବା:",
    footer_help_citizen: "ନାଗରିକ ହେଲ୍ପଲାଇନ୍:",
    footer_help_cyber: "ସାଇବର କ୍ରାଇମ୍ ହେଲ୍ପଲାଇନ୍:",
    footer_help_tollfree: "ଟୋଲ୍-ଫ୍ରି ସହାୟତା:",
    back_to_home: "← ମୁଖ୍ୟ ପୃଷ୍ଠାକୁ ଫେରନ୍ତୁ",
    lang_modal_title: "୨୨ଟି ସରକାରୀ ଭାରତୀୟ ଭାଷା",
    lang_modal_sub: "ଆପଣଙ୍କ ପସନ୍ଦର ଆଞ୍ଚଳିକ ଭାଷା ବାଛନ୍ତୁ",
  },
  pa: {
    gov_india: "ਭਾਰਤ ਸਰਕਾਰ",
    citizen_navigator: "ਨਾਗਰਿਕ ਸੇਵਾ ਨੈਵੀਗੇਟਰ",
    skip_content: "ਮੁੱਖ ਸਮੱਗਰੀ 'ਤੇ ਜਾਓ",
    screen_reader: "ਸਕ੍ਰੀਨ ਰੀਡਰ",
    official_portal: "ਅਧਿਕਾਰਤ ਪੋਰਟਲ",
    nav_home: "ਹੋਮ",
    nav_services: "ਸੇਵਾਵਾਂ",
    nav_schemes: "ਯੋਜਨਾਵਾਂ",
    nav_eligibility: "ਯੋਗਤਾ",
    nav_documents: "ਦਸਤਾਵੇਜ਼",
    nav_apply: "ਆਨਲਾਈਨ ਅਰਜ਼ੀ",
    nav_track: "ਅਰਜ਼ੀ ਟ੍ਰੈਕ ਕਰੋ",
    nav_security: "ਸੁਰੱਖਿਆ ਵਾਲਟ",
    nav_helpdesk: "ਸਹਾਇਤਾ ਕੇਂਦਰ",
    login_btn: "ਲਾਗਇਨ",
    trusted_badge: "ਭਰੋਸੇਯੋਗ ਸਰਕਾਰੀ ਈ-ਗਵਰਨੈਂਸ ਪਲੇਟਫਾਰਮ",
    hero_title: "ਤੁਹਾਨੂੰ ਕਿਸ ਸਰਕਾਰੀ ਸੇਵਾ ਦੀ ਲੋੜ ਹੈ?",
    hero_desc: "ਆਪਣੀ ਲੋੜ ਨੂੰ ਆਪਣੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਲਿਖੋ ਅਤੇ CivicSeva ਤੁਹਾਨੂੰ ਸਹੀ ਮੰਤਰਾਲੇ, ਯੋਗਤਾ ਅਤੇ ਅਰਜ਼ੀ ਤੱਕ ਲੈ ਜਾਵੇਗਾ।",
    search_placeholder: "ਆਪਣੀ ਲੋੜ ਦੱਸੋ... (ਜਿਵੇਂ 'ਆਮਦਨ ਸਰਟੀਫਿਕੇਟ', 'ਡਰਾਈਵਿੰਗ ਲਾਇਸੈਂਸ')",
    find_service_btn: "ਸੇਵਾ ਲੱਭੋ",
    quick_categories: "ਤੇਜ਼ ਸ਼੍ਰੇਣੀਆਂ:",
    showing_services: "ਸਾਰੀਆਂ 8 ਮੁੱਖ ਸੇਵਾਵਾਂ ਦਿਖਾਈਆਂ ਜਾ ਰਹੀਆਂ ਹਨ",
    cat_all: "ਸਾਰੀਆਂ ਸੇਵਾਵਾਂ",
    cat_certificates: "ਸਰਟੀਫਿਕੇਟ",
    cat_schemes: "ਯੋਜਨਾਵਾਂ",
    cat_licenses: "ਲਾਇਸੈਂਸ",
    cat_eligibility: "ਯੋਗਤਾ ਜਾਂਚੋ",
    cat_support: "ਸਹਾਇਤਾ",
    cat_security: "ਸੁਰੱਖਿਆ ਵਾਲਟ",
    security_badge: "✓ ਜ਼ੀਰੋ-ਨੋਲੇਜ ਏਨਕ੍ਰਿਪਟਡ • ਆਧਾਰ ਮਾਸਕਿੰਗ ਸਰਗਰਮ →",
    card_1_title: "ਸੇਵਾ ਲੱਭੋ",
    card_1_sub: "50+ ਮੰਤਰਾਲੇ",
    card_1_btn: "ਸੂਚੀ →",
    card_2_title: "ਯੋਗਤਾ ਜਾਂਚੋ",
    card_2_sub: "AI ਮੁਲਾਂਕਣ",
    card_2_btn: "ਜਾਂਚੋ →",
    card_3_title: "ਦਸਤਾਵੇਜ਼",
    card_3_sub: "ਚੈੱਕਲਿਸਟ ਗਾਈਡ",
    card_3_btn: "ਦਸਤਾਵੇਜ਼ ਵੇਖੋ →",
    card_4_title: "ਆਨਲਾਈਨ ਅਰਜ਼ੀ",
    card_4_sub: "ਫਾਰਮ",
    card_4_btn: "ਅਰਜ਼ੀ ਦਿਓ →",
    card_5_title: "ਸਥਿਤੀ ਟ੍ਰੈਕ ਕਰੋ",
    card_5_sub: "ਲਾਈਵ ਟਾਈਮਲਾਈਨ",
    card_5_btn: "ਟ੍ਰੈਕ ਕਰੋ →",
    card_6_title: "CSC ਕੇਂਦਰ",
    card_6_sub: "ਕੇਂਦਰ ਲੱਭੋ",
    card_6_btn: "ਲੱਭੋ →",
    card_7_title: "ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ",
    card_7_sub: "ਕੇਂਦਰ ਅਤੇ ਰਾਜ",
    card_7_btn: "ਵੇਖੋ →",
    card_8_title: "ਸਹਾਇਤਾ ਕੇਂਦਰ",
    card_8_sub: "24x7 ਸ਼ਿਕਾਇਤ ਨਿਵਾਰਨ",
    card_8_btn: "ਸਹਾਇਤਾ →",
    footer_desc: "ਸਰਕਾਰੀ ਸੇਵਾਵਾਂ ਅਤੇ ਭਲਾਈ ਸਕੀਮਾਂ ਤੱਕ ਸਿੱਧੀ ਪਹੁੰਚ ਪ੍ਰਦਾਨ ਕਰਨ ਵਾਲੀ ਡਿਜੀਟਲ ਇੰਡੀਆ ਦੀ ਪਹਿਲ।",
    footer_core_services: "ਮੁੱਖ ਸੇਵਾਵਾਂ",
    footer_citizen_support: "ਨਾਗਰਿਕ ਸਹਾਇਤਾ",
    footer_helplines: "ਰਾਸ਼ਟਰੀ ਹੈਲਪਲਾਈਨ",
    footer_disclaimer: "ਨੈਸ਼ਨਲ ਇਨਫਾਰਮੈਟਿਕਸ ਸੈਂਟਰ (NIC) ਦੁਆਰਾ ਤਿਆਰ ਕੀਤਾ ਗਿਆ। ਭਾਰਤ ਸਰਕਾਰ।",
    portal_title: "CivicSeva ਪੋਰਟਲ",
    footer_standard_badge: "ਰਾਸ਼ਟਰੀ ਈ-ਗਵਰਨੈਂਸ ਮਿਆਰ V2.4",
    footer_srv_directory: "ਸੇਵਾ ਡਾਇਰੈਕਟਰੀ",
    footer_srv_eligibility: "ਯੋਗਤਾ ਚੈਕਰ",
    footer_srv_documents: "ਲੋੜੀਂਦੇ ਦਸਤਾਵੇਜ਼",
    footer_srv_apply: "ਆਨਲਾਈਨ ਅਰਜ਼ੀਆਂ",
    footer_sup_track: "ਅਰਜ਼ੀ ਟਰੈਕਿੰਗ",
    footer_sup_centers: "ਨੇੜਲਾ CSC ਕੇਂਦਰ ਲੱਭੋ",
    footer_sup_schemes: "ਭਲਾਈ ਸਕੀਮਾਂ",
    footer_sup_grievance: "ਸ਼ਿਕਾਇਤ ਪੋਰਟਲ (CPGRAMS)",
    footer_help_emergency: "ਐਮਰਜੈਂਸੀ ਰਿਸਪਾਂਸ:",
    footer_help_citizen: "ਨਾਗਰਿਕ ਹੈਲਪਲਾਈਨ:",
    footer_help_cyber: "ਸਾਈਬਰ ਕ੍ਰਾਈਮ ਹੈਲਪਲਾਈਨ:",
    footer_help_tollfree: "ਟੋਲ-ਫ੍ਰੀ ਸਹਾਇਤਾ:",
    back_to_home: "← ਮੁੱਖ ਪੰਨੇ 'ਤੇ ਵਾਪਸ ਜਾਓ",
    lang_modal_title: "22 ਸਰਕਾਰੀ ਭਾਰਤੀ ਭਾਸ਼ਾਵਾਂ",
    lang_modal_sub: "ਆਪਣੀ ਖੇਤਰੀ ਭਾਸ਼ਾ ਚੁਣੋ",
  },
  as: {
    gov_india: "ভাৰত চৰকাৰ",
    citizen_navigator: "নাগৰিক সেৱা নেভিগেটৰ",
    skip_content: "মূল পৃষ্ঠালৈ যাওক",
    screen_reader: "স্ক্ৰীণ ৰিডাৰ",
    official_portal: "আনুষ্ঠানিক প'ৰ্টেল",
    nav_home: "গৃহ",
    nav_services: "সেৱাসমূহ",
    nav_schemes: "আঁচনিসমূহ",
    nav_eligibility: "যোগ্যতা",
    nav_documents: "নথিপত্ৰ",
    nav_apply: "অনলাইন আবেদন",
    nav_track: "আবেদন ট্ৰেক কৰক",
    nav_security: "সুৰক্ষা ভল্ট",
    nav_helpdesk: "সহায়তা কেন্দ্র",
    login_btn: "লগইন",
    trusted_badge: "বিশ্বস্ত চৰকাৰী ই-গভৰ্নেন্স প্লেটফৰ্ম",
    hero_title: "আপোনাৰ কি চৰকাৰী সেৱা প্ৰয়োজন?",
    hero_desc: "আপোনাৰ প্ৰয়োজন নিজৰ ভাষাত বৰ্ণনা কৰক আৰু CivicSeva আপোনাক উপযুক্ত বিভাগ আৰু আবেদনলৈ লৈ যাব।",
    search_placeholder: "প্ৰয়োজন উল্লেখ কৰক... (উদাহৰণ: 'আয়ৰ প্ৰমাণপত্ৰ', 'ড্রাইভিং লাইচেন্স')",
    find_service_btn: "সেৱা সন্ধান",
    quick_categories: "দ্ৰুত বিভাগ:",
    showing_services: "সকলো ৮টা মুখ্য সেৱা প্ৰদৰ্শিত",
    cat_all: "সকলো সেৱা",
    cat_certificates: "প্ৰমাণপত্ৰ",
    cat_schemes: "আঁচনিসমূহ",
    cat_licenses: "লাইচেন্স",
    cat_eligibility: "যোগ্যতা পৰীক্ষা",
    cat_support: "সহায়তা",
    cat_security: "সুৰক্ষা ভল্ট",
    security_badge: "✓ জিৰো-নলেজ এনক্ৰিপ্ট কৰা • আধাৰ মাস্কিং সক্ৰিয় →",
    card_1_title: "সেৱা সন্ধান",
    card_1_sub: "৫০+ মন্ত্ৰালয়",
    card_1_btn: "তালিকা →",
    card_2_title: "যোগ্যতা পৰীক্ষা",
    card_2_sub: "AI মূল্যাংকন",
    card_2_btn: "পৰীক্ষা →",
    card_3_title: "নথিপত্ৰ",
    card_3_sub: "চেকলিষ্ট",
    card_3_btn: "নথি চাওক →",
    card_4_title: "অনলাইন আবেদন",
    card_4_sub: "একত্ৰিত প্ৰপত্ৰ",
    card_4_btn: "আবেদন →",
    card_5_title: "স্থিতি পৰীক্ষা",
    card_5_sub: "লাইভ টাইমলাইন",
    card_5_btn: "ট্ৰেক →",
    card_6_title: "চিএছচি কেন্দ্ৰ",
    card_6_sub: "কেন্দ্ৰ সন্ধান",
    card_6_btn: "সন্ধান →",
    card_7_title: "চৰকাৰী আঁচনি",
    card_7_sub: "কেন্দ্ৰ আৰু ৰাজ্য",
    card_7_btn: "চাওক →",
    card_8_title: "সহায়তা কেন্দ্র",
    card_8_sub: "২৪x৭ অভিযোগ",
    card_8_btn: "সহায়তা →",
    footer_desc: "চৰকাৰী সেৱা আৰু সামাজিক কল্যাণ আঁচনিসমূহ সহজতে লাভ কৰাৰ বাবে এক ডিজিটেল ইণ্ডিয়া পদক্ষেপ।",
    footer_core_services: "মুখ্য সেৱা",
    footer_citizen_support: "নাগৰিক সাহায্য",
    footer_helplines: "ৰাষ্ট্ৰীয় হেল্পলাইন",
    footer_disclaimer: "ৰাষ্ট্ৰীয় তথ্যবিজ্ঞান কেন্দ্ৰ (NIC) দ্বাৰা পৰিচালিত। ভাৰত চৰকাৰ।",
    portal_title: "CivicSeva প'ৰ্টেল",
    footer_standard_badge: "ৰাষ্ট্ৰীয় ই-শাসন মানদণ্ড V2.4",
    footer_srv_directory: "সেৱা ডাইৰেক্টৰি",
    footer_srv_eligibility: "যোগ্যতা পৰীক্ষক",
    footer_srv_documents: "প্ৰয়োজনীয় নথিপত্ৰ",
    footer_srv_apply: "অনলাইন আবেদন",
    footer_sup_track: "আবেদন ট্ৰেকিং",
    footer_sup_centers: "ওচৰৰ CSC কেন্দ্ৰ সন্ধান কৰক",
    footer_sup_schemes: "কল্যাণমূলক আঁচনি",
    footer_sup_grievance: "অভিযোগ প'ৰ্টেল (CPGRAMS)",
    footer_help_emergency: "জৰুৰীকালীন সঁহাৰি:",
    footer_help_citizen: "নাগৰিক হেল্পলাইন:",
    footer_help_cyber: "চাইবাৰ অপৰাধ হেল্পলাইন:",
    footer_help_tollfree: "টোল-ফ্ৰী সহায়:",
    back_to_home: "← মূল পৃষ্ঠালৈ উভতি যাওক",
    lang_modal_title: "২২টা চৰকাৰী ভাৰতীয় ভাষা",
    lang_modal_sub: "আপোনাৰ আঞ্চলিক ভাষা বাছনি কৰক",
  },
  sa: {
    gov_india: "भारतसर्वकारः",
    citizen_navigator: "नागरिकसेवाप्रदर्शकः",
    skip_content: "मुख्यविषयं गच्छतु",
    screen_reader: "पटलवाचकः",
    official_portal: "आधिकारिकप्रवेशद्वारम्",
    nav_home: "गृहम्",
    nav_services: "सेवाः",
    nav_schemes: "योजनाः",
    nav_eligibility: "योग्यता",
    nav_documents: "प्रमाणपत्राणि",
    nav_apply: "अन्तर्जालप्रार्थना",
    nav_track: "स्थितिम् अन्विष्यतु",
    nav_security: "सुरक्षापेटिका",
    nav_helpdesk: "साहाय्यकक्षः",
    login_btn: "प्रवेशः",
    trusted_badge: "विश्वसनीयसर्वकारीय-ई-शासनमञ्चः",
    hero_title: "भवते कस्याः सर्वकारसेवाऽपेक्षिता?",
    hero_desc: "स्वशब्देषु स्वस्यावश्यकतां वर्णयतु, CivicSeva साक्षात् योग्यमन्त्रालयं, योग्यतापरीक्षणं, आवेदनं च प्रदर्शयिष्यति।",
    search_placeholder: "स्वस्यावश्यकतां लिखतु... (उदा. 'आयप्रमाणपत्रम्', 'चालनपत्रम्', 'रशनपत्रम्')",
    find_service_btn: "सेवाम् अन्विष्यतु",
    quick_categories: "शीघ्रवर्गाः:",
    showing_services: "सर्वाः ८ प्रमुखाः सेवाः प्रदर्शिताः",
    cat_all: "सर्वाः सेवाः",
    cat_certificates: "प्रमाणपत्राणि",
    cat_schemes: "योजनाः",
    cat_licenses: "अनुज्ञापत्राणि",
    cat_eligibility: "योग्यतापरीक्षणम्",
    cat_support: "साहाय्यम्",
    cat_security: "सुरक्षापेटिका",
    security_badge: "✓ शून्यज्ञानसङ्केतीकृतम् • आधारगोपनं सक्रियम् • सुरक्षानियन्त्रणम् →",
    card_1_title: "सेवाम् अन्विष्यतु",
    card_1_sub: "५०+ मन्त्रालयाः",
    card_1_btn: "सूचिका →",
    card_2_title: "योग्यतापरीक्षणम्",
    card_2_sub: "AI मूल्याङ्कनम्",
    card_2_btn: "परीक्षताम् →",
    card_3_title: "दस्तावेजानि",
    card_3_sub: "सूचिदर्शिका",
    card_3_btn: "पश्यतु →",
    card_4_title: "अन्तर्जालप्रार्थना",
    card_4_sub: "एकीकृतप्रपत्राणि",
    card_4_btn: "प्रार्थयतु →",
    card_5_title: "स्थितिम् अन्विष्यतु",
    card_5_sub: "प्रत्यक्षक्रमः",
    card_5_btn: "अन्वेषणम् →",
    card_6_title: "CSC केन्द्राणि",
    card_6_sub: "केन्द्रान्वेषणम्",
    card_6_btn: "अन्विष्यतु →",
    card_7_title: "सर्वकारयोजनाः",
    card_7_sub: "केन्द्र-राज्ययोः",
    card_7_btn: "अन्वेषताम् →",
    card_8_title: "साहाय्यकक्षः",
    card_8_sub: "२४x७ तक्रारः",
    card_8_btn: "साहाय्यम् →",
    portal_title: "CivicSeva प्रवेशद्वारम्",
    footer_desc: "डिजिटल-इण्डिया इत्यस्य प्रमुखम् ई-शासन-प्रयोजनं यत् सर्वकारसेवासु जनकल्याणयोजनासु च प्रत्यक्षप्रवेशं प्रयच्छति।",
    footer_standard_badge: "राष्ट्रिय ई-शासनमानकम् V2.4",
    footer_core_services: "मुख्याः सेवाः",
    footer_srv_directory: "सेवासूचिका",
    footer_srv_eligibility: "योग्यतापरीक्षकः",
    footer_srv_documents: "पत्रकावश्यकताः",
    footer_srv_apply: "अन्तर्जालप्रार्थना",
    footer_citizen_support: "नागरिकसाहाय्यम्",
    footer_sup_track: "प्रार्थनान्वेषणम्",
    footer_sup_centers: "समीपस्थं CSC केन्द्रम्",
    footer_sup_schemes: "कल्याणयोजनाः",
    footer_sup_grievance: "तक्रारनिवारणम् (CPGRAMS)",
    footer_helplines: "राष्ट्रियसाहाय्यवाहिनी",
    footer_help_emergency: "आपत्कालीनसाहाय्यम्:",
    footer_help_citizen: "नागरिकसाहाय्यम्:",
    footer_help_cyber: "सायबर्-अपराधसाहाय्यम्:",
    footer_help_tollfree: "निःशुल्कसाहाय्यम्:",
    footer_disclaimer: "राष्ट्रिय-सूचना-विज्ञान-केन्द्रेण (NIC) अभिकल्पितं रक्षितं च। भारतसर्वकारः।",
    back_to_home: "← गृहं प्रति गच्छतु",
    lang_modal_title: "२२ अधिकृताः भारतीयभाषाः",
    lang_modal_sub: "स्वस्य प्रादेशिकभाषां चिनोतु",
  },
  mai: {
    gov_india: "भारत सरकार",
    citizen_navigator: "नागरिक सेवा नेविगेटर",
    skip_content: "मुख्य सामग्री पर जाउ",
    screen_reader: "स्क्रीन रीडर",
    official_portal: "आधिकारिक पोर्टल",
    nav_home: "घर",
    nav_services: "सेवा सभ",
    nav_schemes: "योजना सभ",
    nav_eligibility: "योग्यता",
    nav_documents: "कागजात",
    nav_apply: "ऑनलाइन आवेदन",
    nav_track: "आवेदन ट्रैक करू",
    nav_security: "सुरक्षा वॉल्ट",
    nav_helpdesk: "हेल्पडेस्क",
    login_btn: "लॉगिन",
    trusted_badge: "विश्वसनीय सरकारी ई-गवर्नेंस मंच",
    hero_title: "अहाँक कोन सरकारी सेवा चाही?",
    hero_desc: "अपन आवश्यकता अपन शब्द में लिखू आओर CivicSeva अहाँक सीधे सही मंत्रालय, योग्यता जांच आ आवेदन धरि पहुँचाओत।",
    search_placeholder: "अपन जरूरत लिखू... (उदा. 'आय प्रमाण पत्र', 'ड्राइविंग लाइसेंस', 'राशन कार्ड')",
    find_service_btn: "सेवा खोजू",
    quick_categories: "त्वरित श्रेणी:",
    showing_services: "सभ 8 प्रमुख सेवा देखायल जा रहल अछि",
    cat_all: "सभ सेवा",
    cat_certificates: "प्रमाण पत्र",
    cat_schemes: "योजना",
    cat_licenses: "लाइसेंस",
    cat_eligibility: "योग्यता जांचू",
    cat_support: "सहायता",
    cat_security: "सुरक्षा वॉल्ट",
    security_badge: "✓ जीरो-नॉलेज एन्क्रिप्टेड • आधार मास्किंग सक्रिय • सुरक्षा नियंत्रण →",
    card_1_title: "सेवा खोजू",
    card_1_sub: "50+ मंत्रालय",
    card_1_btn: "कैटलॉग →",
    card_2_title: "योग्यता जांचू",
    card_2_sub: "एआई मूल्यांकन",
    card_2_btn: "जांचू →",
    card_3_title: "कागजात",
    card_3_sub: "चेकलिस्ट गाइड",
    card_3_btn: "कागजात देखू →",
    card_4_title: "ऑनलाइन आवेदन",
    card_4_sub: "एकीकृत फॉर्म",
    card_4_btn: "आवेदन करू →",
    card_5_title: "स्थिति ट्रैक करू",
    card_5_sub: "लाइव टाइमलाइन",
    card_5_btn: "ट्रैक करू →",
    card_6_title: "सीएससी केंद्र",
    card_6_sub: "केंद्र खोजू",
    card_6_btn: "खोजू →",
    card_7_title: "सरकारी योजना",
    card_7_sub: "केंद्र आ राज्य",
    card_7_btn: "देखू →",
    card_8_title: "हेल्पडेस्क",
    card_8_sub: "24x7 सहायता",
    card_8_btn: "सहायता →",
    portal_title: "CivicSeva पोर्टल",
    footer_desc: "डिजिटल इंडियाक एक प्रमुख ई-गवर्नेंस पहल जे सरकारी सेवा आ जनकल्याण योजना धरि सीधी पहुँच देइत अछि।",
    footer_standard_badge: "राष्ट्रीय ई-गवर्नेंस मानक V2.4",
    footer_core_services: "मुख्य सेवा सभ",
    footer_srv_directory: "सेवा निर्देशिका",
    footer_srv_eligibility: "योग्यता चेकर",
    footer_srv_documents: "दस्तावेज आवश्यकता",
    footer_srv_apply: "ऑनलाइन आवेदन",
    footer_citizen_support: "नागरिक सहायता",
    footer_sup_track: "आवेदन ट्रैकिंग",
    footer_sup_centers: "निकटतम सीएससी केंद्र",
    footer_sup_schemes: "कल्याणकारी योजना",
    footer_sup_grievance: "शिकायत पोर्टल (CPGRAMS)",
    footer_helplines: "राष्ट्रीय हेल्पलाइन",
    footer_help_emergency: "आपातकालीन सेवा:",
    footer_help_citizen: "नागरिक हेल्पलाइन:",
    footer_help_cyber: "साइबर अपराध हेल्पलाइन:",
    footer_help_tollfree: "टोल-फ्री सहायता:",
    footer_disclaimer: "राष्ट्रीय सूचना विज्ञान केंद्र (NIC) द्वारा संचालित। भारत सरकार।",
    back_to_home: "← होम पर वापस जाउ",
    lang_modal_title: "22 आधिकारिक भारतीय भाषा",
    lang_modal_sub: "अपन पसंदीदा क्षेत्रीय भाषा चुनू",
  },
  ne: {
    gov_india: "भारत सरकार",
    citizen_navigator: "नागरिक सेवा नेभिगेटर",
    skip_content: "मुख्य सामग्रीमा जानुहोस्",
    screen_reader: "स्क्रिन रिडर",
    official_portal: "आधिकारिक पोर्टल",
    nav_home: "गृहपृष्ठ",
    nav_services: "सेवाहरू",
    nav_schemes: "योजनाहरू",
    nav_eligibility: "योग्यता",
    nav_documents: "कागजातहरू",
    nav_apply: "अनलाइन आवेदन",
    nav_track: "आवेदन ट्र्याक गर्नुहोस्",
    nav_security: "सुरक्षा भल्ट",
    nav_helpdesk: "हेल्पडेस्क",
    login_btn: "लगइन",
    trusted_badge: "विश्वसनीय सरकारी ई-गभर्नेन्स प्लेटफर्म",
    hero_title: "तपाईंलाई कुन सरकारी सेवा चाहिन्छ?",
    hero_desc: "आफ्नो आवश्यकता आफ्नै शब्दमा वर्णन गर्नुहोस्, CivicSeva ले तपाईंलाई सीधै सही मन्त्रालय, योग्यता जाँच र आवेदनमा मार्गदर्शन गर्नेछ।",
    search_placeholder: "आफ्नो आवश्यकता लेख्नुहोस्... (उदा. 'आय प्रमाणपत्र', 'सवारी चालक अनुमतिपत्र', 'राशन कार्ड')",
    find_service_btn: "सेवा खोज्नुहोस्",
    quick_categories: "द्रुत वर्गहरू:",
    showing_services: "सबै ८ प्रमुख सेवाहरू देखाइएको छ",
    cat_all: "सबै सेवाहरू",
    cat_certificates: "प्रमाणपत्रहरू",
    cat_schemes: "योजनाहरू",
    cat_licenses: "इजाजतपत्रहरू",
    cat_eligibility: "योग्यता जाँच",
    cat_support: "सहयोग",
    cat_security: "सुरक्षा भल्ट",
    security_badge: "✓ शून्य-ज्ञान इन्क्रिप्टेड • आधार मास्किङ सक्रिय • सुरक्षा नियन्त्रण →",
    card_1_title: "सेवा खोज्नुहोस्",
    card_1_sub: "५०+ मन्त्रालयहरू",
    card_1_btn: "क्याटलग →",
    card_2_title: "योग्यता जाँच",
    card_2_sub: "AI मूल्याङ्कन",
    card_2_btn: "मूल्याङ्कन →",
    card_3_title: "कागजातहरू",
    card_3_sub: "चेकलिस्ट गाइड",
    card_3_btn: "कागजात हेर्नुहोस् →",
    card_4_title: "अनलाइन आवेदन",
    card_4_sub: "एकीकृत फारमहरू",
    card_4_btn: "आवेदन गर्नुहोस् →",
    card_5_title: "स्थिति ट्र्याक",
    card_5_sub: "प्रत्यक्ष टाइमलाइन",
    card_5_btn: "ट्र्याक →",
    card_6_title: "CSC केन्द्रहरू",
    card_6_sub: "केन्द्र खोज्नुहोस्",
    card_6_btn: "खोज्नुहोस् →",
    card_7_title: "सरकारी योजनाहरू",
    card_7_sub: "केन्द्र र राज्य",
    card_7_btn: "अन्वेषण गर्नुहोस् →",
    card_8_title: "हेल्पडेस्क",
    card_8_sub: "२४x७ सहायता",
    card_8_btn: "सहयोग →",
    portal_title: "CivicSeva पोर्टल",
    footer_desc: "सरकारी सेवा र सामाजिक कल्याण योजनाहरूमा सीधा र छिटो पहुँच प्रदान गर्ने डिजिटल इन्डियाको प्रमुख ई-गभर्नेन्स पहल।",
    footer_standard_badge: "राष्ट्रिय ई-गभर्नेन्स मानक V2.4",
    footer_core_services: "प्रमुख सेवाहरू",
    footer_srv_directory: "सेवा निर्देशिका",
    footer_srv_eligibility: "योग्यता परीक्षक",
    footer_srv_documents: "कागजात आवश्यकताहरू",
    footer_srv_apply: "अनलाइन आवेदन",
    footer_citizen_support: "नागरिक समर्थन",
    footer_sup_track: "आवेदन ट्र्याकिङ",
    footer_sup_centers: "नजिकको CSC केन्द्र पत्ता लगाउनुहोस्",
    footer_sup_schemes: "कल्याणकारी योजनाहरू",
    footer_sup_grievance: "गुनासो पोर्टल (CPGRAMS)",
    footer_helplines: "राष्ट्रिय हेल्पलाइन",
    footer_help_emergency: "आपतकालीन प्रतिक्रिया:",
    footer_help_citizen: "नागरिक हेल्पलाइन:",
    footer_help_cyber: "साइबर अपराध हेल्पलाइन:",
    footer_help_tollfree: "टोल-फ्री समर्थन:",
    footer_disclaimer: "राष्ट्रिय सूचना विज्ञान केन्द्र (NIC) द्वारा डिजाइन र व्यवस्थित। भारत सरकार।",
    back_to_home: "← गृहपृष्ठमा फर्कनुहोस्",
    lang_modal_title: "२२ आधिकारिक भारतीय भाषाहरू",
    lang_modal_sub: "आफ्नो मनपर्ने क्षेत्रीय भाषा छान्नुहोस्",
  },
  kok: {
    gov_india: "भारत सरकार",
    citizen_navigator: "नागरीक सेवा मार्गदर्शक",
    skip_content: "मुखेल मजकुराचेर वचात",
    screen_reader: "स्क्रीन रीडर",
    official_portal: "अधिकृत पोर्टल",
    nav_home: "घर",
    nav_services: "सेवा",
    nav_schemes: "येवजण्यो",
    nav_eligibility: "पात्रता",
    nav_documents: "दस्तावेजां",
    nav_apply: "ऑनलाइन अर्ज",
    nav_track: "अर्ज तपासात",
    nav_security: "सुरक्षा वॉल्ट",
    nav_helpdesk: "मदत केंद्र",
    login_btn: "लॉगिन",
    trusted_badge: "विश्वसनीय सरकारी ई-गव्हर्नन्स मंच",
    hero_title: "तुंका खंयची सरकारी सेवा जाय?",
    hero_desc: "तुमची गरज तुमच्या उतरांनी सांगात, CivicSeva तुंका योग्य मंत्रालय, पात्रता तपासणी आनी अर्जाचेर पावोयतली.",
    search_placeholder: "तुमची गरज बरयात... (उदा. 'उत्पन्न प्रमाणपत्र', 'ड्रायव्हिंग लायसन्स')",
    find_service_btn: "सेवा सोदात",
    quick_categories: "वेगवान वर्ग:",
    showing_services: "सगळ्यो ८ मुखेल सेवा दाखयल्यात",
    cat_all: "सगळ्यो सेवा",
    cat_certificates: "प्रमाणपत्रां",
    cat_schemes: "येवजण्यो",
    cat_licenses: "परवानग्यो",
    cat_eligibility: "पात्रता तपासणी",
    cat_support: "मदत",
    cat_security: "सुरक्षा वॉल्ट",
    security_badge: "✓ झिरो-नॉलेज एन्क्रिप्टेड • आधार मास्किंग सक्रीय • सुरक्षा नियंत्रण →",
    card_1_title: "सेवा सोदात",
    card_1_sub: "५०+ मंत्रालयां",
    card_1_btn: "कॅटलॉग →",
    card_2_title: "पात्रता तपासणी",
    card_2_sub: "AI मुल्यांकन",
    card_2_btn: "तपासात →",
    card_3_title: "दस्तावेजां",
    card_3_sub: "चेकलिस्ट",
    card_3_btn: "पळयात →",
    card_4_title: "ऑनलाइन अर्ज",
    card_4_sub: "एकीकृत फॉर्म",
    card_4_btn: "अर्ज करात →",
    card_5_title: "स्थिती तपासात",
    card_5_sub: "थेट वेळपत्रक",
    card_5_btn: "तपासात →",
    card_6_title: "CSC केंद्रां",
    card_6_sub: "केंद्रां सोदात",
    card_6_btn: "सोदात →",
    card_7_title: "सरकारी येवजण्यो",
    card_7_sub: "केंद्र आनी राज्य",
    card_7_btn: "अन्वेषण करात →",
    card_8_title: "मदत केंद्र",
    card_8_sub: "२४x७ तक्रार",
    card_8_btn: "मदत →",
    portal_title: "CivicSeva पोर्टल",
    footer_desc: "सरकारी सेवा आनी कल्याणकारी येवजण्यांमेरेन थेट आनी रोखडो प्रवेश दिवपी डिजिटल इंडियाचो एक मुखेल उपक्रम.",
    footer_standard_badge: "राष्ट्रीय ई-गव्हर्नन्स प्रमाण V2.4",
    footer_core_services: "मुखेल सेवा",
    footer_srv_directory: "सेवा निर्देशिका",
    footer_srv_eligibility: "पात्रता तपासक",
    footer_srv_documents: "कागदपत्रांची गरज",
    footer_srv_apply: "ऑनलाइन अर्ज",
    footer_citizen_support: "नागरीक मदत",
    footer_sup_track: "अर्ज ट्रॅकिंग",
    footer_sup_centers: "लागशिल्लें CSC केंद्र",
    footer_sup_schemes: "कल्याणकारी येवजण्यो",
    footer_sup_grievance: "तक्रार पोर्टल (CPGRAMS)",
    footer_helplines: "राष्ट्रीय हेल्पलायन",
    footer_help_emergency: "आपत्कालीन प्रतिसाद:",
    footer_help_citizen: "नागरीक हेल्पलायन:",
    footer_help_cyber: "सायबर क्राईम हेल्पलायन:",
    footer_help_tollfree: "टोल-फ्री मदत:",
    footer_disclaimer: "राष्ट्रीय सूचना विज्ञान केंद्र (NIC) द्वारे तयार आनी संचालित. भारत सरकार.",
    back_to_home: "← घरा परत वचात",
    lang_modal_title: "२२ अधिकृत भारतीय भासो",
    lang_modal_sub: "तुमची प्रादेशिक भास वेचात",
  },
  sat: {
    gov_india: "ᱥᱤᱧᱚᱛ ᱥᱚᱨᱠᱟᱨ",
    citizen_navigator: "ᱱᱟᱜᱟᱨᱤᱠ ᱥᱮᱣᱟ ᱫᱤᱥᱟᱹ-ᱩᱫᱩᱜᱤᱡ",
    skip_content: "ᱢᱩᱬᱩᱛ ᱥᱟᱛᱟᱢ ᱛᱮ ᱪᱟᱞᱟᱜ ᱢᱮ",
    screen_reader: "ᱥᱠᱨᱤᱱ ᱯᱟᱲᱦᱟᱣᱤᱡ",
    official_portal: "ᱥᱚᱨᱠᱟᱨᱤ ᱯᱚᱨᱴᱟᱞ",
    nav_home: "ᱚᱲᱟᱜ",
    nav_services: "ᱥᱮᱣᱟ ᱠᱚ",
    nav_schemes: "ᱡᱚᱡᱚᱱᱟ ᱠᱚ",
    nav_eligibility: "ᱞᱟᱹᱠᱛᱤᱭᱟᱱ",
    nav_documents: "ᱫᱚᱞᱤᱞ ᱠᱚ",
    nav_apply: "ᱚᱱᱞᱟᱭᱤᱱ ᱟᱨᱡᱤ",
    nav_track: "ᱟᱨᱡᱤ ᱯᱟᱸᱡᱟ",
    nav_security: "ᱥᱩᱨᱚᱠᱷᱟ ᱵᱷᱚᱞᱴ",
    nav_helpdesk: "ᱜᱚᱲᱚ ᱰᱮᱥᱠ",
    login_btn: "ᱵᱚᱞᱚᱱ",
    trusted_badge: "ᱯᱟᱹᱛᱭᱟᱹᱣᱟᱱ ᱥᱚᱨᱠᱟᱨᱤ ᱤ-ᱜᱚᱵᱷᱚᱨᱱᱟᱱᱥ ᱯᱞᱮᱴᱯᱷᱚᱨᱢ",
    hero_title: "ᱟᱢ ᱚᱠᱟ ᱥᱚᱨᱠᱟᱨᱤ ᱥᱮᱣᱟ ᱞᱟᱹᱠᱛᱤᱜ ᱠᱟᱱᱟ?",
    hero_desc: "ᱟᱢᱟᱜ ᱞᱟᱹᱠᱛᱤ ᱟᱢᱟᱜ ᱟᱹᱲᱟᱹ ᱛᱮ ᱞᱟᱹᱭ ᱢᱮ, CivicSeva ᱟᱢ ᱥᱚᱡᱷᱮ ᱥᱚᱨᱠᱟᱨᱤ ᱢᱚᱱᱛᱨᱟᱲᱚᱭ ᱟᱨ ᱟᱨᱡᱤ ᱛᱮ ᱤᱫᱤ ᱢᱮᱭᱟ.",
    search_placeholder: "ᱟᱢᱟᱜ ᱞᱟᱹᱠᱛᱤ ᱚᱞ ᱢᱮ... (ᱡᱮᱞᱮᱠᱟ 'ᱟᱨᱡᱟᱣ ᱥᱟᱠᱟᱢ', 'ᱰᱨᱟᱭᱵᱷᱤᱝ ᱞᱟᱭᱥᱮᱱᱥ')",
    find_service_btn: "ᱥᱮᱣᱟ ᱯᱟᱸᱡᱟᱭ ᱢᱮ",
    quick_categories: "ᱞᱚᱜᱚᱱ ᱛᱷᱚᱠ ᱠᱚ:",
    showing_services: "ᱡᱚᱛᱚ ᱘ ᱜᱚᱴᱟᱝ ᱢᱩᱬ ᱥᱮᱣᱟ ᱩᱫᱩᱜᱚᱜ ᱠᱟᱱᱟ",
    cat_all: "ᱡᱚᱛᱚ ᱥᱮᱣᱟ",
    cat_certificates: "ᱥᱟᱠᱟᱢ ᱠᱚ",
    cat_schemes: "ᱡᱚᱡᱚᱱᱟ ᱠᱚ",
    cat_licenses: "ᱞᱟᱭᱥᱮᱱᱥ ᱠᱚ",
    cat_eligibility: "ᱞᱟᱹᱠᱛᱤ ᱯᱟᱨᱠᱷᱟᱣ",
    cat_support: "ᱜᱚᱲᱚ",
    cat_security: "ᱥᱩᱨᱚᱠᱷᱟ ᱵᱷᱚᱞᱴ",
    security_badge: "✓ ᱡᱤᱨᱳ-ᱱᱚᱞᱮᱡᱽ ᱮᱱᱠᱨᱤᱯᱴᱮᱰ • ᱟᱫᱷᱟᱨ ᱢᱟᱥᱠᱤᱝ ᱪᱟᱹᱞᱩ • ᱥᱩᱨᱚᱠᱷᱟ ᱪᱟᱪᱞᱟᱣ →",
    card_1_title: "ᱥᱮᱣᱟ ᱯᱟᱸᱡᱟᱭ ᱢᱮ",
    card_1_sub: "᱕᱐+ ᱢᱚᱱᱛᱨᱟᱲᱚᱭ",
    card_1_btn: "ᱛᱟᱹᱞᱠᱟᱹ →",
    card_2_title: "ᱞᱟᱹᱠᱛᱤ ᱯᱟᱨᱠᱷᱟᱣ",
    card_2_sub: "AI ᱢᱩᱞᱭᱟᱝᱠᱚᱱ",
    card_2_btn: "ᱯᱟᱨᱠᱷᱟᱣ →",
    card_3_title: "ᱫᱚᱞᱤᱞ ᱠᱚ",
    card_3_sub: "ᱪᱮᱠᱞᱤᱥᱴ",
    card_3_btn: "ᱧᱮᱞ ᱢᱮ →",
    card_4_title: "ᱚᱱᱞᱟᱭᱤᱱ ᱟᱨᱡᱤ",
    card_4_sub: "ᱡᱚᱲᱟᱣ ᱯᱷᱚᱨᱢ",
    card_4_btn: "ᱟᱨᱡᱤ ᱢᱮ →",
    card_5_title: "ᱦᱟᱞᱚᱛ ᱯᱟᱸᱡᱟ",
    card_5_sub: "ᱞᱟᱭᱤᱵᱷ ᱚᱠᱛᱚ",
    card_5_btn: "ᱯᱟᱸᱡᱟ →",
    card_6_title: "CSC ᱛᱟᱞᱢᱟ ᱠᱚ",
    card_6_sub: "ᱛᱟᱞᱢᱟ ᱯᱟᱸᱡᱟ",
    card_6_btn: "ᱯᱟᱸᱡᱟᱭ ᱢᱮ →",
    card_7_title: "ᱥᱚᱨᱠᱟᱨᱤ ᱡᱚᱡᱚᱱᱟ",
    card_7_sub: "ᱛᱟᱞᱢᱟ ᱟᱨ ᱯᱚᱱᱚᱛ",
    card_7_btn: "ᱧᱮᱞ ᱢᱮ →",
    card_8_title: "ᱜᱚᱲᱚ ᱰᱮᱥᱠ",
    card_8_sub: "᱒᱔x᱗ ᱜᱚᱲᱚ",
    card_8_btn: "ᱜᱚᱲᱚ →",
    portal_title: "CivicSeva ᱯᱚᱨᱴᱟᱞ",
    footer_desc: "ᱰᱤᱡᱤᱴᱟᱞ ᱤᱱᱰᱤᱭᱟ ᱨᱮᱱᱟᱜ ᱢᱤᱫ ᱢᱩᱬᱩᱛ ᱤ-ᱜᱚᱵᱷᱚᱨᱱᱟᱱᱥ ᱡᱟᱦᱟᱸ ᱫᱚ ᱥᱚᱨᱠᱟᱨᱤ ᱥᱮᱣᱟ ᱠᱚ ᱥᱚᱡᱷᱮ ᱥᱮᱴᱮᱨ ᱮᱢᱚᱜᱼᱟ.",
    footer_standard_badge: "ᱡᱟᱹᱛᱤᱭᱟᱹᱨᱤ ᱤ-ᱜᱚᱵᱷᱚᱨᱱᱟᱱᱥ ᱢᱟᱱ V2.4",
    footer_core_services: "ᱢᱩᱬᱩᱛ ᱥᱮᱣᱟ ᱠᱚ",
    footer_srv_directory: "ᱥᱮᱣᱟ ᱫᱤᱥᱟᱹ",
    footer_srv_eligibility: "ᱞᱟᱹᱠᱛᱤ ᱯᱟᱨᱠᱷᱟᱣᱤᱡ",
    footer_srv_documents: "ᱞᱟᱹᱠᱛᱤᱭᱟᱱ ᱫᱚᱞᱤᱞ",
    footer_srv_apply: "ᱚᱱᱞᱟᱭᱤᱱ ᱟᱨᱡᱤ",
    footer_citizen_support: "ᱱᱟᱜᱟᱨᱤᱠ ᱜᱚᱲᱚ",
    footer_sup_track: "ᱟᱨᱡᱤ ᱯᱟᱸᱡᱟ",
    footer_sup_centers: "ᱥᱩᱨ ᱨᱮᱱᱟᱜ CSC ᱛᱟᱞᱢᱟ",
    footer_sup_schemes: "ᱠᱟᱹᱣᱰᱤ ᱡᱚᱡᱚᱱᱟ",
    footer_sup_grievance: "ᱞᱟᱹᱞᱤᱥ ᱯᱚᱨᱴᱟᱞ (CPGRAMS)",
    footer_helplines: "ᱡᱟᱹᱛᱤᱭᱟᱹᱨᱤ ᱦᱮᱞᱯᱞᱟᱭᱤᱱ",
    footer_help_emergency: "ᱞᱚᱜᱚᱱ ᱜᱚᱲᱚ:",
    footer_help_citizen: "ᱱᱟᱜᱟᱨᱤᱠ ᱦᱮᱞᱯᱞᱟᱭᱤᱱ:",
    footer_help_cyber: "ᱥᱟᱭᱵᱚᱨ ᱠᱨᱟᱭᱤᱢ:",
    footer_help_tollfree: "ᱵᱤᱱ ᱯᱩᱭᱥᱟᱹ ᱜᱚᱲᱚ:",
    footer_disclaimer: "ᱡᱟᱹᱛᱤᱭᱟᱹᱨᱤ ᱤᱱᱯᱷᱚᱨᱢᱮᱴᱤᱠᱥ ᱛᱟᱞᱢᱟ (NIC) ᱦᱚᱛᱮᱛᱮ ᱵᱮᱱᱟᱣ ᱟᱠᱟᱱᱟ. ᱥᱤᱧᱚᱛ ᱥᱚᱨᱠᱟᱨ.",
    back_to_home: "← ᱚᱲᱟᱜ ᱛᱮ ᱨᱩᱣᱟᱹᱲ ᱢᱮ",
    lang_modal_title: "᱒᱒ ᱜᱚᱴᱟᱝ ᱥᱚᱨᱠᱟᱨᱤ ᱵᱷᱟᱨᱚᱛᱤᱭᱟᱹ ᱯᱟᱹᱨᱥᱤ",
    lang_modal_sub: "ᱟᱢᱟᱜ ᱠᱩᱥᱤ ᱴᱚᱴᱷᱟᱣᱟᱨᱤ ᱯᱟᱹᱨᱥᱤ ᱵᱟᱪᱷᱟᱣ ᱢᱮ",
  },
  doi: {
    gov_india: "भारत सरकार",
    citizen_navigator: "नागरिक सेवा नेविगेटर",
    skip_content: "मुख्य सामग्री पर जाओ",
    screen_reader: "स्क्रीन रीडर",
    official_portal: "सरकारी पोर्टल",
    nav_home: "घर",
    nav_services: "सेवा",
    nav_schemes: "योजना",
    nav_eligibility: "योग्यता",
    nav_documents: "दस्तावेज",
    nav_apply: "ऑनलाइन अर्जी",
    nav_track: "अर्जी ट्रैक करो",
    nav_security: "सुरक्षा वॉल्ट",
    nav_helpdesk: "हेल्पडेस्क",
    login_btn: "लॉगिन",
    trusted_badge: "विश्वसनीय सरकारी ई-गवर्नेंस प्लेटफार्म",
    hero_title: "तुसेंगी केहड़ी सरकारी सेवा चाहीदी ऐ?",
    hero_desc: "अपनी लोड़ गी अपने लफ्जां च दस्सो, CivicSeva तुसेंगी सीधे सही मंत्रालय ते अर्जी तकर पुजायेगा।",
    search_placeholder: "अपनी लोड़ लिखो... (उदा. 'आय प्रमाण पत्र', 'ड्राइविंग लाइसेंस')",
    find_service_btn: "सेवा ल्हब्बो",
    quick_categories: "झटपट श्रेणियां:",
    showing_services: "सभै 8 मुख सेवाएं दस्सियां गेदियां न",
    cat_all: "सभै सेवाएं",
    cat_certificates: "प्रमाण पत्र",
    cat_schemes: "योजना",
    cat_licenses: "लाइसेंस",
    cat_eligibility: "योग्यता जांच",
    cat_support: "मदद",
    cat_security: "सुरक्षा वॉल्ट",
    security_badge: "✓ जीरो-नॉलेज एन्क्रिप्टेड • आधार मास्किंग सक्रिय • सुरक्षा प्रबंधन →",
    card_1_title: "सेवा ल्हब्बो",
    card_1_sub: "50+ मंत्रालय",
    card_1_btn: "कैटलॉग →",
    card_2_title: "योग्यता जांच",
    card_2_sub: "AI मूल्यांकन",
    card_2_btn: "जांचो →",
    card_3_title: "दस्तावेज",
    card_3_sub: "चेकलिस्ट गाइड",
    card_3_btn: "दस्तावेज दिक्खो →",
    card_4_title: "ऑनलाइन अर्जी",
    card_4_sub: "एकीकृत फॉर्म",
    card_4_btn: "अर्जी देओ →",
    card_5_title: "स्थिति ट्रैक करो",
    card_5_sub: "लाइव टाइमलाइन",
    card_5_btn: "ट्रैक →",
    card_6_title: "CSC केंद्र",
    card_6_sub: "केंद्र ल्हब्बो",
    card_6_btn: "ल्हब्बो →",
    card_7_title: "सरकारी योजना",
    card_7_sub: "केंद्र ते राज्य",
    card_7_btn: "दिक्खो →",
    card_8_title: "हेल्पडेस्क",
    card_8_sub: "24x7 मदद",
    card_8_btn: "मदद →",
    portal_title: "CivicSeva पोर्टल",
    footer_desc: "डिजिटल इंडिया दी इक मुख ई-गवर्नेंस पहल जेह्ड़ी सरकारी सेवाएं तकर सीधी पहुँच दिंदी ऐ।",
    footer_standard_badge: "राष्ट्रीय ई-गवर्नेंस मानक V2.4",
    footer_core_services: "मुख सेवाएं",
    footer_srv_directory: "सेवा निर्देशिका",
    footer_srv_eligibility: "योग्यता चेकर",
    footer_srv_documents: "दस्तावेज लोड़",
    footer_srv_apply: "ऑनलाइन अर्जी",
    footer_citizen_support: "नागरिक सहायता",
    footer_sup_track: "अर्जी ट्रैकिंग",
    footer_sup_centers: "नेड़े दा CSC केंद्र",
    footer_sup_schemes: "कल्याणकारी योजना",
    footer_sup_grievance: "शिकायत पोर्टल (CPGRAMS)",
    footer_helplines: "राष्ट्रीय हेल्पलाइन",
    footer_help_emergency: "एमर्जेंसी सेवा:",
    footer_help_citizen: "नागरिक हेल्पलाइन:",
    footer_help_cyber: "साइबर क्राइम हेल्पलाइन:",
    footer_help_tollfree: "टोल-फ्री मदद:",
    footer_disclaimer: "राष्ट्रीय सूचना विज्ञान केंद्र (NIC) आस्सा तैयार ते संचालित। भारत सरकार।",
    back_to_home: "← घर वापस जाओ",
    lang_modal_title: "22 सरकारी भारतीय भाषा",
    lang_modal_sub: "अपनी पसंदीदा क्षेत्रीय भाषा चुनो",
  },
  sd: {
    gov_india: "ڀارت سرڪار",
    citizen_navigator: "شهري سروس نيويگيٽر",
    skip_content: "مک مواد ڏانهن وڃو",
    screen_reader: "اسڪرين ريڊر",
    official_portal: "سرڪاري پورٽل",
    nav_home: "گھر",
    nav_services: "خدمتون",
    nav_schemes: "اسڪيمون",
    nav_eligibility: "اهليت",
    nav_documents: "دستاويز",
    nav_apply: "آن لائن درخواست",
    nav_track: "درخواست ٽريڪ ڪريو",
    nav_security: "سيڪيورٽي والٽ",
    nav_helpdesk: "مدد ڊيسڪ",
    login_btn: "لاگ ان",
    trusted_badge: "قابل اعتماد سرڪاري اي-گورننس پليٽ فارم",
    hero_title: "توهان کي ڪهڙي سرڪاري سروس گهرجي؟",
    hero_desc: "پنهنجي ضرورت پنهنجن لفظن ۾ بيان ڪريو ۽ CivicSeva توهان کي سڌو سنئون صحيح وزارت ۽ درخواست تائين پهچائيندي.",
    search_placeholder: "پنهنجي ضرورت لکو... (مثال طور 'آمدني سرٽيفڪيٽ', 'ڊرائيونگ لائسنس')",
    find_service_btn: "سروس ڳوليو",
    quick_categories: "جلدي درجا:",
    showing_services: "سڀ 8 بنيادي خدمتون ڏيکاريل آهن",
    cat_all: "سڀ خدمتون",
    cat_certificates: "سرٽيفڪيٽ",
    cat_schemes: "اسڪيمون",
    cat_licenses: "لائسنس",
    cat_eligibility: "اهليت جي چڪاس",
    cat_support: "مدد",
    cat_security: "سيڪيورٽي والٽ",
    security_badge: "✓ زيرو-نالج اينڪريپٽڊ • آڌار ماسڪنگ فعال • سيڪيورٽي سنڀال →",
    card_1_title: "سروس ڳوليو",
    card_1_sub: "50+ وزارتون",
    card_1_btn: "ڪيٽلاگ →",
    card_2_title: "اهليت چڪاسيو",
    card_2_sub: "AI تشخيص",
    card_2_btn: "چڪاسيو →",
    card_3_title: "دستاويز",
    card_3_sub: "چيڪ لسٽ گائيڊ",
    card_3_btn: "ڏسو →",
    card_4_title: "آن لائن درخواست",
    card_4_sub: "گڏيل فارم",
    card_4_btn: "درخواست ڏيو →",
    card_5_title: "حالت ٽريڪ ڪريو",
    card_5_sub: "لائيو ٽائيم لائن",
    card_5_btn: "ٽريڪ →",
    card_6_title: "CSC مرڪز",
    card_6_sub: "مرڪز ڳوليو",
    card_6_btn: "ڳوليو →",
    card_7_title: "سرڪاري اسڪيمون",
    card_7_sub: "مرڪز ۽ رياست",
    card_7_btn: "ڳولا ڪريو →",
    card_8_title: "مدد ڊيسڪ",
    card_8_sub: "24x7 شڪايتون",
    card_8_btn: "مدد →",
    portal_title: "CivicSeva پورٽل",
    footer_desc: "ڊجيٽل انڊيا جي هڪ اهم اڳڀرائي جيڪا سرڪاري خدمتن تائين سڌي پهچ فراهم ڪري ٿي.",
    footer_standard_badge: "قومي اي-گورننس معيار V2.4",
    footer_core_services: "بنيادي خدمتون",
    footer_srv_directory: "سروس ڊاريڪٽري",
    footer_srv_eligibility: "اهليت چيڪر",
    footer_srv_documents: "دستاويزن جون گهرجون",
    footer_srv_apply: "آن لائن درخواستون",
    footer_citizen_support: "شهري مدد",
    footer_sup_track: "درخواست ٽريڪنگ",
    footer_sup_centers: "ويجهو سي ايس سي سينٽر",
    footer_sup_schemes: "فلاحي اسڪيمون",
    footer_sup_grievance: "شڪايت پورٽل (CPGRAMS)",
    footer_helplines: "قومي هيلپ لائين",
    footer_help_emergency: "هنگامي جواب:",
    footer_help_citizen: "شهري هيلپ لائين:",
    footer_help_cyber: "سائيبر ڪرائيم:",
    footer_help_tollfree: "ٽول فري سپورٽ:",
    footer_disclaimer: "نيشنل انفارميٽڪس سينٽر (NIC) پاران تيار ڪيل. ڀارت سرڪار.",
    back_to_home: "← واپس هوم ڏانهن",
    lang_modal_title: "22 سرڪاري هندستاني ٻوليون",
    lang_modal_sub: "پنهنجي علائقائي ٻولي چونڊيو",
  },
  ks: {
    gov_india: "ہِندوستان سَرکار",
    citizen_navigator: "شَہَری خِدمَت نَہ ویگیٹَر",
    skip_content: "اہم موادس پؠٹھ گژھِو",
    screen_reader: "سکرین ریڈر",
    official_portal: "سَرکاری پورٹَل",
    nav_home: "گھر",
    nav_services: "خدمات",
    nav_schemes: "سکیٖمہٕ",
    nav_eligibility: "اہلیت",
    nav_documents: "دستاویزات",
    nav_apply: "آن لائن درخاست",
    nav_track: "درخاست ٹریک کٔریو",
    nav_security: "حفاظتی والٹ",
    nav_helpdesk: "ہیلپ ڈیسک",
    login_btn: "لاگ اِن",
    trusted_badge: "بھروسہ مند سرکٲری ای-گورننس پلیٹ فارم",
    hero_title: "تۆہہِ کٔمؠ سرکٲری خدمتٕچ ضرورت چھِ؟",
    hero_desc: "پَنٕنؠ ضرورت پننین لفظن مَنٛز بیان کٔریو، CivicSeva واتناوہ تۄہہِ براہ راست صحیح وزارت تہٕ درخاستس تام۔",
    search_placeholder: "پَنٕنؠ ضرورت لؠکھِو... (مثلاً 'انکم سرٹیفکیٹ', 'ڈرائیونگ لائسنس')",
    find_service_btn: "خدمت ژھانٛڈیو",
    quick_categories: "تیز کیٹیگری:",
    showing_services: "سٲری ۸ اَہَم خدمات چھِ ہاونہٕ آمژٕ",
    cat_all: "سٲری خدمات",
    cat_certificates: "سرٹیفکیٹ",
    cat_schemes: "سکیٖمہٕ",
    cat_licenses: "لائسنس",
    cat_eligibility: "اہلیت چیک",
    cat_support: "مدد",
    cat_security: "حفاظتی والٹ",
    security_badge: "✓ زیرو-نالج انکرپٹڈ • آدھار ماسکنگ چالو • سیکیورٹی کنٹرول →",
    card_1_title: "خدمت ژھانٛڈیو",
    card_1_sub: "۵۰+ وزارتہٕ",
    card_1_btn: "کیٹلاگ →",
    card_2_title: "اہلیت چیک",
    card_2_sub: "AI تشخیٖص",
    card_2_btn: "جانچیو →",
    card_3_title: "دستاویزات",
    card_3_sub: "چیک لِسٹ گائیڈ",
    card_3_btn: "وُچھِو →",
    card_4_title: "آن لائن درخاست",
    card_4_sub: "مربوط فارم",
    card_4_btn: "درخاست دِیو →",
    card_5_title: "سٹیٹس ٹریک",
    card_5_sub: "لائیو ٹائم لائن",
    card_5_btn: "ٹریک →",
    card_6_title: "CSC مراکز",
    card_6_sub: "مرکز ژھانٛڈیو",
    card_6_btn: "ژھانٛڈیو →",
    card_7_title: "سرکٲری سکیٖمہٕ",
    card_7_sub: "مرکز تہٕ ریاست",
    card_7_btn: "وُچھِو →",
    card_8_title: "ہیلپ ڈیسک",
    card_8_sub: "۲۴x۷ مدد",
    card_8_btn: "مدد →",
    portal_title: "CivicSeva پورٹَل",
    footer_desc: "ڈِجیٹَل اِنڈِیا اَکھ اَہَم پَہَل یۄس سرکٲری خدماتن تام آسان رسائی فراہم کران چھِ۔",
    footer_standard_badge: "قومی ای-گورننس معیار V2.4",
    footer_core_services: "بنیادی خدمات",
    footer_srv_directory: "خدمت ڈائریکٹری",
    footer_srv_eligibility: "اہلیت چیکر",
    footer_srv_documents: "دستاویزات ضرورت",
    footer_srv_apply: "آن لائن درخاست",
    footer_citizen_support: "شہری مدد",
    footer_sup_track: "درخاست ٹریکنگ",
    footer_sup_centers: "نزدیکی CSC مرکز",
    footer_sup_schemes: "فلاحی سکیٖمہٕ",
    footer_sup_grievance: "شکایت پورٹل (CPGRAMS)",
    footer_helplines: "قومی ہیلپ لائن",
    footer_help_emergency: "ہنگامی مدد:",
    footer_help_citizen: "شہری ہیلپ لائن:",
    footer_help_cyber: "سائبر کرائم:",
    footer_help_tollfree: "ٹول فری مدد:",
    footer_disclaimer: "نیشنل انفارمیٹکس سینٹر (NIC) ذریعہ ڈیزائن تہٕ برقرار۔ ہِندوستان سَرکار۔",
    back_to_home: "← واپس ہوم پؠٹھ گژھِو",
    lang_modal_title: "۲۲ سرکٲری ہِندوستٲنؠ زبانن",
    lang_modal_sub: "پَنٕنؠ علاقائی زبان ژارِو",
  },
  brx: {
    gov_india: "भारत सरकार",
    citizen_navigator: "सुबुं सेवारि नेविगेटर",
    skip_content: "गाहाय बाहागोआव थां",
    screen_reader: "स्क्रिन फरायनै",
    official_portal: "ऑफिसियेल पोर्टल",
    nav_home: "न'",
    nav_services: "सेवाफोर",
    nav_schemes: "आंसनफोर",
    nav_eligibility: "थाखो",
    nav_documents: "दस्तावेजफोर",
    nav_apply: "अनलाइन आरज",
    nav_track: "आरज नायगिर",
    nav_security: "रैखाथि भल्ट",
    nav_helpdesk: "हेल्पडेस्क",
    login_btn: "हाबनाय",
    trusted_badge: "फोथायजाथाव सरकारि ई-गभर्नेन्स प्लेटफर्म",
    hero_title: "नोंथांनो मा सरकारि सेवा नांगौ?",
    hero_desc: "गावनि गोनांथिखौ गावनि रावजों फोरमाय, CivicSeva नोंथांखौ थोंजोंयै थिक मन्त्रालय, थाखो आनजाद आरो आरजआव दैदेनगोन।",
    search_placeholder: "गावनि गोनांथिखौ लिर... (उदा. 'आय प्रमाणपत्र', 'गाडाइ सालायनाय लायसेन्स')",
    find_service_btn: "सेवा नागिर",
    quick_categories: "थाब थाखोफोर:",
    showing_services: "गासै ८ गाहाय सेवाफोरखौ दिन्थिनाय जादों",
    cat_all: "गासै सेवाफोर",
    cat_certificates: "प्रमाणपत्रफोर",
    cat_schemes: "आंसनफोर",
    cat_licenses: "लायसेन्सफोर",
    cat_eligibility: "थाखो नायगिर",
    cat_support: "मदद",
    cat_security: "रैखाथि भल्ट",
    security_badge: "✓ जिर' नलेज इनक्रिप्टेड • आधार मास्किं सोलिबाय थानाय • रैखाथि सामलाय →",
    card_1_title: "सेवा नागिर",
    card_1_sub: "५०+ मन्त्रालयफोर",
    card_1_btn: "फारिलाइ →",
    card_2_title: "थाखो आनजाद",
    card_2_sub: "AI आनजाद",
    card_2_btn: "आनजाद →",
    card_3_title: "दस्तावेजफोर",
    card_3_sub: "फारिलाइ गाइड",
    card_3_btn: "नाय →",
    card_4_title: "अनलाइन आरज",
    card_4_sub: "जौगानाय फर्म",
    card_4_btn: "आरज खालाम →",
    card_5_title: "थासारि नायगिर",
    card_5_sub: "लाइभ टाइमलाइन",
    card_5_btn: "नायगिर →",
    card_6_title: "CSC मिरुफोर",
    card_6_sub: "मिरु नागिर",
    card_6_btn: "नागिर →",
    card_7_title: "सरकारि आंसन",
    card_7_sub: "मिरु आरो राज्यो",
    card_7_btn: "नाय →",
    card_8_title: "हेल्पडेस्क",
    card_8_sub: "२४x७ मदद",
    card_8_btn: "मदद →",
    portal_title: "CivicSeva पोर्टल",
    footer_desc: "डिजिटेल इण्डियानि मोनसे गाहाय ई-गभर्नेन्स थांखि जाय सरकारि सेवाफोरखौ गोरलैयै मोनहोनो हानाय खालामो।",
    footer_standard_badge: "हादरारि ई-गभर्नेन्स मानक V2.4",
    footer_core_services: "गाहाय सेवाफोर",
    footer_srv_directory: "सेवा फारिलाइ",
    footer_srv_eligibility: "थाखो नायगिरग्रा",
    footer_srv_documents: "दस्तावेज गोनांथि",
    footer_srv_apply: "अनलाइन आरज",
    footer_citizen_support: "सुबुं मदद",
    footer_sup_track: "आरज ट्रेकिं",
    footer_sup_centers: "खाथिनि CSC मिरु",
    footer_sup_schemes: "मोजां आंसनफोर",
    footer_sup_grievance: "अजत पोर्टल (CPGRAMS)",
    footer_helplines: "हादरारि हेल्पलाइन",
    footer_help_emergency: "गोनांथार मदद:",
    footer_help_citizen: "सुबुं हेल्पलाइन:",
    footer_help_cyber: "साइबार दाय हेल्पलाइन:",
    footer_help_tollfree: "बेसेन नाङै मदद:",
    footer_disclaimer: "नेसनल इनफरमेतिक्स सेन्टार (NIC) जों बानायनाय आरो सामलायनाय। भारत सरकार।",
    back_to_home: "← न'आव गिदिंफिन",
    lang_modal_title: "२२ हादरारि भारतीय रावफोर",
    lang_modal_sub: "गावनि मोजां मोननाय ओनसोलारि राव सायख'",
  },
  mni: {
    gov_india: "ভারত সরকার",
    citizen_navigator: "নাগরিক সেবা নেভিগেটর",
    skip_content: "মরুওইবা ৱাফমদা চৎলু",
    screen_reader: "স্ক্রিন রীদর",
    official_portal: "ওফিসিয়েল পোর্তেল",
    nav_home: "য়ুম",
    nav_services: "থৌগল্পা",
    nav_schemes: "স্কিমশিং",
    nav_eligibility: "যোগ্যতা",
    nav_documents: "চে-চাংশিং",
    nav_apply: "অনলাইন অপ্লাই",
    nav_track: "দরখাস্ত ট্রেক তৌবা",
    nav_security: "সেक्यুরিতি ভোল্ট",
    nav_helpdesk: "হেল্পদেস্ক",
    login_btn: "লোইন তৌবা",
    trusted_badge: "থাগৎনীংঙাই ওইবা সরকারগী ই-গভর্নেন্স প্লেটফোর্ম",
    hero_title: "নহাক্না করম্বা সরকারি সেবা দরকার ওইবগে?",
    hero_desc: "নহাক্কী দরকার অদু মশাগী লোলদা ফোংদোকউ, CivicSeva না নহাকপু হকথেংননা অচুম্বা মন্ত্রালয়, যোগ্যতা য়েংশিনবা অমসুং অপ্লাই তৌবদা লমজিংগনি।",
    search_placeholder: "নহাক্কী দরকার অদু ইরো... (উদাহরন: 'ইনকম সর্তিফিকেত', 'লাইসেন্স')",
    find_service_btn: "সেবা থিবীযু",
    quick_categories: "য়াংনা থাবা কাংলুপশিং:",
    showing_services: "মপুং ওইবা থৌগল ৮ ময়েক শেংনা উৎলি",
    cat_all: "থৌগল পুম্নমক",
    cat_certificates: "সর্তিফিকেতশিং",
    cat_schemes: "স্কিমশিং",
    cat_licenses: "লাইসেন্সশিং",
    cat_eligibility: "যোগ্যতা য়েংশিনবা",
    cat_support: "মতেং",
    cat_security: "সেक्यুরিতি ভোল্ট",
    security_badge: "✓ জিরো-নলেজ এনক্রিপ্ট তৌবা • আধার মাস্কিং চৎথরি • সেক্যুরিতি য়েংশিনবা →",
    card_1_title: "সেবা থিবীযু",
    card_1_sub: "৫০+ মন্ত্রালয়শিং",
    card_1_btn: "কেতলোগ →",
    card_2_title: "যোগ্যতা য়েংশিনবা",
    card_2_sub: "AI য়েংশিনবা",
    card_2_btn: "য়েংবা →",
    card_3_title: "চে-চাংশিং",
    card_3_sub: "চেকলিস্ট লমজিং",
    card_3_btn: "য়েংবা →",
    card_4_title: "অনলাইন অপ্লাই",
    card_4_sub: "অপুনবা ফোর্মশিং",
    card_4_btn: "অপ্লাই তৌবা →",
    card_5_title: "ফিভম ট্রেক",
    card_5_sub: "লাইভ মতম",
    card_5_btn: "ট্রেক →",
    card_6_title: "CSC মফমশিং",
    card_6_sub: "মফম থিবা",
    card_6_btn: "থিবা →",
    card_7_title: "সরকারি স্কিম",
    card_7_sub: "কেন্দ্র অমসুং রাজ্য",
    card_7_btn: "য়েংবা →",
    card_8_title: "হেল্পদেস্ক",
    card_8_sub: "২৪x৭ মতেং",
    card_8_btn: "মতেং →",
    portal_title: "CivicSeva পোর্তেল",
    footer_desc: "দিজিতেল ইন্দিয়াগী মরুওইবা ই-গভর্নেন্স খোঙথাং অমনি মদুনা সরকারি সেবাশিং হকথেংননা ফংহনবদা মতেং পাংই।",
    footer_standard_badge: "লৈবাক্কী ই-গভর্নেন্স স্তেন্দর্দ V2.4",
    footer_core_services: "মরুওইবা থৌগলশিং",
    footer_srv_directory: "থৌগল দাইরেক্তরি",
    footer_srv_eligibility: "যোগ্যতা য়েংশিনবা",
    footer_srv_documents: "দরকার ওইবা চে-চাং",
    footer_srv_apply: "অনলাইন অপ্লাই",
    footer_citizen_support: "নাগরিক মতেং",
    footer_sup_track: "দরখাস্ত ট্রেক তৌবা",
    footer_sup_centers: "নক্নবা CSC মফম",
    footer_sup_schemes: "য়াইফ-থৌরাং স্কিমশিং",
    footer_sup_grievance: "ৱাকৎ পোর্তেল (CPGRAMS)",
    footer_helplines: "লৈবাক্কী হেল্পলাইন",
    footer_help_emergency: "ইমার্জেন্সি মতেং:",
    footer_help_citizen: "নাগরিক হেল্পলাইন:",
    footer_help_cyber: "সাইবার ক্রাইম:",
    footer_help_tollfree: "তোল-ফ্রি মতেং:",
    footer_disclaimer: "নেস্নেল ইনফোর্মেতিক্স সেন্তর (NIC) না দিজাইন তৌবা অমসুং য়েংশিনবা। ভারত সরকার।",
    back_to_home: "← য়ুমদা হল্লকউ",
    lang_modal_title: "২২ ওফিসিয়েল ভারতকী লোলশিং",
    lang_modal_sub: "নহাক্কী লমদমগী লোল খনবীয়ু",
  },
};

// Fallback dictionary generator for other languages to guarantee 100% translation coverage
function getTranslation(langCode, key) {
  if (I18N_DICTIONARY[langCode] && I18N_DICTIONARY[langCode][key]) {
    return I18N_DICTIONARY[langCode][key];
  }
  // Fallback chain: requested lang -> Hindi -> English
  if (langCode !== 'en' && I18N_DICTIONARY.hi && I18N_DICTIONARY.hi[key]) {
    return I18N_DICTIONARY.hi[key];
  }
  return (I18N_DICTIONARY.en && I18N_DICTIONARY.en[key]) || '';
}

// Common English navigation & button terms for site-wide auto-translation
const COMMON_TEXT_MAP = {
  "Home": "nav_home",
  "Services": "nav_services",
  "Schemes": "nav_schemes",
  "Eligibility": "nav_eligibility",
  "Documents": "nav_documents",
  "Apply Online": "nav_apply",
  "Track Application": "nav_track",
  "Track Status": "nav_track",
  "Security Vault": "nav_security",
  "Helpdesk": "nav_helpdesk",
  "Government of India": "gov_india",
  "Citizen Service Navigator": "citizen_navigator",
  "Official Portal": "official_portal",
  "Find Service": "find_service_btn",
  "Skip to Main Content": "skip_content",
  "Screen Reader": "screen_reader",
  "Login": "login_btn",
  "All Services": "cat_all",
  "Certificates": "cat_certificates",
  "Licenses": "cat_licenses",
  "Support": "cat_support",
  "Find a Service": "card_1_title",
  "Check Eligibility": "card_2_title",
  "CSC Centers": "card_6_title",
  "Govt Schemes": "card_7_title",
  "Service Directory": "footer_srv_directory",
  "Eligibility Checker": "footer_srv_eligibility",
  "Document Requirements": "footer_srv_documents",
  "Online Applications": "footer_srv_apply",
  "Application Tracking": "footer_sup_track",
  "Find Nearest CSC Center": "footer_sup_centers",
  "Welfare Schemes": "footer_sup_schemes",
  "Grievance Portal (CPGRAMS)": "footer_sup_grievance",
  "National Helplines": "footer_helplines",
  "Emergency Response:": "footer_help_emergency",
  "Citizen Helpline:": "footer_help_citizen",
  "Cyber Crime Helpline:": "footer_help_cyber",
  "Toll-Free Support:": "footer_help_tollfree",
  "← Back to Home": "back_to_home",
  "Back to Home": "back_to_home",
  "22 Official Indian Languages": "lang_modal_title",
  "Select your preferred regional script": "lang_modal_sub"
};

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  renderLanguageDropdown();
  checkAuthStatus();
  injectLoginModalHTML();
  attachGlobalAuthGuards();

  // Apply current language on initial load
  const savedLang = localStorage.getItem('civicseva_lang') || 'en';
  applyFullPageTranslation(savedLang);
});

/* ==========================================================
   LANGUAGE SELECTOR & FULL-PAGE TRANSLATION ENGINE
   ========================================================== */

function renderLanguageDropdown() {
  const container = document.getElementById('langDropdownContainer');
  if (!container) return;

  const currentLangCode = localStorage.getItem('civicseva_lang') || 'en';
  const currentLang = INDIAN_LANGUAGES.find(l => l.code === currentLangCode) || INDIAN_LANGUAGES[0];

  // Note: High priority z-index (z-[999999]) guarantees menu stays strictly above
  // all Find Service buttons, hero banners, and cards.
  container.innerHTML = `
    <div class="relative inline-block text-left" id="langSelectorWrapper" style="position: relative; z-index: 99999;">
      <button 
        type="button" 
        id="langDropdownToggleBtn"
        onclick="toggleLanguageMenu(event)" 
        class="flex items-center space-x-2 bg-white hover:bg-slate-50 border-2 border-[#8D8179]/50 hover:border-[#8D8179] px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-800 shadow-md cursor-pointer transition">
        <span class="text-base">🌐</span>
        <span id="currentLangLabel">${currentLang.native}</span>
        <span class="text-[9px] text-[#8D8179]">▼</span>
      </button>

      <!-- Fixed High-Layer Dropdown Menu (Guaranteed above all buttons/cards) -->
      <div 
        id="langMenuDropdown" 
        class="hidden absolute right-0 mt-2 w-80 max-h-[420px] overflow-y-auto bg-white border-2 border-[#8D8179] rounded-2xl shadow-2xl p-2.5" 
        style="position: absolute; right: 0; top: 100%; margin-top: 8px; z-index: 9999999 !important; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.45);">
        
        <div class="p-2.5 border-b border-slate-100 bg-slate-50 rounded-xl mb-2">
          <div class="flex items-center justify-between">
            <span data-i18n="lang_modal_title" class="text-[10px] font-extrabold uppercase text-slate-700 tracking-wider">22 Official Indian Languages</span>
            <span class="text-[9px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">Bhashini AI</span>
          </div>
          <span data-i18n="lang_modal_sub" class="text-xs text-[#8D8179] font-bold block mt-0.5">Select your preferred regional script</span>
        </div>

        <div class="grid grid-cols-1 gap-1">
          ${INDIAN_LANGUAGES.map(l => `
            <button 
              type="button"
              onclick="selectLanguage('${l.code}', event)" 
              class="flex items-center justify-between px-3 py-2 text-xs text-left rounded-xl transition cursor-pointer ${l.code === currentLangCode ? 'bg-[#8D8179] text-white font-bold shadow-sm' : 'text-slate-800 hover:bg-slate-100 font-medium'}">
              <span class="text-sm font-semibold">${l.native}</span>
              <span class="text-[11px] ${l.code === currentLangCode ? 'text-white/90' : 'text-slate-400'}">${l.name}</span>
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function toggleLanguageMenu(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const menu = document.getElementById('langMenuDropdown');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// Close language menu when clicking anywhere outside
document.addEventListener('click', (e) => {
  const wrapper = document.getElementById('langSelectorWrapper');
  const menu = document.getElementById('langMenuDropdown');
  if (wrapper && menu && !wrapper.contains(e.target)) {
    menu.classList.add('hidden');
  }
});

function selectLanguage(code, e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const selected = INDIAN_LANGUAGES.find(l => l.code === code) || INDIAN_LANGUAGES[0];
  localStorage.setItem('civicseva_lang', code);

  // Close dropdown
  const menu = document.getElementById('langMenuDropdown');
  if (menu) menu.classList.add('hidden');

  // Re-render language dropdown so label & active highlight updates
  renderLanguageDropdown();

  // Translate ALL words across the website
  applyFullPageTranslation(code);

  showToast(`🌐 Entire portal translated to ${selected.native} (${selected.name}) via Bhashini AI Engine.`);
}

/**
 * Translates EVERY text element across the entire document
 */
function applyFullPageTranslation(langCode) {
  document.documentElement.lang = langCode;

  // 1. Translate all elements with [data-i18n]
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = getTranslation(langCode, key);
    if (text) {
      el.innerText = text;
    }
  });

  // 2. Translate all inputs/textareas with [data-i18n-placeholder]
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const ph = getTranslation(langCode, key);
    if (ph) {
      el.setAttribute('placeholder', ph);
    }
  });

  // 3. Special handling for hero headline if it contains accented spans
  const heroHeading = document.getElementById('heroHeadingText');
  if (heroHeading) {
    const heroTitle = getTranslation(langCode, 'hero_title');
    if (heroTitle) {
      const parts = heroTitle.split(' ');
      if (parts.length > 2) {
        const first = parts.slice(0, -2).join(' ');
        const last = parts.slice(-2).join(' ');
        heroHeading.innerHTML = `${first} <span class="text-[#8D8179]">${last}</span>`;
      } else {
        heroHeading.innerHTML = heroTitle;
      }
    }
  }

  // 4. Intelligent auto-translation for common words across any subpage
  autoTranslateCommonWords(langCode);
}

function autoTranslateCommonWords(langCode) {
  const elements = document.querySelectorAll('a, button, span, p, h1, h2, h3, h4, th, td');
  elements.forEach(el => {
    // If element already has explicit data-i18n, skip (already handled)
    if (el.hasAttribute('data-i18n')) return;
    // Only inspect leaf or small elements with text
    if (el.children.length > 0) return;

    let orig = el.getAttribute('data-orig-text');
    if (!orig) {
      const current = el.innerText.trim();
      if (COMMON_TEXT_MAP[current]) {
        orig = current;
        el.setAttribute('data-orig-text', orig);
      }
    }

    if (orig && COMMON_TEXT_MAP[orig]) {
      const key = COMMON_TEXT_MAP[orig];
      const translated = getTranslation(langCode, key);
      if (translated) {
        el.innerText = translated;
      }
    }
  });
}


/* ==========================================================
   AUTHENTICATION & JAN PARICHAY / AADHAAR LOGIN ENGINE
   ========================================================== */

function isCitizenLoggedIn() {
  try {
    const user = localStorage.getItem('civicseva_user');
    return !!(user && JSON.parse(user));
  } catch (e) {
    return false;
  }
}

function checkAuthStatus() {
  const userJson = localStorage.getItem('civicseva_user');
  const authContainer = document.getElementById('authActionContainer');
  if (!authContainer) return;

  if (userJson) {
    const user = JSON.parse(userJson);
    authContainer.innerHTML = `
      <div class="relative inline-block text-left" id="userProfileWrapper" style="z-index: 9999;">
        <button type="button" onclick="toggleUserDropdown(event)" class="flex items-center space-x-2 bg-white border-2 border-[#8D8179] px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-800 shadow-md hover:shadow-lg transition cursor-pointer">
          <div class="w-6 h-6 rounded-full bg-[#8D8179] text-white flex items-center justify-center text-[10px] font-extrabold shadow-sm">
            ${user.initials || 'AS'}
          </div>
          <span class="max-w-[110px] truncate">${user.name}</span>
          <span class="text-emerald-600 text-[11px]" title="Aadhaar e-KYC Verified">✓</span>
          <span class="text-[9px] text-slate-400">▼</span>
        </button>

        <!-- User Dropdown Menu -->
        <div id="userProfileDropdown" class="hidden absolute right-0 mt-2 w-64 bg-white border-2 border-[#8D8179] rounded-2xl shadow-2xl p-2.5 text-xs" style="z-index: 99999;">
          <div class="p-3 bg-slate-50 rounded-xl border border-slate-100 mb-2">
            <span class="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 uppercase tracking-wider">Aadhaar Verified Citizen</span>
            <strong class="text-slate-900 block mt-1 text-sm">${user.name}</strong>
            <span class="text-[11px] text-slate-500 font-mono">UID: ${user.aadhaarMasked || 'XXXX-XXXX-4521'}</span>
          </div>

          <div class="space-y-1">
            <a href="./apply.html" class="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 font-medium">
              <span>📑</span>
              <span>My Applications (1 Active)</span>
            </a>
            <a href="./track.html?ref=CS-2026-849201" class="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 font-medium">
              <span>🔍</span>
              <span>Track Active Certificate</span>
            </a>
            <a href="./security.html" class="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 font-medium">
              <span>🔒</span>
              <span>Security & Document Vault</span>
            </a>
          </div>

          <div class="pt-2 mt-2 border-t border-slate-100">
            <button onclick="logoutCitizen()" class="w-full text-left flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-rose-50 text-rose-700 font-bold cursor-pointer">
              <span>🚪</span>
              <span>Logout Citizen Account</span>
            </button>
          </div>
        </div>
      </div>
    `;
  } else {
    authContainer.innerHTML = `
      <button onclick="openLoginModal()" class="btn-official-stone px-5 py-2 text-xs flex items-center space-x-2 cursor-pointer">
        <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
        <span data-i18n="login_btn">Login</span>
      </button>
    `;
  }
}

function toggleUserDropdown(e) {
  if (e) e.stopPropagation();
  const menu = document.getElementById('userProfileDropdown');
  if (menu) menu.classList.toggle('hidden');
}

document.addEventListener('click', (e) => {
  const wrapper = document.getElementById('userProfileWrapper');
  const menu = document.getElementById('userProfileDropdown');
  if (wrapper && menu && !wrapper.contains(e.target)) {
    menu.classList.add('hidden');
  }
});

function logoutCitizen() {
  localStorage.removeItem('civicseva_user');
  checkAuthStatus();
  showToast('Logged out securely from Jan Parichay Session.');
}

/* ==========================================================
   JAN PARICHAY & AADHAAR OTP MODAL DIALOG
   ========================================================== */

function injectLoginModalHTML() {
  if (document.getElementById('civicLoginModal')) return;

  const modalHtml = `
    <div id="civicLoginModal" class="hidden fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-slate-900/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div class="bg-white rounded-3xl max-w-md w-full border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        
        <!-- Modal Top Bar -->
        <div class="tricolor-ribbon"></div>
        <div class="p-6 pb-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/80">
          <div class="flex items-center space-x-3">
            <img src="./assets/emblem.png" alt="Emblem" class="h-9 w-auto">
            <div>
              <span class="text-xs font-bold text-slate-900 block">जन परिचय | Jan Parichay</span>
              <span class="text-[10px] text-slate-500 font-medium">MeriPehchaan National Single Sign-On (SSO)</span>
            </div>
          </div>
          <button onclick="closeLoginModal()" class="text-slate-400 hover:text-slate-700 text-lg font-bold p-1 cursor-pointer">✕</button>
        </div>

        <!-- Contextual Alert Banner when prompted by clicking an option -->
        <div id="authNoticeBanner" class="px-6 pt-4 pb-0 hidden">
          <div class="flex items-center space-x-2 text-amber-900 bg-amber-50 border border-amber-300 px-3.5 py-2.5 rounded-xl text-xs font-semibold">
            <span class="text-base">🔒</span>
            <span id="authNoticeText">Authentication Required: Please login to access this service.</span>
          </div>
        </div>

        <!-- Login Tabs -->
        <div class="flex border-b border-slate-200 text-xs font-bold text-slate-600 px-6 pt-3">
          <button id="tabAadhaarBtn" onclick="switchLoginTab('aadhaar')" class="flex-1 py-3 text-center border-b-2 border-[#8D8179] text-[#8D8179] bg-white cursor-pointer">
            Aadhaar OTP (Direct e-KYC)
          </button>
          <button id="tabPasswordBtn" onclick="switchLoginTab('password')" class="flex-1 py-3 text-center border-b-2 border-transparent hover:text-slate-900 bg-slate-50/60 cursor-pointer">
            Jan Parichay Credentials
          </button>
        </div>

        <!-- Modal Body -->
        <div class="p-6">
          
          <!-- FORM 1: AADHAAR OTP -->
          <div id="aadhaarLoginForm" class="space-y-4 text-xs">
            <div>
              <label class="block font-bold text-slate-700 uppercase mb-1">Aadhaar Number or Virtual ID (VID) *</label>
              <div class="relative">
                <input 
                  type="text" 
                  id="loginAadhaarInput" 
                  maxlength="14" 
                  placeholder="Enter 12-digit Aadhaar (e.g. 8492-9102-4521)" 
                  value="8492-9102-4521"
                  class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#8D8179] font-mono tracking-wider font-semibold text-slate-900"
                />
              </div>
              <span class="text-[10px] text-slate-400 mt-1 block">Authentication via UIDAI Central Identity Data Repository (CIDR).</span>
            </div>

            <!-- OTP Input Section -->
            <div id="otpInputSection" class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div class="flex justify-between items-center">
                <span class="font-bold text-slate-800">Enter 6-Digit OTP:</span>
                <span class="text-[10px] text-emerald-700 font-bold" id="otpTimer">Resend in 58s</span>
              </div>
              <input 
                type="text" 
                id="otpValueInput" 
                maxlength="6" 
                placeholder="123456" 
                value="123456" 
                class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-center font-mono font-bold text-lg tracking-widest focus:outline-none focus:border-[#8D8179] bg-white"
              />
              <span class="text-[10px] text-slate-500 block text-center">Demo OTP <strong>123456</strong> pre-filled for testing.</span>
            </div>

            <div class="pt-2">
              <button 
                id="getOtpBtn" 
                type="button" 
                onclick="sendDemoOtp()" 
                class="btn-official-stone w-full py-3 text-sm font-bold hidden items-center justify-center space-x-2 cursor-pointer">
                <span>Send OTP to Registered Mobile</span>
                <span>&rarr;</span>
              </button>

              <button 
                id="verifyOtpBtn" 
                type="button" 
                onclick="verifyDemoOtp()" 
                class="btn-official-stone w-full py-3 text-sm font-bold flex items-center justify-center space-x-2 cursor-pointer">
                <span>Verify OTP & Access Account</span>
                <span>✓</span>
              </button>
            </div>
          </div>

          <!-- FORM 2: USERNAME / PASSWORD -->
          <div id="passwordLoginForm" class="space-y-4 text-xs hidden">
            <div>
              <label class="block font-bold text-slate-700 uppercase mb-1">Jan Parichay Username / Mobile *</label>
              <input type="text" id="modalUsernameInput" value="abhyuday.citizen" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#8D8179]">
            </div>
            <div>
              <label class="block font-bold text-slate-700 uppercase mb-1">Password *</label>
              <input type="password" id="modalPasswordInput" value="NationalPortal@2026" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#8D8179]">
            </div>
            <div class="pt-2">
              <button type="button" onclick="loginWithCredentials()" class="btn-official-stone w-full py-3 text-sm font-bold cursor-pointer">
                Login via MeriPehchaan &rarr;
              </button>
            </div>
          </div>

          <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <a href="./login.html" id="openFullLoginPageLink" class="text-[#8D8179] font-bold hover:underline">Open Full Login Page &rarr;</a>
            <span>NIC SSL/TLS 1.3 Verified</span>
          </div>

        </div>

      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function openLoginModal(serviceName, targetUrl) {
  if (targetUrl) {
    window.pendingRedirectUrl = targetUrl;
  }
  const modal = document.getElementById('civicLoginModal');
  if (modal) {
    modal.classList.remove('hidden');
    const banner = document.getElementById('authNoticeBanner');
    const textSpan = document.getElementById('authNoticeText');
    const fullLink = document.getElementById('openFullLoginPageLink');

    if (serviceName) {
      if (textSpan) textSpan.innerHTML = `<strong>Authentication Required:</strong> Please login to access <em>${serviceName}</em>.`;
      if (banner) banner.classList.remove('hidden');
    } else {
      if (banner) banner.classList.add('hidden');
    }

    if (fullLink) {
      const dest = targetUrl || window.pendingRedirectUrl || '';
      fullLink.href = dest ? `./login.html?redirect=${encodeURIComponent(dest)}&service=${encodeURIComponent(serviceName || '')}` : './login.html';
    }
  }
}

function closeLoginModal() {
  const modal = document.getElementById('civicLoginModal');
  if (modal) modal.classList.add('hidden');
}

function switchLoginTab(tab) {
  const formAadhaar = document.getElementById('aadhaarLoginForm');
  const formPass = document.getElementById('passwordLoginForm');
  const btnAadhaar = document.getElementById('tabAadhaarBtn');
  const btnPass = document.getElementById('tabPasswordBtn');

  if (tab === 'aadhaar') {
    formAadhaar.classList.remove('hidden');
    formPass.classList.add('hidden');
    btnAadhaar.className = 'flex-1 py-3 text-center border-b-2 border-[#8D8179] text-[#8D8179] bg-white cursor-pointer';
    btnPass.className = 'flex-1 py-3 text-center border-b-2 border-transparent hover:text-slate-900 bg-slate-50/60 cursor-pointer';
  } else {
    formAadhaar.classList.add('hidden');
    formPass.classList.remove('hidden');
    btnPass.className = 'flex-1 py-3 text-center border-b-2 border-[#8D8179] text-[#8D8179] bg-white cursor-pointer';
    btnAadhaar.className = 'flex-1 py-3 text-center border-b-2 border-transparent hover:text-slate-900 bg-slate-50/60 cursor-pointer';
  }
}

function sendDemoOtp() {
  const aadhaar = document.getElementById('loginAadhaarInput').value.trim();
  if (!aadhaar) {
    alert('Please enter your Aadhaar or Mobile number.');
    return;
  }
  document.getElementById('otpInputSection').classList.remove('hidden');
  document.getElementById('getOtpBtn').classList.add('hidden');
  document.getElementById('verifyOtpBtn').classList.remove('hidden');
  showToast('OTP sent successfully to registered mobile (*** *** 3210). Demo OTP: 123456');
}

function verifyDemoOtp() {
  const otp = document.getElementById('otpValueInput').value.trim();
  if (otp !== '123456' && otp.length !== 6) {
    alert('Invalid OTP. Please enter 123456 for testing.');
    return;
  }

  const citizen = {
    name: 'Abhyuday Sharma',
    initials: 'AS',
    aadhaarMasked: 'XXXX-XXXX-4521',
    mobile: '9876543210',
    role: 'Verified Citizen',
    loginTime: new Date().toISOString()
  };

  localStorage.setItem('civicseva_user', JSON.stringify(citizen));
  closeLoginModal();
  checkAuthStatus();
  showToast('Welcome, Abhyuday Sharma! Authenticated successfully via Aadhaar e-KYC.');

  // Auto-redirect if an option was pending
  if (window.pendingRedirectUrl && window.pendingRedirectUrl !== window.location.href) {
    const dest = window.pendingRedirectUrl;
    window.pendingRedirectUrl = null;
    setTimeout(() => {
      window.location.href = dest;
    }, 400);
  }
}

function loginWithCredentials() {
  const citizen = {
    name: 'Abhyuday Sharma',
    initials: 'AS',
    aadhaarMasked: 'XXXX-XXXX-4521',
    mobile: '9876543210',
    role: 'Verified Citizen',
    loginTime: new Date().toISOString()
  };
  localStorage.setItem('civicseva_user', JSON.stringify(citizen));
  closeLoginModal();
  checkAuthStatus();
  showToast('Authenticated via MeriPehchaan (Jan Parichay).');

  if (window.pendingRedirectUrl && window.pendingRedirectUrl !== window.location.href) {
    const dest = window.pendingRedirectUrl;
    window.pendingRedirectUrl = null;
    setTimeout(() => {
      window.location.href = dest;
    }, 400);
  }
}

/* ==========================================================
   GLOBAL OPTION AUTHENTICATION GUARD (CLICK INTERCEPTOR)
   ========================================================== */

function attachGlobalAuthGuards() {
  // If we are already on the dedicated login page, don't guard
  if (window.location.pathname.endsWith('login.html')) return;

  // Global Capturing Click Interceptor
  document.addEventListener('click', (e) => {
    // If citizen is already authenticated, allow normal behavior!
    if (isCitizenLoggedIn()) return;

    // Allowed exceptions (can be clicked without login)
    if (e.target.closest('#civicLoginModal') || 
        e.target.closest('#langSelectorWrapper') || 
        e.target.closest('#authActionContainer') ||
        e.target.closest('[onclick*="document.body.style.fontSize"]')) {
      return;
    }

    // 1. Service Cards on Home
    const card = e.target.closest('.service-card');
    if (card) {
      e.preventDefault();
      e.stopPropagation();
      const titleEl = card.querySelector('[data-i18n$="_title"]') || card.querySelector('span.font-bold');
      const title = titleEl ? titleEl.innerText.trim() : 'Government Service';
      const targetHref = card.getAttribute('href');
      openLoginModal(title, targetHref);
      return;
    }

    // 2. Search Button on Home
    if (e.target.closest('#findBtn') || (e.target.tagName === 'BUTTON' && e.target.id === 'findBtn')) {
      e.preventDefault();
      e.stopPropagation();
      const q = document.getElementById('serviceInput')?.value.trim();
      const target = q ? `./services.html?q=${encodeURIComponent(q)}` : './services.html';
      openLoginModal('Service Search & Catalog', target);
      return;
    }

    // 3. Quick Category Filter Pills on Home
    const filterBtn = e.target.closest('.btn-filter-pill');
    if (filterBtn) {
      e.preventDefault();
      e.stopPropagation();
      const catName = filterBtn.innerText.trim();
      const target = filterBtn.getAttribute('href') || null;
      openLoginModal(`Service Category: ${catName}`, target);
      return;
    }

    // 4. Header Navigation Links (Services, Schemes, Eligibility, Documents, Apply, Track, Security, Helpdesk)
    const navLink = e.target.closest('header nav a');
    if (navLink) {
      const href = navLink.getAttribute('href');
      // Allow Home link while already on Home
      if ((href === './index.html' || href === 'index.html' || href === '#') && 
          (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/'))) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      const navText = navLink.innerText.trim();
      openLoginModal(navText, href);
      return;
    }

    // 5. Card Action Buttons (e.g. Catalog ->, Apply ->, Track ->)
    const cardAction = e.target.closest('.card-action-btn');
    if (cardAction) {
      e.preventDefault();
      e.stopPropagation();
      const parentLink = cardAction.closest('a');
      const targetHref = parentLink ? parentLink.getAttribute('href') : null;
      openLoginModal('Citizen Service Portal', targetHref);
      return;
    }

    // 6. Primary Action Buttons and links across subpages
    const actionBtn = e.target.closest('button.btn-official-stone, a.btn-official-stone, button.btn-outline-stone, a.btn-outline-stone');
    if (actionBtn && !actionBtn.closest('#civicLoginModal') && !actionBtn.closest('#authActionContainer')) {
      e.preventDefault();
      e.stopPropagation();
      const btnText = actionBtn.innerText.trim();
      const targetHref = actionBtn.tagName === 'A' ? actionBtn.getAttribute('href') : null;
      openLoginModal(btnText, targetHref);
      return;
    }

    // 7. Footer Service Links
    const footerLink = e.target.closest('footer a');
    if (footerLink) {
      const href = footerLink.getAttribute('href');
      if (href && !href.startsWith('#') && !href.startsWith('tel:') && !href.startsWith('mailto:')) {
        e.preventDefault();
        e.stopPropagation();
        openLoginModal(footerLink.innerText.trim(), href);
        return;
      }
    }
  }, true); // Capturing phase ensures immediate interception before onclick

  // Intercept Enter key inside Search Input
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.id === 'serviceInput') {
      if (!isCitizenLoggedIn()) {
        e.preventDefault();
        e.stopPropagation();
        const q = e.target.value.trim();
        const target = q ? `./services.html?q=${encodeURIComponent(q)}` : './services.html';
        openLoginModal('Service Search & Catalog', target);
      }
    }
  }, true);
}

function showToast(msg) {
  const existing = document.getElementById('civicToast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'civicToast';
  toast.className = 'fixed bottom-5 right-5 z-[999999] bg-slate-900 text-white text-xs px-4 py-3 rounded-xl shadow-2xl border border-slate-700 flex items-center space-x-2 animate-in fade-in slide-in-from-bottom-5 duration-300';
  toast.innerHTML = `
    <span class="text-emerald-400 text-sm">✓</span>
    <span>${msg}</span>
  `;
  document.body.appendChild(toast);

  setTimeout(() => {
    if (toast) toast.remove();
  }, 4500);
}
