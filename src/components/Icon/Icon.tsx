import Draggable from "react-draggable";
import { IconProps } from "types/";
import "./icon.scss";

const Icon = (props: IconProps) => {
	const { label, img, variant } = props;

	return (
		<Draggable>
			<div className="icon box">
				<img src={img} alt={`${img} logo`} unselectable="on" />
				<p className={`${variant}`}>{label}</p>
			</div>
		</Draggable>
	);
};

export default Icon;
