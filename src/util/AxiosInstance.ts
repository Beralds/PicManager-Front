
import { configureEnvironment } from '@/config/env';
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
} from 'axios';


const axiosInstance = axios.create({
  baseURL: configureEnvironment.REACT_APP_API_URL,
});

const onResponse = (response: AxiosResponse): AxiosResponse => {
  if (response.status === 204) response.data = null;

  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const setupInterceptorsTo = (axiosInstance: AxiosInstance): AxiosInstance => {
  axiosInstance.interceptors.response.use(onResponse, onResponseError);

  return axiosInstance;
};

export default setupInterceptorsTo(axiosInstance);
