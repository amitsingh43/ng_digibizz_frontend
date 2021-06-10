import { useState } from 'react';
import OTPInput from 'components/OTPInput';

const Form = ({ masterData, url, save_basic_details, title, availNowResponseText }) => {
	const { cities } = masterData;

	const [data, setData] = useState({
		full_name: null,
		business_name: null,
		mobile: null,
		//otp: null,
		cities_master_id: null,
		partner_availed: title,
	});
	const [cityName, setCityName] = useState(null);
	// const setMobileNumber = function (mobile) {
	// 	setData({ ...data, mobile });
	// };


	// const setOTPNumber = function (otp) {
	// 	setData({ ...data, otp });
	// };

	return (
		<div className={'partner-form'}>
			<div className={'form-body'}>
				<h3>Inquire Now</h3>
				<h5>Mobile Number</h5>
				<input
          value={data.mobile}
          maxLength={10}
          onChange={(e) => {
						const value=e.target.value.replace(/\D/g, "");;
						if(value.length <= 10){
						setData(data=> ({ ...data, mobile: value}));
						}
					}
					}
        />
				{/* <OTPInput value={data.mobile} setValue={setMobileNumber} className='wrapper' setOTP={setOTPValue}/>
				<h5>OTP</h5>
				<input
					value={data.otp}
					maxLength={6}
					onChange={(e) => {
						const value = e.target.value.replace(/\D/g, '');
						if (value.length <= 6) {
							setData((data) => ({ ...data, otp: value }));
						}
					}}
				/> */}
				<h5>Full name</h5>
				<input
					value={data.full_name}
					onChange={(e) => setData((data) => ({ ...data, full_name: e.target.value }))}
				/>
				<h5>Business Name</h5>
				<input
					value={data.business_name}
					onChange={(e) => setData((data) => ({ ...data, business_name: e.target.value }))}
				/>
				<h5>City</h5>
				<select
					onChange={(e) => {
						setData((data) => ({ ...data, cities_master_id: e.target.value }));
						setCityName(cities.find((city) => (city._id = e.target.value)).name);
					}}
				>
					<option selected disabled>
						Select City
					</option>
					{cities &&
						cities.map((city, index) => (
							<option value={city._id} key={index}>
								{city.name}
							</option>
						))}
				</select>
				<div>
					<a>
						<div
							className={'avail-now'}
							onClick={() => save_basic_details(data, url, cityName, availNowResponseText)}
						>
							Avail Now
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Form;
