import React from "react";

class Overlay extends React.Component {
	render() {
		return (
			<div
				className={`z-30 flex 
        ${this.props.fitContainer ? "w-full" : "w-screen"}
        ${this.props.transparent ? "opacity-0" : ""} h-full overlay`}
			>
				{" "}
				{this.props.children}{" "}
				{this.props.lines ? (
					<>
						<div className="absolute flex items-center justify-around w-full h-full py-12">
							<div className="hidden h-full bg-gray-500 w-thin sm:block"> </div>{" "}
							<div className="hidden h-full bg-gray-500 w-thin lg:block"> </div>{" "}
							<div className="hidden h-full bg-gray-500 w-thin sm:block"> </div>{" "}
							<div className="hidden h-full bg-gray-500 w-thin lg:block"> </div>{" "}
							<div className="hidden h-full bg-gray-500 w-thin sm:block"> </div>{" "}
						</div>{" "}
					</>
				) : (
					<> </>
				)}{" "}
			</div>
		);
	}
}

export default Overlay;
