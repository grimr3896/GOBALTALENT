
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CATEGORIES } from '@/app/lib/data';
import { ArrowRight, Briefcase, Globe, Users, Trophy, CheckCircle2, FileText, UserCheck, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-20 official-seal-bg">
          <Image 
            src="https://picsum.photos/seed/global/1920/1080"
            fill
            alt="Global Workforce"
            className="object-cover"
            priority
            data-ai-hint="business global"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="gold-divider" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Connecting <span className="text-secondary italic">Global Talent</span> with World-Class Employers
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-300 font-light max-w-2xl">
              Professional international employment opportunities for skilled workers in Medicine, Engineering, IT, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8 py-7 uppercase tracking-wider font-bold" asChild>
                <Link href="/jobs">Browse Available Positions</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-7 uppercase tracking-wider font-bold" asChild>
                <Link href="/apply">Start Your Application</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-secondary text-primary py-8 border-b-2 border-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-primary/10">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold font-headline">500+</span>
              <span className="text-xs uppercase tracking-widest font-bold">Jobs Available</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold font-headline">40+</span>
              <span className="text-xs uppercase tracking-widest font-bold">Countries</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold font-headline">12</span>
              <span className="text-xs uppercase tracking-widest font-bold">Industries</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold font-headline">10,000+</span>
              <span className="text-xs uppercase tracking-widest font-bold">Placed Workers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Industries */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-headline font-bold text-primary mb-4">Featured Industry Sectors</h2>
            <div className="h-1 w-20 bg-secondary mx-auto mb-6" />
            <p className="text-gray-600">We specialize in several key sectors that power the global economy. Choose your career path today.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {CATEGORIES.slice(0, 8).map((category, idx) => (
              <Link key={idx} href={`/jobs?category=${encodeURIComponent(category)}`} className="group">
                <Card className="h-full border border-gray-100 hover:border-secondary transition-all hover:shadow-xl bg-gray-50/50">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-secondary group-hover:text-primary transition-colors text-primary border border-gray-100">
                      <Briefcase className="w-8 h-8" />
                    </div>
                    <h3 className="font-headline font-bold text-lg mb-2 text-primary">{category}</h3>
                    <p className="text-xs text-secondary font-bold uppercase tracking-widest">Explore Openings</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="link" className="text-primary font-bold uppercase tracking-widest group" asChild>
              <Link href="/jobs" className="flex items-center gap-2">View All Industries <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-100 border-y border-gray-200 official-seal-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-bold text-primary mb-4">Our Placement Process</h2>
            <div className="h-1 w-20 bg-secondary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-20 h-20 bg-primary text-secondary rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-lg text-2xl font-bold">1</div>
              <Globe className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold font-headline mb-2 text-primary">Browse Positions</h3>
              <p className="text-gray-600 text-sm">Explore our curated list of international jobs across various sectors and countries.</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-20 h-20 bg-primary text-secondary rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-lg text-2xl font-bold">2</div>
              <FileText className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold font-headline mb-2 text-primary">Apply Online</h3>
              <p className="text-gray-600 text-sm">Complete our comprehensive multi-step application and upload the required documents.</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-20 h-20 bg-primary text-secondary rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-lg text-2xl font-bold">3</div>
              <UserCheck className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold font-headline mb-2 text-primary">Get Placed</h3>
              <p className="text-gray-600 text-sm">Our expert team handles your verification, interviews, and visa processing for a smooth relocation.</p>
            </div>

            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-[2px] bg-gray-300 -z-0" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-bold text-primary mb-4">Voices of Success</h2>
            <div className="h-1 w-20 bg-secondary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary p-12 text-white rounded-lg relative">
              <div className="absolute top-0 right-0 p-8 text-secondary/20">
                <Trophy className="w-24 h-24" />
              </div>
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(i => <div key={i} className="w-4 h-4 bg-secondary" />)}
              </div>
              <p className="text-xl italic mb-8 font-serif leading-relaxed">
                "GlobalTalent made my dream of working as an engineer in Germany a reality. The process was transparent, professional, and faster than I ever expected."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center font-bold">SA</div>
                <div>
                  <h4 className="font-bold">Samuel Adeyemi</h4>
                  <p className="text-xs text-secondary font-bold uppercase tracking-widest">Mechanical Engineer, Germany</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-12 text-primary rounded-lg border border-gray-200 relative">
              <div className="absolute top-0 right-0 p-8 text-primary/5">
                <Users className="w-24 h-24" />
              </div>
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(i => <div key={i} className="w-4 h-4 bg-primary" />)}
              </div>
              <p className="text-xl italic mb-8 font-serif leading-relaxed">
                "As a healthcare professional, I valued the rigorous verification process. It gave me confidence that I was joining a reputable international hospital system."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center font-bold">EL</div>
                <div>
                  <h4 className="font-bold text-primary">Elena Rodriguez</h4>
                  <p className="text-xs text-secondary font-bold uppercase tracking-widest">Senior Nurse, UK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Badges/Trust section */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-8 h-8" />
              <span className="font-bold uppercase tracking-tighter text-sm">ISO 9001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-8 h-8" />
              <span className="font-bold uppercase tracking-tighter text-sm">Verified International Employer</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-8 h-8" />
              <span className="font-bold uppercase tracking-tighter text-sm">Global Excellence Award</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
