import { useState } from "react";
import { useHistory } from "react-router-dom";

const PartnerCard = (props) => {
  const {
    title,
    description,
    image,
    subTitle,
    backgroundColor,
    user,
    tag,
    update_lead,
    url,
    heading,
  } = props;
  const history = useHistory();
  const _availNow = () => {
    let updatedTitle = title.split(".").join(" ");
    history.push(`/services/${heading}/${updatedTitle}/`);
    return;
  };
  const [viewMore, toggleViewMore] = useState(false);
  return (
    <div
      className=" col-md-5  partner-card "
      style={{ backgroundColor: "#E9F7ED" }}
    >
      <div className=" col-md-4" style={{ backgroundColor: backgroundColor }}>
        <img
          style={{ borderRadius: 10 }}
          className="img-responsive"
          src={image}
          alt="partner"
        />
      </div>
      <div
        className=" col-md-7"
        style={{ overflowY: viewMore ? "scroll" : "hidden" }}
      >
        <h3>{title}</h3>
        {subTitle && (
          <div className="sub-title">
            {subTitle.map((offer, index) => (
              <div key={index} style={{ marginBottom: 5 }}>
                {offer}
              </div>
            ))}
          </div>
        )}
        <p>{description[0]}</p>
        {viewMore &&
          description.map((val, index) => (
            <p
              key={index}
              style={{
                padding: 0,
                margin: 0,
                marginTop: 15,
                marginBottom: 15,
                display: index === 0 ? "none" : "block",
              }}
            >
              {val}
            </p>
          ))}
        <span
          style={{
            color: "#28b04b",
            cursor: "pointer",
            display: description.length === 1 ? "none" : "block",
          }}
          onClick={_availNow}
					// 	() => {
					// 	// let updatedTitle = title.split(".").join(" ");
					// 	// history.push({
					// 	// 	pathname: `/services/${heading}/${updatedTitle}/`,
					// 	// 	state: {
					// 	// 		data: {
					// 	// 			title,
					// 	// 			description,
					// 	// 			image,
					// 	// 			subTitle,
					// 	// 			tag,
					// 	// 			url,
					// 	// 			backgroundColor,
					// 	// 			heading,
					// 	// 		},
					// 	// 	},
					// 	// });
					// 	// toggleViewMore(!viewMore);
					// }}
        >
          {viewMore ? "View Less-" : "View more+"}
        </span>
        <div
          className="avial-now"
          onClick={_availNow}
        >
          {title === "NeoGrowth" ? "Apply now" : "Avail now"}
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
