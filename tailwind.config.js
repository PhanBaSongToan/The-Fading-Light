/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ash: "#0a0907",
        soot: "#12100d",
        char: "#1d1712",
        blood: "#b32318",
        ember: "#ec3b23",
        rust: "#5f1b14",
        lantern: "#d4a35e",
        bone: "#d9c9ae",
        fog: "#9f9384"
      },
      fontFamily: {
        display: ["Noto Serif", "Playfair Display", "Merriweather", "Georgia", "serif"],
        body: ["Be Vietnam Pro", "Inter", "Segoe UI", "Arial", "sans-serif"]
      },
      boxShadow: {
        ember: "0 0 24px rgba(179, 35, 24, 0.48)",
        "ember-soft": "0 0 38px rgba(179, 35, 24, 0.26)",
        "inner-red": "inset 0 0 30px rgba(179, 35, 24, 0.18)"
      },
      backgroundImage: {
        vignette:
          "radial-gradient(circle at 50% 45%, transparent 0%, rgba(0,0,0,.32) 45%, rgba(0,0,0,.86) 100%)",
        "red-haze":
          "linear-gradient(180deg, rgba(16,10,7,.1) 0%, rgba(8,4,3,.72) 55%, rgba(3,3,2,.98) 100%)"
      },
      keyframes: {
        emberFloat: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)", opacity: ".18" },
          "45%": { transform: "translate3d(8px, -24px, 0)", opacity: ".72" }
        },
        smokeDrift: {
          "0%, 100%": { transform: "translateX(-2%) scale(1)", opacity: ".24" },
          "50%": { transform: "translateX(4%) scale(1.04)", opacity: ".36" }
        },
        pulseRed: {
          "0%, 100%": { opacity: ".42", transform: "scale(.98)" },
          "50%": { opacity: ".88", transform: "scale(1.04)" }
        }
      },
      animation: {
        ember: "emberFloat 5s ease-in-out infinite",
        smoke: "smokeDrift 8s ease-in-out infinite",
        "pulse-red": "pulseRed 3.4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
