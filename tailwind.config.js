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
    extend: {
      spacing: {
        '2.25': '0.5625rem', // 2.25 * 0.25rem = 0.5625rem
        '2.75': '0.6875rem', // 2.75 * 0.25rem = 0.6875rem
        '12': '3.25rem', // 12 * 0.25rem = 3.25rem
        '12.25': '3.0625rem', // 12.25 * 0.25rem = 3.0625rem
        '12.5': '3.125rem', // 12.5 * 0.25rem = 3.125rem
        '13': '3.25rem', // 13 * 0.25rem = 3.25rem
        '13.25': '3.3125rem', // 13.25 * 0.25rem = 3.3125rem
        '13.5': '3.375rem', // 13.5 * 0.25rem = 3.375rem
      },
      fontSize: {
        // Ваши кастомные размеры
        h1: ['3.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['2.5rem', { lineHeight: '1.3', fontWeight: '700' }],
        h3: ['2rem', { lineHeight: '1.35', fontWeight: '600' }],
        h4: ['1rem', { lineHeight: '1.5', fontWeight: '600' }],
        h5: ['1rem', { lineHeight: '1.5', fontWeight: '500' }],
        h6: ['1rem', { lineHeight: '1.6', fontWeight: '500' }],

        // Можно сохранить дефолтные значения как fallback
        ...require('tailwindcss/defaultTheme').fontSize
      }
    },
  },
  plugins: [],
}

