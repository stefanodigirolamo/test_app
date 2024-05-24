import localFont from 'next/font/local';

export type Children = React.ReactElement<unknown> | Array<Children> | boolean | null | undefined;

export type Override<O1, O2> = Pick<O1, Exclude<keyof O1, keyof O2>> & O2;

function warn(warning: string): void {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(warning); // eslint-disable-line no-console
  }
}

export const logger = {
  warn,
};

export type Filter<T, U> = T extends U ? T : never;

export const fuerte = localFont({
  display: 'swap',
  style: 'normal',
  variable: '--font-fuerte',
  src: [
    {
      path: '../../../../public/fonts/Fuerte-RegularRounded.woff2',
      weight: '400',
    },
    {
      path: '../../../../public/fonts/Fuerte-RegularRounded.woff',
      weight: '400',
    },
    {
      path: '../../../../public/fonts/Fuerte-BoldRounded.woff2',
      weight: '700',
    },
    {
      path: '../../../../public/fonts/Fuerte-BoldRounded.woff',
      weight: '700',
    },
  ],
});
