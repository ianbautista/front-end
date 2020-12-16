import Styled from "styled-components";

export const LoginDiv = Styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-top: 150px;
	@media (max-width: 450px) {
		margin-top: 110px;
    }

button {
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
    margin: 10% auto;
    border: unset;
}

button:hover  {
	background-color: white;
	color: #3184ed;
	cursor: pointer;
    };

button:disabled {
		background-color: lightgray;
		cursor: not-allowed;
    };

input[type="text"], input[type="password"] {
    text-align: center;
    border: unset;
    border-radius: 10px;
    height: 2rem;
    width:100%;
    background-color: #ffffff;
    font-size: 1.2rem;
	}

.sign-up-div {
	display: flex;
	justify-content: center;
}

p.sign-up {
	width: 15%;
    font-size: .8rem;
	color: crimson;
	position: absolute;
	margin: 0 auto;
	vertical-align: center;
	z-index: 0;
	@media (max-width: 450px) {
		width: 50%;
    }
}

p.sign-up:hover {
    font-size: 1rem;
    color: #3184ed;
}

.errors {
	font-size: .9rem;
}

.titleError {
	color: crimson;
	margin: 0 auto;
}

h2 {
	color: #3184ed;
}
`;
