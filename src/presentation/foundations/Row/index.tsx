'use client';

import cx from 'classnames';
import { ComponentProps, CSSProperties } from 'react';
import styles from './Row.module.css';
import { Children } from '../utils';
import { Box } from '../Box';

export interface RowProps {
  'data-test-id'?: string;
  /**
   * The content of the component.
   * @default ""
   * @required
   * @type Children
   */
  children: Children;
  /**
   * The ClassName of the child component.
   * @default ""
   * @optional
   * @type string
   */
  className?: string;
  /**
   * optional style rules of the child component.
   * @type CSSProperties
   */
  style?: CSSProperties;
  /**
   * optional style rules of the wrapper component.
   * @type CSSProperties
   */
  wrapperStyle?: CSSProperties;
  /**
   * optional style rules of the parent component.
   * @type CSSProperties
   */
  parentStyle?: CSSProperties;
  /**
   * The internal vertical alignment of the child component.
   * @default "center"
   * @type ComponentProps<typeof Box>["vAlignContent"]
   * @optional
   */
  vAlignContent?: ComponentProps<typeof Box>['vAlignContent'];
  /**
   * The internal alignment of the child component.
   * @default "center"
   * @type ComponentProps<typeof Box>["hAlignContent"]
   * @optional
   */
  hAlignContent?: ComponentProps<typeof Box>['hAlignContent'];
  /**
   * The ClassName of the wrapper component.
   * @default ""
   * @optional
   * @type string
   */
  classNameWrapper?: string;
  /**
   * The outer left className
   * @default ""
   * @optional
   * @type string
   */
  classNameOuterLeft?: string;
  /**
   * The outer right className
   * @default ""
   * @optional
   * @type string
   */
  classNameOuterRight?: string;
  /**
   * The inner left className
   * @default ""
   * @optional
   * @type string
   */
  classNameInnerLeft?: string;
  /**
   * The inner right className
   * @default ""
   * @optional
   * @type string
   */
  classNameInnerRight?: string;
  /**
   * The outer className
   * @default ""
   * @optional
   * @type string
   */
  classNameOuter?: string;
  /**
   * Teh orientation of the children
   * @default undefined
   * @optional
   */
  column?: boolean;
  /**
   * layout variant for full width
   * @type "default" | "full" | "narrow"
   */
  variant: 'default' | 'full' | 'narrow';
  /**
   * component type of the children
   * @type ComponentProps<typeof Box>['component']
   */
  component?: ComponentProps<typeof Box>['component'];
}

export function Row(props: RowProps) {
  return (
    <div
      className={cx(
        'flex flex-row justify-center',
        {
          'w-full': props.variant === 'full',
        },
        props.classNameOuter
      )}
      data-test-id={props['data-test-id']}
      style={props.parentStyle}
    >
      <Box data-test-id={props['data-test-id'] + '-outer-left'} grow className={props.classNameOuterLeft} />
      <Box
        grow={10}
        width="100%"
        shrink
        className={cx('!max-w-[1712px]', props.classNameWrapper)}
        hAlignContent={props.variant === 'narrow' ? 'center' : undefined}
        style={props.wrapperStyle}
      >
        <Box
          data-test-id={props['data-test-id'] + '-inner-left'}
          shrink={false}
          className={cx(
            {
              'w-2 lg:w-5 xl:w-13': props.variant !== 'full',
              [styles.narrow]: props.variant === 'narrow',
              'w-0': props.variant === 'full',
            },
            props.classNameInnerLeft
          )}
        />
        <Box
          grow
          shrink
          column={props.column}
          component={props.component}
          vAlignContent={props.vAlignContent}
          hAlignContent={props.hAlignContent}
          style={props.style}
          data-test-id={props['data-test-id'] + '-children'}
          className={props.className}
        >
          {props.children}
        </Box>
        <Box
          data-test-id={props['data-test-id'] + '-inner-right'}
          shrink={false}
          className={cx(
            {
              'w-2 lg:w-5 xl:w-13': props.variant !== 'full',
              [styles.narrow]: props.variant === 'narrow',
              'w-0': props.variant === 'full',
            },
            props.classNameInnerRight
          )}
        />
      </Box>
      <Box data-test-id={props['data-test-id'] + '-outer-right'} grow className={props.classNameOuterRight} />
    </div>
  );
}
