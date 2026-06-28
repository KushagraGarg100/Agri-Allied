export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <span className="text-lg font-bold text-white tracking-tight">AgriGuard AI</span>
          <p className="text-xs mt-1">2026 Summer Internship Program - TBI-GEU.</p>
        </div>
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-emerald-400">Privacy Policy</a>
          <a href="#" className="hover:text-emerald-400">Terms of Service</a>
          <a href="#" className="hover:text-emerald-400">Contact Support</a>
        </div>
      </div>
    </footer>
  );
}