import { Button } from "../../components";
import { Start } from "../../assets/icons";
import "./dock.scss";
import ProcessManager from "../../store";

const Dock = () => {
	const { openedWindows } = ProcessManager((state) => ({
		openedWindows: state.openWindows,
	}));

	console.log("Dock", openedWindows);

	return (
		<div className="dock">
			<div className="navbar">
				<Button
					label="Start"
					img={Start}
					alt="Start Button"
					variant="primary"
				/>

				<div className="openTabs">
					{openedWindows.map((tab) => (
						<div key={tab.id}>
							<Button
								variant={"normal"}
								label={tab.name}
								img={tab.icon}
								alt={tab.name}
								title={tab.name}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Dock;
