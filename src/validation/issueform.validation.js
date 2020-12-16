import * as yup from 'yup'

export const issueFormSchema = yup.object().shape({
	title: yup
		.string()
		.min(3, "Title must be atleast 3 character")
		.required("A title for your issue is required"),
	description: yup.string().required("Description cannot be empty."),
	image: yup.string().url("Must be a valid url"),
	category: yup.string().required("Please select category."),
});

export 	const initialFormValues = {
	title: "",
	description: "",
	image: "",
	category: {},
};

export const initialFormErrors = {
	title: "",
	description: "",
	image: "",
	category: {},
};

export const initialDisabled = true;