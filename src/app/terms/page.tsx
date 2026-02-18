import { Scale, FileCheck, AlertCircle, ShieldAlert } from 'lucide-react';

export default function TermsConditionsPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-primary text-white py-16 official-seal-bg border-b-4 border-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="gold-divider mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tight mb-4">Terms & Conditions</h1>
          <p className="text-gray-400 max-w-2xl mx-auto italic font-light">Binding legal agreement governing the use of the GlobalTalent recruitment services.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white p-12 border border-gray-200 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 text-primary/5 pointer-events-none">
            <Scale className="w-48 h-48" />
          </div>

          <div className="space-y-10 relative z-10">
            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-primary flex items-center gap-3">
                <FileCheck className="w-6 h-6 text-secondary" /> 1. Acceptance of Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using the GlobalTalent Careers Portal, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must refrain from using our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-primary flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-secondary" /> 2. Accuracy of Information
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Applicants are strictly required to provide accurate, current, and complete information. Any misrepresentation or suppression of facts during the application process is grounds for immediate disqualification and potential legal action in accordance with international labor laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-primary flex items-center gap-3">
                <ShieldAlert className="w-6 h-6 text-secondary" /> 3. Ethical Recruitment Protocol
              </h2>
              <p className="text-gray-600 leading-relaxed">
                GlobalTalent adheres to the principle that "The Employer Pays." We do not charge job seekers any fees for placement. Any individual or entity requesting payment for a job offer on our behalf should be reported immediately to our compliance department.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-primary">4. Service Limitations</h2>
              <p className="text-gray-600 leading-relaxed">
                While we strive to connect qualified candidates with reputable employers, the final decision for employment rests solely with the hiring organization. Submission of an application through this portal does not guarantee employment.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-primary">5. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                All content on this portal, including logos, text, graphics, and official seals, is the property of GlobalTalent International Employment Services and is protected by international copyright laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-primary">6. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These terms are governed by the laws of the United Kingdom and relevant international labor conventions. Any disputes arising from the use of our services shall be subject to the exclusive jurisdiction of the competent courts.
              </p>
            </section>

            <div className="pt-10 border-t border-gray-100">
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Last Modified: January 1, 2025</p>
              <p className="text-[10px] text-gray-400 uppercase mt-2">Document ID: GT-TNC-001-GENERAL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
