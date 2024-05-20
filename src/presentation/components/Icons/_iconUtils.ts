import { IconProps } from './_iconTypes';

function defaultIconSize(size: IconProps['size']): {
  width: number;
  height: number;
} {
  switch (size) {
    case 'full':
      return { width: 126, height: 126 };
    case 'xxl':
      return { width: 56, height: 56 };
    case 'xl':
      return { width: 40, height: 40 };
    case 'l':
      return { width: 32, height: 32 };
    case 'm':
      return { width: 24, height: 24 };
    case 's':
      return { width: 16, height: 16 };
  }
}

export function iconSize(
  size: IconProps['size'],
  width?: number | string,
  height?: number | string
): { width: number; height: number } {
  if (typeof width === 'number' && typeof height === 'number') return { width, height };
  else return defaultIconSize(size);
}
