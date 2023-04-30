import { Write, Larsson, Toothist } from "../../assets/icons";
import Icon from "../Icon";

const Projects = () => {
	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			<a
				href="https://github.com/mo-jsx/rezumee"
				target="_blank"
				title="A web app based resume builder">
				<Icon label={"Rezumee"} img={Write} variant={"black"} />
			</a>

			<a
				href="https://github.com/mo-jsx/larsson"
				target="_blank"
				title="A react component library">
				<Icon label={"Larsson"} img={Larsson} variant={"black"} />
			</a>

			<a
				href="https://github.com/mo-jsx/toothist"
				target="_blank"
				title="A web app based MCQ platform">
				<Icon label={"Toothist"} img={Toothist} variant={"black"} />
			</a>
		</div>
	);
};

export default Projects;
