import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Loader from '../components/ui/Loader';
import { request } from '../services/api';

export default function Home() {
  const [backendStatus, setBackendStatus] = useState('checking');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadHealth() {
      try {
        const data = await request('/health');
        setBackendStatus(data.status === 'ok' ? 'Live' : 'Checking');
      } catch (error) {
        setBackendStatus('Offline');
      } finally {
        setIsLoading(false);
      }
    }

    loadHealth();
  }, []);

  const coreFeatures = [
    {
      title: 'Context-Grounding Guardrails',
      description: 'Our core backend platform isolates LLM tokens, preventing hallucinations and restricting outputs entirely to regional farming profiles.',
      category: 'Core AI Engine',
    },
    {
      title: 'Low-Bandwidth Mobile Rendering',
      description: 'Built strictly for the remote field conditions of the Mandakini Collective, optimized to stream components efficiently over 2G/3G signals.',
      category: 'Frontend UI',
    },
    {
      title: 'Real-Time Response Pipelines',
      description: 'Asynchronous processing ensures immediate answers regarding crop diagnostics, avoiding operational delays.',
      category: 'Backend API',
    },
  ];

  return (
    <div>
      <Banner />
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Platform Specifications</h2>
          <p className="mt-2 text-lg text-slate-500">Engineered to support grassroots agricultural management with absolute precision.</p>
        </div>

        <div className="mx-auto mb-10 flex max-w-xl items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-4 text-sm font-medium text-emerald-800 shadow-sm">
          {isLoading ? <Loader isLoading={isLoading} /> : <span>Backend status: {backendStatus}</span>}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {coreFeatures.map((feat, index) => (
            <Card
              key={index}
              title={feat.title}
              description={feat.description}
              category={feat.category}
              actionText="Inspect Module →"
            />
          ))}
        </div>
      </div>
    </div>
  );
}