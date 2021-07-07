import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
html,
body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html,
body {
    width: 100%;
    height: 100vh;
}

#root {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

`;

export default GlobalStyles;