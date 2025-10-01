import { useState } from "react";

// A reusable hook to handle API calls with loading state
export const useApiAction = () => {
  const [loading, setLoading] = useState(false);

  const runApi = async (apiFn, fallbackMessage, callback) => {
    setLoading(true);
    try {
      const response = await apiFn();

      // Check status (either directly or inside response.data)
      const status = response?.status || response?.data?.status;
      if (![200, 201].includes(status)) {
        alert(response?.data?.message || fallbackMessage); // replace with toast if you have one
        callback?.(null, response);
        return;
      }

      callback?.(true, response?.data ?? response, null);
    } catch (error) {
      callback?.(null, error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, setLoading, runApi };
};
