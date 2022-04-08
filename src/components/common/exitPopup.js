import React, {useEffect, useState} from "react";
import {Modal, ModalBackground, ModalContent} from "./styles";

import Image from "../../assets/exitPromo.jpg";

function ExitPopup() {
    const [showExit, updateShowExit] = useState(false);
    const [noNeed, setNoneed] = useState(false);

    useEffect(() => {
        document.addEventListener("mouseleave", function (event) {
            if (event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight)) {
                //alertUser();
                updateShowExit(true);
                //alert('hello');
                console.log("I'm out");
            }
        });
        //window.addEventListener("beforeunload", alertUser);
        return () => {
            document.addEventListener("mouseleave", function (event) {
                if (event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight)) {
                    //alertUser();
                    updateShowExit(true);
                    //alert('hello');
                    console.log("I'm out");
                }
            });
            //window.removeEventListener("beforeunload", alertUser);
        };
    });

    const alertUser = (event) => {
        if (event.type === "click") {
            window.close();
            return true;
        }

        event.preventDefault();
        event.returnValue = "";
        console.log(event);
        updateShowExit(true);
    };

    return (
        <Modal showExit={showExit}>
            <ModalBackground onClick={()=> updateShowExit(false)}/>
            <ModalContent>
                <h3 style={{marginBottom: "1rem"}}>Are you sure want to exit the application?</h3>
                <a
                    onClick={() => {
                        window.removeEventListener("beforeunload", alertUser);
                        setTimeout(() => {
                            window.location.href =
                                "http://instauat.neogrowth.in/?utm_source=DIGIBIZZ&utm_medium=exit-banner&utm_campaign=DIGIBIZZ&utm_id=DIGIBIZZ-EP&utm_term=DIGIBIZZ&utm_content=DIGIBIZZ";
                        }, 1000);
                    }}
                >
                    <img style={{width: "100%"}} src={Image}/>
                </a>

                <div
                    style={{display: "flex", justifyContent: "end", marginTop: "1rem"}}
                >
                    <div style={{display: "flex"}}>
                        <div
                            style={{
                                background: "#c4c4c4",
                                padding: "1rem",
                                borderRadius: "4px",
                                cursor: "pointer",
                                marginRight: "1rem",
                            }}
                            className="next buttons"
                            onClick={() => updateShowExit(false)}
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
