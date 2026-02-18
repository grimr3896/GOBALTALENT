
import { ShieldCheck, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t-4 border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-secondary" />
            <span className="text-xl font-headline font-bold text-white uppercase">GlobalTalent</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Authorized international employment agency providing ethical recruitment solutions connecting global talent with world-class employers since 2010.
          </p>
        </div>

        <div>
          <h4 className="font-headline text-lg mb-6 border-b border-secondary/30 pb-2">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/jobs" className="hover:text-secondary">Search Vacancies</Link></li>
            <li><Link href="/apply" className="hover:text-secondary">Submit Application</Link></li>
            <li><Link href="/track" className="hover:text-secondary">Track Status</Link></li>
            <li><Link href="/about" className="hover:text-secondary">Mission & Values</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline text-lg mb-6 border-b border-secondary/30 pb-2">Contact Details</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3"><MapPin className="w-4 h-4 text-secondary shrink-0" /> 1245 Global Plaza, District 5, London, UK</li>
            <li className="flex gap-3"><Mail className="w-4 h-4 text-secondary shrink-0" /> globalcareers0@gmail.com</li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline text-lg mb-6 border-b border-secondary/30 pb-2">Compliance</h4>
          <p className="text-xs text-gray-400 mb-4">
            Registration No: GT-2025-00412<br />
            ISO 9001:2015 Certified<br />
            Licensed by Relevant Labor Authority
          </p>
          <div className="flex flex-wrap gap-2">
            <div className="bg-white/10 px-2 py-1 rounded text-[10px] uppercase font-bold text-secondary border border-secondary/20">Verified Agency</div>
            <div className="bg-white/10 px-2 py-1 rounded text-[10px] uppercase font-bold text-secondary border border-secondary/20">Ethical Recruitment</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/10 text-center">
        <p className="text-xs text-gray-500 mb-4">
          Disclaimer: We are a licensed international recruitment agency. We do not charge job seekers for placement. Report fraud to globalcareers0@gmail.com
        </p>
        <div className="flex justify-center gap-6 text-xs text-gray-400">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms & Conditions</Link>
          <Link href="#">Cookie Policy</Link>
        </div>
        <p className="mt-4 text-[10px] uppercase tracking-widest text-gray-600">© 2025 GlobalTalent International Employment Services</p>
      </div>
    </footer>
  );
}
