import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth.service";

// styles
import { SectionContainer } from "./CommentSection.styles";

// assets
import avatar from "../../Assets/avatar-default-200.png";

const initialValues = {
	comment: "",
};

export default function CommentSection(props) {
	const { issue } = props;
	const [comments, addComments] = useState([]);
	const [formValues, setFormValues] = useState(initialValues);

	const getComments = () => {
		axiosWithAuth()
			.get(`/issues/issue/${issue.issueid}/comments`)
			.then((response) => {
				addComments(response.data);
			});
	};

	useEffect(() => {
		getComments();
	}, []);

	const submitComment = (event) => {
		event.preventDefault();
		axiosWithAuth()
			.post(`/issues/issue/${issue.issueid}/comments`, {
				comment: formValues.comment,
			})
			.then(() => {
				getComments();
				setFormValues(initialValues);
			})
			.catch((error) => {
				alert(`Oops.. Looks like there was an error. \n"${error}"`);
			});
	};

	const inputChange = (event) => {
		event.persist();
		setFormValues({
			...formValues,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<SectionContainer>
			<form onSubmit={submitComment}>
				<input
					type="text"
					name="comment"
					placeholder="add a comment.."
					value={formValues.comment}
					onChange={inputChange}
				/>
				<button onClick={submitComment}>send</button>
			</form>
			<div>
				<div className="comments-container">
					{comments &&
						comments.map((comment) => {
							return (
								<>
									<p>
										{comment.user.avatarimage !== null &&
										comment.user.avatarimage !== "" &&
										comment.user.avatarimage !==
											undefined ? (
											<img
												src={comment.user.avatarimage}
												alt={`${comment.user.username}`}
											/>
										) : (
											<img
												src={avatar}
												alt="default avatar"
											/>
										)}
										&nbsp;&nbsp;{" "}
										<span>{comment.comment}</span>
									</p>
									<hr />
								</>
							);
						})}{" "}
				</div>
			</div>
		</SectionContainer>
	);
}
