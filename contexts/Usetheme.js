import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function Usetheme() {
  const [isdark, setIsDark] = useContext(ThemeContext);
 
  return [isdark, setIsDark];
}
