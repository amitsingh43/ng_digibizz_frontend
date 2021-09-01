import React from "react";

const InstantLoan = ({ title }) => {
  const onClick = () => {
    window.scrollTo(0, 0);
    document.getElementById("primaryEmail").focus();
  };

  const text = {
    NeoGrowth: "Get Collateral Free Business Loans Up To ₹75 Lakhs Now!",
    "NeoCash Insta": "Get Instant INR 1 Lakh Business Loan in 24 Hours!",
    "NeoGrowth Plus loans": "Get Secured Business Loans up to ₹1.5 crores",
  };

  return (
    <div className={"instantLoanArea"} onClick={onClick}>
      <div>
        {text[title]}
        <div className="btn btn-success ngSubmit instantTextApply">
          Apply Now
        </div>
      </div>
    </div>
  );
};

export default InstantLoan;
