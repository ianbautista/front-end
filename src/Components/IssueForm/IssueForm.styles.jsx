import Styled from "styled-components";

export const FormContainer = Styled.div`
	margin: 0 auto;
	margin-top: 150px;
	display: flex;
	text-align: center;
	flex-direction: column;
	justify-content: center;
	background-color: white;
	border-radius: 15px;
	width: 500px;
	box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
	@media (max-width: 450px) {
		margin-top: 80px;
		width: 95vw;
    }

@keyframes wiggle {
		0% {
			transform: translateX(39deg);
		}
		10% {
			transform: translateX(-8deg);
		}
		20% {
			transform: skewX(37deg);
		}
		30% {
			transform: skewX(-6deg);
		}
		40% {
			transform: skewX(35deg);
		}
		50% {
			transform: skewX(-4deg);
		}
		60% {
			transform: skewX(33deg);
		}
		70% {
			transform: skewX(-2deg);
		}
		80% {
			transform: skewX(31deg);
		}
		90% {
			transform: skewX(0deg);
		}
		100% {
			transform: skewX(0deg);
		}
	}


h2 {
    color: #3184ED;
}

button {
    background-color: #3184ed;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100px;
    height: 2.6rem;
    border: unset;
    border-radius: 7px;
    font-weight: 500;
    margin: 3% auto;
    cursor: pointer;
}

button:hover {
	background-color: white;
	color: #3184ed;
	border: .5px solid #3184ed;
	cursor: pointer;
}

button:disabled {
	background-color: lightgray;
	color: white;
	border: unset;
	cursor: not-allowed;
}

button:disabled:hover {
	background-color: lightgray;
	color: white;
	border: unset;
	cursor: not-allowed;
}

form div div.titleError {
	color: crimson;
	animation-name: wiggle;
	animation-timing-function: ease-in;
	animation-duration: 1s;
	animation-iteration-count: 10;
}

p {
	display: flex;
	height: 2rem;
	justify-content: center;
	text-align: center;
	align-items: center;
	width: 3rem;
	vertical-align: center;
	margin: unset;
	margin-left: 90%;
	margin-top: 1%;
	font-size: 16px;
}

i {
	font-size: 1.5rem;
	margin-right: .5rem;
}

i:hover {
	color: crimson;
}

textarea[type="text"] {
	width: 80%;
	height: 200px;
	@media (max-width: 450px) {
		font-size: 16px;
		padding: 1%;
		margin: .5%;
    }
}

input[type="text"], select, option {
	@media (max-width: 450px) {
		font-size: 16px;
		padding: 1%;
		margin: .5%;
    }
}

input[type="text"] {
	@media (max-width: 450px) {
		width: 70%
    }
}

select, option {
	@media (max-width: 450px) {
		width: 80%
    }
}

img {
	object-fit: contain;
	width: 80%;
	height: 200px;
}

input[name="imageURL"] {
	width: 70%;
	@media (max-width: 450px) {
		width: 67.5%
    }
}
button[type="submit"] {
	font-size: 1rem;
}
`;
