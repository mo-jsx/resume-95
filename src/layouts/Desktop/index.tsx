// STORE
import ProcessManager from "../../store";

// LAYOUTS & COMPONENTS
import { Icon, Window, Resume } from "../../components";

// ASSETS
import { Bin, Computer, Dir, File } from "../../assets/icons";
import "./desktop.scss";

const Desktop = () => {
	const { processes } = ProcessManager((state) => ({
		processes: state.openWindows,
	}));

	return (
		<div className="desktop">
			<div className="space">
				<div id="icon1">
					<Icon label={"My Computer"} img={Computer} />
				</div>

				<div id="icon2">
					<Icon label={"Bin"} img={Bin} />
				</div>

				<div id="icon3">
					<Icon label={"Documents"} img={Dir} />
				</div>

				<div id="icon4">
					<Icon
						label={"My resume.pdf"}
						img={File}
						children={<Resume />}
					/>
				</div>

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
			</div>
		</div>
	);
};

export default Desktop;
