import axiosInstance from "../util/axiosInstance";
import axios from "axios";

export const _get = async (ENDPOINT) => {
	try {
		const respone = await axiosInstance.get(ENDPOINT);
		return respone;
	} catch (error) {
		return error;
	}
};

export const _post = async (ENDPOINT, options) => {
	try {
		const respone = await axiosInstance.post(ENDPOINT, options);
		return respone;
	} catch (error) {
		return error;
	}
};

// export const _download = async (lead_id) => {
// 	try {
// 	} catch (error) {
// 		return err;
// 	}
// };
