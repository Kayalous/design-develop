import React from "react";
import "./styles/fullpage.css";
import "./scripts/fullpage.js";

class Fullpage extends React.Component {
  render() {
    return (
      <div
        id="fullpage"
        className="w-screen h-screen overflow-hidden min-w-64 min-h-64 relative"
      >
        {this.props.children}{" "}
      </div>
    );
  }
}

export default Fullpage;
