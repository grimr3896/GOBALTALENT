import { Cookie, Info, Settings, ShieldCheck } from 'lucide-react';

export default function CookiePolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-primary text-white py-16 official-seal-bg border-b-4 border-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="gold-divider mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tight mb-4">Cookie Policy</h1>
          <p className="text-gray-400 max-w-2xl mx-auto italic font-light">Transparency regarding our use of cookies to enhance your application experience.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white p-12 border border-gray-200 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 text-primary/5 pointer-events-none">
            <Cookie className="w-48 h-48" />
          </div>

          <div className="space-y-10 relative z-10">
            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-primary flex items-center gap-3">
                <Info className="w-6 h-6 text-secondary" /> 1. What are Cookies?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-primary flex items-center gap-3">
                <Settings className="w-6 h-6 text-secondary" /> 2. How We Use Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We use cookies for the following purposes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 border border-gray-100">
                  <h4 className="font-bold text-primary uppercase text-xs mb-2">Essential Cookies</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Necessary for the portal to function properly, such as managing your multi-step application progress.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 border border-gray-100">
                  <h4 className="font-bold text-primary uppercase text-xs mb-2">Security Cookies</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Used to identify and prevent security risks, ensuring your sensitive documents remain protected.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 border border-gray-100">
                  <h4 className="font-bold text-primary uppercase text-xs mb-2">Performance Cookies</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Help us understand how applicants use our site, allowing us to improve the navigation and application speed.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 border border-gray-100">
                  <h4 className="font-bold text-primary uppercase text-xs mb-2">Analytics Cookies</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Standard Google/Firebase analytics to track site traffic patterns (anonymized).
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-primary flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-secondary" /> 3. Managing Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Most web browsers allow some control of most cookies through the browser settings. You can choose to block all cookies, but please be aware that doing so may prevent you from completing your job application successfully.
              </p>
            </section>

            <div className="pt-10 border-t border-gray-100">
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Revised: January 1, 2025</p>
              <p className="text-[10px] text-gray-400 uppercase mt-2">Document ID: GT-POL-002-COOKIES</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
