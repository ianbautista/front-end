import Styled from "styled-components";

export const PageContainer = Styled.div`
	box-sizing: border-box;
	margin: 5% auto;
	margin-top: 150px;
	@media (max-width: 450px) {
		margin-top: 80px;
    }
	
.issueContainer {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: white;
	border-radius: 15px;
	width: 81%;
	margin: 2% auto;
	margin-top: 0%;
	padding: 3%;
	box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
	@media (max-width: 450px) {
		box-sizing: border-box;
		width: 95vw;
    }
};


.category, .description, h1 {
    text-align: center;
};

.category {
	margin-top: unset;
	font-style: italic;
};

.description, .username {
    margin: 2% auto;
};

p.descriptionLabel {
    text-decoration: italic;
    color: grey;
};

h1 {
    margin-bottom: unset;
};

#delete {
	width: 60px;
	background-color: unset;
	border: unset;
	font-size: 2rem;
	color: black;
	position: static;
	top: 0%;
	right: 0%;
	margin: 0;
	@media (max-width: 450px) {
		font-size: 1.5rem;
		margin-top: 2%;
		width: 40px;
		text-align: center;
		padding:0;
    }
};

#delete:hover {
    color: crimson;
};

#edit {
    width: 100px;
    height: 2.6rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 7px;
    background-color: #3184ed;
    font-weight: 500;
	font-size: 1rem;
    color: white;
    cursor: pointer;
    border: unset;
    margin: 0 auto;
    margin-top: 1%;
    margin-bottom: 1%;
};

#edit:disabled {
    background-color: lightgray;
};

#edit:hover {
    background-color: white;
	color: #3184ed;
	border: .5px solid #3184ed;
};

.back {
	width: 60px;
	margin-left: 10%;
	margin-top: 4%;
	margin-bottom: .5%;
	@media (max-width: 450px) {
		margin-left: 3%;
		margin-bottom: 4%;
		margin-top: 1%;
    }
}

.back:hover {
	color: #3184ed;
}

.imageContainer {
	display: flex;
	box-sizing: border-box;
	height: 50vh;
	justify-content: center;
	margin: 0 auto;
	@media (max-width: 450px) {
		height: 30vh;
		width: 89vw;
		padding:0;
    }
}

img.issue-page-image {
	object-fit: contain;
	width: 50vw;
	border-radius: 10px;
	margin-top: 0%;
	@media (max-width: 450px) {
		width: 80%;
		padding: 0;
    }
}
`;
