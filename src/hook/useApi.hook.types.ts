import type { AxiosError, AxiosRequestConfig } from 'axios';

export type Param = {
  url: string;
  options?: {
    data: any,
  };
  method?: 'GET' | 'POST';
};

export type UseApiReturn<T> = {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
};
