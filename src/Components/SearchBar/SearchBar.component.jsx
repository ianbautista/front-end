import React, { useContext } from "react";

// styles
import { SearchField } from "./SearchBar.styles";

import { FeedContext } from "../../contexts/context.service";

export default function SearchBar(props) {
	const { searchValue, setSearchValue } = useContext(FeedContext);
	const { pathname } = props;
	const onInputChange = (event) => {
		const { value } = event.target;
		setSearchValue(value);
	};
	return (
		<SearchField>
			<form
				style={pathname === "/feed" ? null : { visibility: "hidden" }}
			>
				<input
					type="text"
					placeholder="🔎"
					value={searchValue}
					onChange={onInputChange}
				/>
			</form>
		</SearchField>
	);
}
