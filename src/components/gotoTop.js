import "styles/gotoTop.css";
import gotoTop from "assets/gotoTop.png";

const GotoTop = () => {
  window.onscroll = function () {
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      document.getElementById("go-to-top").style.display = "flex";
    } else {
      document.getElementById("go-to-top").style.display = "none";
    }
  };
  return (
    <div
      onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
      id="go-to-top"
    >
      <img src={gotoTop} alt="" />
    </div>
  );
};

export default GotoTop;
