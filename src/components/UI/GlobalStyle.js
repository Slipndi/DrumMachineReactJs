import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        color: ${props => props.theme.primaryColor};
        background-color: ${props => props.theme.backgroundColor};
    }
`;

export default GlobalStyle;