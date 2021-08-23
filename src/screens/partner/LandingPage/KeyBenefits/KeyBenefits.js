import React from "react";
import OnlyKyc from "assets/images/onlykyc.png";
import EasyRepayment from "assets/images/easyrepayment.png";
import OneDayDisbursal from "assets/images/1daydisbursal.png";
import Underline from "assets/images/underline.png";
import Approval_2minutes from "assets/images/Approval_2minutes.png";
import doorstep from "assets/images/doorstep.png";

export default function KeyBenefits({ title }) {
  const style = {
    flex: {
      display: "flex",
      flexDirection: "column",
    },
  };

  const instaList = [
    {
      label: "Only KYC & Business Registration Proof Required",
      image: OnlyKyc,
    },
    {
      label: "Easy Daily Repayment of ₹ 250",
      image: EasyRepayment,
    },
    {
      label: "24 hours Disbursal",
      image: OneDayDisbursal,
    },
  ];

  const loansList = [
    {
      label: " Collateral Free",
      image: OnlyKyc,
    },
    {
      label: "Quick Disbursal",
      image: Approval_2minutes,
    },
    {
      label: "Customized Repayment Solution",
      image: EasyRepayment,
    },
    {
      label: "Easy Top-Up Loans",
      image: OneDayDisbursal,
    },
    {
      label: "Door Step Service",
      image: doorstep,
    },
  ];

  const listData = title === "NeoGrowth" ? loansList : instaList;

  return (
    <div className={"infoArea"} style={{ backgroundColor: "#EAF7ED" }}>
      <div className={"sectionTitle"}>
        <div className={"titleWithUnderline"}>
          Key Benefits
          <img src={Underline} />
        </div>
      </div>
      <div className={"row infoPoints"}>
        {listData.map((x, i) => (
          <div key={i} className={"col-md-4 infoPoint"} style={style.flex}>
            <img src={x.image} className={"onedaydisbursal"} />
            <div className={"label"}>{x.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
