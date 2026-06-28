export default function Card({ title, description, category, actionText }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition duration-200 flex flex-col justify-between">
      <div className="p-6">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 mb-4">
          {category}
        </span>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 text-right">
        <button className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">
          {actionText || "Learn More →"}
        </button>
      </div>
    </div>
  );
}