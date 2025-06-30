import Header from "./Components/Header";
import "./App.css";

import { Outlet } from "react-router";
import { useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

export default function App() {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );
   
  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      <Header/> 
      <Outlet/>
    </ThemeContext.Provider>
    
  );
} 