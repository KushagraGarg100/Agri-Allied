
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
      {/* min-h-screen creates a view container that takes up at least 100% of the viewport height */}
      <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-emerald-200">
        <Navbar />
        
        {/* flex-grow / grow stretches the area dynamically to push the footer cleanly to the very bottom */}
        <main className="grow flex flex-col justify-start">
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