import { useState } from "react";
import OTPInput from "components/OTPInput";
import {
  TERMS_AND_CONDITIONS_1,
  TERMS_AND_CONDITIONS_2,
  COMPANY_NAME,
} from "store/strings";
import TAndC from "components/termsAndConditions";

const Form = ({
  masterData,
  url,
  save_basic_details,
  title,
  availNowResponseText,
  more,
  showmore,
}) => {
  const { cities } = masterData;

  const [data, setData] = useState({
    full_name: null,
    business_name: null,
    mobile: null,
    //otp: null,
    cities_master_id: null,
    partner_availed: title,
    referral_code: null,
  });

  const [cityName, setCityName] = useState(null);

  const setMobileNumber = function (mobile) {
    setData({ ...data, mobile });
  };

  const [isChecked, setCheck] = useState(false);

  const setOTPValue = function (otp) {
    setData({ ...data, otp });
  };

  if (more) {
    return <TAndC showmore={showmore} setCheck={setCheck} />;
  }
  console.log(more, "more");
  return (
    <div className={"partner-form"}>
      <div className={"form-body"}>
        <h3>Inquire Now</h3>
        <h5>Mobile Number</h5>
        {/* <input
					value={data.mobile}
					maxLength={10}
					onChange={(e) => {
						const value = e.target.value.replace(/\D/g, '');
						if (value.length <= 10) {
							setData((data) => ({ ...data, mobile: value }));
						}
					}}
				/> */}
        <OTPInput
          value={data.mobile}
          setValue={setMobileNumber}
          className="wrapper"
          setOTP={setOTPValue}
        />
        <h5>OTP</h5>
        <input
          value={data.otp}
          maxLength={6}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "");
            if (value.length <= 6) {
              setData((data) => ({ ...data, otp: value }));
            }
          }}
        />
        <h5>Full name</h5>
        <input
          value={data.full_name}
          onChange={(e) =>
            setData((data) => ({ ...data, full_name: e.target.value }))
          }
        />
        <h5>Business Name</h5>
        <input
          value={data.business_name}
          onChange={(e) =>
            setData((data) => ({ ...data, business_name: e.target.value }))
          }
        />
        <h5>City</h5>
        <select
          onChange={(e) => {
            setData((data) => ({ ...data, cities_master_id: e.target.value }));
            setCityName(
              cities.find((city) => (city._id = e.target.value)).name
            );
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
        <h5>Referral Code (Optional)</h5>
        <input
          value={data.referral_code}
          onChange={(e) =>
            setData((data) => ({ ...data, referral_code: e.target.value }))
          }
        />

        <div style={{ display: "flex" }}>
          <input
            id="checkbox"
            type="checkbox"
            style={{ width: "auto", marginRight: 15 }}
            defaultChecked={isChecked}
            onChange={() => setCheck(!isChecked)}
          />
          <div>
            {TERMS_AND_CONDITIONS_1}
            <a href="https://www.neogrowth.in" target="_blank" rel="noreferrer">
              <span className="site">
                <strong>{COMPANY_NAME}</strong>
              </span>
            </a>
            {TERMS_AND_CONDITIONS_2}
            <span
              className="more"
              onClick={() => {
                showmore(!more);
                window.scrollTo(0, 0);
              }}
            >
              {more ? "Less-" : "More+"}
            </span>
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <a>
            <div
              className={"avail-now"}
              onClick={() => {
                save_basic_details(data, url, cityName, availNowResponseText);
              }}
            >
              {title === "Moneyfy" ? "Download App Now" : "Avail Now"}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Form;
