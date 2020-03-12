import React from "react";
import "./styles/navdots.css";
import { useSpring, animated } from "react-spring";

const trans = (x, y) => `translate3d(${x / 75}px,${y / 75}px,0)`;

class Navdots extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			height: 0
		};
	}

	componentDidMount() {
		const height = this.divElement.clientHeight;
		this.setState({
			height
		});
	}
	render() {
		const dots = ["1", "2", "3", "4"];
		return (
			<animated.div
				ref={divElement => {
					this.divElement = divElement;
				}}
				className="dot-container flex flex-col items-center justify-center my-auto absolute right-0 mr-5 py-4 z-50"
				style={{
					marginTop: -this.state.height / 2 + "px",
					transform: this.props.springParams.interpolate(trans)
				}}
			>
				{" "}
				{dots.map((value, key) => {
					if (value === "1")
						return (
							<a
								href={"#" + value}
								key={key}
								className="dot w-8 h-8 sm:w-2 sm:h-2 my-3 sm:my-4 rounded-full active"
							></a>
						);
					else
						return (
							<a
								href={"#" + value}
								key={key}
								className="dot w-8 h-8 sm:w-2 sm:h-2 my-3 sm:my-4 rounded-full"
							></a>
						);
				})}{" "}
			</animated.div>
		);
	}
}

export default Navdots;
