import React, { useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Overlay from "./Overlay";
import "./styles/grid-item.css";
function GridItem(props) {
	return (
		<a
			href={`${props.link ? props.link : "#"}`}
			className={`w-full relative overflow-hidden h-64 bg-red-600 project-card sm:w-1/2 lg:w-1/4 ${props.color}`}
		>
			{props.img ? (
				<img className="w-full h-full" src={props.img} alt="Project image" />
			) : (
				""
			)}
			<Overlay transparent fitContainer>
				<div className="absolute flex items-center justify-around w-full py-10 project-name">
					<p className="font-bold text-white">{props.name}</p>
					<div className="relative">
						<MdKeyboardArrowRight className="text-2xl font-light text-white" />
					</div>
				</div>
			</Overlay>
		</a>
	);
}

export default GridItem;
