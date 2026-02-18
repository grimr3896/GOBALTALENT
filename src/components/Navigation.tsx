
"use client";

import Link from 'next/link';
import { ShieldCheck, Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white border-b-2 border-secondary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="p-2 bg-secondary rounded-full">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <div>
                <span className="block text-xl font-headline font-bold tracking-tight text-white uppercase leading-none">GlobalTalent</span>
                <span className="block text-xs font-medium text-secondary tracking-[0.2em] uppercase">Careers Portal</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-secondary transition-colors uppercase tracking-wider">Home</Link>
            <Link href="/jobs" className="text-sm font-medium hover:text-secondary transition-colors uppercase tracking-wider">Browse Jobs</Link>
            <Link href="/track" className="text-sm font-medium hover:text-secondary transition-colors uppercase tracking-wider">Track Application</Link>
            <Link href="/about" className="text-sm font-medium hover:text-secondary transition-colors uppercase tracking-wider">About</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-secondary transition-colors uppercase tracking-wider">Contact</Link>
            <Button variant="secondary" size="sm" asChild>
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-secondary p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-primary-foreground text-primary border-t border-secondary p-4 flex flex-col space-y-4">
          <Link href="/" className="text-sm font-semibold uppercase" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/jobs" className="text-sm font-semibold uppercase" onClick={() => setIsOpen(false)}>Browse Jobs</Link>
          <Link href="/track" className="text-sm font-semibold uppercase" onClick={() => setIsOpen(false)}>Track Application</Link>
          <Link href="/about" className="text-sm font-semibold uppercase" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className="text-sm font-semibold uppercase" onClick={() => setIsOpen(false)}>Contact</Link>
          <Button variant="default" className="w-full bg-primary text-white" asChild>
            <Link href="/apply" onClick={() => setIsOpen(false)}>Apply Now</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
