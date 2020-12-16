import Styled from "styled-components";

export const SectionContainer = Styled.div`
	box-sizing: border-box;
	padding: 2%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 80vw;
	background-color: white;
	border-radius:15px;
	box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
	@media (max-width: 450px) {
		width: 95vw;
		padding: 5%;
    };

input[type="text"] {
	display:inline;
    text-align: center;
	border: 1px solid lightgray;
	border-right:0;
    border-radius: 10px 0 0 10px;
    height: 2rem;
    width:100%;
    background-color: #ffffff;
    font-size: 1.2rem;
	padding-left: 5%;
	margin-bottom: 2rem;
		@media (max-width: 450px) {
			border: 1px solid lightgray;
			border-radius: 10px;
    };
	}
	
input[type="text"]:focus {
	outline:none;
	}

button {
	display:inline;
	border: 1px solid lightgray;
	border-left: 0;
	border-radius: 0 10px 10px 0;
	background-color: #3184ed;
	color: white;
	height: 2rem;
	@media (max-width: 450px) {
			display: none;
    };
	}

button:hover {
	background-color: white;
	color: #3184ed;
	}

form {
	box-sizing: border-box;
	display: flex;
	width: 500px;
	margin-bottom: 2rem;
		@media (max-width: 450px) {
		width: 100%;
    };
}

img {
	border-radius: 50%;
	height: 2rem;
	vertical-align: middle;
}

p {
	display: flex;
	align-items: center;
	vertical-align: middle;
	margin: 0 auto;
}

.comments-container {
	max-width: 600px;
}

`;
