import React from "react";
import Styled from "styled-components";
import Upvote from "./Upvote";

const CardContainer = Styled.div`
	background-color: white;
	border-radius: 15px;
	width: 50vw;
	padding: 3%;
	margin: 1% auto;
	box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
	@media (max-width: 450px) {
		width: 95vw;
    }

.imageContainer {
	display: flex;
	justify-content: center;
	@media (max-width: 450px) {
		width: 89vw;
		margin: 0;
		padding: 0;
    }
}

img.issueCard-image {
	object-fit: contain;
	width: 80%;
	border-radius: 10px;
	@media (max-width: 450px) {
		height: 30vh;
		margin: 0;
		padding: 0;
		object-fit: cover;
    }
}

.category {
	color: gray;
	font-style: italic;
}
`;

export default function IssueCard(props) {
	const { issue } = props;

	return (
		<CardContainer>
			<div className="imageContainer">
				{issue.image !== null && issue.image !== "" ? (
					<img className="issueCard-image" alt={issue.title} src={`${issue.image}`} />
				) : null}
			</div>
			<h2>{issue.title} </h2>
			<Upvote addUpvote={issue.upvote} id={issue.issueid} />
			<p className="category">
				{" "}
				{/*<span> Category: </span>*/} {issue.category.categoryName}
			</p>
			{issue.username !== "" && issue.username !== null && issue.username !== undefined ? (
				<p>
					<span> Posted by: </span> {issue.username}
				</p>
			) : null}
			<p>
				<span> Description: </span> {issue.description}
			</p>
		</CardContainer>
	);
}
