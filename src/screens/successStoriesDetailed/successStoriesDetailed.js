import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { header_success_stories } from "store/actions";
import "styles/successStoriesDetailed.css";
import { SUCCESSDATA } from "store/strings";
import { useHistory } from "react-router-dom";
import { MainContent, TopContent, DetailedCard } from "./components";

export default function SuccessStoriesDetailed({ match }) {
	const dispatch=useDispatch();

  useEffect(() => {
    dispatch(header_success_stories());
    window.scrollTo(0, 0);
  }, [dispatch]);

  const history = useHistory();
  if (!match) return <div>Hello</div>;
  const story = SUCCESSDATA.find((data) => data.id == match.params.id);
  if (story === undefined) {
    history.push("/successStories");
    return <h1>Redirecting</h1>;
  }
  return (
    <div style={{ background: "rgba(229, 229, 229, 0.4)" }}>
      <div className="success-stories-detailed">
        <div className="row">
          <TopContent story={story} />
        </div>
        <div className="row">
          <DetailedCard story={story} />
        </div>
        <div className="row">
          <MainContent story={story} />
        </div>
      </div>
    </div>
  );
}
