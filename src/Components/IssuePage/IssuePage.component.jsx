import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";

// components
import Upvote from "../Upvote/Upvote.component";
import CommentSection from "../CommentSection/CommentSection.component";

// styles
import { PageContainer } from "./IssuePage.styles";

// assets
import imagedefault from "../../Assets/photo_gallery.jpg";

import { axiosWithAuth } from "../../utils/axiosWithAuth.service";
import { FeedContext } from "../../contexts/context.service";

export default function IssuePage(props) {
	const { issue } = props;
	const { userInfo } = useContext(FeedContext);
	const history = useHistory();

	const deleteIssue = (id) => {
		axiosWithAuth()
			.delete(`/issues/issue/${id}`)
			.then(() => {
				history.push("/feed");
			})
			.catch((error) => {
				alert(`error ${error.message}`);
			});
	};

	const editIssue = (event) => {
		event.preventDefault();
		history.push(`/editIssue/${issue.issueid}`);
	};

	return (
		<PageContainer>
			<div className="back">
				<Link className="back" to="/feed">
					<i className="fas fa-chevron-left"></i>
					&nbsp;Back
				</Link>
			</div>
			<div className="issueContainer">
				{issue.user.userid === userInfo.userid ? (
					<button
						type="button"
						id="delete"
						onClick={() => deleteIssue(issue.issueid)}
					>
						<i className="far fa-trash-alt"></i>
					</button>
				) : null}
				<div className="imageContainer">
					{issue.image !== null && issue.image !== "" ? (
						<img
							className="issue-page-image"
							alt="issue pic"
							src={`${issue.image}`}
						/>
					) : (
						<img
							className="issue-page-image"
							alt="default"
							src={imagedefault}
						/>
					)}
				</div>
				<h1>{issue.title} </h1>
				<div className="category">{issue.category.categoryname}</div>
				{issue.user.username !== "" &&
				issue.user.username !== null &&
				issue.user.username !== undefined ? (
					<p className="username">Posted by: {issue.user.username}</p>
				) : null}
				<Upvote currentUpvote={issue.upvote} id={issue.issueid} />
				<div className="description">
					<p className="descriptionLabel">Description</p>{" "}
					{issue.description}
				</div>
				{issue.user.userid === userInfo.userid ? (
					<button type="button" id="edit" onClick={editIssue}>
						Edit
					</button>
				) : null}
			</div>
			<div className="comments-container">
				<CommentSection issue={issue} />
			</div>
		</PageContainer>
	);
}
