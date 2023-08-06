import { useState } from "react";
import { ThemeProvider } from 'styled-components';
import GlobalStyle from "./GlobalStyle"
import { light, dark } from './themes';
import { AppWrapper } from "./components";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  localStorage.setItem('theme', theme);
  return (
    <ThemeProvider theme={localStorage.getItem('theme') === 'light' ? light : dark}>
      <GlobalStyle />
      <AppWrapper state={theme} setState={setTheme} />
    </ThemeProvider>
  )
}

export default App
