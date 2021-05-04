import ReactGA from "react-ga";

class Tracking {
	init() {
		// ReactGA.initialize("UA-158848193-1");
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
