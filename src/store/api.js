import axiosInstance from "../util/axiosInstance";
import axios from "axios";

export const _get = async (ENDPOINT) => {
	return await axiosInstance.get(ENDPOINT);
};

export const _post = async (ENDPOINT, options) => {
	return await axiosInstance.post(ENDPOINT, options);
};

// export const _download = async (lead_id) => {
// 	try {
// 	} catch (error) {
// 		return err;
// 	}
// };
