import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add_error, header_login } from "store/actions";
import "styles/login.css";
import login_banner from "assets/login_banner.png";
import OTPInput from "components/OTPInput";
import { post_user_details, socialLoginUpdate } from "screens/questionnaire/store/actions";
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import {
  COMPANY_NAME,
  TERMS_AND_CONDITIONS_2,
  TERMS_AND_CONDITIONS_1,
} from "store/strings";
import TAndC from "components/termsAndConditions";




export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(header_login());
    // dispatch(get_master_data());
  }, []);

  const [mobile, setMobile] = useState(null);
  const [otp, setOTP] = useState(null);
  const [more, showmore] = useState(false);
  const [isChecked, setCheck] = useState(false);
  const [signup, setSignup] = useState(false);
  const [googleR, setGoogleR] = useState({});


  const responseGoogleOnFail = (response) => {
    console.log({fail: response});
    //setGoogleR(response)
  }

  const Navigate = (body) => {
    history.push(`/register/${body.email}/${body.full_name}`);
  };

  const responseGoogleOnSuccess = (response) => {
    console.log({success: response});
    if (response.accessToken){
      let profileDetail = response.profileObj;
      console.log({profileObj: profileDetail});

      let requestData = {
        full_name: profileDetail.name,
        email: profileDetail.email,
        token: response.accessToken,
        login_type: "google"
      }
      dispatch(socialLoginUpdate(requestData, Navigate));
    }
    setGoogleR(response)
  }

  const responseFacebook = (response) => {
    console.log(response);
    if(response.status !== 'unknown'){
      let requestData = {
        full_name: response.name,
        email: response.email,
        token: response.accessToken,
        login_type: "facebook"
      }
      dispatch(socialLoginUpdate(requestData, Navigate));
    }
  }

  const componentClicked = () => {
    console.log('Facebook btn clicked');
  }

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

    //dispatch(post_user_details(body, Navigate));
  };

  if (more) {
    return <TAndC showmore={showmore} setCheck={setCheck} />;
  }

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

              <h3 style={{ margin: "3rem 0" }}>
                {signup ? "Register" : "Login"} to Continue
              </h3>
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

              {signup ? (
                <div className="col-lg-12">
                  <input
                    id="checkbox"
                    className="col-lg-1 col-xs-1"
                    type="checkbox"
                    defaultChecked={isChecked}
                    onChange={() => setCheck(!isChecked)}
                  />
                  <div className="col-lg-11 col-xs-11">
                    {TERMS_AND_CONDITIONS_1}
                    <a
                      href="https://www.neogrowth.in"
                      target="_blank"
                      rel="noreferrer"
                    >
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
              ) : (
                <h5 className="text-center" style={{ marginTop: "20px" }}>
                  New to DiGibizz?{" "}
                  <span onClick={() => setSignup(!signup)}> Register Now!</span>{" "}
                </h5>
              )}
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
              <div className="col-lg-12">
                <div className="text-center" style={{flexDirection: "row", marginTop: '30px'}}>
                  {/*<button type="button"
                          style={{width: '280px', height: '50px', borderRadius: '50px', marginLeft: '15px',
                            marginRight: '15px',
                            marginTop: '10px',
                            marginBottom: '10px'
                  }} className="btn">
                    Facebook
                  </button>*/}

                  <FacebookLogin
                      appId="1177352973113795"
                      cssClass="btn facebook-button"
                      autoLoad={true}
                      icon={<i className="bi bi-facebook"></i>}
                      fields="name,email,picture"
                      scope="public_profile, email, user_birthday"
                      textButton={"Facebook"}
                      onClick={componentClicked}
                      callback={responseFacebook} />

                  <GoogleLogin
                      clientId="433334840233-0h51mclvusdm3153q3r74174pa8r61u6.apps.googleusercontent.com"
                      render={renderProps => (
                          <button type="button"
                                  onClick={renderProps.onClick}
                                  disabled={renderProps.disabled}
                                   className="btn google-button">
                            Google
                          </button>
                      )}
                      buttonText="Login with google"
                      onSuccess={responseGoogleOnSuccess}
                      onFailure={responseGoogleOnFail}
                      cookiePolicy={'single_host_origin'}
                  />

                  <br/>
                  <br/>
                 {/* {googleR && JSON.stringify(googleR)}*/}

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
