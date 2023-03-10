import React, { useState } from "react";
import EligibilityCriteria from "./EligibilityCriteria";
import HowItWorks from "./HowItWorks";
import InstantLoan from "./InstantLoan";
import KeyBenefits from "./KeyBenefits";
import PartnerSuccessStories from "./SuccessStories";
import WhyNeoGrowth from "./WhyNeoGrowth";
import FormArea from "./FormArea";
import "styles/App.scss";
import FooterTerms from "./FooterTerms";

function LandingPage({ masterData, url, save_basic_details, title }) {
  const [more, showmore] = useState(false);

  return (
    <React.Fragment>
      <FormArea
        masterData={masterData}
        url={url}
        save_basic_details={save_basic_details}
        title={title}
        more={more}
        showmore={showmore}
      />

      {!more && (
        <>
          <KeyBenefits title={title} />
          {title === "NeoCash Insta" && (
            <>
              <EligibilityCriteria />
              <HowItWorks />
            </>
          )}
          <WhyNeoGrowth />
          <PartnerSuccessStories />
          <InstantLoan title={title} />
        </>
      )}
      <FooterTerms />
    </React.Fragment>
  );
}

export default LandingPage;
