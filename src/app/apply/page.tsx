import { Suspense } from 'react';
import ApplyFormContent from './ApplyFormContent';

export default function ApplyPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-secondary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Loading Application Secure Portal...</p>
        </div>
      </div>
    }>
      <ApplyFormContent />
    </Suspense>
  );
}
