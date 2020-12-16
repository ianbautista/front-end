import Styled from "styled-components";

export const FeedContainer = Styled.div`
	margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
	align-items: center;
	@media (max-width: 450px) {
		margin-top: 70px;
	}

span {
	font-weight: 600;
}

.create {
	box-sizing: border-box;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background-color: white;
	border-radius: 15px;
	width: 50vw;
	height: 5rem;
	margin-bottom: 3%;
	margin-top: 5%;
	box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
	@media (max-width: 450px) {
		width: 95vw;
		margin-top: 1%;
    }
}

img.create-avatar {
	border-radius: 50%;
	height: 3rem;
	margin-right: 10px;
	margin-left: 30px;
}
`;
