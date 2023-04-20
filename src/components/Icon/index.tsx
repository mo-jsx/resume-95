// MODULES
import Draggable from "react-draggable";
import cuid from "cuid";

// STORE
import ProcessManager from "../../store";

// TYPES
import { IconProps, WindowProps } from "types/";

// FILES
import "./icon.scss";

const Icon = (props: IconProps) => {
	const { label, img, variant } = props;
	const { createProcess } = ProcessManager((state) => ({
		createProcess: state.createProcess,
	}));

	const newWindow: WindowProps = {
		name: label,
		icon: img,
		id: cuid(),
		isOpened: true,
		isFocused: true,
		isMinimized: false,
		isMaximized: false,
	};

	return (
		<Draggable>
			<div
				className="icon box"
				onDoubleClick={() => createProcess(newWindow)}>
				<img src={img} alt={`${img} logo`} unselectable="on" />
				<p className={`${variant}`}>{label}</p>
			</div>
		</Draggable>
	);
};

export default Icon;
