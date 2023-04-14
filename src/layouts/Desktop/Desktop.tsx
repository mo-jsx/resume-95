import "./desktop.scss";
import { Bin, Computer, Dir } from "../../assets/icons";
import { Icon } from "../../components";
import { IconProps } from "types/";

interface IconPlaceholder extends IconProps {
	title: string;
}

const initIcons: IconPlaceholder[] = [
	{ label: "Bin", img: Bin, title: "Old projects" },
	{ label: "Computer", img: Computer, title: "Lullabies" },
	{ label: "Documents", img: Dir, title: "Relevant Documents" },
];

const Desktop = () => {
	return (
		<div className="desktop">
			<div className="space">
				{initIcons.map((icon, index) => (
					<div
						className="iconi"
						id={`icon${index + 1}`}
						title={icon.title}>
						<Icon label={icon.label} img={icon.img} key={index} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Desktop;
