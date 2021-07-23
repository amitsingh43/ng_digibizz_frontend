import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { add_error, header_login } from "store/actions";
import "styles/login.css";
import login_banner from "assets/login_banner.png";
import OTPInput from "components/OTPInput";
import { post_user_details } from "screens/questionnaire/store/actions";

export default function Login() {
  const dispatch = useDispatch();
  const masterData = useSelector((state) => state.masterData);
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(header_login());
    // dispatch(get_master_data());
  }, []);

  const sel = document.getElementById("city");

  const [mobile, setMobile] = useState(null);
  const [otp, setOTP] = useState(null);

  const _next = () => {
    var NumberRegex = /^[0-9]*$/;

    if (
      !mobile ||
      mobile.length !== 10 ||
      !NumberRegex.test(mobile) ||
      mobile[0] === "0"
    ) {
      dispatch(add_error("Please enter a valid mobile number"));
      return;
    }

    const body = {
      mobile: mobile,
      otp: otp,
    };

    history.push(`/register/${mobile}`);

    // dispatch(post_user_details(body, Navigate));
  };

  return (
    <div>
      <div className="login-container">
        <div className="row row1">
          <div className="col-lg-5 form">
            <div className="login-intro">
              <div>
                <h2>Welcome to DiGibizz</h2>
                <h5>Begin The Upgrade Now</h5>
              </div>

              <h3 style={{ margin: "3rem 0" }}>Register to Continue</h3>
            </div>

            <div className=" form" style={{ marginTop: "5rem" }}>
              <div className="heading">
                Mobile Number<span>*</span>
              </div>
              <OTPInput setValue={setMobile} value={mobile} setOTP={setOTP} />

              <div className="heading">
                OTP<span>*</span>
              </div>
              <input
                id="otp"
                type="phone"
                className="col-xs-12"
                value={otp}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  if (value.length <= 6) {
                    setOTP(value);
                    localStorage.setItem("otp", value);
                  }
                }}
              />

              <div className="col-lg-12">
                <div className="outer-button">
                  <a
                    id="register"
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      _next();
                    }}
                    style={{ display: "block", width: "100%" }}
                  >
                    <div className="button">Continue</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="visible-lg col-lg-6 col-xs-12 "
            style={{ marginTop: 20 }}
          >
            <div className="login-banner">
              <img src={login_banner} alt="banner" />
            </div>
          </div>
        </div>

        <div className="row row2">
          <div className="col-lg-5" style={{ marginRight: 0 }}></div>
        </div>
      </div>
    </div>
  );
}
