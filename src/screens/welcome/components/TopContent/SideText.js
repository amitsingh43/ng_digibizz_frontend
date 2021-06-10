import { Link } from "react-router-dom";
import welcome_youtube from "assets/welcome/welcome_youtube.svg";

const SideText = ({
  homepage_decrement,
  show_button,
  showVideo,
  toggleVideo,
}) => {
  return (
    <div className="side-text">
      <h1>
        Transforming Businesses.
        <br />
        Empowering Lives.
      </h1>
      <p>
        Now upgrade your business with the help of our{" "}
        <br className={"top-content-line-break"} />
        customised solutions.{"	"}
        {show_button && homepage_decrement && (
          <span
            className="watch-to-know-more"
            style={{
              color: "#28B04B",
              textDecoration: "underline",
              // paddingTop: 10,
            }}
          >
            <span
              style={{ cursor: "pointer" }}
              onClick={
                () => toggleVideo(!showVideo)
                // window.open(
                // 	"https://www.youtube.com/watch?v=fW-eU-7SfMk&feature=youtu.be",
                // 	"_blank"
                // )
              }
            >
              Watch to know more <img alt="play" src={welcome_youtube} />
            </span>
          </span>
        )}
      </p>
      {show_button && homepage_decrement && (
        <Link
          to="/knowStatus"
          onClick={() => {
            homepage_decrement();
          }}
        >
          <div className="btn">Check your Digital Score</div>
        </Link>
      )}
    </div>
  );
};

export default SideText;
