import { useToast } from "@/hooks/use-toast";

export default function ToastContainer() {
  const { toasts, dismiss } = useToast();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`p-4 rounded-lg shadow-lg max-w-sm ${
            toast.variant === "destructive"
              ? "bg-red-600 text-white"
              : "bg-gray-800 text-white border border-orange-500/30"
          }`}
        >
          {toast.title && (
            <div className="font-semibold">{toast.title}</div>
          )}
          {toast.description && (
            <div className="text-sm opacity-90">{toast.description}</div>
          )}
          <button
            onClick={() => dismiss(toast.id)}
            className="absolute top-2 right-2 text-white/70 hover:text-white"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}