import React from "react";
import { NavLink } from "react-router-dom";

// styles
import { FooterContainer } from "./Footer.styles";

// assets
import logo from "../../Assets/logo-white.png";

export default function Footer() {
	return (
		<FooterContainer>
			<div className="innerDiv">
				<NavLink to="/feed">
					<img
						className="logo-icon"
						src={logo}
						alt="Logo. Two hands in the shape of a heart."
					/>
				</NavLink>
				<div className="break"></div>
				<nav>
					<a href="/feed">Home</a>
					<a href="https://jovial-austin-69da22.netlify.app/about.html">
						About
					</a>
					<a href="https://jovial-austin-69da22.netlify.app/team.html">
						Team
					</a>
				</nav>
				<div className="break"></div>
				<div className="text-container">
					<p>
						Built by your Co-Makers at Lambda School © Co-Make 2020
					</p>
					<p>Build Week</p>
				</div>
			</div>
		</FooterContainer>
	);
}
