import { useState, useCallback } from "react";

export default function useToast() {
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message, type = "info") => {
    setToast({ message, type });
  }, []);

  const hideToast = useCallback(() => {
    setToast(null);
  }, []);

  const showSuccess = useCallback(
    (message) => {
      showToast(message, "success");
    },
    [showToast]
  );

  const showError = useCallback(
    (message) => {
      showToast(message, "error");
    },
    [showToast]
  );

  const showInfo = useCallback(
    (message) => {
      showToast(message, "info");
    },
    [showToast]
  );

  return {
    toast,
    showToast,
    hideToast,
    showSuccess,
    showError,
    showInfo,
  };
}
