'use client';
import { ComponentProps, Fragment, useEffect, useState } from 'react';
import { forwardRef } from 'react';
import { Box } from '../Box/Box';
import { Children } from '../utils';

export type StackProps = Omit<ComponentProps<typeof Box>, 'size'> & {
  /**
   * The children to render inside the stack. Stack will not accept only 1 child, it must have at least 2. If you need to place only 1 child please prefer using Box.
   * @default []
   * @type {Children[]}
   */
  children: Children[];
  /**
   * Whether the stack should use as divider between children.
   * @default undefined
   * @type {Children}
   * @example
   * <Stack divider={<div className="divider"/>}>
   *  <span>First</span>
   *  <span>Second</span>
   * </Stack>
   */
  divider?: Children;
} & (
    | {
        /**
         * Gap between children. If a divider is used, the gap will be divided by 2 and applied to the before and adfter the divider.
         * Whenever a gap is defined fluid must be undefined.
         * @default 0
         * @type {number}
         * @example
         * <Stack gap={16}>
         *  <span>First</span>
         *  <span>Second</span>
         * </Stack>
         * @example
         * <Stack gap={16} divider={<div className="divider"/>}>
         *  <span>First</span>
         *  <span>Second</span>
         * </Stack>
         */
        gap: number;
        fluid?: never;
      }
    | {
        /**
         * Whether the stack should take the full width or height of its parent.
         * If a divider is used, it will be placed in the middle of this space.
         * Whenever fluid is defined gap must be undefined.
         * @default false
         * @type {boolean}
         * @example
         * <Stack fluid>
         *  <span>First</span>
         *  <span>Second</span>
         * </Stack>
         * @example
         * <Stack fluid divider={<div className="divider"/>}>
         *  <span>First</span>
         *  <span>Second</span>
         * </Stack>
         */
        fluid: boolean;
        gap?: never;
      }
  );

export const Stack = forwardRef<HTMLElement, StackProps>((props, ref) => {
  const { children, fluid, gap, divider, ...boxProps } = props;
  const [content, setChildren] = useState<Children[]>(children.filter(child => !!child));

  useEffect(() => {
    setChildren(children.filter(child => !!child));
  }, [children]);

  const commonProps = {
    ...boxProps,
    ref: ref,
    height: fluid && boxProps.column ? '100%' : props.height,
    width: fluid && !boxProps.column ? '100%' : props.width,
    'data-test-id': props['data-test-id'],
  };

  if (!divider) {
    return (
      <Box
        {...commonProps}
        style={{
          gap: gap,
          justifyContent: fluid ? 'space-between' : undefined,
          ...boxProps.style,
          ...props.style,
        }}
      >
        {content}
      </Box>
    );
  } else {
    return (
      <Box
        {...commonProps}
        style={{
          gap: gap ? gap * 0.5 : undefined,
          justifyContent: fluid ? 'space-between' : undefined,
          ...boxProps.style,
          ...props.style,
        }}
      >
        {content.map((child, index) => (
          <Fragment key={index}>
            {child}
            {index < content.length - 1 && divider}
          </Fragment>
        ))}
      </Box>
    );
  }
});
