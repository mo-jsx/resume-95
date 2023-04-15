// MODULES
import { useEffect, useState } from "react";

// LAYOUTS & COMPONENTS
import { BinWindow, ComputerWindow, DirWindow } from "./windows";
import { Icon } from "../../components";

// STORE
import FileManagerStore from "../../store/FileManagerStore";

// ASSETS
import { Bin, Computer, Dir } from "../../assets/icons";
import "./desktop.scss";

interface IconPlaceholder {
	label: string;
	img: string;
	variant?: "black" | "white";
	title: string;
	updater: (b: boolean) => any;
}

const Desktop = () => {
	const [dirState, setDirState] = useState(false);
	const [computerState, setComputerState] = useState(false);
	const [binState, setBinState] = useState(false);

	const { updateDir, updateComputer, updateBin, dirStoreState } =
		FileManagerStore((state) => ({
			dirStoreState: state.documentsState,
			updateDir: state.updateDocumentsState,
			updateComputer: state.updateComputerState,
			updateBin: state.updateBinState,
		}));

	const initIcons: IconPlaceholder[] = [
		{
			label: "Bin",
			img: Bin,
			title: "Old projects",
			updater: (isVisible) => {
				setBinState(isVisible);
				updateBin(isVisible);
			},
		},
		{
			label: "Computer",
			img: Computer,
			title: "Lullabies",
			updater: (isVisible) => {
				setComputerState(isVisible);
				updateComputer(isVisible);
			},
		},
		{
			label: "Documents",
			img: Dir,
			title: "Relevant Documents",
			updater: (isVisible) => {
				setDirState(isVisible);
				updateDir(isVisible);
			},
		},
	];

	useEffect(() => {}, [dirState, computerState, binState]);

	return (
		<div className="desktop">
			<div className="space">
				{initIcons.map((icon, index) => (
					<div
						className="iconi"
						id={`icon${index + 1}`}
						title={icon.title}
						key={index}
						onDoubleClick={() => icon.updater(true)}>
						<Icon
							label={icon.label}
							img={icon.img}
							variant="white"
						/>
					</div>
				))}

				{computerState && (
					<ComputerWindow
						name={"My Computer"}
						icon={Computer}
						updateState={() => initIcons[1].updater(false)}
						children={undefined}
					/>
				)}

				{binState && (
					<BinWindow
						name={"Bin"}
						icon={Bin}
						updateState={() => initIcons[0].updater(false)}
						children={undefined}
					/>
				)}
				{dirState && (
					<DirWindow
						name={"Documents"}
						icon={Dir}
						updateState={() => initIcons[2].updater(false)}
						children={undefined}
					/>
				)}
			</div>
		</div>
	);
};

export default Desktop;
