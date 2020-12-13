import React, { useState, useEffect, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import Styled from "styled-components";
import * as yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { FeedContext } from "../contexts/context";
import Axios from "axios";

const LoginDiv = Styled.div`
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

const formSchema = yup.object().shape({
	username: yup.string().min(3, "Username must be at least 3 characters").required(),
	password: yup
		.string()
		.min(6, "Password must be at least 6 characters")
		.required("Password is required"),
});

const initialFormValues = {
	username: "",
	password: "",
};
const initialErrors = {
	username: "",
	password: "",
};
const initialDisabled = true;

// load client and secret from the environment
const client = process.env.REACT_APP_CLIENT;
const secret = process.env.REACT_APP_SECRET;
const clientSecret = `${client}:${secret}`;

export default function Login() {
	const { setUsername, getIssues } = useContext(FeedContext);
	const [credentials, setCredentials] = useState(initialFormValues);
	const [errors, setErrors] = useState(initialErrors);
	const [buttonDisabled, setButtonDisabled] = useState(initialDisabled);
	const { push } = useHistory();

	useEffect(() => {
		formSchema.isValid(credentials).then((valid) => {
			setButtonDisabled(!valid);
		});
	}, [credentials]);

	const validateChange = (event) => {
		yup
			.reach(formSchema, event.target.name)
			.validate(event.target.value)
			.then(() => {
				setErrors({
					...errors,
					[event.target.name]: "",
				});
			})
			.catch((error) => {
				setErrors({
					...errors,
					[event.target.name]: error.errors,
				});
			});
	};

	const handleChange = (event) => {
		event.persist();
		validateChange(event);
		setCredentials({ ...credentials, [event.target.name]: event.target.value });
	};

	const onSubmit = (event) => {
		event.preventDefault();
		axiosWithAuth()
		.post(
			"https://bw-comakeapp-java.herokuapp.com/login",
			`grant_type=password&username=${credentials.username}&password=${credentials.password}`,
			{
				headers: {
					// btoa is converting our client id/client secret into base64
					Authorization: `Basic ${btoa(clientSecret)}`,
					"Content-Type": "application/x-www-form-urlencoded",
				},
			}
		)
			.then((response) => {
				localStorage.setItem("token", response.data.access_token);
				push("/feed");
				setUsername(credentials.username);
				setCredentials(initialFormValues);
				getIssues();
			})
			.catch((error) => {
				// console.log("Error:", error.response.data);
				console.log("error at login", error)
				// alert(`Oops.. Looks like there was an error. ${error.response.data.message}`);
			});
	};

	return (
		<LoginDiv>
			<h2>Login</h2>
			<form className="login-form" onSubmit={onSubmit}>
				<label htmlFor="username"></label>
				<br />
				<input
					type="text"
					name="username"
					placeholder="username or email"
					value={credentials.username}
					onChange={handleChange}
				/>
				<br />
				<div className="errors">
					<div className="titleError">{errors.username}</div>
				</div>
				<br />
				<label htmlFor="password"></label>
				<br />
				<input
					type="password"
					name="password"
					placeholder="password"
					value={credentials.password}
					onChange={handleChange}
				/>
				<br />
				<div className="errors">
					<div className="titleError">{errors.password}</div>
				</div>
				<button disabled={buttonDisabled} name="submit">
					Login
				</button>
				<Link className="sign-up-div" to="/">
					<p className="sign-up"> Sign-up instead </p>
				</Link>
				<br />
			</form>
		</LoginDiv>
	);
}
