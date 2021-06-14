import axiosInstance from "util/axiosInstance";

export const _get = async (ENDPOINT) => {
	return await axiosInstance.get(ENDPOINT);
};

export const _post = async (ENDPOINT, options) => {
	return await axiosInstance.post(ENDPOINT, options);
};
