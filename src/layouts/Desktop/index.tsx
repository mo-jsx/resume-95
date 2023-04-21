// STORE
import ProcessManager from "../../store";

// LAYOUTS & COMPONENTS
import { Icon, Window, Resume, Contact, Projects } from "../../components";

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
					<Icon
						label={"Contact Links"}
						img={Dir}
						children={<Contact />}
					/>
				</div>

				<div id="icon4">
					<Icon
						label={"Projects"}
						img={Dir}
						children={<Projects />}
					/>
				</div>

				<div id="icon5">
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
