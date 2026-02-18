
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
  "Medicine & Healthcare": ["Pharmacy", "Nursing", "General Practitioner / Doctor", "Medical Laboratory Technician", "Physiotherapist", "Radiographer"],
  "Engineering": ["Mechanical Engineering", "Electrical Engineering", "Civil Engineering", "Chemical Engineering", "Software Engineering", "Petroleum Engineering"],
  "Construction": ["Construction Worker (General)", "Mason / Bricklayer", "Carpenter", "Welder", "Plumber", "Site Supervisor"],
  "Information Technology": ["Network Engineer", "Cybersecurity Analyst", "Data Analyst", "Web Developer", "IT Support Technician"],
  "Education & Teaching": ["Primary School Teacher", "Secondary School Teacher", "Special Needs Educator", "University Lecturer"],
  "Hospitality & Tourism": ["Hotel Manager", "Chef / Cook", "Waiter / Waitress", "Tour Guide"],
  "Agriculture": ["Farm Worker", "Agricultural Officer", "Agronomist"],
  "Transportation & Logistics": ["Truck Driver (Long Haul)", "Forklift Operator", "Logistics Coordinator"],
  "Finance & Accounting": ["Accountant", "Financial Analyst", "Auditor"],
  "Security & Law Enforcement": ["Security Guard", "Close Protection Officer (Bodyguard)"],
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
  { name: "Netherlands", code: "NL", region: "Europe", currency: "EUR", flag: "🇳🇱", visa: "Highly Skilled Migrant", duration: "5 Years" }
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
}

export const MOCK_JOBS: Job[] = [
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
    qualifications: ["BSc Nursing", "NMC Registration (UK)", "BLS/ACLS Certification", "Minimum 2 years ICU experience"]
  },
  {
    id: "j2",
    title: "Senior Software Engineer",
    category: "Information Technology",
    role: "Software Engineering",
    country: "Germany",
    flag: "🇩🇪",
    hourlyRate: 45.00,
    experience: "5+ Years",
    deadline: "2025-07-01",
    description: "Full-stack developer needed for an AI-driven logistics firm in Berlin. Focus on React/Node.js stack and AWS cloud infrastructure.",
    qualifications: ["BSc Computer Science", "5+ years professional coding", "Expertise in React and Node.js", "English proficiency"]
  },
  {
    id: "j3",
    title: "Civil Site Engineer",
    category: "Engineering",
    role: "Civil Engineering",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    hourlyRate: 35.00,
    experience: "3+ Years",
    deadline: "2025-05-20",
    description: "Join a major infrastructure project in Dubai. Oversee site operations, ensure safety compliance, and coordinate with subcontractors.",
    qualifications: ["BEng Civil Engineering", "3+ years site experience", "AutoCAD proficiency", "Valid UAE Driver's license is a plus"]
  },
  {
    id: "j4",
    title: "Logistics Coordinator",
    category: "Transportation & Logistics",
    role: "Logistics Coordinator",
    country: "Singapore",
    flag: "🇸🇬",
    hourlyRate: 22.00,
    experience: "2+ Years",
    deadline: "2025-06-10",
    description: "Manage global shipping routes and warehouse inventory using SAP. Direct communication with international vendors.",
    qualifications: ["Diploma in Supply Chain", "2+ years logistics experience", "Proficiency in SAP", "Fluency in English"]
  },
  {
    id: "j5",
    title: "Head Chef",
    category: "Hospitality & Tourism",
    role: "Chef / Cook",
    country: "Netherlands",
    flag: "🇳🇱",
    hourlyRate: 32.00,
    experience: "5+ Years",
    deadline: "2025-08-12",
    description: "Lead the culinary team at a prestigious hotel in Amsterdam. Focus on high-quality continental cuisine and kitchen management.",
    qualifications: ["Culinary arts diploma", "5+ years kitchen leadership", "ServeSafe certification", "Menu design experience"]
  },
  {
    id: "j6",
    title: "Construction Site Supervisor",
    category: "Construction",
    role: "Site Supervisor",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    hourlyRate: 40.00,
    experience: "5+ Years",
    deadline: "2025-09-05",
    description: "Supervise large-scale commercial building construction in Riyadh. Ensure timelines are met and safety standards adhered to.",
    qualifications: ["BSc Construction Management", "5+ years supervisory role", "OSHA 30 certification", "Fluent in English"]
  }
];
