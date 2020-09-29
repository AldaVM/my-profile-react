import ThemeContext from "../store/themeContext";
import { useState } from "react";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({
    foreground: "rgb(33, 36, 40)",
    background: "#fff",
    footerbg: "#f1f3f5",
    headerbg: "rgb(0, 255, 0)",
    type: "light",
  });

  function changeTheme() {
    if (theme.type === "light") {
      setTheme({
        foreground: "rgb(246, 247, 249)",
        background: "rgb(33, 36, 40)",
        footerbg: "rgb(60, 60, 59)",
        headerbg: "rgb(0, 187, 0)",
        type: "dark",
      });
    } else {
      setTheme({
        foreground: "rgb(33, 36, 40)",
        background: "#fff",
        footerbg: "#f1f3f5",
        headerbg: "rgb(0, 255, 0)",
        type: "light",
      });
    }
  }

  return (
    <ThemeContext.Provider value={{ changeTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
