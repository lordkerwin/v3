/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "rgb(var(--background) / <alpha-value>)",
                foreground: "rgb(var(--foreground) / <alpha-value>)",
                "accent-1": "rgb(var(--accent-1) / <alpha-value>)",
                "accent-2": "rgb(var(--accent-2) / <alpha-value>)",
                "accent-3": "rgb(var(--accent-3) / <alpha-value>)",
                "accent-4": "rgb(var(--accent-4) / <alpha-value>)",
                "accent-5": "rgb(var(--accent-5) / <alpha-value>)",
                "accent-6": "rgb(var(--accent-6) / <alpha-value>)",
                "accent-7": "rgb(var(--accent-7) / <alpha-value>)",
                "accent-8": "rgb(var(--accent-8) / <alpha-value>)",
                secondary: "rgb(var(--secondary) / <alpha-value>)",
            },
        },
    },
    plugins: [],
};
