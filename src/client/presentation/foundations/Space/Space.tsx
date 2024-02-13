'use client';
import { CSSProperties, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Box } from '../Box/Box';

export type SpaceProps = {
  'data-test-id'?: string;
  /**
   * The class name to be applied to the component.
   * It can be used for CSS customizations.
   * @default ""
   * @optional
   * @type string
   */
  className?: string;
  /**
   * The custom CSS properties to be applied to the component.
   * This value will be merged with the default styles.
   * @default {}
   * @optional
   * @type CSSProperties
   */
  style?: CSSProperties;
} & (
  | {
      /**
       * The space size.
       * @type number
       */
      size: number;
      fluid?: never;
    }
  | {
      /**
       * The space will fill the space.
       * @type boolean
       */
      fluid: boolean;
      size?: never;
    }
);

export const Space = forwardRef<HTMLDivElement, SpaceProps>((props, forwardedRef) => {
  const [parentDirection, setParentDirection] = useState<'column' | 'row'>('row');

  const spaceRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(forwardedRef, () => spaceRef?.current as HTMLDivElement);

  useEffect(() => {
    if (spaceRef.current?.parentElement) {
      switch (getComputedStyle(spaceRef.current.parentElement).flexDirection) {
        case 'column':
          setParentDirection('column');
          break;
        case 'row':
          setParentDirection('row');
          break;
        default:
          console.warn('Space: parent element has an invalid flex direction');
          setParentDirection('row');
          break;
      }
    }
  }, []);

  function boxProps() {
    switch (parentDirection) {
      case 'row':
        const width = props.size;
        return { width, basis: width };
      case 'column':
        const height = props.size;
        return { height, basis: height };
    }
  }

  return (
    <Box
      data-test-id={props['data-test-id']}
      style={props.style}
      className={props.className}
      ref={spaceRef}
      {...boxProps()}
      grow={props.fluid}
      shrink={props.fluid}
    />
  );
});
