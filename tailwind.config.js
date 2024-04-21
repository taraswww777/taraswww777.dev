// /** @type {import('tailwindcss').Config.theme.colors} */
const baseColors = {
  black: '#000000',
  white: '#ffffff',
  lightBg: '#2F3238',
  darkBg: '#26292E',
  gray: '#7F8289',
  red: '#DE5E60',
  darkRed: '#b94a48',
  orange: '#DBA571',
  darkOrange: '#c09853',
  blue: '#5A9AA8',
  darkBlue: '#3a87ad',
  green: '#1F7F5C',
  darkGreen: '#468847',
  /*  Highlighter */
  hlYellow: '#fdff00',
  hlOrange: '#ff9a00',
  hlGreen: '#00ff04',
  hlBlue: '#00c5ff',
  hlPurple: '#ff00a7',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    flexGrow: {
      1: '1',
      2: '2',
      3: '3'
    },
    fontFamily: {
      sans: ['TitilliumWeb'],
      body: ['TitilliumWeb']
    },
    colors: {
      ...baseColors,
      bgBodyPrimary: baseColors.lightBg,
      bgBodySecondary: baseColors.darkBg,
      colorTextPrimary: baseColors.white,
      colorTextRed: baseColors.red,
      // Menu
      link: baseColors.white,
      linkCurrent: baseColors.white,
      linkActive: baseColors.red,
      // Типы / Статусы
      secondary: baseColors.gray,
      success: baseColors.green,
      warning: baseColors.orange,
      info: baseColors.blue,
      danger: baseColors.darkRed,
    },
    extend: {},
  },
  plugins: [],
}

