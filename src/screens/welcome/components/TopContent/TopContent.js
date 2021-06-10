import { useState } from "react";

import SideText from "./SideText";
import VideoModal from "./VideoModal";
import welcome_bg from "assets/welcome_bg.png";

export const TopContent = (props) => {
  const [showVideo, toggleVideo] = useState(false);
  return (
    <div className="top-content">
      <div className="col-md-6">
        <SideText
          homepage_decrement={props.homepage_decrement}
          show_button={true}
          showVideo={showVideo}
          toggleVideo={toggleVideo}
        />
      </div>
      <div className="col-md-6">
        {!showVideo && (
          <img className="img-responsive banner" alt="bg" src={welcome_bg} />
        )}
        {showVideo && (
          <VideoModal toggleVideo={toggleVideo} showVideo={showVideo} />
        )}
      </div>
    </div>
  );
};

export default TopContent;
