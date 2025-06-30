import { Link } from "react-router";
import { Usetheme } from "../contexts/Usetheme";
 

export default function Header() {
  const [isDark, setIsDark] = Usetheme()

  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">
          <Link to="/">Where in the world?</Link>
        </h2>
        <p
          className="theme-changer"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
        >
          <i className={` fa-regular fa-${isDark ? "sun" : "moon"}`} />
          &nbsp;&nbsp;{`${isDark ? "Light Mode" : "Dark Mode"}`}
        </p>
      </div>
    </header>
  );
}
