
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, ShieldCheck, Clock, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-primary text-white py-20 official-seal-bg border-b-4 border-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="gold-divider mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl font-headline font-bold uppercase tracking-tight mb-4">Official Contact</h1>
          <p className="text-gray-400 max-w-2xl mx-auto italic font-light">Direct communication with our international recruitment officers and compliance department.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              <div className="bg-white p-8 border border-gray-200 shadow-sm rounded-sm">
                <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-8 border-b border-gray-100 pb-4">Headquarters</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/5 flex items-center justify-center text-primary shrink-0 border border-primary/10">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-secondary uppercase mb-1">Office Address</p>
                      <p className="text-sm text-gray-600">1245 Global Plaza, District 5, London, SE1 7PB, United Kingdom</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/5 flex items-center justify-center text-primary shrink-0 border border-primary/10">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-secondary uppercase mb-1">Telephone</p>
                      <p className="text-sm text-gray-600">+44 20 7946 0958 (Admin)</p>
                      <p className="text-sm text-gray-600">+44 20 7946 0959 (Visa Help)</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/5 flex items-center justify-center text-primary shrink-0 border border-primary/10">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-secondary uppercase mb-1">Official Email</p>
                      <p className="text-sm text-gray-600">globalcareers0@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white p-8 rounded-sm official-seal-bg">
                <Clock className="w-10 h-10 text-secondary mb-6" />
                <h4 className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">Official Hours</h4>
                <ul className="text-[10px] space-y-2 text-gray-400 font-bold uppercase tracking-widest">
                  <li className="flex justify-between border-b border-white/10 pb-1"><span>Mon - Fri:</span> <span>08:00 - 18:00</span></li>
                  <li className="flex justify-between border-b border-white/10 pb-1"><span>Saturday:</span> <span>09:00 - 13:00</span></li>
                  <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
                </ul>
              </div>

              <div className="p-8 bg-red-50 border border-red-100 rounded-sm">
                <ShieldCheck className="w-10 h-10 text-red-600 mb-4" />
                <h4 className="text-xs font-bold uppercase text-red-900 mb-2">Fraud Reporting</h4>
                <p className="text-[10px] text-red-700 leading-relaxed uppercase font-medium">Report any unauthorized payment requests to <span className="underline">globalcareers0@gmail.com</span> immediately.</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white p-12 border border-gray-200 shadow-2xl relative">
              <div className="absolute top-0 right-0 p-12 text-primary/5 pointer-events-none">
                <MessageSquare className="w-32 h-32" />
              </div>
              <h2 className="text-3xl font-headline font-bold text-primary mb-2">Send an Official Inquiry</h2>
              <p className="text-gray-500 mb-10 text-sm">Please fill out the form below and an officer will respond within 24-48 business hours.</p>

              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-gray-400">Your Full Name *</label>
                    <Input placeholder="Enter legal name" className="rounded-none border-gray-200 h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-gray-400">Email Address *</label>
                    <Input type="email" placeholder="example@domain.com" className="rounded-none border-gray-200 h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-gray-400">Inquiry Department *</label>
                    <Input placeholder="e.g. Healthcare Recruitment, IT Placements" className="rounded-none border-gray-200 h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-gray-400">Application ID (If any)</label>
                    <Input placeholder="GT-2025-XXXX" className="rounded-none border-gray-200 h-12" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] font-bold uppercase text-gray-400">Your Message *</label>
                    <Textarea placeholder="Detail your inquiry here..." className="rounded-none border-gray-200 min-h-[160px]" />
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="w-full bg-primary text-secondary font-bold uppercase tracking-[0.2em] h-14 rounded-none hover:bg-primary/95 text-sm shadow-xl transition-all">
                    Transmit Message Securely
                  </Button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
