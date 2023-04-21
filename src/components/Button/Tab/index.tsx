import ProcessManager from "../../../store";
import "./tab.scss";

interface TabProps {
	name: string;
	icon: string;
	id: string;
	isFocused: boolean;
	isMinimized: boolean;
}

const Tab = (props: TabProps) => {
	const { name, icon, id } = props;

	const { minimizeWindow, openWindows } = ProcessManager((state) => ({
		minimizeWindow: state.minimize,
		openWindows: state.openWindows,
	}));

	const thisWindow = openWindows.find((window) => window.id === id);

	return (
		<button
			className={`${thisWindow?.isFocused ? "btn focused" : "btn"}`}
			onClick={() => {
				minimizeWindow(id, !thisWindow?.isFocused);
			}}>
			<img src={icon} alt={`${icon} icon`} />
			<span className="label">{name}</span>
		</button>
	);
};

export default Tab;
