import React from "react";

class Overlay extends React.Component {
  render() {
    return (
      <div className="flex overlay">
        {this.props.children}
        {this.props.lines ? (
          <>
            <div className="absolute w-full h-full flex items-center justify-around py-12">
              <div className="bg-gray-500 h-full w-thin hidden sm:block"> </div>
              <div className="bg-gray-500 h-full w-thin hidden lg:block"> </div>
              <div className="bg-gray-500 h-full w-thin hidden sm:block"> </div>
              <div className="bg-gray-500 h-full w-thin hidden lg:block"> </div>
              <div className="bg-gray-500 h-full w-thin hidden sm:block"> </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default Overlay;
