import { FileManager, Icon } from "../../../components";

interface Window {
	name: string;
	icon: string;
	children: React.ReactNode;
	updateState: () => any;
}

const ComputerWindow = (props: Window) => {
	const { name, icon, children, updateState } = props;
	return (
		<div id="computerWindow">
			<FileManager
				name={name}
				icon={icon}
				updateState={() => updateState()}>
				{children}
			</FileManager>
		</div>
	);
};

export default ComputerWindow;
