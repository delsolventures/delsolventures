import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faLightbulb } from "@fortawesome/free-solid-svg-icons";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex items-center">
      {theme === "light" ? (
        <button
          onClick={() => setTheme("dark")}
          className="rounded-full outline-none focus:outline-none"
        >
          <span className="sr-only">Dark Mode</span>
          <FontAwesomeIcon
            icon={faLightbulb} //"fa-solid fa-pepper-hot"
            className="text-trueGray-700"
            aria-hidden="true"
          />
        </button>
      ) : (
        <button
          onClick={() => setTheme("light")}
          className=" rounded-full outline-none focus:outline-none focus-visible:ring focus-visible:ring-orange-100 focus:ring-opacity-20"
        >
          <span className="sr-only">Light Mode</span>
          {/*<svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="#075985" //"currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>*/}
          <FontAwesomeIcon
            icon={faMoon} //"fa-solid fa-pepper-hot"
            className="text-trueGray-100"
            aria-hidden="true"
          />
        </button>
      )}
    </div>
  );
};

export default ThemeChanger;
