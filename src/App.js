import { ThemeProvider } from "styled-components";
import "./App.css";
import Profile from "./components/Profile";

const theme = {
  colors: {
    primary: "#1bc9da",
    primaryDarken: "#0C7E88",
    secondary: "#bbb",
    secondaryDarken: "#7D7A7A",
    light: "#DFDFDF",
  },
  units: {
    radius: "10px",
    margin: "10px",
    padding: "10px",
    maxWidth: "1024px",
  },
  mobile: {
    small: "767px",
  },
};

function App() {
  return (
    <main className="App">
      <ThemeProvider theme={theme}>
        <Profile />
      </ThemeProvider>
    </main>
  );
}

export default App;
