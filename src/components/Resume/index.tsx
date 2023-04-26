import { Printer } from "../../assets/icons";
import MyResume from "../../assets/data/Resume-1.webp";

const Resume = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "flex-start",
				width: "100%",
				overflowY: "scroll",
				textAlign: "center",
			}}>
			<a
				href="../../assets/data/Resume.pdf"
				download
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					alignContent: "center",
					width: "auto",
				}}>
				<h3>Download Resume</h3>
				<img
					src={Printer}
					alt="Printer icon"
					style={{
						margin: "0px 10px",
						width: "1.5rem",
						height: "1.5rem",
					}}
				/>
			</a>
			<img src={MyResume} alt="Resume" />
		</div>
	);
};

export default Resume;
