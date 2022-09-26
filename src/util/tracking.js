import ReactGA from "react-ga";
import TagManager from "react-gtm-module";

class Tracking {
	init() {
		if (process.env.isProd === "yes") {
			ReactGA.initialize(process.env.REACT_APP_GA_ID);
		}
	}
	pageView() {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}
	gtmFix(){
		const tagManagerArgs = {
			gtmId: process.env.REACT_APP_GTM_ID,
		};

		if (process.env.isProd === "no") {
			TagManager.initialize(tagManagerArgs);
		}
	}
	trackEvent(action, category, label = "") {
		ReactGA.event({
			action: action,
			category: category,
			label: label,
		});
	}
}

export default new Tracking();
