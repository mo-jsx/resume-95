import { Button } from "../../components";
import { Start } from "../../assets/icons";
import "./dock.scss";
import ProcessManager from "../../store";
import Tab from "../../components/Button/Tab";

const Dock = () => {
	const { openedWindows } = ProcessManager((state) => ({
		openedWindows: state.openWindows,
	}));

	return (
		<div className="dock">
			<div className="nav">
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
								<Tab
									name={tab.name}
									icon={tab.icon}
									id={tab.id}
									isFocused={false}
									isMinimized={false}
								/>
							</div>
						))}
					</div>
				</div>
				<a href="https://mojsx.gtsb.io" target="_blank">
					<Button label={"Made w/ ❤️️ by mojsx"} variant={"normal"} />
				</a>
			</div>
		</div>
	);
};

export default Dock;
