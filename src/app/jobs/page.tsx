
"use client";

import { useState, useMemo } from 'react';
import { MOCK_JOBS, CATEGORIES, COUNTRIES } from '@/app/lib/data';
import { Search, Filter, MapPin, DollarSign, Clock, Calendar, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function JobsListingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');

  const filteredJobs = useMemo(() => {
    return MOCK_JOBS.filter(job => {
      // Search matching (Title, Description, Category, Role)
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = 
        job.title.toLowerCase().includes(searchLower) || 
        job.description.toLowerCase().includes(searchLower) ||
        job.category.toLowerCase().includes(searchLower) ||
        job.role.toLowerCase().includes(searchLower);

      // Category matching
      const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;

      // Country matching
      const matchesCountry = selectedCountry === 'all' || job.country === selectedCountry;

      // Experience level matching logic
      let matchesExperience = true;
      if (selectedExperience !== 'all') {
        const yearsMatch = job.experience.match(/\d+/);
        const years = yearsMatch ? parseInt(yearsMatch[0]) : 0;
        
        if (selectedExperience === 'entry') {
          matchesExperience = years <= 2;
        } else if (selectedExperience === 'mid') {
          matchesExperience = years > 2 && years <= 5;
        } else if (selectedExperience === 'senior') {
          matchesExperience = years >= 5;
        }
      }

      return matchesSearch && matchesCategory && matchesCountry && matchesExperience;
    });
  }, [searchTerm, selectedCategory, selectedCountry, selectedExperience]);

  const hasActiveFilters = searchTerm !== '' || selectedCategory !== 'all' || selectedCountry !== 'all' || selectedExperience !== 'all';

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedCountry('all');
    setSelectedExperience('all');
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header section */}
      <div className="bg-primary text-white py-16 border-b-4 border-secondary official-seal-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 uppercase tracking-tight">Available Positions</h1>
            <p className="text-gray-400 text-lg mb-8 font-light italic">Explore high-quality employment opportunities across the globe.</p>
            
            <div className="bg-white p-2 rounded shadow-2xl flex flex-col md:flex-row gap-2">
              <div className="flex-grow relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  placeholder="Search by job title, skill, or keyword..." 
                  className="pl-10 h-12 border-none focus-visible:ring-0 text-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button size="lg" className="bg-secondary text-primary font-bold uppercase tracking-widest h-12 px-10">Search</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="space-y-6">
            <div className="bg-white p-6 border border-gray-200 shadow-sm sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                  <Filter className="w-4 h-4 text-secondary" /> Filter Options
                </h3>
                {hasActiveFilters && (
                  <button 
                    onClick={clearFilters}
                    className="text-[10px] font-bold uppercase text-secondary hover:text-secondary/80 flex items-center gap-1 transition-colors"
                  >
                    <X className="w-3 h-3" /> Clear
                  </button>
                )}
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-500">Industry Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {CATEGORIES.map(cat => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-500">Destination Country</label>
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="All Countries" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Countries</SelectItem>
                      {COUNTRIES.map(c => (
                        <SelectItem key={c.name} value={c.name}>{c.flag} {c.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-500">Experience Level</label>
                  <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Any Experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any Experience</SelectItem>
                      <SelectItem value="entry">Entry (0-2 years)</SelectItem>
                      <SelectItem value="mid">Mid-level (3-5 years)</SelectItem>
                      <SelectItem value="senior">Senior (5+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-10 p-4 bg-gray-50 border border-secondary/20 rounded">
                <p className="text-[10px] text-gray-500 uppercase font-bold leading-tight">Need help?</p>
                <p className="text-xs mt-1">Our career consultants are available to guide you.</p>
                <Button variant="link" className="p-0 h-auto text-xs text-secondary font-bold uppercase mt-2" asChild>
                  <Link href="/contact">Contact Advisor</Link>
                </Button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-6">
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-gray-500">Showing <span className="font-bold text-primary">{filteredJobs.length}</span> positions match your criteria</p>
              <div className="flex gap-2">
                <Select defaultValue="newest">
                  <SelectTrigger className="w-40 h-8 text-xs">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="pay-high">Highest Pay</SelectItem>
                    <SelectItem value="deadline">Closest Deadline</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs.map(job => (
                <Card key={job.id} className="border border-gray-200 hover:border-secondary hover:shadow-lg transition-all flex flex-col group">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-bold uppercase bg-gray-100 text-primary px-2 py-0.5 rounded tracking-widest">{job.category}</span>
                      <span className="text-2xl">{job.flag}</span>
                    </div>
                    <CardTitle className="font-headline text-xl group-hover:text-secondary transition-colors line-clamp-1">{job.title}</CardTitle>
                    <p className="text-sm font-medium text-gray-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-secondary" /> {job.country}
                    </p>
                  </CardHeader>
                  <CardContent className="pb-6 flex-grow space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-[10px] uppercase text-gray-400 font-bold">Hourly Rate</p>
                        <p className="text-sm font-bold text-primary flex items-center">
                          <DollarSign className="w-3 h-3 text-secondary" /> {job.hourlyRate.toFixed(2)} / hr
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] uppercase text-gray-400 font-bold">Experience</p>
                        <p className="text-sm font-bold text-primary flex items-center gap-1">
                          <Clock className="w-3 h-3 text-secondary" /> {job.experience}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed italic border-l-2 border-secondary/30 pl-3">
                      "{job.description}"
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0 flex justify-between items-center border-t border-gray-50 mt-auto pt-4 bg-gray-50/50">
                    <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase">
                      <Calendar className="w-3 h-3" /> Ends {new Date(job.deadline).toLocaleDateString()}
                    </div>
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white font-bold uppercase tracking-widest text-xs h-9" asChild>
                      <Link href={`/jobs/${job.id}`}>View Details <ArrowRight className="ml-2 w-3 h-3" /></Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-24 bg-white border border-dashed border-gray-300 rounded-lg">
                <Search className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                <h3 className="text-xl font-headline font-bold text-primary">No positions found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your search terms or filters.</p>
                <Button variant="link" onClick={clearFilters} className="mt-4 text-secondary font-bold uppercase tracking-widest">Clear All Filters</Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
