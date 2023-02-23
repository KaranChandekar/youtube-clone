/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: `"Linear","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif`,
    },
    fontSize: {
      xs: '1.3rem',
      sm: '1.4rem',
      md: '1.6rem',
      lg: ['2.2rem', '1.3'],
      '5xl': ['8rem', 1],
    },
    colors: {
      background: '#000212',
      white: '#FFFFFF',
      'white-a08': 'rgba(255, 255, 255, 0.08)',
    },
    spacing: {
      0: '0',
      1: '0.4rem',
      2: '0.8rem',
      3: '1.2rem',
      4: '1.6rem',
      5: '2rem',
      6: '2.4rem',
      7: '2.8rem',
      8: '3.2rem',
      9: '3.6rem',
      10: '4rem',
      11: '4.4rem',
      12: '4.8rem',
    },
    backgroundImage: {
      'primary-gradient':
        'linear-gradient(92.88deg,#455eb5 9.16%,#5643cc 43.89%,#673fd7 64.72%)',
    },
  },
  plugins: [],
};
