import {
	GitHub,
	LinkedIn,
	File,
	Explorer,
	Medium,
	Win95,
} from "../../assets/icons";
import Resume from "../../assets/data/Resume.pdf";
import "./menu.scss";
import ProcessManager from "../../store";

const list = [
	{
		label: "GitHub",
		img: GitHub,
		link: "https://github.com/mo-jsx",
		isDownloadable: false,
	},
	{
		label: "LinkedIn",
		img: LinkedIn,
		link: "https://linkedin.com/in/medkhodja",
		isDownloadable: false,
	},
	{
		label: "Resume",
		img: File,
		link: Resume,
		isDownloadable: true,
	},
	{
		label: "Online Resume",
		img: Explorer,
		link: "https://mojsx.gtsb.io",
		isDownloadable: false,
	},
	{
		label: "Medium",
		img: Medium,
		link: "https://medium.com/@mojsx.dev",
		isDownloadable: false,
	},
];

const Menu = () => {
	const { isStart } = ProcessManager((state) => ({
		isStart: state.isStart,
	}));
	return (
		<>
			{isStart && (
				<div className="menu">
					<div className="menuSpace">
						<div className="banner">
							<img src={Win95} alt="windows 95" />
						</div>

						<div className="menuList">
							<ul>
								{list.map((item, index) => (
									<a
										href={item.link}
										download={item.isDownloadable}
										target="_blank">
										<li key={index}>
											<img
												src={item.img}
												alt={`${item.img} icon`}
											/>{" "}
											{item.label}
										</li>
									</a>
								))}
							</ul>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Menu;
