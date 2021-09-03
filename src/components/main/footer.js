import "styles/footer.css";
import fb from "assets/fb.svg";
import insta from "assets/insta.svg";
import twitter from "assets/twitter.svg";
import linkedin from "assets/linkedin.svg";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

function Footer({ history }) {
  const loc = history.location.pathname.split("/")[3];
  const show = !["NeoCash Insta", "NeoGrowth", "NeoGrowth Plus loans"].includes(
    loc
  );

  return (
    <div className="fixed-bottom" style={{ display: show ? "flex" : "none" }}>
      <div className="col-lg-5 gap"></div>
      <div className="col-lg-5 ">
        © Copyright {new Date().getFullYear()} NeoGrowth, All Rights Reserved.
        <a
          href="https://www.neogrowth.in/disclaimer/"
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          {" Disclaimer ."}
        </a>
        <a
          href="https://www.neogrowth.in/privacy-policy/"
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          {" Privacy Policy"}
        </a>
      </div>
      <div className="images">
        {" "}
        <span>
          <a
            href="https://www.linkedin.com/in/neogrowth-credit-pvt-ltd-1696b6110"
            target="_blank"
          >
            <img src={linkedin} />
          </a>
        </span>
        <span>
          <a href="https://twitter.com/NeoGrowth_Loans" target="_blank">
            <img src={twitter} />
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com/neogrowth_credit" target="_blank">
            <img src={insta} />
          </a>
        </span>
        <span>
          <a href="https://www.facebook.com/NeoGrowthCredit/" target="_blank">
            <img src={fb} />
          </a>
        </span>
      </div>
    </div>
  );
}
export default withRouter(Footer);
