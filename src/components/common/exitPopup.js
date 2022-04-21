import React, { useEffect, useState } from "react";
import { Modal, ModalBackground, ModalContent } from "./styles";

import Image from "../../assets/exitPromo.jpg";

function ExitPopup() {
  const [showExit, updateShowExit] = useState(false);
  const [noNeed, setNoneed] = useState(true);

  useEffect(() => {
    document
      .querySelector("body")
      .addEventListener("mouseout", function (event) {
        if (!event.toElement && !event.relatedTarget) {
          setTimeout(() => {
            updateShowExit(true);
          }, 1000);
        }
      });
    return () => {
      document
        .querySelector("body")
        .addEventListener("mouseout", function (event) {
          if (!event.toElement && !event.relatedTarget) {
            setTimeout(() => {
              updateShowExit(true);
            }, 1000);
          }
        });
    };
  });

  const alertUser = (event) => {
    if (event.type === "click") {
      window.close();
      return true;
    }

    event.preventDefault();
    event.returnValue = "";
    updateShowExit(true);
  };

  return (
    <Modal showExit={showExit && noNeed}>
      <ModalBackground onClick={() => updateShowExit(false)} />
      <ModalContent>
        <h3 style={{ marginBottom: "1rem" }}>
          Are you sure, you want to exit?
        </h3>
        <button
          onClick={() => {
            updateShowExit(false);
            setNoneed(false);
          }}
          style={{
            position: "absolute",
            background: "red",
            color: "white",
            top: "5px",
            right: "5px",
            borderRadius: "50%",
            borderColor: "red",
          }}
        >
          X
        </button>
        <a
          onClick={() => {
            window.removeEventListener("beforeunload", alertUser);
            window
              .open(
                "http://instauat.neogrowth.in/?utm_source=DIGIBIZZ&utm_medium=exit-banner&utm_campaign=DIGIBIZZ&utm_id=DIGIBIZZ-EP&utm_term=DIGIBIZZ&utm_content=DIGIBIZZ",
                "_blank"
              )
              .focus();
          }}
        >
          <img style={{ width: "100%" }} src={Image} />
        </a>

        <div
          style={{ display: "flex", justifyContent: "end", marginTop: "1rem" }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{
                background: "#c4c4c4",
                padding: "1rem",
                borderRadius: "4px",
                cursor: "pointer",
                marginRight: "1rem",
              }}
              className="next buttons"
              onClick={() => {
                updateShowExit(false);
                setNoneed(false)
              }}
            >
              Continue
            </div>
            <div
              style={{
                background: "#28b04b",
                color: "white",
                padding: "1rem",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              className="next buttons"
              onClick={() => {
                window.removeEventListener("beforeunload", alertUser);
                setTimeout(() => {
                  window.open("about:blank", "_self");
                  window.close();
                }, 500);
              }}
            >
              Exit
            </div>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}

export default ExitPopup;
