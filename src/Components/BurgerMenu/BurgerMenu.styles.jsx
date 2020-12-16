import Styled from "styled-components";

export const MenuContainer = Styled.div`
    display: none;
    position: relative;
    text-align: center;
    z-index:100;
    @media (max-width: 450px) {
		display: flex;
    }

#menu-button {
    z-index: 100;
    position: fixed;
    right: 2%;
    top: 10px;
    border: unset;
    background-color: unset;
}

#menu-button i {
    font-size: 2.6rem;
    color: #3184ed;
}

#x {
    z-index: 100;
    position: fixed;
    top: 8px;
    right: 4%;
    color: #FFFFFF;
    font-size: 5.5rem;
}

#x i {
    font-size: 3rem;
    color: white;
}

#menu-overlay {
    position: fixed;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    z-index: 99;
    background: linear-gradient(to bottom, #56ccf2, #2f80ed);
    }
#menu-overlay div a {
    font-size: 2rem;
    line-height: 4rem;
    color: #FFFFFF;
}

#menu-overlay div {
    margin: 0 auto;
}

.hide {
    display: none;
}

.show {
    display: flex;
}


.logout {
	width: 100px;
    height: 2.6rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 7px;
    background-color: #3184ed;
    font-weight: 500;
    color: white;
    margin: 0;
    padding: 0;
}

.logout:hover {
	border: .5px solid #3184ed;
    background-color: white;
    color: #3184ed;
    cursor: pointer;
}

`;
