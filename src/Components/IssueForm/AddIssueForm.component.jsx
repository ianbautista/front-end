import React, { useState, useEffect, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import * as yup from "yup";

// styles
import { FormContainer } from "./IssueForm.styles";

import {
	issueFormSchema as formSchema,
	initialFormValues,
	initialFormErrors,
	initialDisabled,
} from "../../validation/issueform.validation";
import { axiosWithAuth } from "../../utils/axiosWithAuth.service";
import { FeedContext } from "../../contexts/context.service";

export default function AddIssuesForm() {
	const { getIssues } = useContext(FeedContext);
	const [errors, setErrors] = useState(initialFormErrors);
	const [formValues, setFormValues] = useState(initialFormValues);
	const [disabled, setDisabled] = useState(initialDisabled);
	const history = useHistory();

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
		axiosWithAuth()
			.post("/issues/issue", {
				title: formValues.title,
				description: formValues.description,
				image: formValues.image,
				category: { categoryid: formValues.category },
			})
			.then(() => {
				setFormValues(initialFormValues);
				getIssues();
				history.push("/feed");
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
		<FormContainer>
			<p>
				<NavLink to="/feed">
					<i className="fas fa-times"></i>
				</NavLink>
			</p>
			<form onSubmit={formSubmit}>
				<h2>Add New Post</h2>
				<label htmlFor="title">
					{" "}
					Title:&nbsp;
					<input
						type="text"
						name="title"
						value={formValues.title}
						placeholder="What should we call this?"
						onChange={inputChange}
					/>
				</label>
				<div className="errors">
					<div className="titleError">{errors.title}</div>
				</div>
				<label htmlFor="category">
					<select onChange={inputChange} name="category">
						<option default disabled selected="selected">
							Category
						</option>
						<option value={4}>Announcements</option>
						<option value={5}>Community Activities</option>
						<option value={6}>Crime & Safety</option>
						<option value={7}>Flooding</option>
						<option value={8}>General</option>
						<option value={9}>Holiday</option>
						<option value={10}>Lost & Found</option>
						<option value={11}>Pets</option>
						<option value={12}>Recommendation</option>
						<option value={13}>
							Road Closure & Transportation
						</option>
						<option value={14}>School & Education</option>
						<option value={15}>Utilities</option>
						<option value={16}>Yard and Lawn</option>
					</select>
				</label>
				<div className="errors">
					<div className="titleError">
						{errors.category.categoryid}
					</div>
				</div>
				<label htmlFor="description">
					<textarea
						type="text"
						name="description"
						value={formValues.description}
						placeholder="description..."
						onChange={inputChange}
					/>
				</label>
				<div className="errors">
					<div className="titleError">{errors.description}</div>
				</div>
				<label htmlFor="image">
					{" "}
					Image:&nbsp;
					<input
						type="text"
						name="image"
						value={formValues.image}
						placeholder="Enter URL of image"
						onChange={inputChange}
					/>
				</label>
				<br />
				<div className="errors">
					<div className="titleError">{errors.image}</div>
				</div>
				<br />
				{formValues.image !== null && formValues.image !== "" ? (
					<img alt={formValues.title} src={`${formValues.image}`} />
				) : null}
				<br />
				<button type="submit" disabled={disabled} to="/feed">
					Post
				</button>
			</form>
		</FormContainer>
	);
}
