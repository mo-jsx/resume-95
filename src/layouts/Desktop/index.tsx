// STORE
import ProcessManager from "../../store";

// LAYOUTS & COMPONENTS
import {
	Icon,
	Window,
	Resume,
	Contact,
	Projects,
	AboutMe,
	Menu,
} from "../../components";

// ASSETS
import { Bin, Computer, Dir, File, Me } from "../../assets/icons";
import "./desktop.scss";

const Desktop = () => {
	const { processes, isStart, setIsStart } = ProcessManager((state) => ({
		processes: state.openWindows,
		isStart: state.isStart,
		setIsStart: state.setIsStart,
	}));

	const DeskIcons = [
		{
			label: "My Computer",
			img: Computer,
			children: undefined,
		},
		{
			label: "Bin",
			img: Bin,
			children: undefined,
		},
		{
			label: "Contact Links",
			img: Dir,
			children: <Contact />,
		},
		{
			label: "Projects",
			img: Dir,
			children: <Projects />,
		},
		{
			label: "My resume.pdf",
			img: File,
			children: <Resume />,
		},
		{
			label: "About me",
			img: Me,
			children: <AboutMe />,
		},
	];

	return (
		<div className="desktop">
			<div className="space" onClick={() => isStart && setIsStart(false)}>
				{DeskIcons.map((icon, index) => (
					<div id={`icon${index + 1}`}>
						<Icon
							label={icon.label}
							img={icon.img}
							children={icon.children}
						/>
					</div>
				))}

				{processes?.map((openWindow) => (
					<div key={openWindow.id}>
						<Window
							name={openWindow.name}
							icon={openWindow.icon}
							children={openWindow.children}
							id={openWindow.id}
							isOpened={openWindow.isOpened}
							isFocused={openWindow.isFocused}
							isMinimized={openWindow.isMinimized}
							isMaximized={openWindow.isMaximized}
						/>
					</div>
				))}

				<Menu />
			</div>
		</div>
	);
};

export default Desktop;
