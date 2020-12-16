import * as yup from 'yup'

export const loginFormSchema = yup.object().shape({
	username: yup
		.string()
		.min(3, "Username must be at least 3 characters")
		.required(),
	password: yup
		.string()
		.min(6, "Password must be at least 6 characters")
		.required("Password is required"),
});

export const initialFormValues = {
	username: "",
	password: "",
};
export const initialErrors = {
	username: "",
	password: "",
};
export const initialDisabled = true;

// load client and secret from the environment
const client = process.env.REACT_APP_CLIENT;
const secret = process.env.REACT_APP_SECRET;
export const clientSecret = `${client}:${secret}`;