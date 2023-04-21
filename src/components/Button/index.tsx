import { ButtonProps } from "types/";
import "./button.scss";

const Button = (props: ButtonProps) => {
	const { label, img, alt, variant = "normal" } = props;
	return (
		<button className={`btn ${variant}`}>
			{img && <img src={img} alt={alt} />}
			<span className="label">{label}</span>
		</button>
	);
};

export default Button;
