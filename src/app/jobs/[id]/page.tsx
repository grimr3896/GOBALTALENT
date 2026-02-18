
"use client";

import { use, useState, useRef } from 'react';
import { MOCK_JOBS, COUNTRIES } from '@/app/lib/data';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  DollarSign, 
  Calendar, 
  FileCheck, 
  ShieldCheck, 
  BrainCircuit,
  Upload,
  AlertTriangle,
  Loader2,
  Briefcase,
  History,
  Plane
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { intelligentQualificationVerification, type IntelligentQualificationVerificationOutput } from '@/ai/flows/intelligent-qualification-verification-flow';
import { useToast } from '@/hooks/use-toast';

export default function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const job = MOCK_JOBS.find(j => j.id === id);
  const countryData = COUNTRIES.find(c => c.name === job?.country);
  const { toast } = useToast();
  
  const [aiAnalysis, setAiAnalysis] = useState<IntelligentQualificationVerificationOutput | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!job) return <div className="p-24 text-center">Job not found.</div>;

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast({ variant: 'destructive', title: "File too large", description: "Please upload a document smaller than 5MB." });
      return;
    }

    setIsAnalyzing(true);
    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        const dataUri = reader.result as string;
        const result = await intelligentQualificationVerification({
          resumeDataUri: dataUri,
          requiredQualifications: job.qualifications.join('\n')
        });
        setAiAnalysis(result);
        setIsAnalyzing(false);
      };
    } catch (error) {
      console.error(error);
      setIsAnalyzing(false);
      toast({ variant: 'destructive', title: "Analysis Failed", description: "We couldn't process your resume. Please try again." });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="bg-primary text-white py-12 border-b-4 border-secondary official-seal-bg">
        <div className="container mx-auto px-4">
          <Link href="/jobs" className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-xs mb-8 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft className="w-4 h-4" /> Back to listings
          </Link>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase bg-white/10 text-secondary border border-secondary/30 px-2 py-0.5 rounded tracking-widest">{job.category}</span>
                <span className="text-secondary">•</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">{job.role}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold font-headline uppercase leading-tight">{job.title}</h1>
              <div className="flex flex-wrap items-center gap-6 mt-4 text-gray-300">
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-secondary" /> {job.country} {job.flag}</div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-secondary" /> {job.experience} Required</div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-secondary" /> Deadline: {new Date(job.deadline).toLocaleDateString()}</div>
              </div>
            </div>
            <div className="bg-white/10 border border-secondary/30 p-6 rounded text-center min-w-[240px]">
              <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">Hourly Remuneration</p>
              <div className="text-4xl font-headline font-bold text-secondary mb-1">${job.hourlyRate.toFixed(2)}</div>
              <p className="text-xs text-gray-400 font-medium">USD / Hour (Gross)</p>
              <Button className="w-full mt-4 bg-secondary text-primary font-bold uppercase tracking-widest hover:bg-secondary/90 rounded-none h-12" asChild>
                <Link href={`/apply?jobId=${job.id}`}>Apply for this role</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-6 border border-gray-200 text-center">
                <Plane className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Visa Type</p>
                <p className="text-sm font-bold text-primary uppercase">{countryData?.visa || "Standard Work Permit"}</p>
              </div>
              <div className="bg-white p-6 border border-gray-200 text-center">
                <History className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Contract Duration</p>
                <p className="text-sm font-bold text-primary uppercase">{countryData?.duration || "2 Years Renewable"}</p>
              </div>
              <div className="bg-white p-6 border border-gray-200 text-center">
                <Briefcase className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Job Category</p>
                <p className="text-sm font-bold text-primary uppercase">{job.category}</p>
              </div>
            </section>

            <section className="bg-white p-8 border border-gray-200 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 text-primary/5 -rotate-12 pointer-events-none">
                 <ShieldCheck className="w-32 h-32" />
               </div>
               <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-2 border-b border-gray-100 pb-2">
                 <FileCheck className="w-4 h-4 text-secondary" /> Official Job Description
               </h3>
               <p className="text-gray-600 leading-relaxed text-lg mb-8 italic font-serif">
                 "{job.description}"
               </p>
               
               <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">Mandatory Qualifications</h4>
               <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {job.qualifications.map((q, idx) => (
                   <li key={idx} className="flex gap-3 text-sm text-gray-600 items-start">
                     <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                     {q}
                   </li>
                 ))}
               </ul>
            </section>

            <section className="bg-white p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-2 border-b border-gray-100 pb-2">
                 <DollarSign className="w-4 h-4 text-secondary" /> Remuneration & Benefits Structure
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-none border-l-4 border-secondary">
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-gray-200">
                      <tr className="py-2 flex justify-between">
                        <td className="text-[10px] font-bold uppercase text-gray-500 py-2">Hourly Rate</td>
                        <td className="font-bold py-2">${job.hourlyRate.toFixed(2)} USD</td>
                      </tr>
                      <tr className="py-2 flex justify-between">
                        <td className="text-[10px] font-bold uppercase text-gray-500 py-2">Weekly (40hrs)</td>
                        <td className="font-bold py-2">${(job.hourlyRate * 40).toFixed(2)} USD</td>
                      </tr>
                      <tr className="py-2 flex justify-between">
                        <td className="text-[10px] font-bold uppercase text-gray-500 py-2">Monthly (Est.)</td>
                        <td className="font-bold py-2 text-primary text-lg">${(job.hourlyRate * 160).toFixed(2)} USD</td>
                      </tr>
                      <tr className="py-2 flex justify-between">
                        <td className="text-[10px] font-bold uppercase text-gray-500 py-2">Overtime</td>
                        <td className="font-bold py-2 text-secondary">1.5x Hourly Rate</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="bg-secondary/10 p-2 rounded-full"><ShieldCheck className="w-5 h-5 text-secondary" /></div>
                    <div>
                      <h5 className="font-bold text-xs uppercase tracking-widest">Health Insurance</h5>
                      <p className="text-[11px] text-gray-500 uppercase font-medium">Full global medical coverage provided.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="bg-secondary/10 p-2 rounded-full"><MapPin className="w-5 h-5 text-secondary" /></div>
                    <div>
                      <h5 className="font-bold text-xs uppercase tracking-widest">Relocation Package</h5>
                      <p className="text-[11px] text-gray-500 uppercase font-medium">Flights and initial accommodation included.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar - AI Verification */}
          <aside className="space-y-8">
             <div className="bg-primary text-white p-8 border border-secondary shadow-xl official-seal-bg relative overflow-hidden rounded-sm">
                <div className="relative z-10">
                  <h3 className="text-lg font-headline font-bold text-secondary mb-2 flex items-center gap-2">
                    <BrainCircuit className="w-6 h-6" /> AI Qualification Check
                  </h3>
                  <p className="text-[11px] text-gray-300 mb-6 uppercase tracking-widest leading-relaxed">
                    Instantly verify your eligibility. Upload your CV to receive a pre-submission fit assessment against official requirements.
                  </p>
                  
                  {!aiAnalysis ? (
                    <div className="space-y-4">
                      <input 
                        type="file" 
                        className="hidden" 
                        ref={fileInputRef} 
                        onChange={handleFileUpload}
                        accept=".pdf,.docx"
                      />
                      <Button 
                        disabled={isAnalyzing}
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full bg-secondary text-primary hover:bg-secondary/90 font-bold uppercase tracking-widest flex items-center gap-2 rounded-none h-12"
                      >
                        {isAnalyzing ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" /> Analyzing CV...
                          </>
                        ) : (
                          <>
                            <Upload className="w-4 h-4" /> Upload CV (PDF/DOCX)
                          </>
                        )}
                      </Button>
                      <p className="text-[10px] text-gray-400 text-center uppercase tracking-tighter">Verified Secure Analysis Protocol Active.</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-[10px] text-gray-400 uppercase font-bold mb-1">Estimated Eligibility Score</div>
                        <div className="text-5xl font-bold font-headline text-secondary">{aiAnalysis.overallFitScore}%</div>
                      </div>
                      
                      <div className="space-y-4">
                         <div className="space-y-1">
                           <div className="flex justify-between text-[10px] uppercase font-bold">
                             <span>Match Strength</span>
                             <span>{aiAnalysis.overallFitScore}%</span>
                           </div>
                           <Progress value={aiAnalysis.overallFitScore} className="h-2 bg-white/10" />
                         </div>

                         <div className="space-y-2">
                           <p className="text-[10px] uppercase font-bold text-secondary tracking-widest">Officer's Assessment</p>
                           <p className="text-[11px] text-gray-300 leading-relaxed italic border-l-2 border-secondary/50 pl-3">
                             "{aiAnalysis.assessment}"
                           </p>
                         </div>

                         <div className="space-y-2">
                           <p className="text-[10px] uppercase font-bold text-secondary tracking-widest">Strengths</p>
                           <div className="flex flex-wrap gap-2">
                             {aiAnalysis.strengths.map((s, i) => (
                               <Badge key={i} variant="secondary" className="bg-secondary/20 text-secondary text-[9px] uppercase border-none tracking-widest">
                                 {s}
                               </Badge>
                             ))}
                           </div>
                         </div>

                         <div className="space-y-2">
                           <p className="text-[10px] uppercase font-bold text-red-400 tracking-widest">Potential Gaps</p>
                           <ul className="space-y-1">
                             {aiAnalysis.gaps.map((g, i) => (
                               <li key={i} className="text-[11px] text-gray-300 flex gap-2">
                                 <AlertTriangle className="w-3 h-3 text-red-400 shrink-0 mt-0.5" /> {g}
                               </li>
                             ))}
                           </ul>
                         </div>
                      </div>

                      <Button 
                        variant="outline" 
                        className="w-full border-secondary text-secondary hover:bg-secondary/10 rounded-none h-10 text-[10px] font-bold uppercase"
                        onClick={() => setAiAnalysis(null)}
                      >
                        Re-Analyze Documents
                      </Button>
                    </div>
                  )}
                </div>
             </div>

             <div className="bg-white p-6 border border-gray-200 rounded-sm">
               <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4 border-b border-gray-100 pb-2">Required Documents</h4>
               <ul className="space-y-3">
                 {[
                   "Valid International Passport",
                   "Education Degree/Certificates",
                   "Professional License (If applicable)",
                   "Recent Medical Fitness Report",
                   "Police Clearance Certificate",
                   "2 Professional References"
                 ].map((doc, idx) => (
                   <li key={idx} className="flex gap-2 text-[11px] text-gray-500 font-medium uppercase tracking-tight">
                     <FileCheck className="w-3 h-3 text-secondary shrink-0 mt-0.5" /> {doc}
                   </li>
                 ))}
               </ul>
             </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
