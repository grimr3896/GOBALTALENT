
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
    description: "A reputable healthcare facility in Toronto is seeking compassionate and skilled general ward nurses to provide high-quality patient care, administer prescribed treatments, and collaborate with multidisciplinary medical teams.",
    qualifications: ["BSc Nursing or Nursing Diploma", "NCLEX-RN Certification", "CRNBC / CNO Provincial License", "Minimum 1 year ward nursing experience"]
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
    qualifications: ["BSc Nursing", "AHPRA Nursing Registration", "Pediatric nursing experience (2+ years)", "Working with Children Check (WWCC)"]
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
    qualifications: ["Bachelor of Pharmacy (B.Pharm) or PharmD", "DHA / MOH Pharmacist License (UAE)", "Minimum 3 years clinical pharmacy experience", "Drug therapy management knowledge"]
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
    qualifications: ["MPharm or B.Pharm Degree", "GPhC Registration (UK)", "Minimum 1 year post-qualification experience", "Knowledge of NHS prescriptions and SOPs"]
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
    qualifications: ["MBBS / MBChB or equivalent medical degree", "Approbation (German medical license) or eligibility", "Minimum 3 years post-internship experience", "German Language Proficiency: B2 Level minimum"]
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
    qualifications: ["MBBS / MBChB + Emergency Medicine specialization", "SCFHS License (Saudi Commission for Health Specialties) or eligibility", "ATLS / ACLS Certification", "Minimum 4 years emergency medicine experience"]
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
    qualifications: ["BSc Medical Laboratory Science", "Allied Health Professions Council (AHPC) Registration", "Minimum 2 years laboratory experience", "Proficiency in laboratory management software"]
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
    qualifications: ["BSc / MSc Physiotherapy", "BIG Register (Netherlands) or eligibility for registration", "Minimum 2 years orthopedic/sports physiotherapy experience", "Manual therapy certification preferred"]
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
    qualifications: ["BSc Radiography / Medical Imaging", "DHA / DOH License (UAE) or eligibility", "Minimum 2 years diagnostic imaging experience", "Radiation protection certification"]
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
    qualifications: ["BSc / BEng Mechanical Engineering", "Professional Engineering certification or eligibility", "Minimum 3 years manufacturing experience", "Proficiency in AutoCAD and SolidWorks"]
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
    qualifications: ["BSc / BEng Electrical Engineering", "P.Eng (Professional Engineer) license or Engineers Canada eligibility", "Minimum 3 years power systems experience", "Knowledge of Canadian Electrical Code (CEC)"]
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
    qualifications: ["BSc / BEng Civil Engineering", "Chartered Engineer (CEng) status or equivalent", "Minimum 4 years infrastructure project experience", "Proficiency in AutoCAD Civil 3D and MS Project"]
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
    qualifications: ["BSc / BEng Chemical Engineering", "Process safety management certification", "Minimum 3 years refinery or chemical plant experience", "Proficiency in Aspen HYSYS or equivalent"]
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
    qualifications: ["BSc / BEng Petroleum Engineering", "Society of Petroleum Engineers (SPE) membership preferred", "Minimum 5 years reservoir engineering experience", "Proficiency in Eclipse, Petrel, or CMG simulation software"]
  },

  // CONSTRUCTION
  {
    id: "j16",
    title: "General Construction Worker",
    category: "Construction",
    role: "Construction Worker (General)",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    hourlyRate: 9.50,
    experience: "1+ Years",
    deadline: "2025-06-30",
    description: "A large-scale construction company in Dubai is recruiting general construction workers to assist with site preparation, material handling, scaffolding, and general labor duties under the supervision of site engineers and foremen.",
    qualifications: ["Secondary school certificate", "OSHA 10 or equivalent site safety training", "Physical fitness certificate", "Minimum 1 year on-site experience"]
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
    description: "A reputable construction contractor in Birmingham is seeking experienced bricklayers and masons to work on residential and commercial building projects. Duties include laying bricks, blocks, and mortar to construct walls, partitions, and structures.",
    qualifications: ["Vocational training certificate in masonry / bricklaying", "CSCS Card (UK Construction Skills Certification Scheme)", "Minimum 2 years bricklaying experience", "Construction site safety certification"]
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
    description: "A residential construction company in Vancouver is hiring experienced finish carpenters to install doors, windows, cabinets, trim, flooring, and other finish elements on new residential builds and renovation projects.",
    qualifications: ["Trade certificate in carpentry", "Red Seal Certification preferred (or foreign equivalent)", "Minimum 2 years finish carpentry experience", "Working knowledge of building codes"]
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
    description: "A structural steel fabrication company in Melbourne is seeking a certified structural welder to fabricate and weld steel components for commercial and industrial construction projects, ensuring welds meet engineering specifications and quality standards.",
    qualifications: ["Welding certification (AWS D1.1 or AS/NZS 2980)", "Trade certificate in welding", "Minimum 2 years structural welding experience", "Confined space entry certification preferred"]
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
    description: "A building services contractor in Singapore is recruiting licensed plumbers to install, repair, and maintain piping systems, sanitary fixtures, water heaters, and drainage systems in commercial and residential developments.",
    qualifications: ["Plumbing trade certificate / license", "Singapore Plumber License (PUB) or eligibility", "Minimum 2 years plumbing experience", "Knowledge of local plumbing codes and standards"]
  },
  {
    id: "j21",
    title: "Construction Site Supervisor",
    category: "Construction",
    role: "Site Supervisor",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    hourlyRate: 28.00,
    experience: "5+ Years",
    deadline: "2025-08-10",
    description: "A major construction group in Riyadh is seeking an experienced site supervisor to manage daily site operations, coordinate subcontractors, enforce health and safety standards, monitor project timelines, and liaise with project managers and engineers.",
    qualifications: ["Diploma or Degree in Construction Management or Civil Engineering", "OSHA 30 Construction Certification", "Minimum 5 years construction supervision experience", "Proficiency in MS Project or Primavera"]
  },

  // IT
  {
    id: "j22",
    title: "Full-Stack Software Engineer",
    category: "Information Technology",
    role: "Software Engineering",
    country: "Germany",
    flag: "🇩🇪",
    hourlyRate: 45.00,
    experience: "3+ Years",
    deadline: "2025-08-25",
    description: "A Berlin-based technology company is seeking a skilled full-stack software engineer to design and develop scalable web applications, write clean and maintainable code, participate in agile sprints, and mentor junior developers.",
    qualifications: ["BSc Computer Science or Software Engineering", "Minimum 3 years full-stack development experience", "Proficiency in React.js, Node.js, and PostgreSQL", "Experience with cloud platforms (AWS, Azure, or GCP)", "Portfolio of deployed projects required"]
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
    description: "A financial services firm in London is recruiting a cybersecurity analyst to monitor security systems, conduct vulnerability assessments, respond to security incidents, and develop security policies and awareness programs.",
    qualifications: ["BSc Cybersecurity, IT, or Computer Science", "CISSP, CEH, or CompTIA Security+ Certification", "Minimum 3 years cybersecurity experience", "Experience with SIEM tools (Splunk, IBM QRadar)"]
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
    description: "A leading telecommunications company in Singapore requires a network engineer to design, implement, and maintain LAN/WAN infrastructure, configure routers and switches, troubleshoot network issues, and ensure high availability of critical systems.",
    qualifications: ["BSc IT / Networking or Computer Science", "CCNA / CCNP Certification (Cisco)", "Minimum 2 years enterprise network experience", "Familiarity with SD-WAN and network automation"]
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
    description: "An e-commerce company in Amsterdam is seeking a data analyst to collect, process, and analyse large datasets, build dashboards and reports using BI tools, identify trends, and provide actionable insights to support business decision-making.",
    qualifications: ["BSc Statistics, Data Science, Mathematics, or IT", "Proficiency in SQL, Python, and Excel", "Experience with Power BI or Tableau", "Minimum 2 years professional data analysis experience"]
  },

  // EDUCATION
  {
    id: "j26",
    title: "Primary School Teacher (Year 3–6)",
    category: "Education & Teaching",
    role: "Primary School Teacher",
    country: "United Kingdom",
    flag: "🇬🇧",
    hourlyRate: 22.00,
    experience: "1+ Years",
    deadline: "2025-07-01",
    description: "A well-regarded primary school in Manchester is seeking a qualified primary teacher to deliver engaging lessons aligned with the national curriculum, assess student progress, manage classroom behaviour, and communicate effectively with parents and guardians.",
    qualifications: ["Bachelor of Education (B.Ed) or equivalent", "Qualified Teacher Status (QTS) or PGCE", "Minimum 1 year primary teaching experience", "DBS (Disclosure and Barring Service) clearance"]
  },
  {
    id: "j27",
    title: "Secondary School Mathematics Teacher",
    category: "Education & Teaching",
    role: "Secondary School Teacher",
    country: "Australia",
    flag: "🇦🇺",
    hourlyRate: 24.50,
    experience: "2+ Years",
    deadline: "2025-07-25",
    description: "A high school in Queensland is recruiting a qualified mathematics teacher to teach Years 7–12, develop curriculum-aligned lesson plans, prepare students for external examinations, and contribute to the school's extracurricular mathematics programs.",
    qualifications: ["B.Ed in Mathematics or Bachelor's in Mathematics + PGCE", "AITSL Teacher Registration (or state equivalent)", "Minimum 2 years secondary mathematics teaching experience", "Working with Children Check (WWCC)"]
  },
  {
    id: "j28",
    title: "Special Educational Needs (SEN) Teacher",
    category: "Education & Teaching",
    role: "Special Needs Educator",
    country: "Canada",
    flag: "🇨🇦",
    hourlyRate: 26.00,
    experience: "2+ Years",
    deadline: "2025-08-18",
    description: "A specialized educational institution in Ontario is recruiting a dedicated SEN teacher to develop individualized education plans (IEPs), implement differentiated instructional strategies, and support students with a range of learning disabilities and developmental needs.",
    qualifications: ["Degree in Special Education or B.Ed with SEN specialization", "SEN / SPED teaching certification", "Minimum 2 years SEN teaching experience", "Crisis intervention and behaviour support training preferred"]
  },
  {
    id: "j29",
    title: "University Lecturer (Business & Management)",
    category: "Education & Teaching",
    role: "University Lecturer",
    country: "Germany",
    flag: "🇩🇪",
    hourlyRate: 48.00,
    experience: "4+ Years",
    deadline: "2025-08-22",
    description: "A leading public university in Hamburg is seeking a qualified lecturer in Business and Management to deliver undergraduate and postgraduate lectures, supervise student research projects, publish academic papers, and contribute to departmental committees.",
    qualifications: ["Master's Degree in Business, Management, or related field (PhD preferred)", "Minimum 4 years lecturing or corporate experience", "Published research or academic record preferred", "German or English language proficiency (B2 minimum)"]
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
    description: "A five-star hotel in Abu Dhabi is seeking a creative and experienced executive chef to lead a large kitchen brigade, design seasonal menus, maintain the highest food quality standards, manage food costs, and ensure full compliance with health and hygiene regulations.",
    qualifications: ["Culinary Arts Degree or Diploma", "Minimum 5 years executive/head chef experience", "ServSafe Food Manager Certification or equivalent", "Demonstrated expertise in international cuisine"]
  },
  {
    id: "j31",
    title: "Hotel Operations Manager",
    category: "Hospitality & Tourism",
    role: "Hotel Manager",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    hourlyRate: 38.00,
    experience: "5+ Years",
    deadline: "2025-08-05",
    description: "A luxury resort in Jeddah is seeking a highly experienced hotel operations manager to oversee all hotel departments, ensure exceptional guest satisfaction, manage budgets, train department heads, and uphold brand standards.",
    qualifications: ["Degree in Hospitality Management or equivalent", "Minimum 5 years hotel management experience (4-star or above)", "Strong leadership and financial management skills", "Proficiency in hotel management software (Opera, Fidelio)"]
  },
  {
    id: "j32",
    title: "Restaurant Server (Fine Dining)",
    category: "Hospitality & Tourism",
    role: "Waiter / Waitress",
    country: "Netherlands",
    flag: "🇳🇱",
    hourlyRate: 14.50,
    experience: "1+ Years",
    deadline: "2025-06-28",
    description: "An upscale fine dining restaurant in Amsterdam is hiring polished and professional restaurant servers to deliver world-class table service, advise guests on menu selections and wine pairings, and maintain the highest standards of hospitality.",
    qualifications: ["Secondary school certificate minimum", "Food handling certification", "Minimum 1 year fine dining or restaurant experience", "Fluency in English; Dutch or French an advantage"]
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
    description: "A prominent tourism operator in Sydney is hiring experienced tour guides to lead domestic and international visitors on cultural, historical, and adventure tours. Must be engaging, knowledgeable, and able to manage groups of varying sizes.",
    qualifications: ["Diploma in Tourism and Hospitality or equivalent", "Tourism Australia Guide Certification or equivalent", "Minimum 2 years professional tour guiding experience", "First Aid Certificate"]
  },

  // AGRICULTURE
  {
    id: "j34",
    title: "Agricultural Farm Worker",
    category: "Agriculture",
    role: "Farm Worker",
    country: "Australia",
    flag: "🇦🇺",
    hourlyRate: 13.00,
    experience: "0–1 Years",
    deadline: "2025-07-10",
    description: "Fruit and vegetable farms across regional Victoria and Queensland are seeking farm workers for crop planting, harvesting, packing, and general farm maintenance. No prior formal qualifications required — on-the-job training provided.",
    qualifications: ["Primary / Secondary school education", "Physical fitness certificate", "Basic agricultural training (preferred)", "Ability to work outdoors in varying conditions"]
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
    description: "A large agribusiness corporation in Saskatchewan is seeking a qualified agronomist to advise on soil management, crop production, pest control, and sustainable farming practices, and to conduct field research to optimize crop yields.",
    qualifications: ["BSc Agronomy or Agriculture", "Professional Agrologist (PAg) designation or eligibility", "Minimum 3 years agronomy field experience", "Knowledge of precision agriculture technologies"]
  },

  // TRANSPORTATION
  {
    id: "j36",
    title: "Long-Haul Truck Driver",
    category: "Transportation & Logistics",
    role: "Truck Driver",
    country: "Canada",
    flag: "🇨🇦",
    hourlyRate: 21.00,
    experience: "2+ Years",
    deadline: "2025-07-18",
    description: "A national freight logistics company based in Alberta is seeking experienced long-haul truck drivers to transport commercial goods across provincial and international routes. Drivers must comply with all transport regulations and maintain accurate logbooks.",
    qualifications: ["Valid Class 1 / Commercial Driver's License (CDL equivalent)", "Defensive driving certificate", "Clean driving record (abstract required)", "Minimum 2 years long-haul driving experience"]
  },
  {
    id: "j37",
    title: "Forklift Operator (Warehouse)",
    category: "Transportation & Logistics",
    role: "Forklift Operator",
    country: "United Kingdom",
    flag: "🇬🇧",
    hourlyRate: 16.50,
    experience: "1+ Years",
    deadline: "2025-07-05",
    description: "A major distribution and logistics company in the West Midlands is recruiting certified forklift operators to load and unload freight, move goods within the warehouse, conduct vehicle safety checks, and maintain accurate inventory records.",
    qualifications: ["Forklift operation certificate (RTITB or ITSSAR equivalent)", "Minimum 1 year warehouse forklift experience", "Physical fitness certificate", "Good numeracy and literacy skills"]
  },
  {
    id: "j38",
    title: "Logistics & Supply Chain Coordinator",
    category: "Transportation & Logistics",
    role: "Logistics Coordinator",
    country: "Singapore",
    flag: "🇸🇬",
    hourlyRate: 25.00,
    experience: "2+ Years",
    deadline: "2025-08-01",
    description: "A global freight forwarding company in Singapore requires a logistics coordinator to manage end-to-end shipment operations, coordinate with carriers and customs agents, monitor delivery schedules, and optimize supply chain efficiency.",
    qualifications: ["Diploma or Degree in Supply Chain Management, Logistics, or Business", "Minimum 2 years logistics coordination experience", "Proficiency in ERP / SAP or freight management systems", "Knowledge of incoterms and customs regulations"]
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
    description: "A mid-sized accounting firm in London is recruiting a chartered accountant to manage client accounts, prepare financial statements and tax returns, conduct audits, and provide strategic financial advisory services to corporate clients.",
    qualifications: ["BSc Accounting or Finance", "ACA / ACCA / CIMA Qualification (full or part)", "Minimum 3 years accounting or auditing experience", "Proficiency in Xero, Sage, or QuickBooks"]
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
    description: "A Frankfurt-based investment firm is seeking a financial analyst to evaluate investment opportunities, build financial models, prepare reports and forecasts, monitor portfolio performance, and provide actionable recommendations to senior management.",
    qualifications: ["BSc Finance, Economics, or Accounting", "CFA Level I or above (preferred)", "Minimum 3 years financial analysis experience", "Advanced Excel and financial modelling skills"]
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
    description: "A Big Four affiliate audit firm in Dubai is seeking an experienced external auditor to plan and execute audit engagements, assess internal controls, verify financial statements, prepare audit reports, and ensure compliance with IFRS and local regulatory standards.",
    qualifications: ["BSc Accounting or Finance", "CIA / CPA / ACCA Qualification", "Minimum 3 years external auditing experience", "Knowledge of IFRS and ISA standards"]
  },

  // SECURITY
  {
    id: "j42",
    title: "Security Officer (Commercial Premises)",
    category: "Security & Law Enforcement",
    role: "Security Guard",
    country: "United Kingdom",
    flag: "🇬🇧",
    hourlyRate: 14.00,
    experience: "1+ Years",
    deadline: "2025-07-05",
    description: "A national security services company in London is recruiting licensed security officers to protect commercial properties, monitor CCTV systems, control access, conduct patrols, and respond to incidents and emergencies.",
    qualifications: ["SIA Door Supervisor or Security Guard License (UK)", "Minimum 1 year security experience", "Physical fitness certificate", "First Aid certificate preferred"]
  },
  {
    id: "j43",
    title: "Close Protection Officer (CPO / Bodyguard)",
    category: "Security & Law Enforcement",
    role: "Close Protection Officer",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    hourlyRate: 30.00,
    experience: "3+ Years",
    deadline: "2025-07-28",
    description: "A private security firm in Dubai is seeking experienced and highly professional close protection officers to provide personal security detail for high-net-worth individuals, conduct advance reconnaissance, manage threat assessments, and coordinate with local law enforcement.",
    qualifications: ["Military or law enforcement background preferred", "Internationally recognized Close Protection certification", "First Aid / Tactical First Aid certification", "Minimum 3 years CPO or protective services experience", "Background clearance from home country authorities"]
  },

  // DOMESTIC
  {
    id: "j44",
    title: "Household Housekeeper",
    category: "Domestic Work",
    role: "Housekeeper / Domestic Worker",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    hourlyRate: 8.50,
    experience: "1+ Years",
    deadline: "2025-06-25",
    description: "A private family residence in Riyadh is seeking a reliable and experienced housekeeper to perform daily cleaning, laundry, ironing, and general household maintenance duties, while maintaining the highest standards of privacy and professionalism.",
    qualifications: ["Secondary school certificate", "Minimum 1 year domestic work experience", "Reference letter from previous employer", "Ability to follow instructions in English or Arabic"]
  },
  {
    id: "j45",
    title: "Nanny / Childcare Worker",
    category: "Domestic Work",
    role: "Nanny / Childcare Worker",
    country: "United Kingdom",
    flag: "🇬🇧",
    hourlyRate: 15.00,
    experience: "2+ Years",
    deadline: "2025-07-10",
    description: "A professional family in Greater London is seeking a warm, responsible, and experienced nanny to provide full-time childcare for children aged 1–8 years, assist with school routines, organize activities, prepare light meals, and maintain a safe, nurturing environment.",
    qualifications: ["Childcare certificate or CACHE Level 3 Diploma", "Paediatric First Aid certification", "Minimum 2 years professional nanny / childcare experience", "Enhanced DBS check or equivalent home country clearance", "References from minimum 2 previous families"]
  },

  // OIL & GAS
  {
    id: "j46",
    title: "Drilling Rig Operator",
    category: "Oil & Gas",
    role: "Rig Operator",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    hourlyRate: 48.00,
    experience: "4+ Years",
    deadline: "2025-07-20",
    description: "A major oil exploration company in the Eastern Province of Saudi Arabia is recruiting experienced drilling rig operators to oversee drilling operations, monitor wellbore conditions, operate rig equipment, and ensure adherence to all HSE protocols during onshore and offshore operations.",
    qualifications: ["Technical diploma or certificate in petroleum / drilling operations", "IADC Rig Pass or equivalent certification", "BOSIET / HUET certification (for offshore roles)", "Minimum 4 years rig operations experience", "Offshore Medical Certificate (OGUK or equivalent)"]
  },
  {
    id: "j47",
    title: "Health, Safety & Environment (HSE) Officer",
    category: "Oil & Gas",
    role: "HSE Officer",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    hourlyRate: 38.00,
    experience: "3+ Years",
    deadline: "2025-08-10",
    description: "A leading oil and gas services company in Abu Dhabi is seeking a qualified HSE officer to implement and monitor health, safety, and environmental management systems, conduct risk assessments, investigate incidents, deliver safety training, and ensure compliance with UAE regulatory and international standards.",
    qualifications: ["BSc in Environmental Science, Safety, or Engineering", "NEBOSH International General Certificate (minimum)", "IOSH Managing Safely certification", "Minimum 3 years HSE experience in oil & gas or heavy industry", "Incident investigation and root cause analysis experience"]
  }
];
