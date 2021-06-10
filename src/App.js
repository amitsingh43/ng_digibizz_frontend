import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
//import SecureRoute from "components/secureRoute";
import { useDispatch,useSelector } from "react-redux";
import TagManager from "react-gtm-module";

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
// import Login from "./screens/login";
// import Settings from "./screens/settings";


//import Catalog from "./screens/catalog";
import { clear_error } from "./store/actions";
import show_toast from "./util/showToast";

import Tracking from "./util/tracking";

// import ExitPopUp from "./components/main/exitPopup";
export default function App({ history }) {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.errorMessage);
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
      dispatch(clear_error());
    }
  }, [dispatch, errorMessage]);

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
          <Route exact path={"/"} component={Welcome} />
          <Route
            exact
            path={"/knowStatus"}
            component={Home}
          />
          <Route
            exact
            path={"/questionnaire/:section"}
            component={Questionnaire}
          />
          <Route
            exact
            path={"/report"}
            component={Report}
          />
          <Route
            exact
            path={"/knowledgeCenter"}
            component={UserGuide}
          />
          <Route
            exact
            path={"/knowledgeCenter/:id"}
            component={UserGuideDetailed}
          />
          <Route
            // exact
            path={"/successStories/:id"}
            component={SuccessStoriesDetailed}
          />
          <Route
            exact
            path={"/successStories"}
            component={SuccessStories}
          />
          <Route
            exact
            path={"/services/:category/:partner"}
            component={Partner}
          />
          <Route
            exact
            path={"/services"}
            component={DigitalServices}
          />
           {/* <Route
            exact
            path={"/login"}
            component={Login}
          />
          <Route
            exact
            path={"/settings"}
            component={Settings}
          /> */}
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}