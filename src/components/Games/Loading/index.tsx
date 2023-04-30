import Animation from "./Animation";

const Loading = () => {
	return (
		<div style={{ position: "absolute", marginLeft: "25%" }}>
			<Animation />
			<h1 style={{ textAlign: "center" }}>Loading</h1>
		</div>
	);
};

export default Loading;
