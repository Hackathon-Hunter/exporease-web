import useApi from '@/hook/useApi.hook';
import type { CountryOptionData } from './handler.type';

export const getCountries = () => {
  const { data, error, loading } = useApi<CountryOptionData>({
    url: '/option/countries',
  });

  return data ?? [];
};
