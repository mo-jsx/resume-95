import { Button } from "../../components";
import { Start } from "../../assets/icons/";
import "./dock.scss";

const Dock = () => {
	return (
		<div className="dock">
			<Button
				label="Start"
				img={Start}
				alt="Start Button"
				variant="primary"
			/>
		</div>
	);
};

export default Dock;
