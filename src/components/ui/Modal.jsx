
/**
 * @param {Object} props
 * @param {boolean} props.isOpen - Evaluation boolean controlling mount layers visibility
 * @param {Function} props.onClose - Trigger execution callback forcing closure state mutations
 * @param {string} props.title - Structural heading string title parameter
 * @param {React.ReactNode} props.children - Slotted child body components
 */
export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
      <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-xl animate-fade-in text-left">
        <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xl font-bold cursor-pointer">&times;</button>
        </div>
        <div className="space-y-4">{children}</div>
      </div>
    </div>
  );
}