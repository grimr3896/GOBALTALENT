
import Image from 'next/image';
import { ShieldCheck, Target, Users, BookOpen, Scale } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-primary text-white py-20 official-seal-bg border-b-4 border-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="gold-divider mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl font-headline font-bold uppercase tracking-tight mb-4">Our Official Mission</h1>
          <p className="text-gray-400 max-w-2xl mx-auto italic font-light">GlobalTalent Careers Portal: Bridging the gap between exceptional skill and international opportunity since 2010.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] border-8 border-gray-50 shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/about/800/600" 
                fill 
                alt="Our Global Office" 
                className="object-cover"
                data-ai-hint="business office"
              />
              <div className="absolute -bottom-8 -right-8 bg-secondary p-8 text-primary hidden md:block">
                <p className="text-4xl font-bold font-headline">5+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest">Years of Excellence</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-bold text-secondary uppercase tracking-[0.3em] mb-2">The Organization</h3>
                <h2 className="text-3xl font-headline font-bold text-primary mb-6">Ethical Recruitment, Global Standards</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  GlobalTalent International is a licensed recruitment agency specialized in sourcing highly qualified professionals for global markets. We operate under strict international labor laws and ethical recruitment protocols.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our process ensures that every placement is mutually beneficial for both the employer and the employee, fostering long-term professional growth and organizational success across 40+ countries.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="w-10 h-10 bg-primary/5 flex items-center justify-center text-primary border border-primary/10">
                    <Target className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm uppercase">Precision</h4>
                  <p className="text-xs text-gray-500 uppercase">Matching skill to need with 98% success rate.</p>
                </div>
                <div className="space-y-2">
                  <div className="w-10 h-10 bg-primary/5 flex items-center justify-center text-primary border border-primary/10">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm uppercase">Integrity</h4>
                  <p className="text-xs text-gray-500 uppercase">Transparent processes with zero hidden fees.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50 border-y border-gray-200 official-seal-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-bold text-primary mb-4">Our Core Values</h2>
            <div className="h-1 w-20 bg-secondary mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: ShieldCheck, 
                title: "Legal Compliance", 
                desc: "We adhere strictly to the labor laws of both the departure and destination countries." 
              },
              { 
                icon: Users, 
                title: "Professional Dignity", 
                desc: "We treat every applicant with respect and ensure they are placed in safe, verified environments." 
              },
              { 
                icon: BookOpen, 
                title: "Educational Excellence", 
                desc: "We prioritize candidates with certified training and assist in credential verification." 
              }
            ].map((v, i) => (
              <div key={i} className="bg-white p-10 border border-gray-200 text-center hover:border-secondary transition-all">
                <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <v.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-headline text-primary mb-4">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Info */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="border-4 border-gray-100 p-12">
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-secondary mb-8">Official Accreditation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div className="space-y-4">
                <h4 className="font-bold text-primary uppercase border-b border-gray-200 pb-2">Institutional Licenses</h4>
                <ul className="text-xs space-y-2 text-gray-600 uppercase tracking-widest font-medium">
                  <li>• Labor Recruitment License: #GT-2025-0041</li>
                  <li>• ISO 9001:2015 Quality Certified</li>
                  <li>• Member of World Employment Confederation</li>
                  <li>• Verified Government Service Provider</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-primary uppercase border-b border-gray-200 pb-2">Global Partnerships</h4>
                <ul className="text-xs space-y-2 text-gray-600 uppercase tracking-widest font-medium">
                  <li>• UK National Health Service (NHS) Partner</li>
                  <li>• Germany Skilled Migration Alliance</li>
                  <li>• UAE Construction Authority Accredited</li>
                  <li>• Canadian Immigration Consultants Network</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
