import { ThemeProvider } from "styled-components"
import GlobalStyle from "./globalStyles"

function App() {
  return <>

    <GlobalStyle />

    <ThemeProvider theme={lightTheme}>
    App File
    </ThemeProvider>


    
    </>
    
}

export default App

