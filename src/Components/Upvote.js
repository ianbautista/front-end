import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const UpvoteDiv = Styled.div`
button {
    width: 100px;
    height: 1.6rem;
    border-radius: 7px;
    background-color: #3184ed;
    font-weight: 500;
    color: white;
    border: unset;
    cursor: pointer;
}
`;

export default function Upvote(props) {
	const { addUpvote, id } = props;
	const [upvote, setUpvote] = useState(addUpvote);

	const getUpvote = () => {
		axiosWithAuth()
			.get(`/issues/issue/${id}/upvote`)
			.then((res) => {
				setUpvote(res.data);
			});
	};

	const upvotePost = (event) => {
		event.preventDefault();
		let upvoteCount = 1 + addUpvote;
		axiosWithAuth()
			.patch(`/issues/issue/${id}/upvote`,{"upvote": upvoteCount})
			.then(() => {
				getUpvote();
			})
		};
		
		useEffect(() => {
			getUpvote();
	}, []);


	return (
		<UpvoteDiv>
			<button type="button" onClick={upvotePost}>
				{" "}
				<i class="fas fa-arrow-circle-up"></i> Upvote <span> {upvote}</span>
			</button>
		</UpvoteDiv>
	);
}
