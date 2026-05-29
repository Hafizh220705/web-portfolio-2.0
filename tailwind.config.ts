import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        // Shadow solid tanpa blur khas Neo-Brutalism (X Y Blur Spread Color)
        'neo': '6px 6px 0px 0px rgba(0,0,0,1)',
        'neo-sm': '4px 4px 0px 0px rgba(0,0,0,1)',
        'neo-hover': '2px 2px 0px 0px rgba(0,0,0,1)', // Digunakan untuk efek klik/hover
      },
      colors: {
        // Palet warna kontras (Bisa Anda sesuaikan nanti jika ada preferensi warna lain)
        'neo-yellow': '#FFD800',
        'neo-blue': '#38BDF8',
        'neo-pink': '#F472B6',
        'neo-green': '#4ADE80',
        'neo-bg': '#F8F8F8', // Putih tulang untuk background agar mata tidak cepat lelah
      }
    },
  },
  plugins: [],
};

export default config;