import React, { useEffect } from "react";
import Slide from "./Slide";
import Loader from "./Loader";
import GridItem from "./grid-item";
import gamhraHeader from "./resources/images/project-images/gamhra-header.jpg";

function Projects() {
	const [isLoaded, setIsLoaded] = React.useState(undefined);
	useEffect(() => {
		setTimeout(() => {
			setIsLoaded(true);
		}, 500);
	});
	return (
		<>
			{!isLoaded ? <Loader /> : ""}
			<div className="relative min-h-screen mt-10 min-w-screen">
				<div class="container mx-auto py-20">
					<h1 className="my-auto text-6xl font-bold text-gray-800 ">
						{" "}
						We design a lot{" "}
					</h1>{" "}
					<p className="font-light text-gray-600">
						Here are some of our favorites
					</p>
				</div>
				<div className="flex flex-wrap">
					<GridItem
						img={gamhraHeader}
						name="Gamhra"
						color="bg-blue-600"
					></GridItem>
					<GridItem name="Gamhra" color="bg-blue-500"></GridItem>
					<GridItem name="Gamhra" color="bg-blue-400"></GridItem>
					<GridItem name="Gamhra" color="bg-blue-300"></GridItem>
					<GridItem name="Gamhra" color="bg-blue-200"></GridItem>
					<GridItem name="Gamhra" color="bg-blue-700"></GridItem>
					<GridItem name="Gamhra" color="bg-indigo-600"></GridItem>
					<GridItem name="Gamhra" color="bg-indigo-400"></GridItem>
					<GridItem name="Gamhra" color="bg-indigo-300"></GridItem>
					<GridItem name="Gamhra" color="bg-indigo-200"></GridItem>
					<GridItem name="Gamhra" color="bg-indigo-700"></GridItem>
					<GridItem name="Gamhra" color="bg-indigo-800"></GridItem>
				</div>
			</div>
		</>
	);
}

export default Projects;
