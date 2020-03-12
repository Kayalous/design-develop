import React from "react";
import Logo from "./resources/images/icons/DD-logo.svg";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./styles/navbar.css";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  render() {
    return ( <
      Router >
      <
      header className = "bg-gray-100 sm:bg-transparent sm:flex sm:justify-between absolute top-0 left-0 right-0 z-50 container mx-auto" >
      <
      div className = "flex items-center justify-between mx-5 md:mx-0 py-3 overflow-hidden" >
      <
      Link to = "/"
      className = "flex items-center" >
      <
      img className = "h-8"
      src = {
        Logo
      }
      alt = "Design Develop" / >
      <
      h2 className = "logo-text flex flex-col leading-none ml-2 text-gray-700 sm:text-white duration-200 transition-all sm:hover:text-gray-200" >
      <
      span className = "font-black" > DESIGN < /span> <
      span className = "font-black" > DEVELOP < /span> < /
      h2 > <
      /Link>{" "} <
      div className = "sm:hidden" >
      <
      button onClick = {
        () => {
          this.setState(prevState => ({
            isOpen: !prevState.isOpen
          }));
        }
      }
      type = "button"
      className = "block text-gray-500 transition-all duration-200 focus:bg-transparent active:bg-transparent focus:outline-none" >
      <
      div className = {
        `burger burger-rotate${
                    this.state.isOpen ? " open" : ""
                  }`
      } >
      <
      div className = "burger-lines" > < /div>{" "} < /
      div > {
        " "
      } <
      /button>{" "} < /
      div > {
        " "
      } <
      /div>{" "} <
      div className = {
        `px-3 py-3 sm:text-white transition-all duration-200 overflow-hidden sm:flex ${
              this.state.isOpen ? "block" : "hidden"
            }`
      } >
      <
      Link to = "/projects"
      className = "block px-2 sm:text-white navlink py-2 mb-1 font-semibold transition-all duration-200 rounded hover:shadow-md hover:bg-white" >
      Projects {
        " "
      } <
      /Link> <
      Link to = "/about"
      className = "block px-2 sm:text-white navlink py-2 my-1 sm:mt-0 sm:ml-2 font-semibold transition-all duration-200 rounded hover:shadow-md hover:bg-white" >
      About {
        " "
      } <
      /Link> <
      Link to = "/contact"
      className = "block px-2 py-2 my-1 navlink sm:mt-0 sm:ml-2 font-semibold transition-all duration-200 rounded hover:shadow-md hover:bg-white" >
      Contact {
        " "
      } <
      /Link>{" "} < /
      div > {
        " "
      } <
      /header> <
      Switch >
      <
      Route exact path = "/" >
      <
      Home > < /Home> < /
      Route > <
      Route exact path = "/projects" >
      <
      Projects > < /Projects> < /
      Route > <
      Route exact path = "/about" >
      <
      About > < /About> < /
      Route > <
      Route exact path = "/contact" >
      <
      Contact > < /Contact> < /
      Route > <
      /Switch> < /
      Router >
    );
  }
}

export default Navbar;