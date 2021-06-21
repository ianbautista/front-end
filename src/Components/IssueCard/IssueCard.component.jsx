import React from "react";

// components
import Upvote from "../Upvote/Upvote.component";

// styles
import { CardContainer } from "./IssueCard.styles";

export default function IssueCard(props) {
  const { issue } = props;

  return (
    <CardContainer>
      <h2>{issue.title} </h2>
      {issue.user.username !== "" &&
      issue.user.username !== null &&
      issue.user.username !== undefined ? (
        <p className="posted-by">
          <span> Posted by: </span> {issue.user.username}
        </p>
      ) : null}
      <p className="category"> {issue?.category?.categoryname}</p>
      {issue?.image !== null && issue?.image !== "" ? (
        <div className="imageContainer">
          <img
            className="issueCard-image"
            alt={issue.title}
            src={`${issue?.image}`}
          />
        </div>
      ) : null}
      <Upvote currentUpvote={issue?.upvote} id={issue?.issueid} />
      <p>
        <span> Description: </span> {issue?.description}
      </p>
    </CardContainer>
  );
}
