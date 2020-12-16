import Styled from "styled-components";

export const FooterContainer = Styled.div`
    background: linear-gradient(to bottom, #56ccf2, #2f80ed);
    color: white;
    padding: 1% 0;
    position: absolute;
    bottom:0;
    width: 100%;
    @media (max-width: 450px) {
        z-index: 0;
    }
}

.innerDiv {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.logo-icon {
    width: 64px;
    margin-bottom: 1.5%;
    @media (max-width: 450px) {
        width: 40px;
    }
}

nav {
    width: 40%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    margin: 1.3% 0;
    @media (max-width: 450px) {
        width: 100%;
    }
}

nav a {
    color: white;
}

.text-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 1.5%;
}

hr {
    color: white;
    background-color: white;
}

.break {
    border-bottom: 1px solid white;
    width: 100%;
}

.text-container p {
    @media (max-width: 450px) {
		font-size: .7rem;
    }
}
`;
