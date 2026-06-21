
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle'; // 1. Imported the ThemeToggle component

export default function Navbar() {
  return (
    // Added dark:bg-slate-950 and dark:border-slate-800 to adapt to dark mode changes
    <nav className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Left Side: App Branding */}
          <div className="shrink-0 flex items-center">
            <span className="text-2xl font-bold text-emerald-600 tracking-tight">AgriGuard AI</span>
          </div>
          
          {/* Middle: Navigation Links (Added dark:text / dark:hover variants) */}
          <div className="hidden sm:flex sm:space-x-8">
            <Link to="/" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 py-2 text-sm font-medium">Home</Link>
            <Link to="/dashboard" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 py-2 text-sm font-medium">Dashboard</Link>
            <Link to="/about" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 py-2 text-sm font-medium">About</Link>
            <Link to="/showcase" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 py-2 text-sm font-medium">UI Lab</Link>
            <Link to="/login" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 py-2 text-sm font-medium">Login</Link>
          </div>
          
          {/* Right Side: Consolidated Action Panel */}
          <div className="flex items-center gap-4">
            
            {/* 2. Embedded the Theme Switcher */}
            <ThemeToggle />
            
            {/* User Profile Avatar */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-2 rounded-full cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition">
              <div className="h-6 w-6 rounded-full bg-emerald-500"></div>
            </div>
            
          </div>
        </div>
      </div>
    </nav>
  );
}