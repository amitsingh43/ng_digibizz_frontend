import "regenerator-runtime/runtime.js";
import React, { useEffect, useState } from "react";
import Header from "./components/main/header";
import GotoTop from "./components/gotoTop";
import Home from "./screens/home";
import Welcome from "./screens/welcome";
import Report from "./screens/report";
import Questionnaire from "./screens/questionnaire";
import SuccessStories from "./screens/successStories";
import DigitalServices from "./screens/digitalServices";
import UserGuide from "./screens/userGuide";
import UserGuideDetailed from "./screens/userGuideDetailed";
import SuccessStoriesDetailed from "./screens/successStoriesDetailed";
import AvailNowRegistration from "./screens/availNowRegistration";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { show_toast, clear_error } from "./store/actions";
// import ExitPopUp from "./components/main/exitPopup";
function App({ errorMessage, clear_error }) {
	// const [showPopUp, togglePopUp] = useState(false);
	window.onbeforeunload = (e) => {
		// togglePopUp(!showPopUp);
		// e.preventDefault();
		// e.stopPropagation();
		// return false;
	};
	useEffect(() => {
		if (errorMessage !== "") {
			show_toast(errorMessage);
			clear_error();
		}
	}, [errorMessage]);
	return (
		<div>
			<Router>
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
					<Route
						exact
						path={"/reg"}
						render={(props) => <AvailNowRegistration {...props} />}
					/>
				</Switch>
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
