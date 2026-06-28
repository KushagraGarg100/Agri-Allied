import Banner from '../components/Banner';
import Card from '../components/Card';

export default function Home() {
  const coreFeatures = [
    {
      title: "Context-Grounding Guardrails",
      description: "Our core backend platform isolates LLM tokens, preventing hallucinations and restricting outputs entirely to regional farming profiles.",
      category: "Core AI Engine"
    },
    {
      title: "Low-Bandwidth Mobile Rendering",
      description: "Built strictly for the remote field conditions of the Mandakini Collective, optimized to stream components efficiently over 2G/3G signals.",
      category: "Frontend UI"
    },
    {
      title: "Real-Time Response Pipelines",
      description: "Asynchronous processing ensures immediate answers regarding crop diagnostics, avoiding operational delays.",
      category: "Backend API"
    }
  ];

  return (
    <div>
      <Banner />
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Platform Specifications</h2>
          <p className="mt-2 text-lg text-slate-500">Engineered to support grassroots agricultural management with absolute precision[cite: 1].</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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