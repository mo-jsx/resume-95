import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { LoadingDots } from "../../../assets/icons";

const Animation = () => {
	const container = useRef(null);

	useEffect(() => {
		lottie.loadAnimation({
			container: container.current!,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: LoadingDots,
		});
	}, []);

	return <div ref={container}></div>;
};

export default Animation;
