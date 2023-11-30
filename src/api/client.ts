import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
  baseURL: "https://64103182e1212d9cc92c334f.mockapi.io/api/gym",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

// response interceptor to catch all errors
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function ({ response }: AxiosError<Record<string, any>>) {
    toast(response?.data?.error?.message, {
      type: "error",
      position: toast.POSITION.TOP_CENTER,
    });
  }
);

const get = <T = AxiosResponse["data"]>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  return instance.get(url, config).then((res) => res.data);
};

const post = <T = AxiosResponse["data"]>(
  url: string,
  data: Record<string, any>,
  config?: AxiosRequestConfig
): Promise<T> => {
  return instance.post(url, data, config).then((res) => res.data);
};

const put = <T = AxiosResponse["data"]>(
  url: string,
  data: Record<string, any>,
  config?: AxiosRequestConfig
): Promise<T> => {
  return instance.put(url, data, config).then((res) => res.data);
};

const remove = <T = AxiosResponse["data"]>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  return instance.delete(url, config);
};

const API = {
  get,
  post,
  put,
  remove,
};

export default API;
