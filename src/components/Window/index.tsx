import React from "react";
import Draggable from "react-draggable";
import Button from "../Button";
import { WindowProps, ButtonProps } from "types/";
import { Close } from "../../assets/icons";
import "./fileManager.scss";
import ProcessManager from "../../store";

interface ControlProps extends ButtonProps {
	title: string;
	state: (id: string) => void;
}

const options = ["File", "Edit", "View", "Help"];

const Window = (props: WindowProps) => {
	const { name, icon, children, id } = props;
	let { isFocused, isMinimized, isOpened } = props;

	const { closeWindow } = ProcessManager((state) => ({
		closeWindow: state.killProcess,
	}));

	const controls: ControlProps[] = [
		{
			variant: "primary",
			img: Close,
			title: "Close window",
			state: (id: string) => closeWindow(id),
		},
	];

	return (
		<Draggable handle="#handle">
			<div
				className="window"
				style={{
					zIndex: `${isFocused ? 1000 : 1}`,
					display: `${isMinimized ? "hidden" : "block"}`,
				}}
				onClick={() => (isFocused = true)}>
				<div className="firstRow" id="handle">
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
								<Button
									label={control.label}
									img={control.img}
									variant={"primary"}
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

				<div className="playground">{children}</div>
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
