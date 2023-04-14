import { ButtonProps } from "types/";
import "./button.scss";

const Button = (props: ButtonProps) => {
	const { label, img, alt, variant = "normal" } = props;
	return (
		<>
			{img ? (
				<button className={`btn ${variant}`}>
					<img src={img} alt={alt} />
					<span className="label">{label}</span>
				</button>
			) : (
				<button className={`btn ${variant}`}>{label}</button>
			)}
		</>
	);
};

export default Button;
