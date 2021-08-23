import React from "react";
import EligibilityCriteria from "./EligibilityCriteria";
import HowItWorks from "./HowItWorks";
import InstantLoan from "./InstantLoan";
import KeyBenefits from "./KeyBenefits";
import PartnerSuccessStories from "./SuccessStories";
import WhyNeoGrowth from "./WhyNeoGrowth";
import FormArea from "./FormArea";
import "styles/App.scss";
import FooterTerms from "./FooterTerms";

function LandingPage({ masterData, url, saveBasicDetails, title }) {
  return (
    <React.Fragment>
      <FormArea
        masterData={masterData}
        url={url}
        saveBasicDetails={saveBasicDetails}
        title={title}
      />
      <KeyBenefits title={title} />
      {title !== "NeoGrowth" && (
        <>
          <EligibilityCriteria />
          <HowItWorks />
        </>
      )}
      <WhyNeoGrowth />
      <PartnerSuccessStories />
      <InstantLoan title={title} />
      <FooterTerms />
    </React.Fragment>
  );
}

export default LandingPage;
