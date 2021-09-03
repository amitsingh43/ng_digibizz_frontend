/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useLocation, useParams } from "react-router-dom";

import "styles/partner.css";
import {
  header_digital_services,
  update_lead,
  get_master_data,
  save_basic_details,
  show_form,
} from "store/actions";
import { partnerMapping } from "store/partner_mapping";
import { Form, DataSection, PartnerCard, PartnerDetails } from "./components";
import LandingPage from "./LandingPage";

const Partner = () => {
  const masterData = useSelector((state) => state.masterData);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const [show, toggleShow] = useState({
    description: false,
    testimonials: false,
    about: false,
  });
  const [isFormVisible, toggleForm] = useState(false);

  const [more, showmore] = useState(false);

  var { partner, category } = useParams();
  var data = partnerMapping.find(
    (val) =>
      val.name === partner.toLowerCase().split(".").join(" ") &&
      val.heading === category
  );

  const saveBasicDetails = function () {
    dispatch(save_basic_details(...arguments));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(header_digital_services());
    if (masterData.cities.length === 0) {
      dispatch(get_master_data());
    }
    const leadID = localStorage.getItem("lead_id");

    async function showForm() {
      const isFormShown = await dispatch(show_form(leadID));
      toggleForm(!isFormShown);
    }
    if (leadID) {
      showForm();
    } else {
      toggleForm(true);
    }
  }, []);

  if ((!location || !location.state) && !data) {
    return <Redirect to="/services" />;
  }

  let {
    title,
    description,
    image,
    subTitle,
    tag,
    url,
    backgroundColor,
    stars,
    socialMedia,
    testimonials,
    aboutUs,
    carousel,
  } = data.partner;
  var { heading } = data;

  const _availNow = () => {
    if (localStorage.getItem("lead_id")) {
      const body = {
        lead_id: localStorage.getItem("lead_id"),
        partner_availed: title,
      };
      dispatch(update_lead(body));
      if (title !== "NeoGrowth" && url != "") {
        window.open(url, "_blank");
      }
    } else {
      let updatedTitle = title.split(".").join(" ");
      history.push(`/services/${heading}/${updatedTitle}/reg`);
    }
  };

  const showNewDesign = ![
    "NeoCash Insta",
    "NeoGrowth",
    "NeoGrowth Plus loans",
  ].includes(title);

  return (
    <div className={"servicesPartnerPage"}>
      <div
        className={showNewDesign ? "partner-main" : ""}
        style={{
          minHeight: "99vh",
          flex: more ? 0 : 2.5,
          padding: more ? 0 : showNewDesign ? "0 40px" : "",
        }}
      >
        {showNewDesign ? (
          <>
            <div
              style={{ display: more ? "none" : "" }}
              className="partner-main-title"
            >
              <span
                style={{
                  color: "grey",
                  fontWeight: "normal",
                  cursor: "pointer",
                }}
                onClick={() => history.goBack()}
              >{`Explore services  >>  ${heading}  >>`}</span>
              <span>{`  ${title}`}</span>
            </div>
            <div
              style={{
                flex: 1,
                display: more ? "none" : "flex",
                marginTop: 30,
              }}
              className={"partner-section"}
            >
              <PartnerCard
                image={image}
                title={title}
                offer={subTitle}
                backgroundColor={backgroundColor}
                carousel={carousel}
              />
              <PartnerDetails
                heading={heading}
                title={title}
                subTitle={subTitle}
                stars={stars}
                socialMedia={socialMedia}
                _availNow={_availNow}
                carouselLength={carousel.length}
              />
            </div>
          </>
        ) : (
          <LandingPage
            masterData={masterData}
            url={url}
            save_basic_details={saveBasicDetails}
            title={title}
          />
        )}

        {showNewDesign && isFormVisible ? (
          <div style={{ flex: 1 }} className={"form-in-mobile"}>
            <Form
              masterData={masterData}
              url={url}
              save_basic_details={saveBasicDetails}
              title={title}
              more={more}
              showmore={showmore}
            />
          </div>
        ) : null}

        {showNewDesign && (
          <div
            style={{ display: more ? "none" : "grid" }}
            className={"dataSection"}
          >
            <div id={"description"}>
              {description && (
                <DataSection
                  title={"Description"}
                  data={description}
                  show={show}
                  toggleShow={toggleShow}
                  field={"description"}
                />
              )}
            </div>
            <div id={"testimonials"}>
              {testimonials && (
                <DataSection
                  title={"Testimonials"}
                  data={testimonials}
                  show={show}
                  toggleShow={toggleShow}
                  field={"testimonials"}
                />
              )}
            </div>
            <div id={"about"}>
              {aboutUs && (
                <DataSection
                  title={"About"}
                  data={aboutUs}
                  show={show}
                  toggleShow={toggleShow}
                  field={"about"}
                />
              )}
            </div>
          </div>
        )}
      </div>

      {isFormVisible && showNewDesign ? (
        <div style={{ flex: 1 }} className={"form-in-desktop"}>
          <Form
            masterData={masterData}
            url={url}
            save_basic_details={saveBasicDetails}
            title={title}
            more={more}
            showmore={showmore}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Partner;
