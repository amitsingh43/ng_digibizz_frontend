import {useEffect, useState} from "react";
import {TopContent} from "../index";
import smBanner from "../../../../assets/Promotions/banner-sm-2.png";
import mdBanner from "../../../../assets/Promotions/banner-md.png";
import lgBanner from "../../../../assets/Promotions/banner-lg-2.png";
import lgBannerBlank from "../../../../assets/Promotions/banner-lg-blank.png";
import {Link} from "react-router-dom";
import welcome_youtube from "../../../../assets/welcome/welcome_youtube.svg";


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
                data-interval="44000"
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
                                        style={{ paddingBottom: 0, paddingTop: '10px'}}>
                                        <div
                                            style={{
                                                width: "100%",
                                                backgroundImage: `linear-gradient(to right, #1968B3, #1968B3)`,
                                                height: isMobile ? 'auto' : width <= 1100 ? "394px" : width <= 1630 ? "340px" : "auto",
                                            }}>
                                            <img
                                                style={{ width: "100%",
                                                    height: isMobile ? 'auto' : width <= 1100 ? "394px" : width <= 1630 ? "330px" : "auto",
                                                    objectFit: isMobile ? '' : width <= 1630 ? 'contain' : '',
                                                    //objectFit: 'contain'
                                                }}
                                                src={isMobile ? smBanner : width <= 1250 ? lgBanner : lgBanner}
                                            />
                                        </div>

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
