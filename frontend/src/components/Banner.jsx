import { useState } from 'react'; 
import { Link } from 'react-router-dom';

export default function Banner() {

  const regions = [
    { name: "Kedarnath Valley", status: "Optimal", activeSectors: 14, elevation: "3,500m" },
    { name: "Guptkashi Sector", status: "Pest Alert", activeSectors: 9, elevation: "1,319m" },
    { name: "Okhimath Cluster", status: "Optimal", activeSectors: 11, elevation: "1,300m" }
  ];
  
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  // ... your existing states and mock regions array remain exactly the same ...

  return (
    /* CHANGED: Added 'dark:from-slate-900 dark:via-slate-950 dark:to-slate-900' 
      and 'dark:border-slate-800' to force the main canvas area to turn dark.
    */
    <div className="bg-linear-to-br from-emerald-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between gap-12">
        
        {/* Left Section: Headline text controls */}
        <div className="max-w-2xl text-left">
          {/* Changed badge wrapper backgrounds for dark theme consistency */}
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300 mb-4 transition-colors duration-200">
            📍 Active Deployment: Garhwal Region
          </span>
          
          {/* Added dark:text-white so it flips when dark mode goes live */}
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl md:text-6xl tracking-tight leading-tight transition-colors duration-200">
            Intelligent Guidance for <span className="text-emerald-600 dark:text-emerald-400">Mountain Farmers</span>
          </h1>
          
          {/* Added dark:text-slate-400 */}
          <p className="mt-4 text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-200">
            Instant, context-grounded crop advisory system designed to eliminate informational boundaries in remote agricultural regions.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link to="/dashboard" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 shadow-xs transition duration-150">
              Launch Advisory Chatbot
            </Link>
            {/* Added dark variant for secondary buttons */}
            <Link to="/about" className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 dark:border-slate-800 text-base font-semibold rounded-xl text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition duration-150">
              Review Safety Architecture
            </Link>
          </div>
        </div>

        {/* Right Section: The Map Widget - Added dark:bg-slate-900 and dark:border-slate-800 */}
        <div className="mt-10 lg:mt-0 w-full lg:w-420px bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs transition-colors duration-200">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm tracking-tight transition-colors duration-200">Regional Monitoring Subsystem</h3>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </div>

          {/* Region Action Tabs loop */}
          <div className="space-y-2">
            {regions.map((region) => (
              <button
                key={region.name}
                type="button"
                onClick={() => setSelectedRegion(region)}
                className={`w-full text-left p-3 rounded-xl border transition flex items-center justify-between cursor-pointer ${
                  selectedRegion.name === region.name
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-900 dark:bg-emerald-950/30 dark:border-emerald-500 dark:text-emerald-300 font-medium'
                    : 'bg-slate-50 border-slate-100 text-slate-600 hover:bg-slate-100 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800'
                }`}
              >
                <div className="text-left">
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Zone</p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{region.name}</p>
                </div>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                  region.status === 'Optimal' 
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' 
                    : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                }`}>
                  {region.status}
                </span>
              </button>
            ))}
          </div>

          {/* Dynamic Metrics Data Container - Added dark:bg-slate-950 */}
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-4 text-left bg-slate-50 dark:bg-slate-950 p-3 rounded-xl transition-colors duration-200">
            <div>
              <p className="text-[11px] font-semibold text-slate-400 uppercase">Active Sectors</p>
              <p className="text-base font-bold text-slate-800 dark:text-slate-200">{selectedRegion.activeSectors} Cooperatives</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-slate-400 uppercase">Avg Elevation</p>
              <p className="text-base font-bold text-slate-800 dark:text-slate-200">{selectedRegion.elevation}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}