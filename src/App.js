import React from "react";
import Fullpage from "./Fullpage";
import Slide from "./Slide";
import Navbar from "./Navbar";
import IntroVid from "./resources/videos/intro.mp4";

function App() {
	return (
		<div className="overflow-hidden App">
			<Navbar />
			<Fullpage>
				<Slide color="bg-red-200" active>
					<div className="relative flex">
						<div className="flex overlay">
							<div className="z-10 container sm:pt-16 pt-24 mx-auto">
								<h1 className="text-4xl sm:text-left font-bold text-white text-center">
									We're App-builders
								</h1>
								<h6 className="text-lg sm:text-left text-center text-white">
									Authentic solutions through digital innovation
								</h6>
							</div>
						</div>
						<video
							autoPlay
							muted
							loop
							src="https://drive.google.com/uc?id=1LjSRsTLaPdiSVnmhVOQ88Z58S7EbqH6x&export=download"
						/>
						// {IntroVid}
					</div>
				</Slide>

				<Slide color="bg-blue-300">
					<h1 className="my-auto text-6xl text-blue-800">Second</h1>
				</Slide>

				<Slide color="bg-green-300">
					<h1 className="my-auto text-6xl text-green-800">Third</h1>
				</Slide>

				<Slide color="bg-indigo-300">
					<h1 className="my-auto text-6xl text-indigo-800">Fourth</h1>
				</Slide>
			</Fullpage>
		</div>
	);
}

export default App;
