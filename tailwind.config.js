module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  // specify other options here
  theme: {
    colors: {
      "text": {
        "primary": "#343A3F",
        "secondary": "#7E8589",
      },
      transparent: "transparent",
      "white": "#ffffff",
      "gray": {
        100: "#f3f2f1", // bg hover
        200: "#edebe9", // bg selected
        300: "#F4F4F4", // buttons
        "disabled": "#c5c3c2", // text
        "border": "#707070", // border
        "text": "#343A3F", //text
      },
      "blue":{
        100: "#EBF7FF",
        200: "#DBF0FF",
        "main": "#0078D4",
        "hover": "#0D6EBE",
      }
    },
    text: {
      "xs": "0.75rem",
      "sm": {
        "fontSize": "0.875rem",
        "lineheight": "1.5rem",
      },
      "md": "1rem",
    },
    extend: {
      boxShadow: {
        "md-right": "3px 0px 7px -3px rgba(0, 0, 0, 0.10)",
        "md-left": "-3px 0px 7px -3px rgba(0, 0, 0, 0.10)",
      },
    },
  },
};
