import {useEffect, useState} from "react";
import {TopContent} from "../index";
import smBanner from "../../../../assets/Promotions/banner-sm.png";
import lgBanner from "../../../../assets/Promotions/banner-lg.png";
import {Link} from "react-router-dom";


export const TopCarousel = (props) => {
    const [currentDisplayed, setCurrentDisplay] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    let carouselData = [
        {
            type: 'main'
        },
        {
            type: 'two'
        }
    ];

    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);
    let isMobile = width <= 768;

    return (
        <div className="carousel-main">
            <div
                id="myCarousel"
                className="carousel slide"
                data-ride="carousel"
                data-interval="4000"
            >
                <div className="carousel-inner">
                    {carouselData.map((item, index) => (
                        <div
                            className={`item ${
                                index === currentDisplayed ? "active" : ""
                            }`}
                            key={index}>
                            {
                                index === 0 &&
                                <div className="welcome">
                                    <TopContent homepage_decrement={props.homepage_decrement}/>
                                </div>
                            }

                            {
                                index === 1 &&
                                <Link to='/services/Investments/Moneyfy'>
                                    <div
                                        className="d-none explore-our-services"
                                        style={{ paddingBottom: 0 }}
                                    >
                                        <img
                                            style={{ width: "100%", height: "auto" }}
                                            src={isMobile ? smBanner : lgBanner}
                                        />
                                    </div>
                                </Link>
                            }

                        </div>
                    ))}
                </div>
                <div className="row" style={{paddingTop: 30}}>
                    <ol className="carousel-indicators">
                        {carouselData.map((val, index) => (
                            <li
                                data-target="#myCarousel"
                                data-slide-to={index}
                                onClick={() => setCurrentDisplay(index)}
                                className={currentDisplayed === index ? `active` : ""}
                                key={index}
                            ></li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default TopCarousel;
