import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        transition: ease 0.5s;
        color: ${props => props.theme.primaryColor};
        background-color: ${props => props.theme.backgroundColor};
        font-family: 'Montserrat', sans-serif;
        font-weight : 700;
        font-smooth: always;
    }
    h1, h2, h3, h4, h5{
        letter-spacing : 2px;
    }
    h1{
        font-size: 1.6rem;
    }
    h2{
        font-size: 1.4rem;
    }
`;

export default GlobalStyle;