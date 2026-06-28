import { useState } from 'react';
import { Button, Input, Modal, Toast, Loader } from '../components/ui';

export default function Showcase() {
  const [text, setText] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const triggerLoaderDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    // The main container now explicitly respects the dark mode color scheme
    <div className="max-w-4xl mx-auto px-4 py-12 text-left space-y-12 transition-colors duration-200">
      
      {/* Platform Header */}
      <div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white transition-colors duration-200">
          Design System & UI Component Lab
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2 transition-colors duration-200">
          Operational control environment for previewing, testing, and verifying global interactive interface primitives across the platform architecture.
        </p>
      </div>

      {/* Component Sandbox Canvas - Added transition-colors to allow soft thematic shifting */}
      <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-6 shadow-xs transition-colors duration-200">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white transition-colors duration-200">
          Core Interface Elements
        </h2>
        
        {/* Actions Pipeline */}
        <div className="flex flex-wrap gap-4">
          <Button onClick={() => setModalOpen(true)}>Launch Dialog Modal</Button>
          <Button 
            onClick={() => { 
              setShowToast(true); 
              setTimeout(() => setShowToast(false), 3000); 
            }} 
            variant="secondary"
          >
            Dispatch Toast Alert
          </Button>
          <Button onClick={triggerLoaderDemo} variant="primary">
            Initialize Stream Loader
          </Button>
        </div>

        {/* Global System Loader Container */}
        <Loader isLoading={loading} />

        {/* Operational Query Interface */}
        <Input 
          label="Regional Field Diagnostic Search" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Enter region code or crop category (e.g., KDV-02 Wheat)..." 
        />
      </div>

      {/* Reusable Action Modal Window */}
      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        title="System Security Integrity Dispatch"
      >
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          This system dialogue acts as a structural sandbox to verify transactional user handshakes and parameter constraints before updates commit to the platform core.
        </p>
        <div className="flex justify-end gap-3 mt-4">
          <Button onClick={() => setModalOpen(false)} variant="secondary">Cancel</Button>
          <Button onClick={() => setModalOpen(false)}>Confirm Action</Button>
        </div>
      </Modal>

      {/* Contextual System Notification Layer */}
      {showToast && (
        <Toast 
          message="Platform synchronization completed successfully." 
          type="success" 
        />
      )}
    </div>
  );
}