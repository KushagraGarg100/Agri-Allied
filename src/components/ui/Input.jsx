
/**
 * @param {Object} props
 * @param {string} props.label - Descriptive label positioned above input element canvas
 * @param {string} props.value - Controlled input bound parameter tracking text states
 * @param {Function} props.onChange - State updater handler function fired on text mutation
 * @param {string} [props.placeholder] - Visual instruction prompt background context
 * @param {string} [props.type='text'] - Functional evaluation attribute type mapping
 */
export default function Input({ label, value, onChange, placeholder, type = 'text' }) {
  return (
    <div className="w-full text-left">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
    </div>
  );
}