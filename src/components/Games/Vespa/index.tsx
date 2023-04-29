import React, { Suspense } from "react";
import Loading from "../Loading";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

const Vespa = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Spline scene="https://prod.spline.design/Vxkw6J3yL7fqOqvn/scene.splinecode" />
		</Suspense>
	);
};

export default Vespa;
