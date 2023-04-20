import React from "react";
import { WindowProps } from "types/";

interface TabProps {
	name: string;
	icon: string;
	id: string;
	isFocused: boolean;
	isMinimized: boolean;
}

const Tab = (props: TabProps) => {
	const { name, icon, id, isFocused, isMinimized } = props;

	return (
		<button className={`btn ${isFocused && "focused"}`}>
			<img src={icon} alt={`${icon} icon`} />
			<span className="label">{name}</span>
		</button>
	);
};

export default Tab;
