
"use client";

import { useState, useMemo, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ShieldCheck, User, Briefcase, Globe, FileUp, CheckSquare, Loader2, HelpCircle, FileText, Trash2, AlertCircle, UploadCloud } from 'lucide-react';
import { COUNTRIES, CATEGORIES, CATEGORY_ROLES, MOCK_JOBS } from '@/app/lib/data';
import { useToast } from '@/hooks/use-toast';
import { useRouter, useSearchParams } from 'next/navigation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function ApplicationFormPage() {
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

  const [uploadedFiles, setUploadedFiles] = useState<Record<string, { name: string; size: number }>>({});
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const { toast } = useToast();
  const router = useRouter();

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (docName: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      toast({ variant: 'destructive', title: "Invalid File Type", description: "Only PDF documents are accepted." });
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      toast({ variant: 'destructive', title: "File Too Large", description: "Maximum file size is 10MB." });
      return;
    }

    setUploadedFiles(prev => ({
      ...prev,
      [docName]: { name: file.name, size: file.size }
    }));

    toast({ title: "Document Ready", description: `${docName} has been digitally prepared for your application.` });
  };

  const removeFile = (docName: string) => {
    setUploadedFiles(prev => {
      const next = { ...prev };
      delete next[docName];
      return next;
    });
  };

  const selectedJob = useMemo(() => {
    return MOCK_JOBS.find(j => 
      j.category === formData.category && 
      j.role === formData.role && 
      j.country === formData.country
    );
  }, [formData.category, formData.role, formData.country]);

  const requiredDocs = useMemo(() => {
    // Compulsory Base Documents requested by the user
    const baseDocs = [
      "Passport (valid 6+ months)",
      "National ID",
      "Birth Certificate",
      "Updated CV",
      "Passport-size Photo",
      "Police Clearance Certificate"
    ];

    // Merge with any job-specific ones if they don't overlap
    const jobSpecificDocs = selectedJob?.requiredDocuments || [];
    const normalizedBase = baseDocs.map(d => d.toLowerCase());
    
    const extraDocs = jobSpecificDocs.filter(jd => 
      !normalizedBase.some(nb => jd.toLowerCase().includes(nb) || nb.includes(jd.toLowerCase()))
    );

    return [...baseDocs, ...extraDocs];
  }, [selectedJob]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Verification check for files
    const missingDocs = requiredDocs.filter(doc => !uploadedFiles[doc]);
    if (missingDocs.length > 0) {
      toast({
        variant: 'destructive',
        title: "Missing Documents",
        description: `Please upload all compulsory documents to proceed.`
      });
      setStep(4);
      return;
    }

    setIsSubmitting(true);

    const fileListStr = Object.values(uploadedFiles).map(f => `• ${f.name}`).join('\n');

    const subject = encodeURIComponent(`Job Application: ${formData.fullName} - ${formData.role}`);
    const body = encodeURIComponent(
      `OFFICIAL JOB APPLICATION SUBMISSION\n` +
      `-----------------------------------\n\n` +
      `PERSONAL INFORMATION:\n` +
      `Full Name: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Nationality: ${formData.nationality}\n` +
      `DOB: ${formData.dob}\n` +
      `Address: ${formData.address}\n\n` +
      `PROFESSIONAL PROFILE:\n` +
      `Highest Education: ${formData.education}\n` +
      `Field of Study: ${formData.field}\n` +
      `Experience: ${formData.experience}\n` +
      `Current Status: ${formData.status}\n\n` +
      `JOB CHOICE:\n` +
      `Industry: ${formData.category}\n` +
      `Specific Role: ${formData.role}\n` +
      `Target Country: ${formData.country}\n` +
      `Availability: ${formData.availability}\n\n` +
      `DIGITALLY PREPARED DOCUMENTS:\n` +
      `${fileListStr}\n\n` +
      `-----------------------------------\n` +
      `IMPORTANT INSTRUCTION: YOU MUST ATTACH THE PDF FILES LISTED ABOVE TO THIS EMAIL BEFORE PRESSING SEND.`
    );

    const mailtoUrl = `mailto:globalcareers0@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      window.location.href = mailtoUrl;
      toast({
        title: "Final Step Required",
        description: "Your email client has been opened. Please attach your PDF documents and click 'Send' to complete the application."
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
      <div className="container mx-auto px-4 max-w-5xl">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white border border-gray-200 shadow-2xl official-seal-bg overflow-hidden rounded-sm">
              <div className="bg-primary text-white p-6 flex justify-between items-center border-b-2 border-secondary">
                <h2 className="text-xl font-headline font-bold uppercase tracking-widest">
                  Step {step}: {steps[step-1].label} Information
                </h2>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 opacity-60">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="text-[10px] font-bold uppercase">Authorized Submission</span>
                  </div>
                </div>
              </div>

              <div className="p-10">
                {step === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-500">Full Name *</label>
                      <Input name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="As shown on Passport" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-500">Date of Birth *</label>
                      <Input name="dob" type="date" value={formData.dob} onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-500">Gender *</label>
                      <Select onValueChange={(val) => handleSelectChange('gender', val)} required>
                        <SelectTrigger><SelectValue placeholder="Select Gender" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-500">Nationality *</label>
                      <Select onValueChange={(val) => handleSelectChange('nationality', val)} required>
                        <SelectTrigger><SelectValue placeholder="Search Countries..." /></SelectTrigger>
                        <SelectContent>
                          {COUNTRIES.map(c => <SelectItem key={c.code} value={c.name}>{c.name}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-500">Email Address *</label>
                      <Input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="example@domain.com" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-500">Phone Number *</label>
                      <Input name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+Country Code" required />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-xs font-bold uppercase text-gray-500">Residential Address *</label>
                      <Input name="address" value={formData.address} onChange={handleInputChange} placeholder="Full Street Address" required />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-500">Highest Education *</label>
                      <Select onValueChange={(val) => handleSelectChange('education', val)} required>
                        <SelectTrigger><SelectValue placeholder="Select Level" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="diploma">Diploma</SelectItem>
                          <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                          <SelectItem value="master">Master's Degree</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-500">Field of Study *</label>
                      <Input name="field" value={formData.field} onChange={handleInputChange} placeholder="e.g. Nursing, Engineering" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-500">Years of Experience *</label>
                      <Select onValueChange={(val) => handleSelectChange('experience', val)} required>
                        <SelectTrigger><SelectValue placeholder="Select Duration" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">0 (Entry Level)</SelectItem>
                          <SelectItem value="2">1-2 Years</SelectItem>
                          <SelectItem value="5">3-5 Years</SelectItem>
                          <SelectItem value="10">5-10 Years</SelectItem>
                          <SelectItem value="10+">10+ Years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-500">Employment Status *</label>
                      <Select onValueChange={(val) => handleSelectChange('status', val)} required>
                        <SelectTrigger><SelectValue placeholder="Current Status" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="employed">Employed</SelectItem>
                          <SelectItem value="unemployed">Unemployed</SelectItem>
                          <SelectItem value="self">Self-employed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-xs font-bold uppercase text-gray-500">Skills Summary (max 500 characters) *</label>
                      <Textarea name="skills" value={formData.skills} onChange={handleInputChange} placeholder="Detail your core professional competencies..." className="min-h-[120px]" maxLength={500} required />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-500">Destination Country *</label>
                      <Select 
                        value={formData.country}
                        onValueChange={(val) => handleSelectChange('country', val)} 
                        required
                      >
                        <SelectTrigger><SelectValue placeholder="Select Country" /></SelectTrigger>
                        <SelectContent>
                          {COUNTRIES.map(c => <SelectItem key={c.code} value={c.name}>{c.flag} {c.name}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-500">Job Category *</label>
                      <Select 
                        value={formData.category}
                        required 
                        onValueChange={(val) => setFormData(prev => ({ ...prev, category: val, role: '' }))}
                      >
                        <SelectTrigger><SelectValue placeholder="Select Category" /></SelectTrigger>
                        <SelectContent>
                          {CATEGORIES.map(cat => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-500">Specific Role *</label>
                      <Select 
                        value={formData.role}
                        required 
                        disabled={!formData.category}
                        onValueChange={(val) => handleSelectChange('role', val)}
                      >
                        <SelectTrigger><SelectValue placeholder={formData.category ? "Select Role" : "Select Category First"} /></SelectTrigger>
                        <SelectContent>
                          {roles.map(role => <SelectItem key={role} value={role}>{role}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-500">Availability *</label>
                      <Input name="availability" type="date" value={formData.availability} onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <div className="p-4 bg-primary/5 border border-primary/10 rounded-sm">
                        <div className="flex gap-3">
                          <input type="checkbox" className="w-4 h-4 mt-1 accent-primary" required />
                          <p className="text-xs text-gray-600 leading-relaxed font-medium">I confirm that I possess a valid international passport with at least 6 months validity from my intended travel date.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-8">
                    <div className="p-6 bg-primary text-white border-l-4 border-secondary official-seal-bg">
                      <h3 className="text-lg font-headline font-bold mb-2">Base Documents (Compulsory)</h3>
                      <p className="text-xs text-gray-300 leading-relaxed uppercase tracking-wider">
                        All documents listed below are compulsory for your application to be considered. 
                        Please upload them in <strong>PDF format</strong>.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {requiredDocs.map((doc, idx) => (
                        <div key={idx} className="border border-gray-200 p-6 rounded-sm bg-white hover:border-secondary transition-colors group relative">
                          <div className="flex items-center justify-between mb-4">
                            <p className="text-[10px] font-bold uppercase text-primary tracking-widest">{doc} *</p>
                            {uploadedFiles[doc] ? (
                              <CheckSquare className="w-5 h-5 text-secondary" />
                            ) : (
                              <FileText className="w-5 h-5 text-gray-200" />
                            )}
                          </div>
                          
                          {uploadedFiles[doc] ? (
                            <div className="flex items-center justify-between p-3 bg-gray-50 border border-secondary/20 rounded-sm">
                              <div className="flex items-center gap-2 overflow-hidden">
                                <FileText className="w-4 h-4 text-secondary shrink-0" />
                                <span className="text-[10px] font-bold text-primary truncate">
                                  {uploadedFiles[doc].name}
                                </span>
                              </div>
                              <button 
                                type="button" 
                                onClick={() => removeFile(doc)}
                                className="text-red-500 hover:text-red-700 p-1"
                                title="Remove document"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          ) : (
                            <div 
                              className="flex flex-col items-center justify-center gap-2 p-4 border-2 border-dashed border-gray-100 bg-gray-50/50 rounded-sm hover:bg-gray-50 hover:border-secondary/30 transition-all cursor-pointer"
                              onClick={() => fileInputRefs.current[doc]?.click()}
                            >
                              <UploadCloud className="w-8 h-8 text-gray-300 group-hover:text-secondary transition-colors" />
                              <div className="text-center">
                                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">No file chosen</p>
                                <p className="text-[8px] text-gray-400 uppercase mt-1">Drag & drop or click to upload PDF</p>
                              </div>
                              <input 
                                type="file" 
                                className="hidden" 
                                accept="application/pdf"
                                ref={el => fileInputRefs.current[doc] = el}
                                onChange={(e) => handleFileUpload(doc, e)}
                              />
                            </div>
                          )}
                          <div className="mt-3 flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${uploadedFiles[doc] ? 'bg-secondary' : 'bg-gray-200'}`} />
                            <p className="text-[8px] text-gray-400 uppercase tracking-widest font-bold">
                              {uploadedFiles[doc] ? 'Digitally Prepared' : 'Required for Attachment'}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {step === 5 && (
                  <div className="space-y-8 max-w-2xl mx-auto">
                    <div className="p-8 border-l-4 border-secondary bg-gray-50 italic text-sm text-gray-700 leading-relaxed font-serif relative">
                      <ShieldCheck className="absolute top-2 right-2 w-12 h-12 text-secondary/10" />
                      "I hereby declare that the particulars given by me are true in all respects and that I have not suppressed or misrepresented any facts. I understand that pressing the button below will generate a pre-composed email. I MUST manually attach the PDF files I uploaded in Step 4 to this email before sending."
                    </div>

                    <div className="space-y-4 pt-4 border-t border-gray-100">
                      {[
                        "I confirm all information is true and accurate",
                        "I have prepared all required PDF documents",
                        "I agree to Terms & Conditions and Privacy Policy",
                        "I consent to background verification"
                      ].map((text, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                          <input type="checkbox" id={`final-${idx}`} className="w-5 h-5 border-gray-300 rounded-sm accent-primary cursor-pointer" required />
                          <label htmlFor={`final-${idx}`} className="text-[11px] font-bold uppercase text-gray-600 cursor-pointer">{text} *</label>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <label className="text-[11px] font-bold uppercase text-gray-500">Digital Signature (Type Full Name) *</label>
                      <Input placeholder="Your Full Legal Name" className="text-2xl font-serif italic py-10 border-b-2 border-t-0 border-x-0 rounded-none focus-visible:ring-0 placeholder:text-gray-200" required />
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
                  <Button 
                    type="button" 
                    onClick={nextStep}
                    className="px-10 bg-primary text-secondary font-bold uppercase tracking-widest text-xs h-12 hover:bg-primary/95 rounded-none"
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="px-16 bg-secondary text-primary font-bold uppercase tracking-widest text-xs h-12 hover:bg-secondary/90 shadow-xl rounded-none"
                  >
                    {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Preparing Email...</> : "Submit & Compose Email"}
                  </Button>
                )}
              </div>
            </form>
          </div>

          <aside className="space-y-8">
            <div className="bg-white border border-gray-200 p-8 shadow-sm rounded-sm">
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-secondary" /> Submission FAQ
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-[10px] font-bold uppercase text-left">Why do I need to upload PDFs?</AccordionTrigger>
                  <AccordionContent className="text-[10px] text-gray-500 leading-relaxed uppercase">
                    Our system verifies that you have the correct documentation for the {formData.role || 'selected'} role before generating your official application record.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-[10px] font-bold uppercase text-left">How do I attach the files?</AccordionTrigger>
                  <AccordionContent className="text-[10px] text-gray-500 leading-relaxed uppercase">
                    After clicking submit, your email app will open. You must manually select and attach the PDF files you chose in Step 4 to that email before clicking 'Send'.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="bg-primary p-8 text-white rounded-sm official-seal-bg">
              <ShieldCheck className="w-12 h-12 text-secondary mb-4" />
              <h4 className="text-sm font-bold uppercase tracking-widest text-secondary mb-2">Secure Portal</h4>
              <p className="text-[10px] text-gray-400 leading-relaxed uppercase tracking-widest">All applications are processed according to international labor recruitment laws. We never share your data with unauthorized third parties.</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
