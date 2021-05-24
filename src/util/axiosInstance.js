// import { BACKEND_URL } from "#constants";
import axios from "axios";
const axiosInstance = axios.create({
	baseURL: "http://0.0.0.0:3061",
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Content-Type": "application/json",
	},
});
// Add a request interceptor
axiosInstance.interceptors.request.use(
	function (config) {
		// const { token } = localStorage;
		// if (!!token) config.headers["x-auth-token"] = token;
		// Do something before request is sent
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);
// Add a response interceptor
axiosInstance.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response.data;
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);
	}
);
export default axiosInstance;
