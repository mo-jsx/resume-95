import "./desktop.scss";
import { Bin, Computer, Dir } from "../../assets/icons";
import { FileManager, Icon } from "../../components";
import { IconProps } from "types/";
import FileManagerStore from "../../store/FileManagerStore";
import { useEffect, useState } from "react";

interface IconPlaceholder extends IconProps {
	title: string;
}

const initIcons: IconPlaceholder[] = [
	{ label: "Bin", img: Bin, title: "Old projects" },
	{ label: "Computer", img: Computer, title: "Lullabies" },
	{ label: "Documents", img: Dir, title: "Relevant Documents" },
];

const Desktop = () => {
	const [dirState, setDirState] = useState(false);

	const { updateDir, dirStoreState } = FileManagerStore((state) => ({
		dirStoreState: state.documentsState,
		updateDir: state.updateDocumentsState,
	}));

	useEffect(() => {}, [dirState]);
	return (
		<div className="desktop">
			<div className="space">
				{initIcons.map((icon, index) => (
					<div
						className="iconi"
						id={`icon${index + 1}`}
						title={icon.title}
						key={index}
						onClick={() => {
							setDirState(dirStoreState);
							updateDir(true);
						}}>
						<Icon label={icon.label} img={icon.img} />
					</div>
				))}

				{dirState && (
					<FileManager
						name={"Documents"}
						icon={Dir}
						updateState={() => {
							setDirState(dirStoreState);
							updateDir(false);
						}}>
						{initIcons.map((icon, index) => (
							<div
								className="iconi"
								id={`icon${index + 1}`}
								title={icon.title}
								key={index}>
								<Icon label={icon.label} img={icon.img} />
							</div>
						))}
					</FileManager>
				)}
			</div>
		</div>
	);
};

export default Desktop;
