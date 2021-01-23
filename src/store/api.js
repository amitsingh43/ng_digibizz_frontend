import axiosInstance from "../util/axiosInstance";

export const _get = async (ENDPOINT = "/movies.json") => {
	try {
		const respone = await axiosInstance.get(ENDPOINT);
		return respone;
	} catch (error) {
		alert(error);
		return error;
	}
};

export const _post = async (
	ENDPOINT = "https://reactnative.dev/movies.json",
	options
) => {
	try {
		const respone = await axiosInstance(ENDPOINT, options);
		return respone.data;
	} catch (error) {
		return error;
	}
};
