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
    <div style={{ fontFamily: "Rubik" }}>
      <div className="welcome">
        {/* <TopContent homepage_decrement={homepageDecrement} /> */}
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
  );
}
