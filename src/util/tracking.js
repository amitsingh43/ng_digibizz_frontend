import ReactGA from "react-ga";

class Tracking {
	init() {
		if (process.env.isProd === "yes") {
			ReactGA.initialize(process.env.REACT_APP_GA_ID);
		}
	}
	pageView() {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}
	trackEvent(action, category, label = "") {
		console.log(ReactGA.event);

		ReactGA.event({
			action: action,
			category: category,
			label: label,
		});
	}
}

export default new Tracking();
