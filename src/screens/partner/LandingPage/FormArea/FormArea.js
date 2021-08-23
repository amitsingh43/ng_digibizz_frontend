import React from "react";
import { Form } from "screens/partner/components";
// import LoanGirl from "#images/loangirl.png";
import InstaBg from "assets/images/background.png";
import LoansBg from "assets/images/background1.png";

const FormArea = ({
  masterData,
  url,
  saveBasicDetails,
  title,
  more,
  showmore,
}) => {
  return more ? (
    <Form
      masterData={masterData}
      url={url}
      save_basic_details={saveBasicDetails}
      title={title}
      more={more}
      showmore={showmore}
    />
  ) : (
    <div
      className={`formMainArea`}
      style={{
        flexWrap: "wrap",
        background: `url(${title === "NeoGrowth" ? LoansBg : InstaBg})`,
        backgroundSize: "101vw auto",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={"col-md-7 col-xs-12 imageOfGirl"}></div>
      <div className={"col-md-4 col-xs-12 basicForm"}>
        <div className={"col-md-11"}>
          <div
            style={{
              flex: 1,
            }}
          >
            <Form
              masterData={masterData}
              url={url}
              save_basic_details={saveBasicDetails}
              title={title}
              more={more}
              showmore={showmore}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormArea;
