import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.API_URL,
});

apiClient.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const res = error.response;
    if (res.status === 401) {
      window.location.href = `${process.env.BASE_URL}#/login`;
    }
    console.error(`Looks like there was a problem. Status Code: ${res.status}`);
    Promise.reject(error);
  }
);

const { get, post, put, delete: destroy } = apiClient;
export { get, post, put, destroy };
