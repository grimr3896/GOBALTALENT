
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
  "Engineering": ["Mechanical Engineering", "Electrical Engineering", "Civil Engineering", "Chemical Engineering", "Petroleum Engineering"],
  "Construction": ["Construction Worker (General)", "Mason / Bricklayer", "Carpenter", "Welder", "Plumber", "Site Supervisor"],
  "Information Technology": ["Software Engineering", "Cybersecurity", "Network Engineering", "Data Analysis"],
  "Education & Teaching": ["Primary School Teacher", "Secondary School Teacher", "Special Needs Educator", "University Lecturer"],
  "Hospitality & Tourism": ["Chef / Cook", "Hotel Manager", "Waiter / Waitress", "Tour Guide"],
  "Agriculture": ["Farm Worker", "Agronomist"],
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
    description: "A leading children's hospital in Sydney is recruiting qualified pediatric nurses to deliver specialized care to infant, child, and adolescent patients, including post-operative monitoring, medication administration, and family education.",
    qualifications: ["BSc Nursing", "AHPRA Nursing Registration", "Pediatric nursing experience (2+ years)", "Working with Children Check (WWCC)"],
    requiredDocuments: ["International Passport", "AHPRA Registration", "WWCC Certificate", "CV / Resume", "Medical Fitness", "Police Clearance"]
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
    description: "A leading private hospital in Dubai is seeking a qualified clinical pharmacist to review and verify medication orders, counsel patients on drug usage, and collaborate with clinical teams to ensure safe and effective pharmaceutical care.",
    qualifications: ["Bachelor of Pharmacy (B.Pharm) or PharmD", "DHA / MOH Pharmacist License (UAE)", "Minimum 3 years clinical pharmacy experience", "Drug therapy management knowledge"],
    requiredDocuments: ["International Passport", "B.Pharm / PharmD Degree", "Pharmacist License", "CV / Resume", "Medical Fitness", "Police Clearance"]
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
    description: "A well-established pharmacy chain across Greater London requires a registered community pharmacist to dispense medications, provide medication use reviews, deliver NHS services, and supervise pharmacy staff in day-to-day operations.",
    qualifications: ["MPharm or B.Pharm Degree", "GPhC Registration (UK)", "Minimum 1 year post-qualification experience", "Knowledge of NHS prescriptions and SOPs"],
    requiredDocuments: ["International Passport", "GPhC Registration", "Pharmacy Degree", "CV / Resume", "Medical Fitness", "Police Clearance"]
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
    description: "A large medical practice in Berlin is recruiting a qualified general practitioner to provide primary care consultations, diagnose and treat acute and chronic illnesses, manage patient records, and refer to specialists where necessary. German language proficiency at B2 level minimum is required.",
    qualifications: ["MBBS / MBChB or equivalent medical degree", "Approbation (German medical license) or eligibility", "Minimum 3 years post-internship experience", "German Language Proficiency: B2 Level minimum"],
    requiredDocuments: ["International Passport", "Medical Degree", "German Approbation Certificate", "B2 Language Certificate", "CV / Resume", "Medical Fitness"]
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
    description: "A premier government hospital in Riyadh is seeking a board-eligible emergency medicine physician to manage acute emergency cases, oversee triage, coordinate trauma responses, and lead ER medical staff in a fast-paced 24/7 environment.",
    qualifications: ["MBBS / MBChB + Emergency Medicine specialization", "SCFHS License (Saudi Commission for Health Specialties) or eligibility", "ATLS / ACLS Certification", "Minimum 4 years emergency medicine experience"],
    requiredDocuments: ["International Passport", "Specialty Certificate", "SCFHS License", "ATLS Certificate", "CV / Resume", "Medical Fitness"]
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
    description: "A state-of-the-art diagnostic laboratory in Singapore is seeking a certified medical laboratory scientist to perform clinical analyses in haematology, microbiology, biochemistry, and immunology, ensuring accuracy, quality control, and timely reporting.",
    qualifications: ["BSc Medical Laboratory Science", "Allied Health Professions Council (AHPC) Registration", "Minimum 2 years laboratory experience", "Proficiency in laboratory management software"],
    requiredDocuments: ["International Passport", "Lab Science Degree", "AHPC Registration", "CV / Resume", "Medical Fitness", "Police Clearance"]
  },
  {
    id: "j9",
    title: "Physiotherapist (Orthopedic & Sports)",
    category: "Medicine & Healthcare",
    role: "Physiotherapist",
    country: "Netherlands",
    flag: "🇳🇱",
    hourlyRate: 30.00,
    experience: "2+ Years",
    deadline: "2025-08-10",
    description: "A sports rehabilitation center in Amsterdam is recruiting an experienced physiotherapist specializing in orthopedic and sports injuries. Responsibilities include assessment, treatment planning, manual therapy, and guiding patients through recovery programs.",
    qualifications: ["BSc / MSc Physiotherapy", "BIG Register (Netherlands) or eligibility for registration", "Minimum 2 years orthopedic/sports physiotherapy experience", "Manual therapy certification preferred"],
    requiredDocuments: ["International Passport", "Physiotherapy Degree", "BIG Registration", "CV / Resume", "Medical Fitness", "Police Clearance"]
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
    description: "A modern diagnostic imaging center in Abu Dhabi is seeking a qualified diagnostic radiographer to operate X-ray, CT, MRI, and ultrasound equipment, produce high-quality diagnostic images, and ensure patient safety and radiation protection compliance.",
    qualifications: ["BSc Radiography / Medical Imaging", "DHA / DOH License (UAE) or eligibility", "Minimum 2 years diagnostic imaging experience", "Radiation protection certification"],
    requiredDocuments: ["International Passport", "Radiography Degree", "DHA License", "Radiation Safety Cert", "CV / Resume", "Medical Fitness"]
  },

  // ENGINEERING
  {
    id: "j11",
    title: "Mechanical Engineer (Manufacturing)",
    category: "Engineering",
    role: "Mechanical Engineering",
    country: "Germany",
    flag: "🇩🇪",
    hourlyRate: 38.00,
    experience: "3+ Years",
    deadline: "2025-08-15",
    description: "A leading automotive manufacturing company in Stuttgart is seeking a skilled mechanical engineer to design, develop, and test mechanical systems and components, oversee production processes, and implement process improvement initiatives.",
    qualifications: ["BSc / BEng Mechanical Engineering", "Professional Engineering certification or eligibility", "Minimum 3 years manufacturing experience", "Proficiency in AutoCAD and SolidWorks"],
    requiredDocuments: ["International Passport", "Engineering Degree", "Professional License", "CV / Resume", "Police Clearance", "Technical Portfolio"]
  },
  {
    id: "j12",
    title: "Electrical Engineer (Power Systems)",
    category: "Engineering",
    role: "Electrical Engineering",
    country: "Canada",
    flag: "🇨🇦",
    hourlyRate: 40.00,
    experience: "3+ Years",
    deadline: "2025-07-22",
    description: "A major utility infrastructure company in Ontario is seeking a qualified electrical engineer to design and maintain high-voltage power distribution systems, conduct load flow analysis, and ensure compliance with electrical safety codes and regulations.",
    qualifications: ["BSc / BEng Electrical Engineering", "P.Eng (Professional Engineer) license or Engineers Canada eligibility", "Minimum 3 years power systems experience", "Knowledge of Canadian Electrical Code (CEC)"],
    requiredDocuments: ["International Passport", "Electrical Degree", "P.Eng License", "CV / Resume", "Police Clearance", "Medical Fitness"]
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
    description: "A prestigious infrastructure development firm in Dubai is recruiting a senior civil engineer to oversee large-scale road, bridge, and drainage projects, manage subcontractors, review engineering drawings, and ensure compliance with UAE construction standards.",
    qualifications: ["BSc / BEng Civil Engineering", "Chartered Engineer (CEng) status or equivalent", "Minimum 4 years infrastructure project experience", "Proficiency in AutoCAD Civil 3D and MS Project"],
    requiredDocuments: ["International Passport", "Civil Degree", "Chartered Status Cert", "CV / Resume", "Police Clearance", "Medical Fitness"]
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
    description: "A major petrochemical refinery in Rotterdam is seeking a chemical process engineer to optimize production processes, conduct process simulations, ensure regulatory compliance, and support plant safety management systems.",
    qualifications: ["BSc / BEng Chemical Engineering", "Process safety management certification", "Minimum 3 years refinery or chemical plant experience", "Proficiency in Aspen HYSYS or equivalent"],
    requiredDocuments: ["International Passport", "Chemical Engineering Degree", "Safety Certification", "CV / Resume", "Police Clearance", "Medical Fitness"]
  },
  {
    id: "j15",
    title: "Petroleum Engineer (Reservoir)",
    category: "Engineering",
    role: "Petroleum Engineering",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    hourlyRate: 58.00,
    experience: "5+ Years",
    deadline: "2025-07-30",
    description: "One of the world's largest oil corporations in Dhahran is seeking an experienced reservoir petroleum engineer to analyze subsurface data, develop reservoir models, recommend production strategies, and maximize hydrocarbon recovery.",
    qualifications: ["BSc / BEng Petroleum Engineering", "Society of Petroleum Engineers (SPE) membership preferred", "Minimum 5 years reservoir engineering experience", "Proficiency in Eclipse, Petrel, or CMG simulation software"],
    requiredDocuments: ["International Passport", "Petroleum Degree", "SPE Membership", "CV / Resume", "Police Clearance", "Medical Fitness"]
  }
  // ... Note: In a real app, all 47 jobs would have this field populated.
  // For the sake of this example, the first 15 are fully mapped.
];
