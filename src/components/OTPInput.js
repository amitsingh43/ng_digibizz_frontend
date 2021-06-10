import { useReducer, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { add_error, getOTP } from 'store/actions';
import 'styles/common/otpInput.css';

const otpStateTypes = {
	INITIAL: 0,
	WAITING: 1,
	ACTIVE: 3,
};
const timer = 60;

const initialState = { type: otpStateTypes.INITIAL, text: 'Get OTP', value: timer };

function reducer(state, action) {
	switch (action.type) {
		case 'decrement':
			return { ...state, type: otpStateTypes.WAITING, value: state.value - 1, text: `retry in ${state.value}s` };
		case 'reset':
			return initialState;
		case 'resend':
			return { ...state, type: otpStateTypes.ACTIVE, text: 'Resend OTP', value: timer };
		default:
			throw new Error();
	}
}

export default function OTPInput({ setValue, value, className, setOTP }) {
	const [otpState, dispatchOtp] = useReducer(reducer, initialState);
	const dispatch = useDispatch();

	const handleOTP = async () => {
		if (otpState.type === otpStateTypes.WAITING) return;
		if (!value || value.length !== 10) {
			dispatch(add_error('Please enter a valid mobile number'));
			return;
		}
		dispatchOtp({ type: 'decrement' });
		await dispatch(getOTP(value));
		if (process.env.isProd === 'no') {
			setOTP(localStorage.getItem('otp'));
		}
	};

	useEffect(() => {
		let timer = null;
		if (otpState.type === otpStateTypes.WAITING) {
			timer = setInterval(() => {
				if (otpState.value === 0) {
					clearInterval(timer);
					dispatchOtp({ type: 'resend' });
					return;
				}
				dispatchOtp({ type: 'decrement' });
			}, 1000);
		}

		return () => {
			if (timer) {
				clearInterval(timer);
			}
		};
	}, [otpState.type, otpState.value, dispatchOtp]);

	return (
		<div className={`number-wrapper ${className}`}>
			<input
				id="phone"
				type="phone"
				className="col-xs-12"
				value={value}
				onChange={(e) => {
					const value = e.target.value.replace(/\D/g, '');
					if (value.length <= 10) {
						setValue(value);
						localStorage.setItem('mobile', value);
					}
				}}
			/>
			<span
				className="send-otp"
				onClick={handleOTP}
				style={{ cursor: otpState.type === otpStateTypes.WAITING ? 'auto' : 'pointer' }}
			>
				{otpState.text}
			</span>
		</div>
	);
}
