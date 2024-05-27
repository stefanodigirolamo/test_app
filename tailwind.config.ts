/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

const spaceUnit = 8;
const steps = 100;
const spacing: { [key: number]: string } = {
  0.5: `${spaceUnit / 2}px`,
  1.5: `${spaceUnit * 1.5}px`,
  2.5: `${spaceUnit * 2.5}px`,
  3.5: `${spaceUnit * 3.5}px`,
  4.5: `${spaceUnit * 4.5}px`,
  5.5: `${spaceUnit * 5.5}px`,
};
for (let i = 0; i <= steps; i++) {
  spacing[i] = `${spaceUnit * i}px`;
}

const content = ['./src/**/*.{js,ts,jsx,tsx}', './src/**/*.stories.{js,ts,jsx,tsx}'];

const theme = {
  screens: {
    xs: '567px',
    sm: '767px',
    md: '1023px',
    lg: '1599px',
    xl: '1919px',
  },
  spacing: {
    ...spacing,
  },
  maxWidth: {
    ...spacing,
    screen: '100vw',
  },
  maxHeight: {
    ...spacing,
    screen: '100vw',
  },
  colors: {
    transparent: 'transparent',
    black: '#000000',
    white: '#FDFAF7',
    neutral: {
      100: '#EDEBE8',
      200: '#D0CCC8',
      600: '#A9ABAA',
    },
    interactive: {
      enabled: '#000000',
      hover: '#6B6A69',
      disabled: '#B5B3B0',
    },
    feedback: {
      error: '#B40404',
      warning: '#8F6200',
      success: '#036D15',
    },
  },
  fontFamily: {
    fuerte: ['var(--font-fuerte)', ...fontFamily.sans],
  },
  fontSize: {
    'heading-xl-desktop': [
      '64px',
      {
        lineHeight: '1',
        letterSpacing: '-0.02em',
      },
    ],
    'heading-xl-mobile': [
      '44px',
      {
        lineHeight: '1',
        letterSpacing: '-0.02em',
      },
    ],
    'heading-l-desktop': [
      '44px',
      {
        lineHeight: '1',
        letterSpacing: '-0.02em',
      },
    ],
    'heading-l-mobile': [
      '34px',
      {
        lineHeight: '1',
        letterSpacing: '-0.02em',
      },
    ],
    'heading-m-desktop': [
      '38px',
      {
        lineHeight: '1',
        letterSpacing: '-0.02em',
      },
    ],
    'heading-m-mobile': [
      '28px',
      {
        lineHeight: '1',
        letterSpacing: '-0.02em',
      },
    ],
    'heading-s-desktop': [
      '32px',
      {
        lineHeight: '1',
      },
    ],
    'heading-s-mobile': [
      '22px',
      {
        lineHeight: '1',
      },
    ],
    'body-l-desktop': [
      '20px',
      {
        lineHeight: '1',
      },
    ],
    'body-l-mobile': [
      '18px',
      {
        lineHeight: '1',
      },
    ],
    'body-m-desktop': [
      '18px',
      {
        lineHeight: '1',
      },
    ],
    'body-m-mobile': [
      '16px',
      {
        lineHeight: '1',
      },
    ],
    'body-s-desktop': [
      '16px',
      {
        lineHeight: '1',
      },
    ],
    'body-s-mobile': [
      '14px',
      {
        lineHeight: '1',
      },
    ],
    'button-m-desktop': [
      '18px',
      {
        lineHeight: '1.2',
        fontWeight: '700',
      },
    ],
    'button-m-mobile': [
      '18px',
      {
        lineHeight: '1.2',
        fontWeight: '700',
      },
    ],
    'button-s-desktop': [
      '16px',
      {
        lineHeight: '1.4',
        fontWeight: '700',
      },
    ],
    'button-s-mobile': [
      '16px',
      {
        lineHeight: '1.4',
        fontWeight: '700',
      },
    ],
    'link-m-desktop': [
      '18px',
      {
        lineHeight: '1.2',
        fontWeight: '700',
      },
    ],
    'link-m-mobile': [
      '16px',
      {
        lineHeight: '1.2',
        fontWeight: '700',
      },
    ],
    'link-s-desktop': [
      '16px',
      {
        lineHeight: '1.4',
        fontWeight: '700',
      },
    ],
    'link-s-mobile': [
      '16px',
      {
        lineHeight: '1.4',
        fontWeight: '700',
      },
    ],
  },
};

const plugins = [
  ({ addVariant }: any) => {
    addVariant('child', '& > *');
    addVariant('children-last', '& > *:last-child');
  },
];

module.exports = {
  content,
  theme,
  plugins,
};
