import { Desktop, Dock } from "./layouts";
import ReactGA from "react-ga";

import "./app.scss";
import { useEffect } from "react";

const TRACKING_ID = "UA-248552794-2";

ReactGA.initialize(TRACKING_ID);

const App = () => {
	useEffect(() => ReactGA.pageview(window.location.pathname), []);
	return (
		<div className="App">
			<div
				id="startup"
				onAnimationEnd={() =>
					(document.getElementById("startup")!.style.display = "none")
				}></div>
			<Desktop />
			<Dock />
		</div>
	);
};

export default App;
