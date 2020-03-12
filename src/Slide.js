import React from "react";

class Slide extends React.Component {
	render() {
		return (
			<div
				id={this.props.id}
				className={`slide overflow-hidden${
					this.props.active ? " active" : ""
				} flex justify-center min-w-screen min-h-screen ${
					this.props.color
				} align-items-center
        ${this.props.full ? "h-screen" : ""}
        `}
			>
				{" "}
				{this.props.children}{" "}
			</div>
		);
	}
}

export default Slide;
