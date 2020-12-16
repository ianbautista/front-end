import React, { useState, useEffect, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import * as yup from "yup";
import Axios from "axios";
import { LoginDiv } from "./Login.styles";
import { FeedContext } from "../../contexts/context.service";
import {
	loginFormSchema as formSchema,
	initialFormValues,
	initialErrors,
	initialDisabled,
	clientSecret,
} from "../../validation/login.validation";

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
		yup.reach(formSchema, event.target.name)
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
		setCredentials({
			...credentials,
			[event.target.name]: event.target.value,
		});
	};

	const onSubmit = (event) => {
		event.preventDefault();
		Axios.post(
			"https://bw-comakeapp-java.herokuapp.com/login",
			`grant_type=password&username=${credentials.username}&password=${credentials.password}`,
			{
				headers: {
					// btoa is converting our client id/client secret into base64
					Authorization: `Basic ${btoa(clientSecret)}`,
					"Content-Type": "application/x-www-form-urlencoded",
				},
			},
		)
			.then((response) => {
				localStorage.setItem("token", response.data.access_token);
				push("/feed");
				setUsername(credentials.username);
				setCredentials(initialFormValues);
				getIssues();
			})
			.catch((error) => {
				alert(`Oops.. Looks like there was an error. \n"${error}"`);
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
