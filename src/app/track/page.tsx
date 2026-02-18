
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ShieldCheck, Clock, CheckCircle2, User, FileText, AlertCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default function TrackingPage() {
  const [refNumber, setRefNumber] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'found' | 'not-found'>('idle');

  const handleTrack = () => {
    if (!refNumber) return;
    setStatus('loading');
    setTimeout(() => {
      if (refNumber.toUpperCase().startsWith('GT')) {
        setStatus('found');
      } else {
        setStatus('not-found');
      }
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="gold-divider mx-auto" />
          <h1 className="text-4xl font-headline font-bold text-primary uppercase tracking-tight mb-4">Track Your Application</h1>
          <p className="text-gray-500">Enter your official application reference number to check your current status.</p>
        </div>

        <div className="bg-white p-8 border border-gray-200 shadow-xl rounded-lg mb-12 official-seal-bg">
          <div className="flex flex-col md:flex-row gap-4 items-end max-w-2xl mx-auto">
            <div className="flex-grow space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Reference Number</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  placeholder="e.g., GT-2025-XXXX" 
                  className="pl-10 h-14 border-gray-200 focus-visible:ring-primary text-lg uppercase tracking-widest"
                  value={refNumber}
                  onChange={(e) => setRefNumber(e.target.value)}
                />
              </div>
            </div>
            <Button 
              size="lg" 
              className="h-14 px-10 bg-primary text-secondary font-bold uppercase tracking-widest hover:bg-primary/90"
              onClick={handleTrack}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Searching...' : 'Check Status'}
            </Button>
          </div>
        </div>

        {status === 'found' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white p-8 border border-gray-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8">
                <div className="bg-secondary/10 text-secondary px-4 py-2 rounded font-bold uppercase tracking-widest text-xs">
                  Under Review
                </div>
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-headline font-bold text-primary">Application for Registered Nurse (ICU)</h3>
                  <p className="text-sm text-gray-500">United Kingdom • Applied on May 12, 2025</p>
                </div>
              </div>

              <div className="space-y-12">
                <div className="space-y-4">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                    <span>Current Progress</span>
                    <span>40% Complete</span>
                  </div>
                  <Progress value={40} className="h-3 bg-gray-100" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                  {/* Timeline */}
                  {[
                    { title: 'Submitted', date: 'May 12, 2025', status: 'completed' },
                    { title: 'Document Verification', date: 'May 14, 2025', status: 'completed' },
                    { title: 'Technical Assessment', date: 'In Progress', status: 'active' },
                    { title: 'Final Interview', date: 'Pending', status: 'pending' }
                  ].map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-3 z-10 ${
                        step.status === 'completed' ? 'bg-green-600 text-white' : 
                        step.status === 'active' ? 'bg-secondary text-primary animate-pulse' : 
                        'bg-gray-100 text-gray-400 border border-gray-200'
                      }`}>
                        {step.status === 'completed' ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                      </div>
                      <h4 className="text-xs font-bold uppercase tracking-tighter text-primary mb-1">{step.title}</h4>
                      <p className="text-[10px] text-gray-400 font-medium">{step.date}</p>
                    </div>
                  ))}
                  {/* Horizontal line for desktop */}
                  <div className="hidden md:block absolute top-4 left-[12.5%] right-[12.5%] h-[1px] bg-gray-200 -z-0" />
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-8 border border-primary/10 rounded-lg">
              <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary" /> Recent Updates
              </h4>
              <div className="space-y-4">
                <div className="flex gap-4 items-start pb-4 border-b border-gray-200 last:border-0">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-1.5 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-primary">Preliminary Document Check Successful</p>
                    <p className="text-xs text-gray-500">Your uploaded passport and medical records have been verified against international standards.</p>
                    <p className="text-[10px] font-bold text-secondary uppercase mt-1">May 14, 2025 • 09:42 AM</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start pb-4 border-b border-gray-200 last:border-0">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-1.5 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-primary">Application Successfully Received</p>
                    <p className="text-xs text-gray-500">Your application has been assigned to a designated case officer in the Healthcare Division.</p>
                    <p className="text-[10px] font-bold text-secondary uppercase mt-1">May 12, 2025 • 11:15 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {status === 'not-found' && (
          <div className="bg-red-50 border border-red-200 p-8 text-center rounded-lg animate-in fade-in zoom-in duration-300">
            <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-headline font-bold text-red-900 uppercase">No Record Found</h3>
            <p className="text-red-700 mt-2">The reference number provided does not exist in our database. Please verify the number and try again.</p>
            <Button variant="outline" className="mt-6 border-red-300 text-red-700 hover:bg-red-100" onClick={() => setStatus('idle')}>Try Another Number</Button>
          </div>
        )}

        <div className="mt-12 text-center text-xs text-gray-400">
          <p className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4" /> Secure verification protocol active • Verified International Employment Agency
          </p>
        </div>
      </div>
    </div>
  );
}
