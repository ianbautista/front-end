import Styled from "styled-components";

export const CardContainer = Styled.div`
	background-color: white;
	border-radius: 15px;
	width: 50vw;
	padding: 3%;
	margin: 1% auto;
	box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
	h2 {
		margin: 1% 0;
		padding: 0;
	}
	.posted-by {
		margin: 0;
		padding: 0;
	}
	@media (max-width: 450px) {
		width: 95vw;
    }

.imageContainer {
	display: flex;
	justify-content: center;
	margin: 3%;
	@media (max-width: 450px) {
		width: 89vw;
		margin: 1% 0;
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
	margin-top: 1%;
	padding: 0;
}
`;
