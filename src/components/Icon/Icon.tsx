import { IconProps } from "types/";
import "./icon.scss";

const Icon = (props: IconProps) => {
	const { label, img } = props;

	return (
		<div className="icon">
			<img src={img} alt={`${img} logo`} />
			<p>{label}</p>
		</div>
	);
};

export default Icon;
