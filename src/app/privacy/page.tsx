import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-primary text-white py-16 official-seal-bg border-b-4 border-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="gold-divider mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-gray-400 max-w-2xl mx-auto italic font-light">Official protocols regarding the collection, storage, and processing of applicant data.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white p-12 border border-gray-200 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 text-primary/5 pointer-events-none">
            <ShieldCheck className="w-48 h-48" />
          </div>

          <div className="space-y-10 relative z-10">
            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-primary flex items-center gap-3">
                <Lock className="w-6 h-6 text-secondary" /> 1. Commitment to Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                GlobalTalent Careers Portal is committed to protecting the privacy and security of your personal data. This policy outlines how we handle your information in compliance with international data protection standards, including the General Data Protection Regulation (GDPR).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-primary flex items-center gap-3">
                <Eye className="w-6 h-6 text-secondary" /> 2. Information We Collect
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To facilitate international employment, we collect comprehensive data including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Full legal name, date of birth, and nationality.</li>
                <li>Contact information including email, phone number, and residential address.</li>
                <li>Professional history, educational qualifications, and skills assessment.</li>
                <li>Document copies: Passports, ID cards, academic transcripts, and professional licenses.</li>
                <li>Medical fitness records and police clearance certificates as required by destination countries.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-primary flex items-center gap-3">
                <FileText className="w-6 h-6 text-secondary" /> 3. Use of Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Your data is used exclusively for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Assessing your eligibility for specific international job roles.</li>
                <li>Verifying your credentials with educational and professional institutions.</li>
                <li>Sharing your profile with vetted international employers for interview purposes.</li>
                <li>Facilitating visa applications and travel arrangements upon placement.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-primary">4. International Data Transfers</h2>
              <p className="text-gray-600 leading-relaxed">
                As an international recruitment agency, your data may be transferred to and processed in countries other than your own. We ensure all data transfers are protected by standard contractual clauses and rigorous security measures.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-primary">5. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement industry-standard encryption and security protocols to safeguard your information against unauthorized access, alteration, or disclosure. Our portal utilizes SSL/TLS encryption for all data transmissions.
              </p>
            </section>

            <div className="pt-10 border-t border-gray-100">
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Effective Date: January 1, 2025</p>
              <p className="text-[10px] text-gray-400 uppercase mt-2">Document ID: GT-POL-001-PRIVACY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
