import React from "react";
import "./styles/navdots.css";
class Navdots extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0
    };
  }

  componentDidMount() {
    const height = this.divElement.clientHeight;
    this.setState({ height });
  }
  render() {
    const dots = ["1", "2", "3", "4"];
    return (
      <div
        ref={divElement => {
          this.divElement = divElement;
        }}
        className="dot-container flex flex-col items-center justify-center my-auto absolute right-0 mr-5 py-4 z-20"
        style={{ marginTop: -this.state.height / 2 + "px" }}
      >
        {dots.map((value, key) => {
          if (value === "1")
            return (
              <a
                href={"#" + value}
                key={key}
                className="dot w-8 h-8 sm:w-4 sm:h-4 my-3 sm:my-2 rounded-full active"
              ></a>
            );
          else
            return (
              <a
                href={"#" + value}
                key={key}
                className="dot w-8 h-8 sm:w-4 sm:h-4 my-3 sm:my-2 rounded-full"
              ></a>
            );
        })}
      </div>
    );
  }
}

export default Navdots;
