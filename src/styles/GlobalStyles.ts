import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.whiteBackground};
    color: black;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}   
`;

export default GlobalStyles;