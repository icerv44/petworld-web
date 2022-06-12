module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    maxWidth: {
      "1/2": "50%",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
