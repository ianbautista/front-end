import * as yup from "yup";

export const SignupFormSchema = yup.object().shape({
	username: yup
		.string()
		.min(3, "Username must be at least 3 characters")
		.required(),
	email: yup.string().email("Must be a valid Email").required(),
	phoneNumber: yup
		.number()
		.min(10, "Must be a valid Phone Number. e.g. 3101234567"),
	password: yup
		.string()
		.min(6, "Username must be at least 6 characters")
		.required("Password is required"),
	passwordConfirmation: yup
		.string()
		.oneOf([yup.ref("password"), null], "Password must match")
		.required("Password is required"),
});

export const initialFormValues = {
	username: "",
	email: "",
	phoneNumber: "",
	passwordConfirmation: "",
};

export const initialErrors = {
	username: "",
	email: "",
	phoneNumber: "",
	password: "",
	passwordConfirmation: "",
};

export const initialDisabled = true;