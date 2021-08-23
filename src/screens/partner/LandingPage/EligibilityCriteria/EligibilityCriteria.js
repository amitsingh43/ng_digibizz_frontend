import React from "react";
import Underline from "assets/images/underline.png";
import Propreitor from "assets/images/eligibilityCriteria/propreitor.svg";
import Retailer from "assets/images/eligibilityCriteria/retailer.svg";
import Store from "assets/images/eligibilityCriteria/store.svg";
import Vintage from "assets/images/eligibilityCriteria/vintage.svg";

const EligibilityCriteria = () => {
  return (
    <div className={"infoArea"}>
      <div className={"sectionTitle"}>
        <div className={"titleWithUnderline"}>
          Eligibility Criteria
          <img src={Underline} className={"happyCustomers"} />
        </div>
      </div>
      <div className={"row infoPoints"}>
        <div className={"col-md-6 infoPoint"}>
          <div className={"whyNG"}>
            <img src={Vintage} />
            <div>Business should be at least 2 years old</div>
          </div>
        </div>
        <div className={"col-md-6 infoPoint"}>
          <div className={"whyNG"}>
            <img src={Retailer} className={"happyCustomers"} />
            <div>Only for Retailers</div>
          </div>
        </div>
      </div>
      <div className={"row infoPoints"}>
        <div className={"col-md-6 infoPoint"}>
          <div className={"whyNG"}>
            <img src={Propreitor} className={"happyCustomers"} />
            <div>
              Only for Sole Proprietors
              <br /> (Not for Partnership firms/companies)
            </div>
          </div>
        </div>
        <div className={"col-md-6 infoPoint"}>
          <div className={"whyNG"}>
            <img src={Store} className={"happyCustomers"} />
            <div>
              Should have a pukka roof shop <br />
              (Owned or rented)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilityCriteria;
