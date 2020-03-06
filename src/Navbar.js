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
