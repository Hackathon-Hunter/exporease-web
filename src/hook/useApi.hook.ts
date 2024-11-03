import { useState, useEffect } from 'react';

import { AxiosError } from 'axios';

import axiosInstance from '@/config/axios.config';

import type { Param, UseApiReturn } from './useApi.hook.types';

const useApi = <T>({ url, options }: Param): UseApiReturn<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get<T>(url, options);
        setData(response.data);
      } catch (err) {
        setError(err as AxiosError);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, options]);

  return { data, loading, error };
};

export default useApi;
