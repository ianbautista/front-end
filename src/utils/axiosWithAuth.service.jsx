import axios from "axios";

export const axiosWithAuth = () => {
	return axios.create({
		headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
		baseURL: "https://bw-comakeapp-java.herokuapp.com",
	});
};
