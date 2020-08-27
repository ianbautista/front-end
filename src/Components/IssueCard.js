import React from "react";
import Styled from "styled-components";
import Upvote from "./Upvote";

const CardContainer = Styled.div`
background-color: white;
border-radius: 15px;
width: 50vw;
padding: 3%;
margin: 1% auto;
`;

const ImageContainer = Styled.div`
object-fit: cover;
display: flex;
justify-content: center;
`;

const Img = Styled.img`
object-fit: cover;
width: 80%;
border-radius: 10px;
/* height: 200px; */
`;

export default function IssueCard(props) {
	const { issue } = props;
	console.log("from IssueCard", issue);

	return (
		<CardContainer>
			<ImageContainer>
				{issue.imageURL !== null && issue.imageURL !== "" ? (
					<Img alt={issue.title} src={`${issue.imageURL}`} />
				) : null}
			</ImageContainer>
			<h2>{issue.title} </h2>
			<Upvote issue={issue} />
			<p>Category: {issue.categoryName}</p>
			{issue.username !== "" && issue.username !== null && issue.username !== undefined ? (
				<p>Posted by: {issue.username}</p>
			) : null}
			<p>Decription: {issue.description}</p>
		</CardContainer>
	);
}
