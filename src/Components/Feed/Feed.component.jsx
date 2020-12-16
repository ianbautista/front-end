import React, { useContext, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

// components
import IssueCard from "../IssueCard/IssueCard.component";

// styles
import { FeedContainer } from "./Feed.styles";

// assets
import avatar from "../../Assets/avatar-default-200.png";

import { FeedContext } from "../../contexts/context.service";

export default function Feed() {
	const {
		issues,
		searchValue,
		userInfo,
		getIssues,
		getUserInfo,
	} = useContext(FeedContext);

	useEffect(() => {
		getIssues();
		getUserInfo();
	}, []);

	return (
		<FeedContainer>
			<NavLink to="/create">
				<div className="create">
					{userInfo.avatarimage !== null &&
					userInfo.avatarimage !== "" &&
					userInfo.avatarimage !== undefined ? (
						<img
							className="create-avatar"
							src={userInfo.avatarimage}
							alt={`${userInfo.username}`}
						/>
					) : (
						<img
							className="create-avatar"
							src={avatar}
							alt="default avatar"
						/>
					)}
					<p>
						Post a <span>message</span>, <span>event</span> or{" "}
						<span>alert</span> to your neighborhood
					</p>
				</div>
			</NavLink>
			{issues &&
				issues
					.filter((issue) => {
						return (
							issue.category.categoryname
								.toLowerCase()
								.includes(searchValue.toLowerCase()) ||
							issue.user.username
								.toLowerCase()
								.includes(searchValue.toLowerCase()) ||
							issue.title
								.toLowerCase()
								.includes(searchValue.toLowerCase()) ||
							issue.description
								.toLowerCase()
								.includes(searchValue.toLowerCase())
						);
					})
					.map((issue) => {
						return (
							<Link
								style={{ textDecoration: "none" }}
								to={`/issues/${issue.issueid}`}
							>
								<IssueCard issue={issue} userInfo={userInfo} />
							</Link>
						);
					})}
		</FeedContainer>
	);
}
