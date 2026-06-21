
/**
 * @param {Object} props
 * @param {string} props.children - The inner text or elements of the button
 * @param {Function} props.onClick - Execution call trigger event handler
 * @param {'primary' | 'secondary'} [props.variant='primary'] - Visual hierarchy style
 * @param {boolean} [props.disabled=false] - Conditional control state disabling interaction
 */
export default function Button({ children, onClick, variant = 'primary', disabled = false }) {
  const baseStyle = "px-4 py-2 rounded-lg font-semibold text-sm transition duration-150 focus:outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600",
    secondary: "bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
  };

  return (
    <button type="button" onClick={onClick} disabled={disabled} className={`${baseStyle} ${variants[variant]}`}>
      {children}
    </button>
  );
}