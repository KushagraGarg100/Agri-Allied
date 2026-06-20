import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <div className="bg-linear-to-br from-emerald-50 to-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 text-center lg:text-left lg:flex lg:items-center lg:justify-between gap-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl md:text-6xl tracking-tight">
            Intelligent Guidance for <span className="text-emerald-600">Mountain Farmers</span>
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Instant, context-grounded crop advisory system designed to eliminate informational boundaries in remote agricultural regions[cite: 1].
          </p>
          <div className="mt-8">
            <Link to="/dashboard" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition duration-150">
              Launch Advisory Chatbot
            </Link>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 bg-emerald-100 w-full lg:w-96 h-64 rounded-2xl flex items-center justify-center border border-emerald-200 text-emerald-700 font-semibold shadow-inner">
          [ Interactive Map Placeholder ]
        </div>
      </div>
    </div>
  );
}