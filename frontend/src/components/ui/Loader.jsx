
/**
 * @param {Object} props
 * @param {boolean} props.isLoading - System switch trigger enabling loading ring canvas state
 */
export default function Loader({ isLoading }) {
  if (!isLoading) return null;
  return (
    <div className="flex items-center justify-center p-4">
      <div className="animate-spin rounded-full h-8 w-8 border-4 border-slate-200 border-t-emerald-600"></div>
    </div>
  );
}