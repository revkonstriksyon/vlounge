import { useState, useCallback } from "react";

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
}

let toastCounter = 0;

let globalToastFunction: ((params: Omit<Toast, "id">) => { id: string }) | null = null;

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toastFunction = useCallback(
    ({ title, description, variant = "default" }: Omit<Toast, "id">) => {
      const id = (++toastCounter).toString();
      const newToast: Toast = { id, title, description, variant };
      
      setToasts((prev) => [...prev, newToast]);
      
      // Auto-remove toast after 5 seconds
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 5000);
      
      return { id };
    },
    []
  );

  // Set global reference
  globalToastFunction = toastFunction;

  const dismiss = useCallback((toastId: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== toastId));
  }, []);

  return {
    toast: toastFunction,
    toasts,
    dismiss,
  };
}

// Export a standalone toast function
export const toast = (params: Omit<Toast, "id">) => {
  if (!globalToastFunction) {
    console.error("Toast function not initialized. Make sure useToast is called in a component.");
    return { id: "error" };
  }
  return globalToastFunction(params);
};