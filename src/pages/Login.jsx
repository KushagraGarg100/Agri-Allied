import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('supervisor');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder functionality for Week 2 Skeleton
    console.log('Logging in with:', { email, password, role });
    alert(`Authentication request sent for ${email} as ${role}. (Functional binding will be added in future modules).`);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 border border-slate-200 rounded-2xl shadow-sm">
        
        {/* Header Section */}
        <div className="text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 mb-3">
              Login Portal
          </span>
         <h2 className="text-2xl font-black! text-slate-900! tracking-tight block drop-shadow-xs">
              AgriGuard AI
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Sign in to access your regional advisory command center.
          </p>
        </div>

        {/* Form Section */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md space-y-4">
            
            {/* Role Selection Dropdown */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-1">
                Access Tier / Role
              </label>
              <select
                id="role"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-slate-300 placeholder-slate-400 text-slate-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-sm bg-white"
              >
                <option value="supervisor">Field Coordinator / Supervisor</option>
                <option value="user">Standard User</option>
                <option value="officer">Agricultural Extension Officer</option>
              </select>
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-slate-700 mb-1">
                Authorized Email Address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="coordinator@agriguard.org"
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-slate-300 placeholder-slate-400 text-slate-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-sm"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
                Secure Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-slate-300 placeholder-slate-400 text-slate-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-sm"
              />
            </div>
          </div>

          {/* Remember Me & Help Links */}
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-slate-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-slate-700">
                Remember device
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-emerald-600 hover:text-emerald-500">
                Forgot access key?
              </a>
            </div>
          </div>

          {/* Submit Action Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-semibold rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-150"
            >
              Secure Authentication
            </button>
          </div>
        </form>

        {/* Context Disclaimer Notice */}
        <div className="mt-6 p-3 bg-slate-50 rounded-lg border border-slate-100">
          <p className="text-[11px] text-slate-500 leading-relaxed text-center">
            🔒 Restricted Access. Connection logging is operational. Authorized for designated TBI-GEU field operations teams only.
          </p>
        </div>

      </div>
    </div>
  );
}