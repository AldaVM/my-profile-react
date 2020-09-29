import { createContext } from "react";

export const THEMES = {
  foreground: "rgb(33, 36, 40)",
  background: "#fff",
  footerbg: "#f1f3f5",
  headerbg: "rgb(0, 255, 0)",
  type: "light",
};

const ThemeContext = createContext(THEMES);

export default ThemeContext;
