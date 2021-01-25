import React from "react";
import Header from "./components/main/header";
import Home from "./screens/home";
import Welcome from "./screens/welcome";
import Report from "./screens/report";
import Questionnaire from "./screens/questionnaire";
import SuccessStories from "./screens/successStories";
import DigitalServices from "./screens/digitalServices";
import UserGuide from "./screens/userGuide";
import UserGuideDetailed from "./screens/userGuideDetailed";
import SuccessStoriesDetailed from "./screens/successStoriesDetailed";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path={"/"} render={(props) => <Welcome {...props} />} />
          <Route
            exact
            path={"/knowStatus"}
            render={(props) => <Home {...props} />}
          />
          <Route
            exact
            path={"/questionnaire"}
            render={(props) => <Questionnaire {...props} />}
          />
          <Route
            exact
            path={"/report"}
            render={(props) => <Report {...props} />}
          />
          <Route
            exact
            path={"/knowledgePortal"}
            render={(props) => <UserGuide {...props} />}
          />
          <Route
            exact
            path={"/knowledgePortal/:id"}
            render={(props) => <UserGuideDetailed {...props} />}
          />
          <Route
            exact
            path={"/successStories"}
            render={(props) => <SuccessStories {...props} />}
          />
          <Route
            exact
            path={"/successStories/:id"}
            render={(props) => <SuccessStoriesDetailed {...props} />}
          />
          <Route
            exact
            path={"/services"}
            render={(props) => <DigitalServices {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
