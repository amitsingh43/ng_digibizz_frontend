import React, { useEffect, useState } from "react";
import { Form } from "screens/partner/components";
import InstaBg from "assets/images/background.png";
import LoansBg from "assets/images/background1.png";
import LoansPlusBg from "assets/images/background2.png";

const FormArea = ({
  masterData,
  url,
  save_basic_details,
  title,
  more,
  showmore,
}) => {
  const imageBg = {
    NeoGrowth: LoansBg,
    "NeoCash Insta": InstaBg,
    "NeoGrowth Plus loans": LoansPlusBg,
  };

  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let isMobile = width <= 768;

  return more ? (
    <Form
      masterData={masterData}
      url={url}
      save_basic_details={save_basic_details}
      title={title}
      more={more}
      showmore={showmore}
    />
  ) : (
    <div style={{ backgroundColor: "rgb(234, 247, 237)" }}>
      <div
        className={`formMainArea`}
        style={{
          flexWrap: "wrap",
          background: `url(${imageBg[title]})`,
          backgroundSize: "101vw auto",
          backgroundRepeat: "no-repeat",
        }}
      >
        {isMobile ? (
          <div
            className={"col-xs-12"}
            style={{
              background: `url(${imageBg[title]})`,
              backgroundSize: "101vw auto",
              backgroundRepeat: "no-repeat",
              height: "50vw",
            }}
          ></div>
        ) : (
          <div className={"col-md-7 col-xs-12 imageOfGirl"}></div>
        )}
        <div className={"col-md-4 col-xs-12 basicForm"}>
          <div className={"col-md-12"}>
            <div>
              <Form
                masterData={masterData}
                url={url}
                save_basic_details={save_basic_details}
                title={title}
                more={more}
                showmore={showmore}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormArea;
