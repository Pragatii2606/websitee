import React from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
   <div className="relative w-10 h-10 flex items-center justify-center z-50">
  {/* Light Button */}
  <img
    src={LightButton}
    alt="light mode"
    onClick={() => setTheme("dark")}
    className={`absolute w-full h-full cursor-pointer transition-opacity duration-300 ${
      theme === "dark" ? "opacity-0 pointer-events-none" : "opacity-100"
    }`}
  />

  {/* Dark Button */}
  <img
    src={DarkButton}
    alt="dark mode"
    onClick={() => setTheme("light")}
    className={`absolute w-full h-full cursor-pointer transition-opacity duration-300 ${
      theme === "dark" ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
  />
</div>

  );
};

export default DarkMode;
