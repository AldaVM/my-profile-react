import { createContext } from "react";

export const THEMES = {
  light: {
    foreground: "rgb(33, 36, 40)",
    background: "#fff",
  },
  dark: {
    foreground: "rgb(246, 247, 249)",
    background: "rgb(33, 36, 40)",
  },
};

const ThemeContext = createContext(THEMES.light);

export default ThemeContext;
