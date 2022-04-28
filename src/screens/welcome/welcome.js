import { useEffect, useState } from "react";
import "styles/welcome.css";
import { header_reset, homepage_decrement } from "store/actions";
import { useDispatch } from "react-redux";
import {
  ExploreOurServices,
  UserGuide,
  TopContent,
  Question,
  SuccessStories,
  MobileView,
  TopCarousel,
} from "./components";
import lgBanner from "assets/Promotions/banner-lg.png";
import smBanner from "assets/Promotions/banner-sm.png";
import { Link } from "react-router-dom";
import ExitPopup from "components/common/exitPopup";
import MetaTags from "react-meta-tags";

export default function Welcome() {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(header_reset());
    // const options = {
    // 	autoConfig: true, // set pixel's autoConfig
    // 	debug: false, // enable logs
    // };
    // ReactPixel.init("281787519125313", options);
  }, [dispatch]);

  const homepageDecrement = function () {
    dispatch(homepage_decrement);
  };

  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let isMobile = width <= 768;

  return (
      <>
          <MetaTags>
              <title>Transform & Grow Your Business Digitally with DiGibizz</title>
              <meta name="keywords" content="digibizz, online services, app creation, business loans, healthcare, investments, tax filing, sell online, product photoshoot"/>
              <meta name="description" content="Is your business Digital Ready? We help empower, enable and transform small businesses in their digital journey towards growth through DiGibizz Platform." />
          </MetaTags>

          <div style={{ fontFamily: "Rubik" }}>

              <div className="welcome">
                  {/*<TopContent homepage_decrement={homepageDecrement} />*/}
                  <TopCarousel homepage_decrement={homepageDecrement}/>
              </div>
              <div className="explore-our-services">
                  <ExploreOurServices />
                  <MobileView />
              </div>

              <Link to='/services/Investments/Moneyfy'>
                  <div
                      className="d-none explore-our-services"
                      style={{ paddingBottom: 0 }}
                  >
                      <img
                          alt=""
                          style={{ width: "100%", height: "auto" }}
                          src={isMobile ? smBanner : lgBanner}
                      />
                  </div>
              </Link>

              <div className="question">
                  <Question homepage_decrement={homepageDecrement} />
              </div>
              <div className="user-guide">
                  {/* <UserGuide /> */}
                  <UserGuide />
              </div>
              <div className="success-stories1">
                  <SuccessStories />
              </div>
          </div>
      </>
  );
}
