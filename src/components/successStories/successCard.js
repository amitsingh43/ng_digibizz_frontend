import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../../styles/successCard.css";
import punctuation1 from "../../assets/punctuation1.svg";
import punctuation2 from "../../assets/punctuation2.svg";
function SuccessCard({ headerState, name, heading, image, content }) {
  return (
    <div className="success-card row">
      <div className="item col-lg-10">
        <Link className="a" to="/successStories/1">
          <div className="containerr">
            <img className="img-responsive col-lg-4" src={image} alt="Person" />
            <span className="col-lg-8 content">
              <h4>{name}</h4>
              <p className="industry">{heading}</p>

              <p className="">
                <img className="punctuation1" alt="''" src={punctuation1} />
                {content}
                <img className="punctuation2" alt="''" src={punctuation2} />
              </p>
              <div className="view-more">
                {headerState !== 3 && "View more"}
                {headerState === 3 && "Read full story"}
              </div>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    headerState: state.headerState,
  };
};

export default connect(mapStateToProps, null)(SuccessCard);
