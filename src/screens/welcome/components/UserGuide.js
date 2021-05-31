import { useHistory } from "react-router-dom";
import { useState } from "react";

import right from "assets/right.svg";
import left from "assets/left.svg";
import left_active from "assets/left_active.svg";
import right_inactive from "assets/right_inactive.svg";
import { KNOWLEDGE_CENTER } from "store/strings";

const UserGuide = () => {
  const history = useHistory();
  const [counter, setCounter] = useState(0);
  const [viewMore, setViewMore] = useState(false);
  const nextImage = () => {
    if (counter === 0 || counter === 1) {
      setCounter(counter + 1);
    }
  };
  const previousImage = () => {
    if (counter === 1 || counter === 2) {
      setCounter(counter - 1);
    }
  };
  return (
    <div style={{ marginBottom: 30 }}>
      <div className="row" style={{ textAlign: "center" }}>
        <div className="heading">Knowledge Center</div>
        <p>
          Know how to transform your business through our blogs and updates on
          latest industry trends.
        </p>
      </div>
      <div
        className="row row2"
        style={{
          display: "flex",
          width: "100vw",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          className="back buttons"
          style={{
            borderColor: counter === 0 ? "#c4c4c4" : "#28b04b",
            cursor: counter === 0 ? "not-allowed" : "pointer",
          }}
          onClick={previousImage}
        >
          {counter === 0 && <img src={left} alt="left" />}
          {counter !== 0 && <img src={left_active} alt="left" />}
        </div>
        <div className="row2-imgs">
          {KNOWLEDGE_CENTER.slice(
            counter === 0 ? counter * 4 : counter * 4 - 2,
            viewMore
              ? KNOWLEDGE_CENTER.length
              : counter === 0
              ? counter * 4 + 4
              : counter * 4 + 2
          ).map((image) => (
            <div
              className="col-md-2 card"
              id="be-img"
              key={image.heading}
              onClick={() => history.push(`knowledgeCenter/${image.id}`)}
            >
              <div
                className="bg-img"
                style={{ backgroundImage: `url(${image.badge})` }}
              >
                <div className="img-label">{image.heading}</div>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            borderColor: counter === 2 ? "#c4c4c4" : "#28b04b",
            cursor: counter === 2 ? "not-allowed" : "pointer",
          }}
          className="next buttons"
          onClick={nextImage}
        >
          {counter !== 2 && <img src={right} alt="right" />}
          {counter === 2 && <img src={right_inactive} alt="right" />}
        </div>
      </div>
      <div className="knowledge-view-more">
        <div className="view-more" onClick={() => setViewMore(!viewMore)}>
          {!viewMore && "View More"}
          {viewMore && "View Less"}
        </div>
      </div>
    </div>
  );
};

export default UserGuide;
