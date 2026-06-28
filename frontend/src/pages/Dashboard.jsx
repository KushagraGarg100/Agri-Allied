import { useEffect, useState } from 'react';
import Loader from '../components/ui/Loader';
import Toast from '../components/ui/Toast';
import { request } from '../services/api';

export default function Dashboard() {
  const [advisories, setAdvisories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState(null);
  const [form, setForm] = useState({
    query: '',
    sector: '',
    elevation: '1300',
  });

  useEffect(() => {
    loadAdvisories();
  }, []);

  async function loadAdvisories() {
    try {
      setIsLoading(true);
      const data = await request('/api/v1/advisory');
      setAdvisories(data);
    } catch (error) {
      setToast({ message: error.message || 'Unable to reach the backend.', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const payload = {
        query: form.query,
        telemetry: {
          sector: form.sector,
          elevation: Number(form.elevation),
        },
      };
      const created = await request('/api/v1/advisory', {
        method: 'POST',
        body: JSON.stringify(payload),
      });
      setAdvisories([created, ...advisories]);
      setForm({ query: '', sector: '', elevation: '1300' });
      setToast({ message: 'Advisory created successfully.', type: 'success' });
    } catch (error) {
      setToast({ message: error.message || 'Advisory creation failed.', type: 'error' });
    }
  }

  async function toggleResolved(advisory) {
    try {
      const updated = await request(`/api/v1/advisory/${advisory.id}`, {
        method: 'PUT',
        body: JSON.stringify({ resolved: !advisory.resolved, supervisor_notes: 'Updated from dashboard UI' }),
      });
      setAdvisories((current) => current.map((item) => (item.id === updated.id ? updated : item)));
      setToast({ message: 'Advisory updated.', type: 'success' });
    } catch (error) {
      setToast({ message: error.message || 'Update failed.', type: 'error' });
    }
  }

  return (
    <div className="mx-auto min-h-[70vh] max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">AgriGuard AI Dashboard</h1>
      <p className="mt-4 text-lg text-slate-500">
        Live advisory records are now fetched from the FastAPI backend and rendered directly in the UI.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-3">
        <input
          required
          value={form.query}
          onChange={(event) => setForm({ ...form, query: event.target.value })}
          placeholder="Describe the crop issue"
          className="rounded-xl border border-slate-300 px-4 py-3"
        />
        <input
          required
          value={form.sector}
          onChange={(event) => setForm({ ...form, sector: event.target.value })}
          placeholder="Sector"
          className="rounded-xl border border-slate-300 px-4 py-3"
        />
        <div className="flex gap-3">
          <input
            required
            type="number"
            value={form.elevation}
            onChange={(event) => setForm({ ...form, elevation: event.target.value })}
            placeholder="Elevation"
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
          <button type="submit" className="rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white">
            Add
          </button>
        </div>
      </form>

      <div className="mt-8 space-y-4">
        {isLoading ? (
          <Loader isLoading={isLoading} />
        ) : advisories.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-slate-600">
            No advisory records available yet.
          </div>
        ) : (
          advisories.map((advisory) => (
            <div key={advisory.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">{advisory.telemetry?.sector}</p>
                  <h2 className="text-xl font-semibold text-slate-900">{advisory.query}</h2>
                  <p className="mt-2 text-sm text-slate-600">{advisory.ai_response}</p>
                </div>
                <button
                  onClick={() => toggleResolved(advisory)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${advisory.resolved ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'}`}
                >
                  {advisory.resolved ? 'Resolved' : 'Mark Resolved'}
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {toast ? <Toast message={toast.message} type={toast.type} /> : null}
    </div>
  );
}