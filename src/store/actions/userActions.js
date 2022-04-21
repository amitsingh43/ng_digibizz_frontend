import show_toast from 'util/showToast';
import { _post, _get } from 'store/api';
import { add_error } from './errorActions';
import Tracking from 'util/tracking';
import { SET_USER_DETAILS, RESET_USER } from 'store/actionTypes';

export const set_user_details = (details) => {
	return {
		type: SET_USER_DETAILS,
		payload: details,
	};
};
export const reset_user = () => {
	return {
		type: RESET_USER,
	};
};

export const update_lead =
	(body, ENDPOINT = '/api/update_lead') =>
		async (dispatch) => {
			try {
				const { lead } = await _post(ENDPOINT, body);
				if (body.partner_availed === 'NeoGrowth') {
					if (!localStorage.getItem('NG LOAN LEADS')) {
						localStorage.setItem('NG LOAN LEADS', 'true');
						Tracking.trackEvent('CLICK', 'NG LOAN LEADS', 'APPLY NOW');
					}
					show_toast('Thank you, someone will get in touch with you', 'SUCCESS');
				} else {
					if (!localStorage.getItem('body.partner_availed')) {
						localStorage.setItem(body.partner_availed, 'true');
						Tracking.trackEvent('CLICK', 'PARTNER LEADS', body.partner_availed);
					}
					show_toast('Thank you', 'SUCCESS');
				}
				dispatch(set_user_details(lead));
			} catch (error) {
				let message = 'Something went wrong! Please try later.';

				if (error && error.response && error.response.data && error.response.data.message) {
					message = error.response.data.message;
				}
				dispatch(add_error(message));
			}
		};

export const save_basic_details =
	(body, url, cityName, ENDPOINT = '/api/save_basic_details') =>
		async (dispatch) => {
			try {
				const { lead, message } = await _post(ENDPOINT, body);
				dispatch(set_user_details(body));
				if (body.partner_availed === 'NeoGrowth') {
					Tracking.trackEvent('CLICK', 'NG LOAN LEADS', 'APPLY NOW');
					show_toast(message, 'SUCCESS');
					return;
				} else {
					Tracking.trackEvent('CLICK', 'PARTNER LEADS', body.partner_availed);
					if (body.partner_availed === 'Moneyfy') {
						show_toast(message, 'SUCCESS', 20000);
					} else {
						show_toast(message, 'SUCCESS', 3000);
					}
				}
				window.open(url, '_blank');
			} catch (error) {
				let message = 'Something went wrong! Please try later.';

				if (error && error.response && error.response.data && error.response.data.message) {
					message = error.response.data.message;
				}
				dispatch(add_error(message));
			}
		};

export const getOTP =
	(phone, ENDPOINT = '/send_otp') =>
		async (dispatch) => {
			try {
				const res = await _post(ENDPOINT, { phone });
				if (process.env.isProd === 'no') {
					localStorage.setItem('otp', res.data.password);
				}
				show_toast(res.message, 'SUCCESS');
			} catch (error) {
				let message = 'Something went wrong! Please try later.';

				if (error && error.response && error.response.data && error.response.data.message) {
					message = error.response.data.message;
				}
				dispatch(add_error(message));
			}
		};
export const show_form =
	(leadID, ENDPOINT = '/api/get_lead/') =>
		async (dispatch) => {
			try {
				const { mobile_verified } = await _get(ENDPOINT + leadID);
				return mobile_verified;
			} catch (error) {
				let message = 'Something went wrong! Please try later.';

				if (error && error.response && error.response.data && error.response.data.message) {
					message = error.response.data.message;
				}
				dispatch(add_error(message));
			}
		};

// export const get_gender =
//   (ENDPOINT = "/master_data/get_genders") =>
//   async (dispatch) => {
//     try {
//       const gender = await _get(ENDPOINT);
//       dispatch(set_master_data({ gender }));
//     } catch (error) {
//       let message = "Something went wrong! Please try later.";

//       if (
//         error &&
//         error.response &&
//         error.response.data &&
//         error.response.data.message
//       ) {
//         message = error.response.data.message;
//       }
//       dispatch(add_error(message));
//     }
//   };
