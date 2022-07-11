import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
  padding: 0;
  margin: 0;
  font-family: 'poppins';
}
`;

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default Theme;
