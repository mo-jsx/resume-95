import { Icon } from "../../components/";
import { GitHub, LinkedIn, Email } from "../../assets/icons";

const Contact = () => {
	return (
		<>
			<div id="5">
				<a href="https://github.com/mo-jsx" target="_blank">
					<Icon label={"GitHub"} img={GitHub} variant="black" />
				</a>
			</div>

			<div id="6">
				<a href="https://linkedin.com/in/medkhodja" target="_blank">
					<Icon label={"LinkedIn"} img={LinkedIn} variant="black" />
				</a>
			</div>

			<div id="7">
				<a href="mailto:medd.khodja@gmail.com" target="_blank">
					<Icon label={"Send Email"} img={Email} variant="black" />
				</a>
			</div>
		</>
	);
};

export default Contact;
