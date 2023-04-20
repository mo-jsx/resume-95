import "../button.scss";

interface ControlProps {
	img: string;
	title: string;
}

const Control = (props: ControlProps) => {
	const { img, title } = props;
	return (
		<button className={"btn"} title={title}>
			<img src={img} alt={`${img} icon`} />
		</button>
	);
};

export default Control;
