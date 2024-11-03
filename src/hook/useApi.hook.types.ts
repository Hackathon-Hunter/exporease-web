import type { AxiosError } from 'axios';

export type Param = {
  url: string;
  options?: object;
};

export type UseApiReturn<T> = {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
};
