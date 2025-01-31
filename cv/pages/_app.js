import { useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : undefined}>
      <div className="antialiased text-gray-900 dark:text-white dark:bg-gray-700 h-screen overflow-auto">
        {/* <div className="absolute right-0 top-0 p-4">
          <button
            className="px-4 py-2 rounded bg-gray-100 dark:bg-gray-600 cursor-pointer uppercase text-sm tracking-wider font-mono"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Light mode" : "Dark mode"}
          </button>
        </div> */}

        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
