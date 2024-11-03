import { useState, useEffect } from 'react';
import { AxiosError } from 'axios';
import axiosInstance from '@/config/axios.config';
import type { Param, UseApiReturn } from './useApi.hook.types';

const useApi = <T>({
  url,
  options,
  method = 'GET'
}: Param): UseApiReturn<T> & { progress: number } => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setProgress(0);

      try {
        const axiosOptions = {
          ...options,
          onProgress: (percent: number, type: 'upload' | 'download') => {
            setProgress(percent);
          }
        };

        let response;
        if (method === 'POST') {
          response = await axiosInstance.post<T>(
            url,
            options?.data,
            axiosOptions
          );
        } else {
          response = await axiosInstance.get<T>(url, axiosOptions);
        }

        setData(response.data);
      } catch (err) {
        setError(err as AxiosError);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options, method]);

  return { data, loading, error, progress };
};

export default useApi;
