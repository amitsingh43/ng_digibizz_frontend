import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "styles/digitalServices.css";
import { header_digital_services, update_lead } from "store/actions";
import { services } from "store/services_mapping";
import { PARTNERS } from "store/strings";
import { Services, TopContent } from "./components";

// TODO: handle counter
let counter = 0;
const ServicesCategory = () => {
  return (
    <div className="service-category">
      <div className="one">
        {services.map((service, index) => (
          <div
            key={index}
            className="cat"
            onClick={() => {
              counter = 0;
              window.location.hash = `#${service.tag}`;
            }}
          >
            <img src={service.image} alt="" />
            <div className="labell">{service.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function DigitalServices() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userDetails);
  const location = useLocation();

  window.onpopstate = function () {
    if (counter) {
      window.history.go(-1);
      counter = 0;
    }
    if (window.location.href.includes("#")) {
      counter++;
    }
  };

  const updateLead = function () {
    dispatch(update_lead(...arguments));
  };

  useEffect(() => {
    // window.scrollTo(0, 0);
    dispatch(header_digital_services());
    var PATH = "";
    for (
      var i = window.location.href.lastIndexOf("=");
      i < window.location.href.length - 1;
      i++
    ) {
      if (i === -1) break;
      PATH += window.location.href[i + 1];
    }
    if (location.state || PATH !== "") {
      PATH = location.state ? location.state.id : PATH;
      window.location.href = `#${PATH}`;
    }
  }, []);

  return (
    <div className="services-main">
      <div className="row">
        <TopContent />
        <ServicesCategory />
      </div>
      <div>
        {PARTNERS.map((partner, index) => (
          <div id={partner.tag} className="row sell-online" key={index}>
            <Services
              user={user}
              heading={partner.category}
              cardData={partner.data}
              update_lead={updateLead}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
