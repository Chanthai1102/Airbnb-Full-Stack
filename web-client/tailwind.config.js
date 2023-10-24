const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple" : "#081A51",
        'light-white' : 'rgba(255,255,255,0.18)'
      },
      borderColor: {
        'red-500': '#f00',
        'green-500': '#0f0',
      },
    },
  },
  plugins: [],
});

