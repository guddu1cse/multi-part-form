module.exports = {
  content: ["./index.html", "./app.js"], 
  theme: {
    extend: {
      colors: {
        marine: "var(--marine-blue)",
        purplish: "var(--purplish-blue)",
        pastel: "var(--pastel-blue)",
        lightblue: "var(--light-blue)",
        strawberry: "var(--strawberry-red)",
        graycool: "var(--cool-gray)",
        graylight: "var(--light-gray)",
        magnolia: "var(--magnolia)",
        alabaster: "var(--alabaster)",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      fontSize: {
        base: "var(--font-size)",
      },
    },
  },
  plugins: [],
};
