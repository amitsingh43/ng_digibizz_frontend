import React, { useEffect, useState } from "react";
import Next from "assets/images/carousel/next.png";
import Prev from "assets/images/carousel/prev.png";
import BipinGada from "assets/images/carousel/bipin_gada.png";
import Jathindra from "assets/images/carousel/jathindra.png";
import Jayanti from "assets/images/carousel/jayanti.png";
import Altaf from "assets/images/carousel/altaf.jpeg";
import Underline from "assets/images/underline.png";
import { SUCCESSDATA } from "store/strings";
import play_icon from "assets/play_icon.svg";
import punctuation1 from "assets/punctuation1.svg";
import punctuation2 from "assets/punctuation2.svg";
import { Link, useHistory } from "react-router-dom";

const Carousel = () => {
  useEffect(() => {
    $(".carousel").carousel({
      interval: 4000,
    });
  }, []);

  const [currentDisplayed, setCurrentDisplay] = useState(0);

  const list = [
    {
      userImage: Jayanti,
      user: "Jayanti Kathale, Founder, PurnaBramha",
      desc: `“NeoGrowth helped me with funds at the right time to grow my business
	  specially when a large number of other financial institutions were
	  turning me down.”`,
      watchMore: "https://www.youtube.com/watch?v=IPWGI4MgWFk",
      readMore: "https://www.neogrowth.in/stories/purnabramha/",
    },
    {
      userImage: BipinGada,
      user: "Bipin Gada, Ex Casuals, Mumbai",
      desc: `“Repayment process is so simple that paying back never pinched me”`,
      watchMore: null,
      readMore: "https://www.neogrowth.in/stories/ex-casuals/",
    },
    {
      userImage: Altaf,
      user: "Altaf Fatehali Duran, EON Retailer L.L.P",
      desc: `“As my business expanded, I found a Lifetime friend in NeoGrowth”`,
      watchMore: null,
      readMore: "https://www.neogrowth.in/stories/eon-retailers-l-l-p/",
    },
    {
      userImage: Jathindra,
      user: "Jatindra Prajapati, Satyam Home Appliances",
      desc: `“NeoGrowth fuelled my Passion to make it big by providing timely funding.
	  They are <br /> truly setting up a new benchmark for Convenience & Speed
	  of Funding”`,
      watchMore: null,
      readMore: "https://www.neogrowth.in/stories/satyam-home-appliances/",
    },
  ];

  return (
    <div className="carousel-main">
      <div
        id="myCarousel"
        className="carousel slide"
        data-ride="carousel"
        data-interval="4000"
      >
        <div className="row carousel-inner">
          {list.map((item, index) => (
            <div
              className={`item col-lg-12 ${
                index === currentDisplayed ? "active" : ""
              }`}
              key={index}
            >
              <div className="carousel-item">
                <div className="carouselItem">
                  <img
                    className="testimony"
                    src={item.userImage}
                    alt="testimonial"
                  />
                  <img src={Underline}  style={{display:'grid'}}  />
                  <h5>{item.user}</h5>
                  <h6>{item.desc}</h6>
                  <div style={{ display: "flex" }}>
                    {item.watchMore && (
                      <a href={item.watchMore} target="_blank">
                        <div className="readMore">Watch More</div>
                      </a>
                    )}
                    <a href={item.readMore} target="_blank">
                      <div className="readMore">Read More</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row" style={{ paddingTop: 30 }}>
          <ol className="carousel-indicators">
            {list.map((val, index) => (
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

export default Carousel;
