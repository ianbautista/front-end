import Styled from "styled-components";

export const SearchField = Styled.div`
	align-self: center;

input[type="text"] {
	border-radius: 5px;
	border: .5px solid lightgray;
	height: 1.6rem;
	width: 300px;
}

input[type="text"]:focus {
	outline: none;
}
`;
