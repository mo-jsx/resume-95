import { Button } from "../../components";
import { Start } from "../../assets/icons";
import "./dock.scss";
import ProcessManager from "../../store";
import Tab from "../../components/Button/Tab";

const Dock = () => {
	const { openedWindows, isStart, setIsStart } = ProcessManager((state) => ({
		openedWindows: state.openWindows,
		isStart: state.isStart,
		setIsStart: state.setIsStart,
	}));

	return (
		<div className="dock">
			<div className="nav">
				<div className="navbar">
					<span onClick={() => setIsStart(!isStart)}>
						<Button
							label="Start"
							img={Start}
							alt="Start Button"
							variant="primary"
						/>
					</span>

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
