import "./styles.css";
import { useState } from "react";

export function useTheme() {
  const [theme, settheme] = useState("light");
  const toggleTheme = () => {
    settheme(theme === "light" ? "dark" : "light");
  };
  return { theme, toggleTheme };
}

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      style={{
        height: "100mv",
        transition: "0.3s ease-in",
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
export default App;
