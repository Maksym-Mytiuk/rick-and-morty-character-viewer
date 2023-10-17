import { useEffect, useState } from 'react';

export default function useFetch(url: string, options?: RequestInit) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const controller = new AbortController();
    const defaultOptions = {
      headers: { 'Content-type': 'application/json' },
      signal: controller.signal,
    };

    async function doFetch() {
      try {
        setLoading(true);
        const response = await fetch(url, { ...defaultOptions, ...options });
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    doFetch();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { loading, error, data };
}
