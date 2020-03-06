import React from "react";

class Slide extends React.Component {
  render() {
    return (
      <div
        className={`slide${
          this.props.active ? " active" : ""
        } flex justify-center min-w-full min-h-full ${
          this.props.color
        } align-items-center`}
      >
        {" "}
        {this.props.children}
      </div>
    );
  }
}

export default Slide;
