import { Desktop, Dock } from "./layouts";

import "./app.scss";

const App = () => {
	return (
		<div className="App">
			<Desktop />
			<Dock />
		</div>
	);
};

export default App;
