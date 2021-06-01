import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { connect } from "react-redux";

import "regenerator-runtime/runtime.js";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/main/header";
import GotoTop from "./components/gotoTop";
import Footer from "./components/main/footer";
import Home from "./screens/home";
import Welcome from "./screens/welcome";
import Report from "./screens/report";
import Questionnaire from "./screens/questionnaire";
import SuccessStories from "./screens/successStories";
import DigitalServices from "./screens/digitalServices";
import Partner from "./screens/partner";
import UserGuide from "./screens/userGuide";
import UserGuideDetailed from "./screens/userGuideDetailed";
import SuccessStoriesDetailed from "./screens/successStoriesDetailed";
//import Catalog from "./screens/catalog";
import { clear_error } from "./store/actions";
import show_toast from "./util/showToast";

import Tracking from "./util/tracking";

// import ExitPopUp from "./components/main/exitPopup";
function App({ errorMessage, clear_error, history }) {
  // const [showPopUp, togglePopUp] = useState(false);
  //window.onbeforeunload = (e) => {
  // togglePopUp(!showPopUp);
  // e.preventDefault();
  // e.stopPropagation();
  // return false;
  //};

  // window.onload = () => {
  // 	const tagManagerArgs = {
  // 		gtmId: "GTM-ND3D7FG",
  // 	};

  // 	// TagManager.initialize(tagManagerArgs);
  // };
  useEffect(() => {
    if (errorMessage !== "") {
      show_toast(errorMessage);
      clear_error();
    }
  }, [clear_error, errorMessage]);

  useEffect(() => {
    Tracking.init();
    Tracking.pageView();
    if (!localStorage.getItem("VISITED")) {
      localStorage.setItem("VISITED", "true");
      Tracking.trackEvent("PAGE VIEW", "PLATFORM VISIT");
    }
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Router history={history}>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <GotoTop />
        {/* {showPopUp && <ExitPopUp />} */}
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
            path={"/questionnaire/:section"}
            render={(props) => <Questionnaire {...props} />}
          />
          <Route
            exact
            path={"/report"}
            render={(props) => <Report {...props} />}
          />
          <Route
            exact
            path={"/knowledgeCenter"}
            render={(props) => <UserGuide {...props} />}
          />
          <Route
            exact
            path={"/knowledgeCenter/:id"}
            render={(props) => <UserGuideDetailed {...props} />}
          />
          <Route
            // exact
            path={"/successStories/:id"}
            render={(props) => <SuccessStoriesDetailed {...props} />}
          />
          <Route
            exact
            path={"/successStories"}
            render={(props) => <SuccessStories {...props} />}
          />
          <Route
            exact
            path={"/services/:category/:partner"}
            render={(props) => <Partner {...props} />}
          />
          {/* <Route
            exact
            path={"/services/:category/:partner/catalog"}
            render={(props) => <Catalog {...props} />}
          /> */}
          <Route
            exact
            path={"/services"}
            render={(props) => <DigitalServices {...props} />}
          />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { errorMessage } = state;
  return {
    errorMessage,
  };
};

export default connect(mapStateToProps, { clear_error })(App);
