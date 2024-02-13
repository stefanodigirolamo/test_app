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
    brand: {
      black: '#000000',
      'mud-grey-dark': '#6B6A69',
      'mud-grey-light': '#807E78',
      'off-white': '#FDFAF7',
    },
    neutral: {
      100: '#EDEBE8',
      200: '#D0CCC8',
      600: '#6B6A69',
      black: '#000000',
      'off-white': '#FDFAF7',
    },
    interactive: {
      enabled: '#000000',
      hover: '#6B6A69',
      disabled: '#B5B3B0',
      'enabled-inverted': '#FDFAF7',
      'hover-inverted': '#000000',
    },
    feedback: {
      error: {
        dark: '#B40404',
        medium: '#D52121',
        light: '#FFF3F3',
      },
      warning: {
        dark: '#8F6200',
        medium: '#E5A000',
        light: '#FEF9EA',
      },
      success: {
        dark: '#036D15',
        medium: '#037D17',
        light: '#E7F8EA',
      },
    },
  },
  fontFamily: {
    fuerte: ['var(--font-fuerte)', ...fontFamily.sans],
    mosans: ['var(--font-mosans)', ...fontFamily.sans],
  },
  fontSize: {
    'hero-desktop': [
      '140px',
      {
        lineHeight: '1.1',
        letterSpacing: '-0.04em',
        fontWeight: '900',
      },
    ],
    'hero-ipad': [
      '80px',
      {
        lineHeight: '1.1',
        letterSpacing: '-0.04em',
        fontWeight: '900',
      },
    ],
    'hero-mobile': [
      '56px',
      {
        lineHeight: '1.1',
        letterSpacing: '-0.04em',
        fontWeight: '900',
      },
    ],
    'heading-xl-desktop': [
      '64px',
      {
        lineHeight: '1.1',
        letterSpacing: '-0.02em',
        fontWeight: '900',
      },
    ],
    'heading-xl-mobile': [
      '44px',
      {
        lineHeight: '1.1',
        letterSpacing: '-0.02em',
        fontWeight: '900',
      },
    ],
    'heading-l-desktop': [
      '52px',
      {
        lineHeight: '1.1',
        letterSpacing: '-0.02em',
        fontWeight: '900',
      },
    ],
    'heading-l-mobile': [
      '34px',
      {
        lineHeight: '1.1',
        letterSpacing: '-0.02em',
        fontWeight: '900',
      },
    ],
    'heading-m-desktop': [
      '40px',
      {
        lineHeight: '1.1',
        letterSpacing: '-0.02em',
        fontWeight: '900',
      },
    ],
    'heading-m-mobile': [
      '28px',
      {
        lineHeight: '1.1',
        letterSpacing: '-0.02em',
        fontWeight: '900',
      },
    ],
    'heading-s-desktop': [
      '32px',
      {
        lineHeight: '1.1',
        fontWeight: '900',
      },
    ],
    'heading-s-mobile': [
      '22px',
      {
        lineHeight: '1.1',
        fontWeight: '900',
      },
    ],
    'heading-xs-desktop': [
      '24px',
      {
        lineHeight: '1.1',
        letterSpacing: '0.01em',
        fontWeight: '900',
      },
    ],
    'heading-xs-mobile': [
      '18px',
      {
        lineHeight: '1.1',
        letterSpacing: '0.01em',
        fontWeight: '900',
      },
    ],
    'heading-xxs-desktop': [
      '18px',
      {
        lineHeight: '1.1',
        letterSpacing: '0.01em',
        fontWeight: '900',
      },
    ],
    'heading-xxs-mobile': [
      '16px',
      {
        lineHeight: '1.1',
        letterSpacing: '0.01em',
        fontWeight: '900',
      },
    ],
    'heading-mono-l-desktop': [
      '28px',
      {
        lineHeight: '1.4',
        fontWeight: '900',
      },
    ],
    'heading-mono-l-mobile': [
      '28px',
      {
        lineHeight: '1.4',
        fontWeight: '900',
      },
    ],
    'heading-mono-s-desktop': [
      '16px',
      {
        lineHeight: '1.4',
        fontWeight: '900',
      },
    ],
    'heading-mono-s-mobile': [
      '14px',
      {
        lineHeight: '1.4',
        fontWeight: '900',
      },
    ],
    'body-highlight-l-desktop': [
      '32px',
      {
        lineHeight: '1.1',
        fontWeight: '900',
      },
    ],
    'body-highlight-l-mobile': [
      '28px',
      {
        lineHeight: '1.1',
        fontWeight: '900',
      },
    ],
    'body-highlight-l-mono-desktop': [
      '32px',
      {
        lineHeight: '1.1',
        fontWeight: '400',
      },
    ],
    'body-highlight-l-mono-mobile': [
      '22px',
      {
        lineHeight: '1.1',
        fontWeight: '400',
      },
    ],
    'body-m-desktop': [
      '18px',
      {
        lineHeight: '1.4',
      },
    ],
    'body-m-mobile': [
      '16px',
      {
        lineHeight: '1.4',
      },
    ],
    'body-s-desktop': [
      '16px',
      {
        lineHeight: '1.4',
      },
    ],
    'body-s-mobile': [
      '16px',
      {
        lineHeight: '1.4',
      },
    ],
    'body-xs-desktop': [
      '14px',
      {
        lineHeight: '1.4',
      },
    ],
    'body-xs-mobile': [
      '14px',
      {
        lineHeight: '1.4',
      },
    ],
    'body-xxs-desktop': [
      '12px',
      {
        lineHeight: '1.4',
      },
    ],
    'body-xxs-mobile': [
      '12px',
      {
        lineHeight: '1.4',
      },
    ],
    'caption-xl-desktop': [
      '64px',
      {
        lineHeight: '1.4',
        fontWeight: '400',
      },
    ],
    'caption-xl-mobile': [
      '34px',
      {
        lineHeight: '1.4',
        fontWeight: '400',
      },
    ],
    'caption-l-desktop': [
      '48px',
      {
        lineHeight: '1.4',
        fontWeight: '400',
      },
    ],
    'caption-l-mobile': [
      '34px',
      {
        lineHeight: '1.4',
        fontWeight: '400',
      },
    ],
    'label-s-desktop': [
      '16px',
      {
        lineHeight: '1.4',
        fontWeight: '700',
      },
    ],
    'label-s-mobile': [
      '16px',
      {
        lineHeight: '1.4',
        fontWeight: '700',
      },
    ],
    'label-xs-desktop': [
      '14px',
      {
        lineHeight: '1.4',
        fontWeight: '700',
      },
    ],
    'label-xs-mobile': [
      '14px',
      {
        lineHeight: '1.4',
        fontWeight: '700',
      },
    ],

    'label-xxs-desktop': [
      '12px',
      {
        lineHeight: '1.4',
        fontWeight: '700',
      },
    ],
    'label-xxs-mobile': [
      '12px',
      {
        lineHeight: '1.4',
        fontWeight: '700',
      },
    ],
    'button-m-desktop': [
      '18px',
      {
        lineHeight: '1.33',
        fontWeight: '700',
      },
    ],
    'button-m-mobile': [
      '18px',
      {
        lineHeight: '1.33',
        fontWeight: '700',
      },
    ],
    'button-s-desktop': [
      '16px',
      {
        lineHeight: '1.5',
        fontWeight: '700',
      },
    ],
    'button-s-mobile': [
      '16px',
      {
        lineHeight: '1.5',
        fontWeight: '700',
      },
    ],
    'link-m-desktop': [
      '18px',
      {
        lineHeight: '1.4',
        fontWeight: '700',
      },
    ],
    'link-m-mobile': [
      '16px',
      {
        lineHeight: '1.4',
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
    'link-xs-desktop': [
      '14px',
      {
        lineHeight: '1.4',
        fontWeight: '700',
      },
    ],
    'link-xs-mobile': [
      '14px',
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
