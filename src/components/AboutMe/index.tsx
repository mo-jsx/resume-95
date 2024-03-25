const tech = [
	{
		link: "https://react.dev",
		label: "React",
	},
	{
		link: "https://trpc.io/",
		label: "tRPC",
	},
	{
		link: "https://storybook.js.org/",
		label: "Storybook",
	},
	{
		link: "https://vanilla-extract.style/",
		label: "vanilla-extract",
	},
	{
		link: "https://graphql.org/",
		label: "GraphQL",
	},
	{
		link: "https://threejs.org/",
		label: "Threejs",
	},
];

const AboutMe = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
			}}>
			<h1>Hi there 👋 I'm Mo!</h1>
			<img
				src={
					"https://gitlab.com/mojsx.dev/personal/-/raw/main/pic.webp"
				}
				alt={"My profile pic"}
				style={{
					width: "120px",
					height: "160px",
					backgroundColor: "black",
				}}
			/>
			<ul
				style={{
					listStyle: "none",
					fontSize: "0.8rem",
					lineHeight: "1.4rem",
				}}>
				<li>📍 Based in Algiers, Algeria.</li>
				<li>
					👨‍💻 I specialise in design systems, performant frontend
					applications, immersive web experience and managing
					monorepos.
				</li>
				<li>
					🔭 I’m currently working on Rihla a digital travel agency.
				</li>
				<li>
					⚡️ My current favorite technologies are{" "}
					{tech.map((t, index) => (
						<a href={t.link} target="_blank" key={index}>
							{t.label},{" "}
						</a>
					))}
					.
				</li>
				<li>👬 I’m looking to contribute to exciting projects...</li>
				<li>✨ Fun fact: I watched all Matrin Scoresese movies...</li>
			</ul>
		</div>
	);
};

export default AboutMe;
