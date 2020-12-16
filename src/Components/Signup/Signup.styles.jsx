import Styled from "styled-components";

export const SignUpDiv = Styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 150px;
	text-align: center;
	@media (max-width: 450px) {
		margin-top: 95px;
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
    margin: 6% auto;
    border: unset;
}

button:hover  {
	background-color: white;
	color: #3184ed;
	cursor: pointer;
    };

button:disabled  {
		background-color: lightgray;
		cursor: not-allowed;
	};

button:disabled:hover  {
		background-color: lightgray;
		cursor: not-allowed;
		color: white;
	};

input[type="text"], input[type="password"], input[type="email"], input[type="tel"] {
    text-align: center;
    border: unset;
    border-radius: 10px;
    height: 2rem;
    background-color: #ffffff;
    font-size: 1.2rem;
	margin: unset;
	}

.already-registered-div {
	display: flex;
	justify-content: center;
}

p.already-registered {
	text-align: center;
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

p.already-registered:hover {
    font-size: 1rem;
    color: #3184ed;
}

p.form-terms-text {
	font-size: .8rem;
	color: gray;
	line-height: .9rem;
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
