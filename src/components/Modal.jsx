import { X } from "lucide-react";
import { useEffect } from "react";

export default function Modal({ title, component: Component, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!title || !Component) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 lg:p-6"
      onClick={onClose}
    >
      <div
        className="bg-card-surface border border-primary-accent/20 rounded-2xl w-full max-w-5xl flex flex-col relative shadow-2xl shadow-black/60 max-h-[85vh]"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside content
      >
        {/* Sticky Modal Header Row */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <h2 className="text-xl lg:text-2xl font-bold text-white tracking-tight">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 border border-white/5 text-[#9CA3AF] hover:text-white hover:bg-white/10 hover:border-white/10 transition-all duration-200"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Context View Area */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 scrollbar-thin scrollbar-thumb-primary-accent/20">
          <Component />
        </div>
      </div>
    </div>
  );
}
