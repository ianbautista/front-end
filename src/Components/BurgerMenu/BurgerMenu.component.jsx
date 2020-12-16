import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

// styles
import { MenuContainer } from "./BurgerMenu.styles";

export default function BurgerMenu() {
	const [isClicked, setIsClicked] = useState(false);
	const history = useHistory();

	const menuToggle = (event) => {
		event.preventDefault();
		if (isClicked === true) {
			setIsClicked(false);
		} else {
			setIsClicked(true);
		}
	};

	const logout = () => {
		localStorage.clear("token");
		history.push("/");
	};

	return (
		<MenuContainer>
			<button
				type="button"
				id="menu-button"
				className={isClicked ? "hide" : "show"}
				onClick={menuToggle}
			>
				<i className="fas fa-bars"></i>
			</button>
			<div
				role="button"
				id="x"
				className={isClicked ? "show" : "hide"}
				onClick={menuToggle}
			>
				<i className="fas fa-times"></i>
			</div>
			<nav
				role="navigation"
				id="menu-overlay"
				className={isClicked ? "show" : "hide"}
			>
				<div role="button" onClick={menuToggle}>
					<NavLink to="/feed">Home</NavLink>
				</div>
				<div role="button">
					<a href="https://jovial-austin-69da22.netlify.app/about.html">
						About
					</a>
				</div>
				<div role="button">
					<a href="https://jovial-austin-69da22.netlify.app/team.html">
						Team
					</a>
				</div>
				{localStorage.token !== null &&
				localStorage.token !== undefined &&
				localStorage.token !== "" ? (
					<div
						className={isClicked ? "hide logout" : "show logout"}
						onClick={menuToggle}
					>
						<span type="button" onClick={logout}>
							Logout
						</span>
					</div>
				) : null}
			</nav>
		</MenuContainer>
	);
}
