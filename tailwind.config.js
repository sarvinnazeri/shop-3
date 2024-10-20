/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'back-1': "url('./img/Screen Shot 2024-09-20 at 1.14.07 PM.png')",
        'back-women': "url('./img/Screen_Shot_2023-08-09_at_17.42.19.webp')",
        'back-men': "url('./img/SCR.webp')",
        'back-classy': "url('./img/lds_2700x.webp')",
        'back-tech': "url('./img/Iris-van-Herpen_Sculpting-the-Senses_installation-view_12_GOMA_C-Callistemon_supplied.jpg')",
        'back-all': "url('./img/6635b22e0a9e53a3c3e9c3be_Home banner background image.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
