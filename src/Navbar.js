import React from "react";
import Logo from "./resources/images/icons/DD-logo.svg";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/navbar.css";
class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			dark: false
		};
	}

	render() {
		let resetActive = () => {
			let navlinks = document.querySelectorAll(".navlink");
			for (let i = 0; i < navlinks.length; i++) {
				navlinks[i].classList.remove("active");
			}
			this.setState({ dark: false });
		};
		let toggleActive = e => {
			resetActive();
			this.setState({ dark: true });
			e.target.classList.add("active");
		};
		return (
			<Router>
				{console.log(this.props)}
				<header
					className={`bg-gray-100 sm:bg-transparent sm:flex sm:justify-between absolute top-0 left-0 right-0 z-50 container mx-auto ${
						this.state.dark ? "dark" : ""
					}`}
				>
					<div className="flex items-center justify-between py-3 mx-5 overflow-hidden md:mx-0">
						<Link to="/" className="flex items-center" onClick={resetActive}>
							<img className="h-8" src={Logo} alt="Design Develop" />
							<h2 className="flex flex-col ml-2 leading-none text-gray-700 transition-all duration-200 logo-text sm:text-white sm:hover:text-gray-200">
								<span className="font-black"> DESIGN </span>{" "}
								<span className="font-black"> DEVELOP </span>{" "}
							</h2>{" "}
						</Link>{" "}
						<div className="sm:hidden">
							<button
								onClick={() => {
									this.setState(prevState => ({
										isOpen: !prevState.isOpen
									}));
								}}
								type="button"
								className="block text-gray-500 transition-all duration-200 focus:bg-transparent active:bg-transparent focus:outline-none"
							>
								<div
									className={`burger burger-rotate${
										this.state.isOpen ? " open" : ""
									}`}
								>
									<div className="burger-lines"> </div>{" "}
								</div>{" "}
							</button>{" "}
						</div>{" "}
					</div>{" "}
					<div
						className={`px-3 py-3 sm:text-white transition-all duration-200 overflow-hidden sm:flex ${
							this.state.isOpen ? "block" : "hidden"
						}`}
					>
						<Link
							to="/projects"
							className="block px-2 py-2 mb-1 font-semibold transition-all duration-200 rounded sm:text-white navlink hover:shadow-md hover:bg-white"
							onClick={toggleActive}
						>
							Projects{" "}
						</Link>{" "}
						<Link
							to="/about"
							className="block px-2 py-2 my-1 font-semibold transition-all duration-200 rounded sm:text-white navlink sm:mt-0 sm:ml-2 hover:shadow-md hover:bg-white"
							onClick={toggleActive}
						>
							About{" "}
						</Link>{" "}
						<Link
							to="/contact"
							className="block px-2 py-2 my-1 font-semibold transition-all duration-200 rounded navlink sm:mt-0 sm:ml-2 hover:shadow-md hover:bg-white"
							onClick={toggleActive}
						>
							Contact{" "}
						</Link>{" "}
					</div>{" "}
				</header>{" "}
				<Switch>
					<Route exact path="/">
						<Home> </Home>{" "}
					</Route>{" "}
					<Route exact path="/projects">
						<Projects> </Projects>{" "}
					</Route>{" "}
					<Route exact path="/about">
						<About> </About>{" "}
					</Route>{" "}
					<Route exact path="/contact">
						<Contact> </Contact>{" "}
					</Route>{" "}
				</Switch>{" "}
			</Router>
		);
	}
}

export default Navbar;
