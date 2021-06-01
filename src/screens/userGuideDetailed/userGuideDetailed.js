import { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import "styles/successStoriesDetailed.css";
import Disclaimer from "components/main/disclaimer";
import { header_user_guide } from "store/actions";

import { KNOWLEDGE_CENTER } from "store/strings";
import { TopContent, Image, MainContent } from "./components";

function UserGuideDetailed({ header_user_guide, match }) {
  useEffect(() => {
    header_user_guide();
    window.scrollTo(0, 0);
  }, []);

  const history = useHistory();
  const knowledge = KNOWLEDGE_CENTER.find(
    (know) => know.id == match.params.id
  );

  if (knowledge === undefined) {
    history.push("/userGuide");
    return <h1>Loading</h1>;
  }

  return (
    <div style={{ background: "rgba(229, 229, 229, 0.4)" }}>
      <div className="success-stories-detailed">
        <div className="row">
          <TopContent heading={knowledge.heading} />
        </div>
        <div className="row ">
          <Image image={knowledge.bg} />
        </div>
        <div className="row " style={{ paddingTop: 0 }}>
          <MainContent
            sections={knowledge.sections}
            heading={knowledge.heading}
            desc={knowledge.desc}
          />
        </div>
      </div>
      <Disclaimer />
    </div>
  );
}

export default connect(null, { header_user_guide })(UserGuideDetailed);
