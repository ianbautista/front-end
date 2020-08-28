import React, { useState } from "react";
import Styled from "styled-components";
import Upvote from "./Upvote";

const CardContainer = Styled.div`
	background-color: white;
	border-radius: 15px;
	width: 50vw;
	padding: 3%;
	margin: 1% auto;
	box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);

.imageContainer {
	object-fit: cover;
	display: flex;
	justify-content: center;
}

img.issueCard-image {
	object-fit: cover;
	width: 80%;
	border-radius: 10px;
}
`;

export default function IssueCard(props) {
	const { issue } = props;
	const [upvote, setUpvote] = useState(0);

	return (
		<CardContainer>
			<div className="imageContainer">
				{issue.imageURL !== null && issue.imageURL !== "" ? (
					<img className="issueCard-image" alt={issue.title} src={`${issue.imageURL}`} />
				) : null}
			</div>
			<h2>{issue.title} </h2>
			<Upvote upvote={upvote} setUpvote={setUpvote} />
			<p>Category: {issue.categoryName}</p>
			{issue.username !== "" && issue.username !== null && issue.username !== undefined ? (
				<p>Posted by: {issue.username}</p>
			) : null}
			<p>Description: {issue.description}</p>
		</CardContainer>
	);
}
