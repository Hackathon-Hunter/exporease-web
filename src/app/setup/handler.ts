import useApi from '@/hook/useApi.hook';
import type { CountryOptionData } from './handler.type';

export const getCountries = () => {
  const { data, error, loading } = useApi<CountryOptionData>({
    url: '/option/countries'
  });

  return data
    ? data.map(item => ({ value: item.value, label: item.option }))
    : [];
};

export const uploadProductPhoto = (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = useApi<string>({
    url: '/cloudinary/upload',
    options: {
      data: formData
    },
    method: 'POST'
  });
  
  return response;
};