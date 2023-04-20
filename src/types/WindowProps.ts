interface WindowProps {
	name: string;
	icon: string;
	id: string;
	isOpened: boolean;
	isFocused: boolean;
	isMinimized: boolean;
	isMaximized?: boolean;
	children?: React.ReactNode;
}

export default WindowProps;
