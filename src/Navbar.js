import React from "react";
import Logo from "./resources/images/icons/DD-logo.svg";
import "./styles/navbar.css";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  render() {
    return (
      <header className="bg-gray-100 sm:bg-transparent sm:flex sm:justify-between absolute w-full z-50">
        <div className="flex items-center justify-between px-5 py-3 overflow-hidden">
          <div>
            <img className="h-8" src={Logo} alt="Design Develop" />
          </div>

          <div className="sm:hidden">
            <button
              onClick={() => {
                this.setState(prevState => ({ isOpen: !prevState.isOpen }));
              }}
              type="button"
              className="block text-gray-500 transition-all duration-200 focus:bg-transparent active:bg-transparent focus:outline-none"
            >
              {/* <svg className="w-4 h-4 fill-current" viewBox="0 0 18 15">
                {!this.state.isOpen ? (
                  <>
                    <path d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z" />
                    <path d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z" />
                    <path d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z" />
                  </>
                ) : (
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                )}
              </svg> */}
              <div
                className={`burger burger-rotate${
                  this.state.isOpen ? " open" : ""
                }`}
              >
                <div className="burger-lines"></div>
              </div>
            </button>
          </div>
        </div>
        <div
          className={`px-3 py-3 sm:text-white transition-all duration-200 overflow-hidden sm:flex ${
            this.state.isOpen ? "block" : "hidden"
          }`}
        >
          <a
            href="#"
            className="block px-2 sm:text-white navlink py-2 mb-1 font-semibold transition-all duration-200 rounded hover:shadow-md hover:bg-white"
          >
            Projects
          </a>

          <a
            href="#"
            className="block px-2 sm:text-white navlink py-2 my-1 sm:mt-0 sm:ml-2 font-semibold transition-all duration-200 rounded hover:shadow-md hover:bg-white"
          >
            About
          </a>

          <a
            href="#"
            className="block px-2 py-2 my-1 navlink sm:mt-0 sm:ml-2 font-semibold transition-all duration-200 rounded hover:shadow-md hover:bg-white"
          >
            Contact
          </a>
        </div>
      </header>
    );
  }
}

export default Navbar;
