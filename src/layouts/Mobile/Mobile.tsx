import React from "react";
import "./mobile.scss";
import { AboutMe, Window } from "../../components";
import { Printer } from "../../assets/icons";

import Resume from "../../assets/data/Resume.pdf";

const Mobile = () => {
	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = Resume; // Replace with the actual path to your PDF file
		link.download = "Resume.pdf"; // Specify the desired file name for download
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div className="mobile">
			<div className="aboutme">
				<AboutMe />

				<button className="download" onClick={() => handleDownload()}>
					<h3>Download Resume</h3>
					<img src={Printer} alt="Download resume" />
				</button>
			</div>

			<h6 className="warning">
				⚠️ Mobile version still under construction! ⚠️
				<br /> For full immersive experience use Desktop
			</h6>
		</div>
	);
};

export default Mobile;
