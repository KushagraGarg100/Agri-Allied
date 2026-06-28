
/**
 * @param {Object} props
 * @param {string} props.message - Flash confirmation alert text rendered inside container
 * @param {'success' | 'error'} [props.type='success'] - System evaluation alert classification status
 */
export default function Toast({ message, type = 'success' }) {
  const colors = {
    success: "bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-950/50 dark:border-emerald-800 dark:text-emerald-300",
    error: "bg-rose-50 border-rose-200 text-rose-800 dark:bg-rose-950/50 dark:border-rose-800 dark:text-rose-300"
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 px-4 py-3 border rounded-xl shadow-lg flex items-center gap-2 max-w-sm font-medium text-sm animate-bounce ${colors[type]}`}>
      <span>{type === 'success' ? '✓' : '⚠'}</span>
      <p>{message}</p>
    </div>
  );
}