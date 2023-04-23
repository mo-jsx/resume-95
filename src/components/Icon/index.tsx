// MODULES
import Draggable from "react-draggable";
import ReactGA from "react-ga";
import cuid from "cuid";

// STORE
import ProcessManager from "../../store";

// TYPES
import { IconProps, WindowProps } from "types/";

// FILES
import "./icon.scss";

const Icon = (props: IconProps) => {
	const { label, img, variant = "white", children } = props;
	const { createProcess, setFocus } = ProcessManager((state) => ({
		createProcess: state.createProcess,
		setFocus: state.setFocus,
	}));

	const newWindow: WindowProps = {
		name: label,
		icon: img,
		id: cuid(),
		isOpened: true,
		isFocused: true,
		isMinimized: false,
		isMaximized: false,
		children: children,
	};

	return (
		<Draggable>
			<div
				className="icon box"
				title="Double Click to open"
				onDoubleClick={() => {
					createProcess(newWindow);
					setFocus(newWindow.id);
					ReactGA.event({
						category: label,
						action: `click on ${label}`,
						label: "Icon click",
						value: 1,
					});
				}}>
				<img src={img} alt={`${img} logo`} unselectable="on" />
				<p className={`text-${variant}`}>{label}</p>
			</div>
		</Draggable>
	);
};

export default Icon;
