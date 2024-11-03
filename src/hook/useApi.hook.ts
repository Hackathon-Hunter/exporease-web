import { useState, useEffect } from 'react';
import { AxiosError } from 'axios';
import axiosInstance from '@/config/axios.config';
import type { Param, UseApiReturn } from './useApi.hook.types';

const useApi = <T>({
  url,
  options,
  method = 'GET'
}: Param): UseApiReturn<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        let response;
        if (method === 'POST') {
          response = await axiosInstance.post<T>(
            url,
            options?.data,
          );
        } else {
          response = await axiosInstance.get<T>(url);
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

  return { data, loading, error };
};

export default useApi;
