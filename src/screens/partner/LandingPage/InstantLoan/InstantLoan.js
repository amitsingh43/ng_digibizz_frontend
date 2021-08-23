import React from "react";

const InstantLoan = ({ title }) => {
  const onClick = () => {
    window.scrollTo(0, 0);
    document.getElementById("primaryEmail").focus();
  };
  return (
    <div className={"instantLoanArea"} onClick={onClick}>
      <div>
        {title === "NeoGrowth"
          ? "Get Collateral Free Business Loans Up To ₹75 Lakhs Now!"
          : "Get Instant INR 1 Lakh Business Loan in 24 Hours!"}
        <div className="btn btn-success ngSubmit instantTextApply">
          Apply Now
        </div>
      </div>
    </div>
  );
};

export default InstantLoan;
