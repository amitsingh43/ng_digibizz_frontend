import Catalog from "assets/partner_page/catalog.png";
import { useHistory } from "react-router-dom";

import Discount from "assets/partner_page/discount.png";
import Facebook from "assets/partner_page/facebook.png";
import Instagram from "assets/partner_page/instagram.png";
import LinkedIn from "assets/partner_page/linkedin.png";
import Twitter from "assets/partner_page/twitter.png";
import Youtube from "assets/partner_page/youtube.png";
import Star from "assets/partner_page/star.png";

const getRating = (rating) => {
    let count = parseInt(rating);
    let rows = [];
    for (let i = 0; i < count; i++) {
      rows.push(<img src={Star} alt={"star"} className={"star-icon"} />);
    }
    return rows;
  };

  
const PartnerDetails = ({
    heading,
    stars,
    subTitle,
    socialMedia,
    title,
    _availNow,
    carouselLength,
  }) => {
    const history = useHistory();
    return (
      <div className={"partner-details activeIndicators"}>
        <h3>{title}</h3>
        <div>{stars && <div>{getRating(stars)}</div>}</div>
        <div className={"discountSection"}>
          {" "}
          <img src={Discount} className={"discount-icon"} alt="discount" />
          <span>Available Offers</span>
        </div>
        <div className={"description"}>
          <div>
            <ul>
              {subTitle.map((offer) => (
                <li style={{ lineHeight: 1.8 }}>{offer}</li>
              ))}
            </ul>
          </div>
        </div>
        {localStorage.getItem("lead_id") && (
          <a>
            <div className="partner-main-avail-now">
              <span style={{ cursor: "pointer" }} onClick={_availNow}>
                Avail Now
              </span>
            </div>
          </a>
        )}
        <div style={{ flexDirection: "row", marginLeft: 10 }}>
          {socialMedia && (
            <div>
              {socialMedia.instagram && (
                <a href={socialMedia.instagram} target="_blank">
                  <img
                    className={"social-icon"}
                    src={Instagram}
                    alt="instagram-icon"
                  />
                </a>
              )}
              {socialMedia.facebook && (
                <a href={socialMedia.facebook} target="_blank">
                  <img className={"social-icon"} src={Facebook} alt="fb-icon" />
                </a>
              )}
              {socialMedia.twitter && (
                <a href={socialMedia.twitter} target="_blank">
                  <img
                    className={"social-icon"}
                    src={Twitter}
                    alt="twitter-icon"
                  />
                </a>
              )}
              {socialMedia.youtube && (
                <a href={socialMedia.youtube} target="_blank">
                  <img className={"social-icon"} src={Youtube} alt="yb-icon" />
                </a>
              )}
              {socialMedia.linkedin && (
                <a href={socialMedia.linkedin} target="_blank">
                  <img
                    className={"social-icon"}
                    src={LinkedIn}
                    alt="linkedin-icon"
                  />
                </a>
              )}
              {socialMedia.catalog && (
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    history.push(`/services/${heading}/${title}/catalog`);
                  }}
                  target="_blank"
                >
                  <img className={"social-icon"} src={Catalog} alt="pdf-icon" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  export default PartnerDetails;