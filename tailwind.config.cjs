/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // プライマリーカラー
        'primary-coral': '#FF9A9E',
        'primary-peach': '#FAD0C4',
        // セカンダリーカラー
        'secondary-mint': '#A8E6CF',
        'secondary-apricot': '#FFD3A5',
        // アクセントカラー
        'accent-pink': '#FEC8D8',
        'accent-blue': '#C3ECFA',
        // ベースカラー
        'text-dark': '#333333',
        'light-gray': '#F8F8F8',
      },
      fontFamily: {
        'sans': ['Noto Sans JP', 'sans-serif'],
        'heading': ['Inter', 'sans-serif'],
      },
      spacing: {
        'section': '120px',
        'section-mobile': '80px',
      },
      maxWidth: {
        'content': '1200px',
        'text': '800px',
      },
      lineHeight: {
        'heading': '1.3',
        'relaxed': '1.8',
      },
    },
  },
  plugins: [],
}
