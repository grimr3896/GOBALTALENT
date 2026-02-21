
export const CATEGORIES = [
  "Medicine & Healthcare",
  "Engineering",
  "Construction",
  "Information Technology",
  "Education & Teaching",
  "Hospitality & Tourism",
  "Agriculture",
  "Transportation & Logistics",
  "Finance & Accounting",
  "Security & Law Enforcement",
  "Domestic Work",
  "Oil & Gas"
];

export const CATEGORY_ROLES: Record<string, string[]> = {
  "Medicine & Healthcare": ["Nursing", "Pharmacy", "General Practitioner / Doctor", "Medical Laboratory Technician", "Physiotherapist", "Radiographer"],
  "Engineering": ["Mechanical Engineering", "Electrical Engineering", "Civil Engineering", "Chemical Engineering", "Petroleum Engineering", "Software Engineering"],
  "Construction": ["Construction Worker (General)", "Mason / Bricklayer", "Carpenter", "Welder", "Plumber", "Site Supervisor"],
  "Information Technology": ["Software Engineering", "Cybersecurity", "Network Engineering", "Data Analysis", "Web Development", "IT Support"],
  "Education & Teaching": ["Primary School Teacher", "Secondary School Teacher", "Special Needs Educator", "University Lecturer"],
  "Hospitality & Tourism": ["Chef / Cook", "Hotel Manager", "Waiter / Waitress", "Tour Guide"],
  "Agriculture": ["Farm Worker", "Agronomist", "Agricultural Officer"],
  "Transportation & Logistics": ["Truck Driver", "Forklift Operator", "Logistics Coordinator"],
  "Finance & Accounting": ["Accountant", "Financial Analyst", "Auditor"],
  "Security & Law Enforcement": ["Security Guard", "Close Protection Officer"],
  "Domestic Work": ["Housekeeper / Domestic Worker", "Nanny / Childcare Worker"],
  "Oil & Gas": ["Rig Operator", "HSE Officer"]
};

export const COUNTRIES = [
  { name: "United Arab Emirates", code: "AE", region: "Middle East", currency: "AED", flag: "🇦🇪", visa: "Employment Visa (2 Years)", duration: "2 Years Renewable" },
  { name: "United Kingdom", code: "GB", region: "Europe", currency: "GBP", flag: "🇬🇧", visa: "Skilled Worker Visa", duration: "3 Years Fixed" },
  { name: "Canada", code: "CA", region: "Americas", currency: "CAD", flag: "🇨🇦", visa: "Work Permit", duration: "2 Years Renewable" },
  { name: "Germany", code: "DE", region: "Europe", currency: "EUR", flag: "🇩🇪", visa: "EU Blue Card", duration: "4 Years" },
  { name: "Singapore", code: "SG", region: "Asia", currency: "SGD", flag: "🇸🇬", visa: "S Pass / E Pass", duration: "2 Years Renewable" },
  { name: "Saudi Arabia", code: "SA", region: "Middle East", currency: "SAR", flag: "🇸🇦", visa: "Work Visa", duration: "1 Year Renewable" },
  { name: "Australia", code: "AU", region: "Americas", currency: "AUD", flag: "🇦🇺", visa: "Employer Sponsored Visa", duration: "4 Years" },
  { name: "Netherlands", code: "NL", region: "Europe", currency: "EUR", flag: "🇳🇱", visa: "Highly Skilled Migrant", duration: "5 Years" },
  { name: "Luxembourg", code: "LU", region: "Europe", currency: "EUR", flag: "🇱🇺", visa: "EU Work Permit", duration: "2 Years Renewable" },
  { name: "Switzerland", code: "CH", region: "Europe", currency: "CHF", flag: "🇨🇭", visa: "Swiss Work Permit B", duration: "2 Years Renewable" },
  { name: "Sweden", code: "SE", region: "Europe", currency: "SEK", flag: "🇸🇪", visa: "Swedish Work Permit", duration: "2 Years Renewable" },
  { name: "Poland", code: "PL", region: "Europe", currency: "PLN", flag: "🇵🇱", visa: "Polish Work Permit", duration: "2 Years Renewable" }
];

export const ALL_COUNTRIES = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

export interface Job {
  id: string;
  title: string;
  category: string;
  role: string;
  country: string;
  flag: string;
  hourlyRate: number;
  experience: string;
  deadline: string;
  description: string;
  qualifications: string[];
  requiredDocuments?: string[];
}

export const MOCK_JOBS: Job[] = [
  // MEDICINE & HEALTHCARE
  {
    id: "j1",
    title: "Registered Nurse (ICU)",
    category: "Medicine & Healthcare",
    role: "Nursing",
    country: "United Kingdom",
    flag: "🇬🇧",
    hourlyRate: 28.50,
    experience: "2+ Years",
    deadline: "2025-06-15",
    description: "Seeking experienced ICU nurses for a leading hospital in London. Responsible for critical patient care and monitoring in a high-pressure environment.",
    qualifications: ["BSc Nursing", "NMC Registration (UK)", "BLS/ACLS Certification", "Minimum 2 years ICU experience"]
  },
  {
    id: "j2",
    title: "Registered Nurse (General Ward)",
    category: "Medicine & Healthcare",
    role: "Nursing",
    country: "Canada",
    flag: "🇨🇦",
    hourlyRate: 26.00,
    experience: "1+ Years",
    deadline: "2025-07-30",
    description: " Reputable healthcare facility in Toronto seeking ward nurses for high-quality patient care and multidisciplinary collaboration.",
    qualifications: ["BSc Nursing or Diploma", "NCLEX-RN Certification", "Provincial License", "1 year ward experience"]
  },
  {
    id: "j3",
    title: "Pediatric Nurse",
    category: "Medicine & Healthcare",
    role: "Nursing",
    country: "Australia",
    flag: "🇦🇺",
    hourlyRate: 27.00,
    experience: "2+ Years",
    deadline: "2025-08-01",
    description: "Leading children's hospital in Sydney recruiting for specialized infant and adolescent care.",
    qualifications: ["BSc Nursing", "AHPRA Registration", "2 years pediatric experience", "WWCC Check"]
  },
  {
    id: "j4",
    title: "Clinical Pharmacist",
    category: "Medicine & Healthcare",
    role: "Pharmacy",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    hourlyRate: 32.00,
    experience: "3+ Years",
    deadline: "2025-07-10",
    description: "Private hospital in Dubai seeking pharmacist for medication verification and patient counseling.",
    qualifications: ["B.Pharm or PharmD", "DHA/MOH License", "3 years clinical experience"]
  },
  {
    id: "j5",
    title: "Community Pharmacist",
    category: "Medicine & Healthcare",
    role: "Pharmacy",
    country: "United Kingdom",
    flag: "🇬🇧",
    hourlyRate: 29.50,
    experience: "1+ Years",
    deadline: "2025-06-28",
    description: "Pharmacy chain across Greater London requires pharmacist for dispensing and NHS services.",
    qualifications: ["MPharm Degree", "GPhC Registration", "1 year post-qual experience"]
  },
  {
    id: "j6",
    title: "General Practitioner (GP)",
    category: "Medicine & Healthcare",
    role: "General Practitioner / Doctor",
    country: "Germany",
    flag: "🇩🇪",
    hourlyRate: 45.00,
    experience: "3+ Years",
    deadline: "2025-08-20",
    description: "Medical practice in Berlin recruiting GP for primary care and acute illness management.",
    qualifications: ["Medical Degree", "German Medical License (Approbation)", "B2 German", "3 years experience"]
  },
  {
    id: "j7",
    title: "Emergency Medicine Doctor",
    category: "Medicine & Healthcare",
    role: "General Practitioner / Doctor",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    hourlyRate: 52.00,
    experience: "4+ Years",
    deadline: "2025-07-25",
    description: "Government hospital in Riyadh seeking physician for acute emergency trauma management.",
    qualifications: ["Medical Degree + Specialization", "SCFHS License", "ATLS/ACLS Certs", "4 years ER experience"]
  },
  {
    id: "j8",
    title: "Medical Laboratory Scientist",
    category: "Medicine & Healthcare",
    role: "Medical Laboratory Technician",
    country: "Singapore",
    flag: "🇸🇬",
    hourlyRate: 24.00,
    experience: "2+ Years",
    deadline: "2025-07-05",
    description: "Diagnostic laboratory in Singapore seeking scientist for haematology and biochemistry analysis.",
    qualifications: ["BSc Med Lab Science", "AHPC Registration", "2 years lab experience"]
  },
  {
    id: "j9",
    title: "Physiotherapist (Sports)",
    category: "Medicine & Healthcare",
    role: "Physiotherapist",
    country: "Netherlands",
    flag: "🇳🇱",
    hourlyRate: 30.00,
    experience: "2+ Years",
    deadline: "2025-08-10",
    description: "Sports rehab center in Amsterdam recruiting for orthopedic and injury assessment.",
    qualifications: ["BSc/MSc Physiotherapy", "BIG Register eligibility", "2 years sports experience"]
  },
  {
    id: "j10",
    title: "Diagnostic Radiographer",
    category: "Medicine & Healthcare",
    role: "Radiographer",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    hourlyRate: 31.00,
    experience: "2+ Years",
    deadline: "2025-07-18",
    description: "Imaging center in Abu Dhabi seeking operator for X-ray, CT, and MRI equipment.",
    qualifications: ["BSc Radiography", "DHA/DOH License", "2 years imaging experience"]
  },

  // ENGINEERING
  {
    id: "j11",
    title: "Mechanical Engineer",
    category: "Engineering",
    role: "Mechanical Engineering",
    country: "Germany",
    flag: "🇩🇪",
    hourlyRate: 38.00,
    experience: "3+ Years",
    deadline: "2025-08-15",
    description: "Automotive manufacturing in Stuttgart seeking engineer for system design and production oversight.",
    qualifications: ["BSc Mechanical Engineering", "PE Certification", "3 years manufacturing exp", "AutoCAD/SolidWorks"]
  },
  {
    id: "j12",
    title: "Electrical Engineer",
    category: "Engineering",
    role: "Electrical Engineering",
    country: "Canada",
    flag: "🇨🇦",
    hourlyRate: 40.00,
    experience: "3+ Years",
    deadline: "2025-07-22",
    description: "Utility infrastructure in Ontario seeking engineer for distribution system design.",
    qualifications: ["BSc Electrical Engineering", "P.Eng License", "3 years power systems exp"]
  },
  {
    id: "j13",
    title: "Civil Engineer (Infrastructure)",
    category: "Engineering",
    role: "Civil Engineering",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    hourlyRate: 42.00,
    experience: "4+ Years",
    deadline: "2025-08-05",
    description: "Firm in Dubai recruiting senior engineer for road and bridge project management.",
    qualifications: ["BSc Civil Engineering", "Chartered status", "4 years infrastructure exp"]
  },
  {
    id: "j14",
    title: "Chemical Process Engineer",
    category: "Engineering",
    role: "Chemical Engineering",
    country: "Netherlands",
    flag: "🇳🇱",
    hourlyRate: 39.00,
    experience: "3+ Years",
    deadline: "2025-08-12",
    description: "Petrochemical refinery in Rotterdam seeking engineer for process optimization.",
    qualifications: ["BSc Chemical Engineering", "Safety certification", "3 years refinery exp"]
  },
  {
    id: "j15",
    title: "Petroleum Engineer",
    category: "Engineering",
    role: "Petroleum Engineering",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    hourlyRate: 58.00,
    experience: "5+ Years",
    deadline: "2025-07-30",
    description: "Oil corp in Dhahran seeking reservoir engineer for subsurface data analysis.",
    qualifications: ["BSc Petroleum Engineering", "SPE membership", "5 years reservoir exp"]
  },

  // CONSTRUCTION
  {
    id: "j16",
    title: "Construction Worker",
    category: "Construction",
    role: "Construction Worker (General)",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    hourlyRate: 9.50,
    experience: "1+ Years",
    deadline: "2025-06-30",
    description: "Construction company in Dubai recruiting for site preparation and material handling.",
    qualifications: ["School cert", "OSHA 10", "Physical fitness", "1 year site exp"]
  },
  {
    id: "j17",
    title: "Bricklayer / Mason",
    category: "Construction",
    role: "Mason / Bricklayer",
    country: "United Kingdom",
    flag: "🇬🇧",
    hourlyRate: 18.00,
    experience: "2+ Years",
    deadline: "2025-07-14",
    description: "Contractor in Birmingham seeking masons for residential builds.",
    qualifications: ["Vocational cert", "CSCS Card", "2 years masonry exp"]
  },
  {
    id: "j18",
    title: "Finish Carpenter",
    category: "Construction",
    role: "Carpenter",
    country: "Canada",
    flag: "🇨🇦",
    hourlyRate: 20.00,
    experience: "2+ Years",
    deadline: "2025-07-20",
    description: "Vancouver company hiring for door and cabinet installation.",
    qualifications: ["Trade cert", "Red Seal preferred", "2 years carpentry exp"]
  },
  {
    id: "j19",
    title: "Structural Welder",
    category: "Construction",
    role: "Welder",
    country: "Australia",
    flag: "🇦🇺",
    hourlyRate: 22.50,
    experience: "2+ Years",
    deadline: "2025-08-01",
    description: "Fabrication in Melbourne seeking welder for industrial steel components.",
    qualifications: ["AWS cert", "Trade cert", "2 years welding exp"]
  },
  {
    id: "j20",
    title: "Licensed Plumber",
    category: "Construction",
    role: "Plumber",
    country: "Singapore",
    flag: "🇸🇬",
    hourlyRate: 19.00,
    experience: "2+ Years",
    deadline: "2025-07-08",
    description: "Singapore contractor recruiting for sanitary fixture installation.",
    qualifications: ["Plumbing license", "PUB eligibility", "2 years plumbing exp"]
  },
  {
    id: "j21",
    title: "Site Supervisor",
    category: "Construction",
    role: "Site Supervisor",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    hourlyRate: 28.00,
    experience: "5+ Years",
    deadline: "2025-08-10",
    description: "Group in Riyadh seeking supervisor for daily site operation management.",
    qualifications: ["Diploma/Degree", "OSHA 30", "5 years supervision exp"]
  },

  // IT
  {
    id: "j22",
    title: "Full-Stack Engineer",
    category: "Information Technology",
    role: "Software Engineering",
    country: "Germany",
    flag: "🇩🇪",
    hourlyRate: 45.00,
    experience: "3+ Years",
    deadline: "2025-08-25",
    description: "Berlin tech company seeking developer for React/Node applications.",
    qualifications: ["BSc Comp Sci", "3 years full-stack exp", "React/Node/Postgres"]
  },
  {
    id: "j23",
    title: "Cybersecurity Analyst",
    category: "Information Technology",
    role: "Cybersecurity",
    country: "United Kingdom",
    flag: "🇬🇧",
    hourlyRate: 42.00,
    experience: "3+ Years",
    deadline: "2025-07-28",
    description: "Financial firm in London recruiting for vulnerability assessments.",
    qualifications: ["BSc IT", "CISSP/Security+", "3 years security exp"]
  },
  {
    id: "j24",
    title: "Network Engineer",
    category: "Information Technology",
    role: "Network Engineering",
    country: "Singapore",
    flag: "🇸🇬",
    hourlyRate: 36.00,
    experience: "2+ Years",
    deadline: "2025-07-15",
    description: "Telecom in Singapore requires engineer for LAN/WAN maintenance.",
    qualifications: ["BSc IT", "CCNA/CCNP", "2 years network exp"]
  },
  {
    id: "j25",
    title: "Data Analyst",
    category: "Information Technology",
    role: "Data Analysis",
    country: "Netherlands",
    flag: "🇳🇱",
    hourlyRate: 37.00,
    experience: "2+ Years",
    deadline: "2025-08-08",
    description: "E-commerce in Amsterdam seeking analyst for large dataset analysis.",
    qualifications: ["BSc Stats/IT", "SQL/Python", "Power BI", "2 years analysis exp"]
  },

  // EDUCATION
  {
    id: "j26",
    title: "Primary Teacher",
    category: "Education & Teaching",
    role: "Primary School Teacher",
    country: "United Kingdom",
    flag: "🇬🇧",
    hourlyRate: 22.00,
    experience: "1+ Years",
    deadline: "2025-07-01",
    description: "School in Manchester seeking teacher for national curriculum delivery.",
    qualifications: ["B.Ed Degree", "QTS/PGCE", "1 year teaching exp", "DBS check"]
  },
  {
    id: "j27",
    title: "Maths Teacher",
    category: "Education & Teaching",
    role: "Secondary School Teacher",
    country: "Australia",
    flag: "🇦🇺",
    hourlyRate: 24.50,
    experience: "2+ Years",
    deadline: "2025-07-25",
    description: "High school in Queensland recruiting for Years 7-12 math instruction.",
    qualifications: ["B.Ed Maths", "AITSL registration", "2 years teaching exp"]
  },
  {
    id: "j28",
    title: "SEN Teacher",
    category: "Education & Teaching",
    role: "Special Needs Educator",
    country: "Canada",
    flag: "🇨🇦",
    hourlyRate: 26.00,
    experience: "2+ Years",
    deadline: "2025-08-18",
    description: "Ontario institution recruiting for individualized education plan development.",
    qualifications: ["Special Ed Degree", "SEN cert", "2 years teaching exp"]
  },
  {
    id: "j29",
    title: "University Lecturer",
    category: "Education & Teaching",
    role: "University Lecturer",
    country: "Germany",
    flag: "🇩🇪",
    hourlyRate: 48.00,
    experience: "4+ Years",
    deadline: "2025-08-22",
    description: "Public university in Hamburg seeking lecturer for Business management.",
    qualifications: ["Master's/PhD", "4 years lecturing exp", "B2 German/English"]
  },

  // HOSPITALITY
  {
    id: "j30",
    title: "Executive Chef",
    category: "Hospitality & Tourism",
    role: "Chef / Cook",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    hourlyRate: 35.00,
    experience: "5+ Years",
    deadline: "2025-07-12",
    description: "5-star hotel in Abu Dhabi seeking chef to lead kitchen brigade.",
    qualifications: ["Culinary Degree", "5 years head chef exp", "ServSafe cert"]
  },
  {
    id: "j31",
    title: "Hotel Manager",
    category: "Hospitality & Tourism",
    role: "Hotel Manager",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    hourlyRate: 38.00,
    experience: "5+ Years",
    deadline: "2025-08-05",
    description: "Luxury resort in Jeddah seeking manager for all department oversight.",
    qualifications: ["Hospitality Degree", "5 years hotel mgmt", "Opera/Fidelio exp"]
  },
  {
    id: "j32",
    title: "Fine Dining Server",
    category: "Hospitality & Tourism",
    role: "Waiter / Waitress",
    country: "Netherlands",
    flag: "🇳🇱",
    hourlyRate: 14.50,
    experience: "1+ Years",
    deadline: "2025-06-28",
    description: "Upscale restaurant in Amsterdam hiring polished servers for table service.",
    qualifications: ["School cert", "Food handling cert", "1 year fine dining exp"]
  },
  {
    id: "j33",
    title: "Senior Tour Guide",
    category: "Hospitality & Tourism",
    role: "Tour Guide",
    country: "Australia",
    flag: "🇦🇺",
    hourlyRate: 16.00,
    experience: "2+ Years",
    deadline: "2025-07-20",
    description: "Sydney operator hiring guides for cultural and adventure tours.",
    qualifications: ["Tourism Diploma", "Guide certification", "2 years guide exp"]
  },

  // AGRICULTURE
  {
    id: "j34",
    title: "Farm Worker",
    category: "Agriculture",
    role: "Farm Worker",
    country: "Australia",
    flag: "🇦🇺",
    hourlyRate: 13.00,
    experience: "0-1 Years",
    deadline: "2025-07-10",
    description: "Regional farms seeking workers for planting and harvesting operations.",
    qualifications: ["Physical fitness", "Outdoor work ability", "Basic agri training"]
  },
  {
    id: "j35",
    title: "Agronomist",
    category: "Agriculture",
    role: "Agronomist",
    country: "Canada",
    flag: "🇨🇦",
    hourlyRate: 28.00,
    experience: "3+ Years",
    deadline: "2025-08-20",
    description: "Agribusiness in Saskatchewan seeking analyst for soil management.",
    qualifications: ["BSc Agronomy", "PAg designation", "3 years field exp"]
  },

  // TRANSPORT
  {
    id: "j36",
    title: "Truck Driver",
    category: "Transportation & Logistics",
    role: "Truck Driver",
    country: "Canada",
    flag: "🇨🇦",
    hourlyRate: 21.00,
    experience: "2+ Years",
    deadline: "2025-07-18",
    description: "Logistics in Alberta seeking drivers for pan-Canadian routes.",
    qualifications: ["Class 1 License", "Clean abstract", "2 years haulage exp"]
  },
  {
    id: "j37",
    title: "Forklift Operator",
    category: "Transportation & Logistics",
    role: "Forklift Operator",
    country: "United Kingdom",
    flag: "🇬🇧",
    hourlyRate: 16.50,
    experience: "1+ Years",
    deadline: "2025-07-05",
    description: "Distribution in Midlands recruiting for warehouse loading/unloading.",
    qualifications: ["Forklift cert", "1 year warehouse exp", "Physical fitness"]
  },
  {
    id: "j38",
    title: "Logistics Coordinator",
    category: "Transportation & Logistics",
    role: "Logistics Coordinator",
    country: "Singapore",
    flag: "🇸🇬",
    hourlyRate: 25.00,
    experience: "2+ Years",
    deadline: "2025-08-01",
    description: "Global forwarder in Singapore requires shipment operation management.",
    qualifications: ["Logistics Diploma", "2 years coordination exp", "ERP/SAP exp"]
  },

  // FINANCE
  {
    id: "j39",
    title: "Chartered Accountant",
    category: "Finance & Accounting",
    role: "Accountant",
    country: "United Kingdom",
    flag: "🇬🇧",
    hourlyRate: 35.00,
    experience: "3+ Years",
    deadline: "2025-07-30",
    description: "London firm recruiting for financial statement and tax return management.",
    qualifications: ["BSc Accounting", "ACA/ACCA", "3 years accounting exp"]
  },
  {
    id: "j40",
    title: "Financial Analyst",
    category: "Finance & Accounting",
    role: "Financial Analyst",
    country: "Germany",
    flag: "🇩🇪",
    hourlyRate: 40.00,
    experience: "3+ Years",
    deadline: "2025-08-15",
    description: "Frankfurt investment firm seeking analyst for financial modeling.",
    qualifications: ["BSc Finance", "CFA Level I", "3 years analysis exp"]
  },
  {
    id: "j41",
    title: "External Auditor",
    category: "Finance & Accounting",
    role: "Auditor",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    hourlyRate: 37.00,
    experience: "3+ Years",
    deadline: "2025-07-22",
    description: "Audit firm in Dubai seeking specialist for engagement planning.",
    qualifications: ["BSc Accounting", "CIA/CPA/ACCA", "3 years audit exp"]
  },

  // SECURITY
  {
    id: "j42",
    title: "Security Officer",
    category: "Security & Law Enforcement",
    role: "Security Guard",
    country: "United Kingdom",
    flag: "🇬🇧",
    hourlyRate: 14.00,
    experience: "1+ Years",
    deadline: "2025-07-05",
    description: "London services company recruiting for commercial property protection.",
    qualifications: ["SIA License", "1 year security exp", "Physical fitness"]
  },
  {
    id: "j43",
    title: "Close Protection",
    category: "Security & Law Enforcement",
    role: "Close Protection Officer",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    hourlyRate: 30.00,
    experience: "3+ Years",
    deadline: "2025-07-28",
    description: "Dubai firm seeking personal security for high-net-worth clients.",
    qualifications: ["CPO certification", "Military/Police exp", "3 years protective exp"]
  },

  // DOMESTIC
  {
    id: "j44",
    title: "Housekeeper",
    category: "Domestic Work",
    role: "Housekeeper / Domestic Worker",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    hourlyRate: 8.50,
    experience: "1+ Years",
    deadline: "2025-06-25",
    description: "Residence in Riyadh seeking housekeeper for laundry and maintenance.",
    qualifications: ["School cert", "1 year domestic exp", "Reference letters"]
  },
  {
    id: "j45",
    title: "Nanny",
    category: "Domestic Work",
    role: "Nanny / Childcare Worker",
    country: "United Kingdom",
    flag: "🇬🇧",
    hourlyRate: 15.00,
    experience: "2+ Years",
    deadline: "2025-07-10",
    description: "London family seeking responsible nanny for school routine support.",
    qualifications: ["Childcare cert", "2 years nanny exp", "First Aid cert"]
  },

  // OIL & GAS
  {
    id: "j46",
    title: "Rig Operator",
    category: "Oil & Gas",
    role: "Rig Operator",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    hourlyRate: 48.00,
    experience: "4+ Years",
    deadline: "2025-07-20",
    description: "Oil exploration in Eastern Province seeking drilling oversight.",
    qualifications: ["Technical diploma", "IADC Rig Pass", "4 years rig exp"]
  },
  {
    id: "j47",
    title: "HSE Officer",
    category: "Oil & Gas",
    role: "HSE Officer",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    hourlyRate: 38.00,
    experience: "3+ Years",
    deadline: "2025-08-10",
    description: "Abu Dhabi services company seeking safety management implementation.",
    qualifications: ["BSc Env Science", "NEBOSH IGC", "3 years heavy industry exp"]
  }
];
