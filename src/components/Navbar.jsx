import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="shrink-0 flex items-center">
            <span className="text-2xl font-bold text-emerald-600 tracking-tight">AgriGuard AI</span>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            <Link to="/" className="text-slate-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium">Home</Link>
            <Link to="/dashboard" className="text-slate-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium">Dashboard</Link>
            <Link to="/about" className="text-slate-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium">About</Link>
            <Link to="/login" className="text-slate-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium">Login</Link>
          </div>
          <div className="flex items-center bg-slate-100 p-2 rounded-full cursor-pointer hover:bg-slate-200">
            <div className="h-6 w-6 rounded-full bg-emerald-500"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}