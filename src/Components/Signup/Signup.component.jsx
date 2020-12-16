import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";

// styles
import { SignUpDiv } from "./Signup.styles";

import {
	SignupFormSchema as formSchema,
	initialFormValues,
	initialErrors,
	initialDisabled,
} from "../../validation/signup.validation";

export default function Signup() {
	const [formValues, setFormValues] = useState(initialFormValues);
	const [errors, setErrors] = useState(initialErrors);
	const [disabled, setDisabled] = useState(initialDisabled);
	const { push } = useHistory();

	useEffect(() => {
		formSchema.isValid(formValues).then((valid) => {
			setDisabled(!valid);
		});
	}, [formValues]);

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

	const formSubmit = (event) => {
		event.preventDefault();
		axios
			.post("https://bw-comakeapp-java.herokuapp.com/createnewuser", {
				username: formValues.username,
				primaryemail: formValues.email,
				phone: formValues.phoneNumber,
				password: formValues.password,
			})
			.then((response) => {
				localStorage.setItem("token", response.data.access_token);
				setFormValues(initialFormValues);
				push("/feed");
			})
			.catch((error) => {
				alert(`Oops.. Looks like there was an error. \n"${error}"`);
			});
	};

	const inputChange = (event) => {
		event.persist();
		validateChange(event);
		setFormValues({
			...formValues,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<SignUpDiv>
			<h2> Sign Up </h2>
			<form onSubmit={formSubmit}>
				<label className="reg-label" htmlFor="username">
					Username&nbsp;&nbsp;&nbsp;
				</label>
				<br />
				<input
					type="text"
					name="username"
					value={formValues.username}
					onChange={inputChange}
				/>
				<br />
				<div className="errors">
					<div className="titleError">{errors.username}</div>
				</div>
				<br />
				<label className="signup-label" htmlFor="email">
					Email&nbsp;&nbsp;&nbsp;
				</label>
				<br />
				<input
					type="email"
					name="email"
					value={formValues.email}
					onChange={inputChange}
				/>
				<br />
				<div className="errors">
					<div className="titleError">{errors.email}</div>
				</div>
				<br />
				<label className="signup-label" htmlFor="phoneNumber">
					Phone&nbsp;&nbsp;&nbsp;
				</label>
				<br />
				<input
					type="tel"
					name="phoneNumber"
					value={formValues.phoneNumber}
					onChange={inputChange}
				/>
				<br />
				<div className="errors">
					<div className="titleError">{errors.phoneNumber}</div>
				</div>
				<br />
				<label className="reg-label" htmlFor="password">
					Password&nbsp;&nbsp;&nbsp;
				</label>
				<br />
				<input
					type="password"
					name="password"
					value={formValues.password}
					onChange={inputChange}
				/>
				<br />
				<div className="titleError">{errors.password}</div>
				<label className="signup-label" htmlFor="passwordConfirmation">
					Confirm Password&nbsp;&nbsp;&nbsp;
				</label>
				<br />
				<input
					type="password"
					name="passwordConfirmation"
					onChange={inputChange}
				/>{" "}
				<br />
				<br />
				{formValues.passwordConfirmation !== formValues.password ? (
					<div className="titleError">
						{errors.passwordConfirmation}
					</div>
				) : null}
				<p className="form-terms-text">
					By clicking on the register button you agree with Co-Make
					App <br /> Terms & Conditions, Fair Use, forever and ever so
					help you God.
				</p>
				<button disabled={disabled} name="submit">
					Sign Up
				</button>
			</form>
			<Link className="already-registered-div" to="/login">
				<p className="already-registered">Already Registered?</p>
			</Link>
		</SignUpDiv>
	);
}
