// MODULES
import React from "react";
import Draggable from "react-draggable";

// LAYOUTS & COMPONENTS
import Control from "../Button/Controls";

// STORE
import ProcessManager from "../../store";

// TYPES
import { WindowProps } from "types/";

// ASSETS
import { Close, Maximize, Mini } from "../../assets/icons";
import "./fileManager.scss";

interface ControlProps {
	img: string;
	title: string;
	state: (id: any) => void;
}

const options = ["File", "Edit", "View", "Help"];

const Window = (props: WindowProps) => {
	const { name, icon, children, id } = props;
	let { isFocused, isMinimized, isMaximized, isOpened } = props;

	const { closeWindow, maximizeWindow, minimizeWindow, setFocus } =
		ProcessManager((state) => ({
			closeWindow: state.killProcess,
			maximizeWindow: state.maximize,
			minimizeWindow: state.minimize,
			setFocus: state.setFocus,
		}));

	const controls: ControlProps[] = [
		{
			img: Mini,
			title: "Minimize window",
			state: () => minimizeWindow(id, !isMinimized),
		},
		{
			img: Maximize,
			title: "Maximize window",
			state: (id) => maximizeWindow(id, !isMaximized),
		},
		{
			img: Close,
			title: "Close window",
			state: (id) => closeWindow(id),
		},
	];

	return (
		<Draggable handle="#handle">
			<div
				className="window"
				style={{
					zIndex: isFocused ? 1000 : 1,
					display: isMinimized ? "none" : "block",
					width: isMaximized ? "100%" : "40%",
					height: isMaximized ? "100%" : "65%",
					backgroundColor: isFocused ? "#c6c6c6" : "#eee",
					top: isMaximized
						? 0
						: `${(Math.random() * 1000).toFixed()}`,
					left: isMaximized
						? 0
						: `${(Math.random() * 1000).toFixed()}`,
				}}
				onClick={() => setFocus(id)}>
				<div
					className="firstRow"
					id="handle"
					style={{
						backgroundColor: isFocused ? "#000080" : "#c6c6c6",
					}}>
					<div className="left">
						<img src={icon} alt={`${name} icon`} />
						<h4>{name}</h4>
					</div>

					<div className="right">
						{controls.map((control, index) => (
							<div
								className="control"
								onClick={() => control.state(id)}
								key={index}>
								<Control
									img={control.img}
									title={control.title}
								/>
							</div>
						))}
					</div>
				</div>

				<div className="secondRow">
					<ul>
						{options.map((option, index) => (
							<li key={index}>{option}</li>
						))}
					</ul>
				</div>

				<div
					className="playground"
					style={{ height: isMaximized ? "89% " : "84%" }}>
					{children}
				</div>
				<div className="bar">
					<p>
						{children ? React.Children.count(children) : 0} object
						{"("}s{")"} found
					</p>
				</div>
			</div>
		</Draggable>
	);
};

export default Window;
