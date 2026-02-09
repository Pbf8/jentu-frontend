import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colori brand Jentu.it
        'jentu': {
          teal: '#20B2AA',        // Colore principale
          'teal-dark': '#1a9690', // Hover states
          'teal-light': '#4fd1cb', // Accenti
          dark: '#0A1628',        // Scuro principale
          'dark-soft': '#1a2942', // Scuro secondario
        },
        // Stati del mare (per la legenda)
        wave: {
          'molto-agitato': '#8B0000',
          'agitato': '#FF0000',
          'molto-mosso': '#FF6B35',
          'mosso': '#FFA500',
          'poco-mosso': '#FFD700',
          'quasi-calmo': '#90EE90',
          'calmo': '#00CED1',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'jentu': '0 4px 6px -1px rgba(32, 178, 170, 0.1), 0 2px 4px -1px rgba(32, 178, 170, 0.06)',
        'jentu-lg': '0 10px 15px -3px rgba(32, 178, 170, 0.1), 0 4px 6px -2px rgba(32, 178, 170, 0.05)',
      }
    },
  },
  plugins: [],
};

export default config;
