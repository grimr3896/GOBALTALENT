
'use client';

import { useState, useMemo, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  ShieldCheck, 
  User, 
  Briefcase, 
  Globe, 
  FileUp, 
  CheckSquare, 
  Loader2, 
  FileText, 
  Trash2, 
  UploadCloud,
  CheckCircle2,
  Info,
  AlertTriangle
} from 'lucide-react';
import { COUNTRIES, CATEGORIES, CATEGORY_ROLES, MOCK_JOBS } from '@/app/lib/data';
import { useToast } from '@/hooks/use-toast';
import { useRouter, useSearchParams } from 'next/navigation';
import { Progress } from '@/components/ui/progress';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// --- Document Definitions ---

interface DocDef {
  code: string;
  label: string;
  isCompulsory: boolean;
  formats: string[];
  maxSizeMB: number;
  tooltip: string;
}

const BASE_DOCUMENTS: DocDef[] = [
  { code: 'DOC-B01', label: 'Valid International Passport', isCompulsory: true, formats: ['PDF', 'JPG', 'PNG'], maxSizeMB: 5, tooltip: 'Must be valid for at least 6 months from date of application.' },
  { code: 'DOC-B02', label: 'National Identity Card', isCompulsory: true, formats: ['PDF', 'JPG', 'PNG'], maxSizeMB: 3, tooltip: 'Front and back scan required.' },
  { code: 'DOC-B03', label: 'Birth Certificate', isCompulsory: true, formats: ['PDF', 'JPG', 'PNG'], maxSizeMB: 3, tooltip: 'Official government-issued document.' },
  { code: 'DOC-B04', label: 'Updated Curriculum Vitae (CV)', isCompulsory: true, formats: ['PDF', 'DOCX'], maxSizeMB: 5, tooltip: 'Must reflect current employment and education history.' },
  { code: 'DOC-B05', label: 'Passport-Size Photograph', isCompulsory: true, formats: ['JPG', 'PNG'], maxSizeMB: 2, tooltip: 'Recent (within 6 months), white background, facing forward.' },
  { code: 'DOC-B06', label: 'Police Clearance Certificate', isCompulsory: true, formats: ['PDF', 'JPG', 'PNG'], maxSizeMB: 5, tooltip: 'Must be issued within the last 6 months.' },
  { code: 'DOC-B07', label: 'Medical Fitness Report', isCompulsory: true, formats: ['PDF', 'JPG', 'PNG'], maxSizeMB: 5, tooltip: 'Must be issued by a certified/licensed medical facility.' },
];

const ROLE_DOCUMENTS: Record<string, Record<string, DocDef[]>> = {
  "Medicine & Healthcare": {
    "Nursing": [
      { code: 'DOC-MH01', label: 'Nursing Degree (BSc / Diploma)', isCompulsory: true, formats: ['PDF'], maxSizeMB: 5, tooltip: 'Certified copy of your nursing qualification.' },
      { code: 'DOC-MH02', label: 'Nursing License / Registration', isCompulsory: true, formats: ['PDF'], maxSizeMB: 5, tooltip: 'Active practice license from home country board.' },
      { code: 'DOC-MH03', label: 'BLS / ACLS Certification', isCompulsory: true, formats: ['PDF'], maxSizeMB: 3, tooltip: 'Basic/Advanced Life Support certification.' },
    ],
    "Pharmacy": [
      { code: 'DOC-MH06', label: 'B.Pharm / PharmD Degree', isCompulsory: true, formats: ['PDF'], maxSizeMB: 5, tooltip: 'Official pharmacy degree certificate.' },
      { code: 'DOC-MH07', label: 'Pharmacist License', isCompulsory: true, formats: ['PDF'], maxSizeMB: 5, tooltip: 'Home country pharmacist registration.' },
    ]
  },
  "Engineering": {
    "Mechanical Engineering": [
      { code: 'DOC-EN01', label: 'Mechanical Engineering Degree', isCompulsory: true, formats: ['PDF'], maxSizeMB: 5, tooltip: 'BSc or BEng certificate.' },
      { code: 'DOC-EN02', label: 'Professional Eng. License', isCompulsory: true, formats: ['PDF'], maxSizeMB: 5, tooltip: 'Registration with engineering board.' },
    ],
    "Software Engineering": [
      { code: 'DOC-EN16', label: 'CS / Software Eng. Degree', isCompulsory: true, formats: ['PDF'], maxSizeMB: 5, tooltip: 'Computer Science degree certificate.' },
      { code: 'DOC-EN17', label: 'GitHub / Project Portfolio', isCompulsory: true, formats: ['PDF', 'DOCX'], maxSizeMB: 2, tooltip: 'Document containing links to your work.' },
    ]
  },
  "Construction": {
    "Construction Worker (General)": [
      { code: 'DOC-CO01', label: 'Secondary School Certificate', isCompulsory: true, formats: ['PDF'], maxSizeMB: 3, tooltip: 'Highest school level completed.' },
      { code: 'DOC-CO02', label: 'OSHA 10 / Site Safety Cert', isCompulsory: true, formats: ['PDF'], maxSizeMB: 3, tooltip: 'Construction safety training certificate.' },
    ]
  }
};

const COUNTRY_DOCUMENTS: Record<string, DocDef[]> = {
  "Saudi Arabia": [
    { code: 'DOC-C01', label: 'Saudi-Approved Medical Report', isCompulsory: true, formats: ['PDF'], maxSizeMB: 5, tooltip: 'Report from GAMCA/Saudi-approved clinic.' },
    { code: 'DOC-C02', label: 'Attested Education Certificates', isCompulsory: true, formats: ['PDF'], maxSizeMB: 5, tooltip: 'Certificates attested by MOFA and Saudi Embassy.' },
  ],
  "United Arab Emirates": [
    { code: 'DOC-C05', label: 'UAE Medical Fitness (MOH)', isCompulsory: true, formats: ['PDF'], maxSizeMB: 5, tooltip: 'Medical report from MOH clinic.' },
    { code: 'DOC-C06', label: 'Attested Certificates (UAE)', isCompulsory: true, formats: ['PDF'], maxSizeMB: 5, tooltip: 'Certificates attested by MOFA and UAE Embassy.' },
  ],
  "United Kingdom": [
    { code: 'DOC-C08', label: 'IELTS / English Cert (B1+)', isCompulsory: true, formats: ['PDF'], maxSizeMB: 3, tooltip: 'IELTS Academic or General (minimum B1).' },
    { code: 'DOC-C09', label: 'Tuberculosis (TB) Certificate', isCompulsory: true, formats: ['PDF'], maxSizeMB: 3, tooltip: 'TB test from approved clinic.' },
  ],
  "Canada": [
    { code: 'DOC-C14', label: 'Language Test (IELTS/CELPIP)', isCompulsory: true, formats: ['PDF'], maxSizeMB: 3, tooltip: 'Valid language test results.' },
    { code: 'DOC-C15', label: 'WES / ECA Assessment', isCompulsory: true, formats: ['PDF'], maxSizeMB: 5, tooltip: 'Educational Credential Assessment.' },
  ],
  "Luxembourg": [
    { code: 'DOC-LU01', label: 'Credential Recognition (Lux)', isCompulsory: true, formats: ['PDF'], maxSizeMB: 5, tooltip: 'Recognition by Luxembourg Ministry of Education.' },
    { code: 'DOC-LU02', label: 'Language Certificate (French/German)', isCompulsory: true, formats: ['PDF'], maxSizeMB: 3, tooltip: 'Proof of proficiency (B1+) for relevant roles.' },
  ],
  "Switzerland": [
    { code: 'DOC-CH01', label: 'Swiss SERI Recognition', isCompulsory: true, formats: ['PDF'], maxSizeMB: 5, tooltip: 'Credential recognition by Swiss SERI authority.' },
    { code: 'DOC-CH05', label: 'Criminal Record Extract', isCompulsory: true, formats: ['PDF'], maxSizeMB: 3, tooltip: 'Official Strafregisterauszug.' },
  ],
  "Sweden": [
    { code: 'DOC-SE01', label: 'Swedish Language Certificate', isCompulsory: true, formats: ['PDF'], maxSizeMB: 3, tooltip: 'Proof of proficiency (B2 minimum).' },
    { code: 'DOC-SE02', label: 'UHR Credential Evaluation', isCompulsory: true, formats: ['PDF'], maxSizeMB: 5, tooltip: 'Evaluation by Swedish Council for Higher Education.' },
  ],
  "Poland": [
    { code: 'DOC-PL01', label: 'Polish Language Certificate', isCompulsory: true, formats: ['PDF'], maxSizeMB: 3, tooltip: 'Proof of proficiency (B1 minimum).' },
    { code: 'DOC-PL02', label: 'NAWA Credential Nostrification', isCompulsory: true, formats: ['PDF'], maxSizeMB: 5, tooltip: 'Nostrification for non-EU degrees.' },
  ],
};

export default function ApplyFormContent() {
  const searchParams = useSearchParams();
  const initialJobId = searchParams.get('jobId');
  const initialJob = MOCK_JOBS.find(j => j.id === initialJobId);

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    nationality: '',
    address: '',
    education: '',
    field: '',
    experience: '',
    status: '',
    skills: '',
    category: initialJob?.category || '',
    role: initialJob?.role || '',
    country: initialJob?.country || '',
    availability: '',
  });

  const [uploadedFiles, setUploadedFiles] = useState<Record<string, { name: string; size: number; code: string; label: string }>>({});

  const { toast } = useToast();
  const router = useRouter();

  // --- Dynamic Document Requirements ---
  const docRequirements = useMemo(() => {
    const roleDocs = (formData.category && formData.role) 
      ? (ROLE_DOCUMENTS[formData.category]?.[formData.role] || []) 
      : [];
    const countryDocs = formData.country ? (COUNTRY_DOCUMENTS[formData.country] || []) : [];

    return {
      base: BASE_DOCUMENTS,
      role: roleDocs,
      country: countryDocs,
      all: [...BASE_DOCUMENTS, ...roleDocs, ...countryDocs]
    };
  }, [formData.category, formData.role, formData.country]);

  const stats = useMemo(() => {
    const compulsoryDocs = docRequirements.all.filter(d => d.isCompulsory);
    const uploadedCount = compulsoryDocs.filter(d => !!uploadedFiles[d.code]).length;
    const isComplete = uploadedCount === compulsoryDocs.length;
    return { 
      totalRequired: compulsoryDocs.length, 
      uploadedCount, 
      isComplete,
      percentage: Math.round((uploadedCount / compulsoryDocs.length) * 100)
    };
  }, [docRequirements.all, uploadedFiles]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (doc: DocDef, file: File) => {
    // Type Check
    const ext = file.name.split('.').pop()?.toUpperCase() || '';
    if (!doc.formats.includes(ext)) {
      toast({ variant: 'destructive', title: "Invalid File Type", description: `Accepted formats: ${doc.formats.join(', ')}` });
      return;
    }

    // Size Check
    if (file.size > doc.maxSizeMB * 1024 * 1024) {
      toast({ variant: 'destructive', title: "File Too Large", description: `Maximum allowed size is ${doc.maxSizeMB}MB.` });
      return;
    }

    setUploadedFiles(prev => ({
      ...prev,
      [doc.code]: { name: file.name, size: file.size, code: doc.code, label: doc.label }
    }));

    toast({ title: "Document Prepared", description: `${doc.label} is ready for submission.` });
  };

  const removeFile = (code: string) => {
    setUploadedFiles(prev => {
      const next = { ...prev };
      delete next[code];
      return next;
    });
  };

  const nextStep = () => {
    if (step === 4 && !stats.isComplete) {
      toast({
        variant: 'destructive',
        title: "Compulsory Documents Missing",
        description: "Please upload all required 🔴 documents to proceed to the final declaration."
      });
      return;
    }
    setStep(prev => Math.min(prev + 1, 5));
  };

  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fileListStr = Object.values(uploadedFiles)
      .map(f => `[${f.code}] ${f.label}: ${f.name}`)
      .join('\n');
    
    const subject = encodeURIComponent(`GT OFFICIAL APPLICATION: ${formData.fullName} - ${formData.role}`);
    
    const body = encodeURIComponent(
      `GLOBAL TALENT INTERNATIONAL CAREERS PORTAL\n` +
      `OFFICIAL SUBMISSION MANIFEST\n` +
      `-------------------------------------------\n\n` +
      `PERSONAL DETAILS:\n` +
      `Full Name: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Nationality: ${formData.nationality}\n` +
      `Highest Education: ${formData.education}\n\n` +
      `JOB CHOICE:\n` +
      `Destination: ${formData.country}\n` +
      `Role: ${formData.role} (Category: ${formData.category})\n\n` +
      `DIGITALLY PREPARED DOCUMENTS CHECKLIST:\n` +
      `${fileListStr}\n\n` +
      `-------------------------------------------\n` +
      `INSTRUCTIONS TO APPLICANT:\n` +
      `1. Your email client has been opened with this manifest.\n` +
      `2. You MUST now manually attach the ${Object.keys(uploadedFiles).length} files listed above from your device.\n` +
      `3. Click 'Send' once all files are attached.\n\n` +
      `CONFIRMATION:\n` +
      `I, ${formData.fullName}, confirm that all information and attached documents are authentic.`
    );

    const mailtoUrl = `mailto:globalcareers0@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      window.location.href = mailtoUrl;
      toast({ 
        title: "Manifest Generated", 
        description: "Email client opened. PLEASE ATTACH YOUR FILES and click 'Send'." 
      });
    }, 1500);
  };

  const roles = useMemo(() => {
    return formData.category ? CATEGORY_ROLES[formData.category] : [];
  }, [formData.category]);

  const steps = [
    { icon: User, label: 'Personal' },
    { icon: Briefcase, label: 'Professional' },
    { icon: Globe, label: 'Job Choice' },
    { icon: FileUp, label: 'Documents' },
    { icon: CheckSquare, label: 'Finalize' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Progress Header */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6 overflow-x-auto pb-4 md:pb-0">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center flex-1 min-w-[80px] relative">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-300 ${
                  step > i + 1 ? 'bg-secondary text-primary' : 
                  step === i + 1 ? 'bg-primary text-secondary ring-8 ring-secondary/20' : 
                  'bg-white text-gray-400 border border-gray-200'
                }`}>
                  <s.icon className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest mt-3 whitespace-nowrap ${step >= i + 1 ? 'text-primary' : 'text-gray-400'}`}>
                  {s.label}
                </span>
                {i < steps.length - 1 && (
                  <div className={`absolute top-6 left-1/2 w-full h-[2px] -z-0 ${step > i + 1 ? 'bg-secondary' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white border border-gray-200 shadow-2xl official-seal-bg overflow-hidden rounded-sm">
              <div className="bg-primary text-white p-6 flex justify-between items-center border-b-2 border-secondary">
                <h2 className="text-xl font-headline font-bold uppercase tracking-widest">
                  Step {step}: {steps[step-1].label}
                </h2>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 opacity-60">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="text-[10px] font-bold uppercase">Compliance Secure</span>
                  </div>
                </div>
              </div>

              <div className="p-10">
                {step === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-500">Full Name *</label>
                      <Input name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="As per Passport" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-500">Date of Birth *</label>
                      <Input name="dob" type="date" value={formData.dob} onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-500">Nationality *</label>
                      <Select value={formData.nationality} onValueChange={(val) => handleSelectChange('nationality', val)}>
                        <SelectTrigger><SelectValue placeholder="Select Nationality" /></SelectTrigger>
                        <SelectContent>
                          {COUNTRIES.map(c => <SelectItem key={c.code} value={c.name}>{c.name}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-500">Email Address *</label>
                      <Input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="example@domain.com" required />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-500">Highest Education *</label>
                      <Select value={formData.education} onValueChange={(val) => handleSelectChange('education', val)}>
                        <SelectTrigger><SelectValue placeholder="Select Level" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="diploma">Diploma</SelectItem>
                          <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                          <SelectItem value="master">Master's Degree</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-xs font-bold uppercase text-gray-500">Skills Summary *</label>
                      <Textarea name="skills" value={formData.skills} onChange={handleInputChange} placeholder="Detail your core competencies..." required />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-500">Destination Country *</label>
                      <Select value={formData.country} onValueChange={(val) => handleSelectChange('country', val)}>
                        <SelectTrigger><SelectValue placeholder="Select Country" /></SelectTrigger>
                        <SelectContent>
                          {COUNTRIES.map(c => <SelectItem key={c.code} value={c.name}>{c.flag} {c.name}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-500">Industry Category *</label>
                      <Select value={formData.category} onValueChange={(val) => setFormData(prev => ({ ...prev, category: val, role: '' }))}>
                        <SelectTrigger><SelectValue placeholder="Select Industry" /></SelectTrigger>
                        <SelectContent>
                          {CATEGORIES.map(cat => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-500">Specific Role *</label>
                      <Select value={formData.role} onValueChange={(val) => handleSelectChange('role', val)} disabled={!formData.category}>
                        <SelectTrigger><SelectValue placeholder={formData.category ? "Select Role" : "Select Category First"} /></SelectTrigger>
                        <SelectContent>
                          {roles.map(role => <SelectItem key={role} value={role}>{role}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-12">
                    <TooltipProvider>
                      {/* A: Base Documents */}
                      <div>
                        <div className="flex items-center gap-3 border-b-2 border-gray-100 pb-2 mb-6">
                          <h3 className="text-sm font-bold uppercase tracking-widest text-primary">A. Base Documents (Compulsory)</h3>
                          <Badge variant="outline" className="text-[10px] uppercase font-bold text-red-600 border-red-200">7 Required</Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {docRequirements.base.map((doc) => (
                            <UploadCard key={doc.code} doc={doc} uploadedFile={uploadedFiles[doc.code]} onUpload={(file) => handleFileUpload(doc, file)} onRemove={() => removeFile(doc.code)} />
                          ))}
                        </div>
                      </div>

                      {/* B: Role-Specific Documents */}
                      {docRequirements.role.length > 0 && (
                        <div>
                          <div className="flex items-center gap-3 border-b-2 border-gray-100 pb-2 mb-6">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-primary">B. {formData.role} Requirements</h3>
                            <Badge variant="outline" className="text-[10px] uppercase font-bold text-secondary border-secondary/30">{docRequirements.role.length} Items</Badge>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {docRequirements.role.map((doc) => (
                              <UploadCard key={doc.code} doc={doc} uploadedFile={uploadedFiles[doc.code]} onUpload={(file) => handleFileUpload(doc, file)} onRemove={() => removeFile(doc.code)} />
                            ))}
                          </div>
                        </div>
                      )}

                      {/* C: Country Requirements */}
                      {docRequirements.country.length > 0 && (
                        <div>
                          <div className="flex items-center gap-3 border-b-2 border-gray-100 pb-2 mb-6">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-primary">C. {formData.country} Compliance</h3>
                            <Badge variant="outline" className="text-[10px] uppercase font-bold text-blue-600 border-blue-200">{docRequirements.country.length} Items</Badge>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {docRequirements.country.map((doc) => (
                              <UploadCard key={doc.code} doc={doc} uploadedFile={uploadedFiles[doc.code]} onUpload={(file) => handleFileUpload(doc, file)} onRemove={() => removeFile(doc.code)} />
                            ))}
                          </div>
                        </div>
                      )}
                    </TooltipProvider>
                  </div>
                )}

                {step === 5 && (
                  <div className="space-y-8 max-w-2xl mx-auto py-10">
                    <div className="p-8 border-l-4 border-secondary bg-gray-50 italic text-sm text-gray-700 leading-relaxed font-serif relative">
                      <ShieldCheck className="absolute top-2 right-2 w-12 h-12 text-secondary/10" />
                      "I hereby declare that all documents and information provided are authentic and true. I understand that any misrepresentation will lead to immediate disqualification from the Global Talent relocation program."
                    </div>
                    <div className="space-y-4">
                      <label className="text-[11px] font-bold uppercase text-gray-500">Digital Signature (Type Full Legal Name) *</label>
                      <Input placeholder="Your Full Legal Name" className="text-2xl font-serif italic py-10 border-b-2 border-t-0 border-x-0 rounded-none focus-visible:ring-0" required />
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-gray-50 p-6 flex justify-between items-center border-t border-gray-200">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={prevStep} 
                  disabled={step === 1 || isSubmitting}
                  className="px-8 border-primary text-primary font-bold uppercase tracking-widest text-xs h-12 rounded-none"
                >
                  Back
                </Button>
                
                {step < 5 ? (
                  <Button type="button" onClick={nextStep} className="px-10 bg-primary text-secondary font-bold uppercase tracking-widest text-xs h-12 rounded-none">
                    Next Step
                  </Button>
                ) : (
                  <Button type="submit" disabled={isSubmitting} className="px-16 bg-secondary text-primary font-bold uppercase tracking-widest text-xs h-12 rounded-none">
                    {isSubmitting ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : "Finalize & Submit"}
                  </Button>
                )}
              </div>
            </form>
          </div>

          {/* Checklist Panel */}
          <aside className="space-y-6">
            <div className="bg-white border border-gray-200 p-6 shadow-xl sticky top-24 rounded-sm">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-secondary" /> Submission Matrix
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-[10px] font-bold uppercase text-gray-400">Progression</span>
                    <span className="text-xs font-bold text-primary">{stats.percentage}%</span>
                  </div>
                  <Progress value={stats.percentage} className="h-2" />
                </div>

                <div className="space-y-4">
                  <ChecklistSection title="Base Layer" items={docRequirements.base} uploaded={uploadedFiles} />
                  {docRequirements.role.length > 0 && <ChecklistSection title="Role Layer" items={docRequirements.role} uploaded={uploadedFiles} />}
                  {docRequirements.country.length > 0 && <ChecklistSection title="Country Layer" items={docRequirements.country} uploaded={uploadedFiles} />}
                </div>

                {!stats.isComplete && step === 4 && (
                  <div className="p-4 bg-red-50 border border-red-100 rounded-sm flex gap-3">
                    <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <p className="text-[9px] font-bold text-red-700 uppercase leading-relaxed">
                      Submission Blocked: {stats.totalRequired - stats.uploadedCount} compulsory documents missing.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-primary p-6 text-white rounded-sm official-seal-bg">
              <Info className="w-8 h-8 text-secondary mb-4" />
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-2">Compliance Note</h4>
              <p className="text-[9px] text-gray-400 leading-relaxed uppercase tracking-wider">
                All files are encrypted and processed through our secure verification pipeline. Unauthorized documentation is automatically rejected.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function UploadCard({ doc, uploadedFile, onUpload, onRemove }: { doc: DocDef, uploadedFile: any, onUpload: (file: File) => void, onRemove: () => void }) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={`border p-5 rounded-sm transition-all group relative ${uploadedFile ? 'border-secondary bg-secondary/5' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${doc.isCompulsory ? 'bg-red-500' : 'bg-yellow-500'}`} />
          <p className="text-[10px] font-bold uppercase text-primary tracking-widest truncate max-w-[180px]">{doc.label}</p>
        </div>
        <Tooltip>
          <TooltipTrigger asChild><Info className="w-3.5 h-3.5 text-gray-300 hover:text-secondary cursor-help" /></TooltipTrigger>
          <TooltipContent className="bg-primary text-white text-[10px] uppercase font-bold p-3 border-none rounded-none shadow-xl">
            <p className="max-w-[200px] leading-relaxed">{doc.tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </div>

      {uploadedFile ? (
        <div className="flex items-center justify-between p-3 bg-white border border-secondary/20 rounded-sm">
          <div className="flex items-center gap-2 overflow-hidden">
            <FileText className="w-4 h-4 text-secondary shrink-0" />
            <span className="text-[9px] font-bold text-primary truncate">{uploadedFile.name}</span>
          </div>
          <button type="button" onClick={onRemove} className="text-red-500 hover:text-red-700 p-1"><Trash2 className="w-3.5 h-3.5" /></button>
        </div>
      ) : (
        <div 
          className="flex flex-col items-center justify-center gap-2 p-4 border-2 border-dashed border-gray-100 bg-gray-50/50 rounded-sm hover:bg-gray-100 hover:border-secondary/30 transition-all cursor-pointer"
          onClick={() => inputRef.current?.click()}
        >
          <UploadCloud className="w-6 h-6 text-gray-300 group-hover:text-secondary transition-colors" />
          <div className="text-center">
            <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Select {doc.formats.join('/')}</p>
            <p className="text-[7px] text-gray-400 uppercase mt-1">MAX {doc.maxSizeMB}MB</p>
          </div>
          <input 
            type="file" 
            className="hidden" 
            ref={inputRef}
            accept={doc.formats.map(f => `.${f.toLowerCase()}`).join(',')}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) onUpload(file);
            }} 
          />
        </div>
      )}
    </div>
  );
}

function ChecklistSection({ title, items, uploaded }: { title: string, items: DocDef[], uploaded: any }) {
  return (
    <div className="space-y-2">
      <p className="text-[9px] font-bold uppercase text-gray-400 tracking-[0.2em]">{title}</p>
      <ul className="space-y-1.5">
        {items.map(item => (
          <li key={item.code} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {uploaded[item.code] ? (
                <CheckCircle2 className="w-3 h-3 text-secondary" />
              ) : (
                <div className={`w-3 h-3 rounded-full border ${item.isCompulsory ? 'border-red-200' : 'border-gray-200'}`} />
              )}
              <span className={`text-[9px] font-bold uppercase tracking-tight ${uploaded[item.code] ? 'text-primary' : 'text-gray-400'}`}>
                {item.label}
              </span>
            </div>
            {!uploaded[item.code] && item.isCompulsory && (
              <span className="text-[7px] font-bold text-red-500 uppercase">Required</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
