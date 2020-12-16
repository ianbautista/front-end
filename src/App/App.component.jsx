import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// styles
import "./App.css";

// components
import Signup from "../Components/Signup/Signup.component";
import Login from "../Components/Login/Login.component";
import Feed from "../Components/Feed/Feed.component";
import AddIssueForm from "../Components/IssueForm/AddIssueForm.component";
import EditIssueForm from "../Components/IssueForm/EditIssueForm.components";
import IssuePage from "../Components/IssuePage/IssuePage.component";
import Header from "../Components/Header/Header.component";
import Footer from "../Components/Footer/Footer.component";
import PrivateRoute from "../utils/PrivateRoute.service";
import BurgerMenu from "../Components/BurgerMenu/BurgerMenu.component";

import { axiosWithAuth } from "../utils/axiosWithAuth.service";
import { FeedContext } from "../contexts/context.service";

export default function App() {
	const [issues, addIssues] = useState([]);
	const [username, setUsername] = useState("");
	const [userInfo, setUserInfo] = useState({});
	const [searchValue, setSearchValue] = useState("");
	const [upvote, setUpvote] = useState(0);

	const getIssues = () => {
		axiosWithAuth()
			.get("/issues/issues")
			.then((response) => {
				addIssues(response.data);
			});
	};

	const getUserInfo = () => {
		axiosWithAuth()
			.get("/users/myinfo")
			.then((response) => {
				setUserInfo(response.data);
			});
	};

	return (
		<Router>
			<FeedContext.Provider
				value={{
					issues,
					addIssues,
					getIssues,
					userInfo,
					getUserInfo,
					username,
					setUsername,
					searchValue,
					setSearchValue,
					upvote,
					setUpvote,
				}}
			>
				<div className="App-container">
					<Header />
					<BurgerMenu />
					<div className="App-content">
						<Route exact path="/" component={Signup} />
						<Route exact path="/login" component={Login} />
						<PrivateRoute exact path="/feed" component={Feed} />
						<PrivateRoute
							exact
							path="/create"
							component={AddIssueForm}
						/>
						<PrivateRoute
							exact
							path="/editIssue/:id"
							component={EditIssueForm}
						/>
						{issues &&
							issues.map((issue) => {
								return (
									<>
										<PrivateRoute
											exact
											style={{ textDecoration: "none" }}
											path={`/issues/${issue.issueid}`}
										>
											<IssuePage
												issue={issue}
												key={issue.issueid}
											/>
										</PrivateRoute>
									</>
								);
							})}
					</div>
					<Footer />
				</div>
			</FeedContext.Provider>
		</Router>
	);
}
