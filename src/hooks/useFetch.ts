import { useEffect, useState } from 'react';

type FetchResult<T> = {
  loading: boolean;
  error: Error | null;
  data: T | null;
};

const defaultOptions = {
  headers: { 'Content-type': 'application/json' },
};

export default function useFetch<T>(url: string, options?: RequestInit): FetchResult<T> {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function doFetch() {
      try {
        setLoading(true);
        const response = await fetch(url, { ...defaultOptions, ...options, signal: controller.signal });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData: T = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error occurred during fetch'));
      } finally {
        setLoading(false);
      }
    }

    doFetch();

    return () => {
      controller.abort();
    };
  }, [url, options]);

  return { loading, error, data };
}
