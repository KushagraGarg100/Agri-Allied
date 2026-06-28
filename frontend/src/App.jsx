
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Login from './pages/Login';
import Showcase from './pages/Showcase';

export default function App() {
  return (
    <BrowserRouter>
      {/* bg-white dark:bg-slate-950 handles the absolute outer shell color.
        selection:bg-emerald-200 provides a nice high-contrast text highlight color.
      */}
      <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col justify-between selection:bg-emerald-200 transition-colors duration-200">
        <Navbar />
        
        {/* CHANGED: Swapped strict 'bg-slate-50' for a responsive 'bg-slate-50 dark:bg-slate-900' selector */}
        <main className="grow flex flex-col justify-start bg-slate-50 dark:bg-slate-900 transition-colors duration-200">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/showcase" element={<Showcase />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}