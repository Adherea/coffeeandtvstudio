import type { Config } from "tailwindcss";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        pc: "1920px", // Tampil mulai dari 1080px ke atas
        hiddenAt: "1433px", // Disembunyikan mulai dari 1433px ke bawah
      },
    },
  },
  plugins: [],
} satisfies Config;
