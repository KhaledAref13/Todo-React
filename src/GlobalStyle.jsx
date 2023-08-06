import { createGlobalStyle } from "styled-components";
import "@fontsource/poppins";

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

  body {
        font-family: 'poppins';
        background-color: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.secondary};
      }
`;

export default GlobalStyle;