import { FileManagerProps, ButtonProps } from "types/";
import Button from "../Button";
import { Close } from "../../assets/icons";
import "./fileManager.scss";
import Draggable from "react-draggable";

interface ControlProps extends ButtonProps {
	title: string;
}

const controls: ControlProps[] = [
	{ variant: "primary", img: Close, title: "Close window" },
];

const options = ["File", "Edit", "View", "Help"];

const FileManager = (props: FileManagerProps) => {
	const { name, icon, children, updateState } = props;

	return (
		<Draggable handle="#handle">
			<div className="window">
				<div className="firstRow" id="handle">
					<div className="left">
						<img src={icon} alt={`${name} icon`} />
						<h4>{name}</h4>
					</div>

					<div className="right">
						{controls.map((control, index) => (
							<div
								className="control"
								onClick={() => updateState()}>
								<Button
									label={control.label}
									img={control.img}
									variant={"primary"}
									key={index}
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
						{children ? children.length : 0} object{"("}s{")"} found
					</p>
				</div>
			</div>
		</Draggable>
	);
};

export default FileManager;
