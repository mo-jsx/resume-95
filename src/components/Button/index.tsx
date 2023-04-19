import { ButtonProps } from "types/";
import "./button.scss";

const Button = (props: ButtonProps) => {
	const { label, img, alt, variant = "normal" } = props;
	return (
		<>
			{img && label && (
				<button className={`btn ${variant}`}>
					<img src={img} alt={alt} />
					<span className="label">{label}</span>
				</button>
			)}
			{img && !label && (
				<button className={`btn ${variant}`}>
					<img src={img} alt={`${img} icon`} />
				</button>
			)}
			{!img && label && (
				<button className={`btn ${variant}`}>{label}</button>
			)}
		</>
	);
};

export default Button;
