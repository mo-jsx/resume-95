import { FileManager, Icon } from "../../../components";

interface Window {
	name: string;
	icon: string;
	children: React.ReactNode;
	updateState: () => any;
}

const BinWindow = (props: Window) => {
	const { name, icon, children, updateState } = props;
	return (
		<div id="binWindow">
			<FileManager
				name={name}
				icon={icon}
				updateState={() => updateState()}>
				{children}
			</FileManager>
		</div>
	);
};

export default BinWindow;
