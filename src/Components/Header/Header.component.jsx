import React, { useEffect, useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";

//components
import SearchBar from "../SearchBar/SearchBar.component";

// styles
import { ContainerDiv } from "./Header.styles";

// assets
import logo from "../../Assets/logo2.png";

export default function Header() {
	const history = useHistory();
	const logout = () => {
		localStorage.clear("token");
		history.push("/");
		window.location.reload();
	};
	const [pathname, setPathname] = useState("");
	const location = useLocation();

	useEffect(() => {
		setPathname(window.location.pathname);
	}, [location]);

	return (
		<ContainerDiv>
			<div className="header">
				<NavLink to="/feed">
					<img src={logo} className="logo-img" alt="Logo" />
				</NavLink>
				<div className="links">
					{localStorage.token !== null &&
					localStorage.token !== undefined &&
					localStorage.token !== "" ? null : (
						<a href="https://jovial-austin-69da22.netlify.app/about.html">
							About
						</a>
					)}

					{pathname === "/feed" ||
					pathname === "/" ||
					pathname === null ||
					pathname === "/login" ? null : (
						<NavLink to="/feed">
							{" "}
							<span role="img" aria-label="button">
								🏠
							</span>
						</NavLink>
					)}

					{localStorage.token !== null &&
					localStorage.token !== undefined &&
					localStorage.token !== "" ? null : (
						<a href="https://jovial-austin-69da22.netlify.app/team.html">
							Team
						</a>
					)}
				</div>
				<div className="search-logout">
					{localStorage.token !== null &&
					localStorage.token !== undefined &&
					localStorage.token !== "" ? (
						<>
							<SearchBar pathname={pathname} />
							<div
								className="logout"
								type="button"
								onClick={logout}
							>
								<span type="button" onClick={logout}>
									Logout
								</span>
							</div>{" "}
						</>
					) : null}
				</div>
			</div>
		</ContainerDiv>
	);
}
