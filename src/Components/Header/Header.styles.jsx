import Styled from "styled-components";

export const ContainerDiv = Styled.nav`
	box-sizing: border-box;
	width:100vw;
	background-color: white;
	position: fixed;
	top: 0%;

.header {
	width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-top: 2%;
    padding-bottom: 2%;
}

.links {
	position: absolute;
	top: 40px;
	display: flex;
    justify-content: center;
    align-items: center;
	text-align: center;
	height: 25px;
    width: 90vw;
	z-index: 100;
	span {
		position: absolute;
		top: -10px;
		font-size: 25px;
		cursor: pointer;
	}
	a {
		margin: 0 4rem;
		padding: 0;
	}
	@media (max-width: 450px) {
		display: none;
	}
}

.search-logout {
	display:flex;
	justify-content: space-between;
	align-items: center;
	width: 450px;
	@media (max-width: 450px) {
		display: none;
	}

}

.logout {
    display: flex;
    justify-content: space-around;
    align-items: center;
	width: 100px;
    height: 2.6rem;
    border-radius: 7px;
    background-color: #3184ed;
    font-weight: 500;
	color: white;
	margin-left: 5%;
	cursor: pointer;
	&:hover {
		border: .5px solid #3184ed;
		background-color: white;
		color: #3184ed;
	}

}

a:hover {
	color: #3184ed;
	cursor: pointer;
}

`;
