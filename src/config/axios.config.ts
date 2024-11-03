import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000
});

axiosInstance.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    config.headers['Content-Type'] = 'multipart/form-data';

    const configWithProgress = config as any;

    if (configWithProgress.onUploadProgress) {
      configWithProgress.onUploadProgress = (progressEvent: ProgressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / (progressEvent?.total || 1)
        );
        if (configWithProgress.onProgress)
          configWithProgress.onProgress(percentCompleted, 'upload');
      };
    }

    if (configWithProgress.onDownloadProgress) {
      configWithProgress.onDownloadProgress = (
        progressEvent: ProgressEvent
      ) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / (progressEvent.total || 1)
        );
        if (configWithProgress.onProgress)
          configWithProgress.onProgress(percentCompleted, 'download');
      };
    }

    return config;
  },
  error => Promise.reject(error)
);

export default axiosInstance;
