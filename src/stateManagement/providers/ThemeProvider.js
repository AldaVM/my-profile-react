import ThemeContext from "../store/themeContext";
import { useState } from "react";

export default function ThemeProvider({ children }) {
  const [customTheme, setTheme] = useState({
    light: {
      foreground: "rgb(33, 36, 40)",
      background: "#fff",
    },
  });

  function changeTheme() {
    if (customTheme.light) {
      setTheme({
        dark: {
          foreground: "rgb(246, 247, 249)",
          background: "rgb(33, 36, 40)",
        },
      });
    } else {
      setTheme({
        light: {
          foreground: "rgb(33, 36, 40)",
          background: "#fff",
        },
      });
    }
  }

  return (
    <ThemeContext.Provider value={{ changeTheme, customTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
