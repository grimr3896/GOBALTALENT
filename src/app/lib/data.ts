
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
  // ORIGINAL JOBS (j1-j15) ...
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
    description: "Seeking experienced ICU nurses for a leading hospital in London. The candidate will be responsible for critical patient care, monitoring vitals, and administering medications in a high-pressure environment.",
    qualifications: ["BSc Nursing", "NMC Registration (UK)", "BLS/ACLS Certification", "Minimum 2 years ICU experience"],
    requiredDocuments: ["International Passport", "BSc Nursing Degree", "NMC Registration", "CV / Resume", "Medical Fitness Report", "Police Clearance"]
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
    description: "A reputable healthcare facility in Toronto is seeking compassionate and skilled general ward nurses to provide high-quality patient care, administer prescribed treatments, and collaborate with multidisciplinary medical teams.",
    qualifications: ["BSc Nursing or Nursing Diploma", "NCLEX-RN Certification", "CRNBC / CNO Provincial License", "Minimum 1 year ward nursing experience"],
    requiredDocuments: ["International Passport", "Nursing Diploma", "Provincial License", "CV / Resume", "Medical Fitness", "Police Clearance"]
  },
  // ... more jobs ...
  // NEW JOBS: LUXEMBOURG
  {
    id: "lu01",
    title: "Registered Nurse (General Ward)",
    category: "Medicine & Healthcare",
    role: "Nursing",
    country: "Luxembourg",
    flag: "🇱🇺",
    hourlyRate: 34.00,
    experience: "2+ Years",
    deadline: "2025-08-30",
    description: "A leading public hospital in Luxembourg City is seeking qualified registered nurses to deliver high-quality patient care, administer medications, and monitor patient recovery in a multilingual environment.",
    qualifications: ["BSc Nursing or Nursing Diploma", "Valid Nursing License", "BLS Certification", "Minimum 2 years experience", "French/German/Luxembourgish B1"],
  },
  {
    id: "lu02",
    title: "General Practitioner (GP)",
    category: "Medicine & Healthcare",
    role: "General Practitioner / Doctor",
    country: "Luxembourg",
    flag: "🇱🇺",
    hourlyRate: 58.00,
    experience: "3+ Years",
    deadline: "2025-09-10",
    description: "A private medical centre in Esch-sur-Alzette is recruiting a general practitioner to conduct primary care consultations and diagnose conditions.",
    qualifications: ["MBBS / MBChB or equivalent", "Ministry of Health Recognition", "Minimum 3 years experience", "French/German B2"],
  },
  {
    id: "lu03",
    title: "Fund Accountant",
    category: "Finance & Accounting",
    role: "Accountant",
    country: "Luxembourg",
    flag: "🇱🇺",
    hourlyRate: 42.00,
    experience: "2+ Years",
    deadline: "2025-09-05",
    description: "Manage NAV calculations, prepare financial statements for investment funds, and reconcile portfolio data.",
    qualifications: ["BSc Accounting or Finance", "ACCA / CPA / CFA", "Minimum 2 years fund accounting experience", "English proficiency"],
  },
  {
    id: "lu05",
    title: "Cybersecurity Analyst",
    category: "Information Technology",
    role: "Cybersecurity",
    country: "Luxembourg",
    flag: "🇱🇺",
    hourlyRate: 48.00,
    experience: "3+ Years",
    deadline: "2025-09-20",
    description: "Monitor security systems, investigate incidents, and conduct vulnerability assessments for a major financial institution.",
    qualifications: ["BSc Cybersecurity / IT", "CISSP / CEH / CompTIA Security+", "Minimum 3 years experience", "Knowledge of EU DORA"],
  },
  // NEW JOBS: SWITZERLAND
  {
    id: "ch01",
    title: "ICU Nurse",
    category: "Medicine & Healthcare",
    role: "Nursing",
    country: "Switzerland",
    flag: "🇨🇭",
    hourlyRate: 42.00,
    experience: "3+ Years",
    deadline: "2025-09-01",
    description: "Provide specialist critical care at a prestigious university hospital in Zurich. Multilingual environment.",
    qualifications: ["BSc Nursing", "SBK / ASI Registration", "BLS / ACLS Certification", "Minimum 3 years ICU experience", "German or French B2"],
  },
  {
    id: "ch03",
    title: "Mechanical Engineer (Precision Manufacturing)",
    category: "Engineering",
    role: "Mechanical Engineering",
    country: "Switzerland",
    flag: "🇨🇭",
    hourlyRate: 52.00,
    experience: "4+ Years",
    deadline: "2025-09-15",
    description: "Design and optimize precision mechanical components for a world-renowned manufacturer in Basel.",
    qualifications: ["BSc / MEng Mechanical Engineering", "Minimum 4 years precision engineering experience", "SolidWorks/CATIA proficiency", "GD&T knowledge"],
  },
  {
    id: "ch06",
    title: "Senior Software Engineer (Backend)",
    category: "Information Technology",
    role: "Software Engineering",
    country: "Switzerland",
    flag: "🇨🇭",
    hourlyRate: 55.00,
    experience: "4+ Years",
    deadline: "2025-09-25",
    description: "Architect and build high-performance, scalable APIs and microservices for a fast-growing fintech company in Zurich.",
    qualifications: ["BSc Computer Science", "Minimum 4 years backend experience", "Python/Go/Java proficiency", "Kubernetes/Docker experience"],
  },
  // NEW JOBS: SWEDEN
  {
    id: "se01",
    title: "Registered Nurse (Elderly Care)",
    category: "Medicine & Healthcare",
    role: "Nursing",
    country: "Sweden",
    flag: "🇸🇪",
    hourlyRate: 28.00,
    experience: "1+ Years",
    deadline: "2025-09-05",
    description: "Provide high-quality care for elderly residents in Stockholm. Promote patient dignity and wellbeing.",
    qualifications: ["BSc Nursing", "Socialstyrelsen Registration", "BLS Certification", "Swedish B2 proficiency"],
  },
  {
    id: "se04",
    title: "Embedded Systems Software Engineer",
    category: "Engineering",
    role: "Software Engineering",
    country: "Sweden",
    flag: "🇸🇪",
    hourlyRate: 46.00,
    experience: "3+ Years",
    deadline: "2025-09-25",
    description: "Develop firmware and low-level software for next-generation telecommunications hardware in Stockholm.",
    qualifications: ["BSc Computer Science / Electronics", "Minimum 3 years embedded experience", "C/C++ proficiency", "RTOS/Linux kernel knowledge"],
  },
  // NEW JOBS: POLAND
  {
    id: "pl01",
    title: "Registered Nurse (Hospital Ward)",
    category: "Medicine & Healthcare",
    role: "Nursing",
    country: "Poland",
    flag: "🇵🇱",
    hourlyRate: 16.00,
    experience: "1+ Years",
    deadline: "2025-09-10",
    description: "Provide bedside nursing care and administer treatments in a modern private hospital in Warsaw.",
    qualifications: ["BSc Nursing / Diploma", "Nursing Chamber of Poland Registration", "BLS Certification", "Polish B1 proficiency"],
  },
  {
    id: "pl05",
    title: "Full-Stack Developer",
    category: "Information Technology",
    role: "Software Engineering",
    country: "Poland",
    flag: "🇵🇱",
    hourlyRate: 26.00,
    experience: "2+ Years",
    deadline: "2025-10-08",
    description: "Build and maintain web applications and RESTful APIs for a rapidly growing tech company in Warsaw.",
    qualifications: ["BSc Computer Science", "Minimum 2 years experience", "React.js and Node.js proficiency", "English proficiency"],
  },
  {
    id: "pl11",
    title: "Seasonal Agricultural Farm Worker",
    category: "Agriculture",
    role: "Farm Worker",
    country: "Poland",
    flag: "🇵🇱",
    hourlyRate: 10.00,
    experience: "0–1 Years",
    deadline: "2025-09-01",
    description: "Harvesting and packing operations on farms across Poland. Accommodation provided on-site.",
    qualifications: ["Primary / Secondary School Certificate", "Physical fitness", "Willingness to work outdoor"],
  }
];
