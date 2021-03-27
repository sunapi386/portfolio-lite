module.exports = {
  purge: {
    enabled: true,
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: [
        "text-indigo-500",
        "text-green-500",
        "text-red-500",
        "text-blue-500",
        "text-yellow-500",
        "dark:text-indigo-200",
        "dark:text-green-200",
        "dark:text-red-200",
        "dark:text-blue-200",
        "dark:text-yellow-200",
      ],
    },
  },
  darkMode: "class",
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderStyle: ["dark"],
      opacity: ["dark"],
    },
  },
  plugins: [],
};
