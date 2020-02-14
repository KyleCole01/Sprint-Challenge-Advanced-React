import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  const onChange = () => {
    if (darkMode) {
      document.querySelector("body").classList.remove("dark-mode");
    } else {
      document.querySelector("body").classList.add("dark-mode");
    }
    setDarkMode(!darkMode);
  };

  return [darkMode, onChange];
};

export default useDarkMode;
