import { useEffect } from "react";
import "styles/welcome.css";
import { header_reset, homepage_decrement } from "store/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  ExploreOurServices,
  UserGuide,
  TopContent,
  Question,
  SuccessStories,
  MobileView,
} from "./components";
import LoansPlusBg from "assets/banner.png";

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
  return (
    <div style={{ fontFamily: "Rubik" }}>
      <div className="welcome">
        <TopContent homepage_decrement={homepageDecrement} />
      </div>
      <div className="explore-our-services">
        <ExploreOurServices />
        <MobileView />
      </div>
      {/* <div className="explore-our-services">
          <img style={{ width:'100%', height:'auto'}} src={'https://www.tatacapital.com/content/dam/tata-capital/other-and-home-page-banner/home-page/TC_PL_Dussehra_homepage_1920x350_banner.jpg'} />
      </div> */}
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
