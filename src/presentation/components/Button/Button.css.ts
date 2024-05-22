import colors from "tailwindcss/colors";

export const size = {
  l: 'py-1.5 px-2 text-[16px] leading-[24px]',
  m: 'py-1 px-2 text-[16px] leading-[24px]',
  s: 'py-0.5 px-1.5 text-[14px] leading-[24px]',
};

export const iconSize = {
  l: 'p-1.5',
  m: 'p-1',
  s: 'p-1',
};

export const variant = {
  primary: [
    'bg-black text-white',
    'hover:bg-interactive-hover',
    'focus-visible:outline-black focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2',
    'disabled:bg-interactive-disabled',
  ],

  secondary: [
    'bg-transparent border-2 border-interactive-enabled text-neutral-black',
    'hover:bg-interactive-hover-inverted hover:text-neutral-off-white',
    'focus-visible:outline-neutral-black focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2',
    'disabled:bg-transparent disabled:border-interactive-disabled disabled:text-interactive-disabled',
  ],
  ghost: [
    'bg-transparent text-neutral-black underline underline-offset-4',
    'hover:font-bold hover:decoration-2',
    'focus-visible:outline-neutral-black focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2',
    'disabled:bg-transparent disabled:decoration-1 disabled:text-interactive-disabled',
  ],
};

export const iconColor = {
  primary: "#fefefe",
  secondary: 'fill-black group-hover:fill-white group-disabled:fill-interactive-disabled',
  ghost: 'fill-neutral-black group-disabled:fill-interactive-disabled',
};
