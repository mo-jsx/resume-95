import { Desktop, Dock, Mobile } from "./layouts";
import ReactGA from "react-ga";

import "./app.scss";
import { useEffect } from "react";

const TRACKING_ID = "UA-248552794-2";

ReactGA.initialize(TRACKING_ID);

const App = () => {
	useEffect(() => ReactGA.pageview(window.location.pathname), []);

	const width = window.innerWidth;
	console.log("Width: ", width);

	return (
		<>
			{width <= 756 ? (
				<Mobile />
			) : (
				<div className="App">
					<div
						id="startup"
						onAnimationEnd={() =>
							(document.getElementById("startup")!.style.display =
								"none")
						}></div>
					<Desktop />
					<Dock />
				</div>
			)}
		</>
	);
};

export default App;
