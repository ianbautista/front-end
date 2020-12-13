import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// components
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Feed from "./Components/Feed";
import AddIssueForm from "./Components/AddIssueForm";
import EditIssueForm from "./Components/EditIssueForm";
import IssuePage from "./Components/IssuePage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import PrivateRoute from "./utils/PrivateRoute";
import BurgerMenu from "./Components/BurgerMenu";

import { axiosWithAuth } from "./utils/axiosWithAuth";
import { FeedContext } from "./contexts/context";

export default function App() {
	const [issues, addIssues] = useState([]);
	const [username, setUsername] = useState("");
	const [searchValue, setSearchValue] = useState("");
	const [upvote, setUpvote] = useState(0);

	const getIssues = () => {
		axiosWithAuth()
			.get("/issues/issues")
			.then((response) => {
				addIssues(response.data);
			});
	};

	useEffect(() => {
		getIssues();
	}, []);

	return (
		<Router>
			<FeedContext.Provider
				value={{
					issues,
					addIssues,
					username,
					setUsername,
					getIssues,
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
						<PrivateRoute exact path="/create" component={AddIssueForm} />
						<PrivateRoute exact path="/editIssue/:id" component={EditIssueForm} />
						{issues &&
							issues.map((issue) => {
								return (
									<>
										<PrivateRoute
											exact
											style={{ textDecoration: "none" }}
											path={`/issues/${issue.issueid}`}
										>
											<IssuePage issue={issue} key={issue.issueid} />
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
