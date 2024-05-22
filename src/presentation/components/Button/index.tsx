import { ButtonHTMLAttributes, cloneElement, MouseEventHandler } from 'react';
import cx from 'classnames';
import * as classes from './Button.css';
import { Box, Space, spaceUnit } from '@/presentation/foundations';
import { IconProps } from '../Icons';

export type ButtonProps = {
  'data-test-id'?: string;
  /**
   * The id of the button.
   * @type string
   * @required
   */
  id: string;
  /**
   * The content of the button.
   * @type string | JSX.Element;
   * @required
   */
  children: string | JSX.Element;
  /**
   * The type of the button.
   * @default 'button'
   * @type "submit" | "reset" | "button" | undefined
   * @required
   */
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  /**
   * The size of the button.
   * @default 'm'
   * @type "m" | "l"
   * @required
   */
  size: 'm' | 'l';
  /**
   * The variant of the button.
   * @type keyof typeof classes.variant
   * @required
   */
  variant: keyof typeof classes.variant;
  /**
   * The disabled state of the button.
   * @default false
   * @type boolean
   */
  disabled?: boolean;
  /**
   * optional before icon.
   * @type (props: IconProps) => JSX.Element;
   */
  beforeIcon?: (props: IconProps) => JSX.Element;
  /**
   * optional after icon.
   * @type (props: IconProps) => JSX.Element;
   */
  afterIcon?: (props: IconProps) => JSX.Element;
  /**
   * The action of the button.
   * @type MouseEventHandler<HTMLButtonElement>
   * @default () => {}
   */
  action?: MouseEventHandler<HTMLButtonElement>;
  /**
   * A label for screen readers
   * @type string
   */
  'aria-label'?: string;
  /**
   * Button full width.
   * @type boolean
   * @default false
   */
  fullWidth?: boolean;
  /**
   * The button name
   * @type string
   */
  name?: string;
  /**
   * CSS className
   * @type string
   */
  className?: string;
  /**
   * The button tab index value if -1 is not focusable and 0 is focusable
   * @type number
   */
  tabIndex?: number;
};

export function Button(props: ButtonProps) {
  function convertIconSize(size: ButtonProps['size']) {
    switch (size) {
      case 'm':
        return 's';
      case 'l':
        return 'm';
      default:
        return 's';
    }
  }

  return (
    <Box
      data-test-id={props['data-test-id']}
      component="button"
      vAlignContent="center"
      hAlignContent="center"
      id={props.id}
      aria-label={props['aria-label']}
      type={props.type ?? 'button'}
      className={cx(
        'group font-bold rounded-small',
        classes.variant[props.variant],
        {
          [classes.size[props.size]]: typeof props.children === 'string',
          [classes.iconSize[props.size]]: typeof props.children !== 'string',
        },
        props.className
      )}
      style={{
        cursor: props.disabled ? 'not-allowed' : 'pointer',
      }}
      disabled={props.disabled}
      onClick={props.action}
      name={props.name}
      tabIndex={props.tabIndex}
      grow={props.fullWidth}
      shrink
    >
      {!!props.beforeIcon && (
        <>
          {props.beforeIcon({
            id: 'before-icon-' + props.id,
            size: convertIconSize(props.size),
            fill: classes.iconColor[props.variant],
          })}
          <Space size={spaceUnit} />
        </>
      )}
      {typeof props.children === 'string' ? (
        <h1>{props.children}</h1>
      ) : (
        cloneElement(props.children, {
          id: 'button-icon-' + props.id,
          className: cx(classes.iconColor[props.variant], props.children.props.className),
          fill: classes.iconColor[props.variant],
        })
      )}
      {!!props.afterIcon && (
        <>
          <Space size={spaceUnit} />
          {props.afterIcon({
            id: 'after-icon-' + props.id,
            size: convertIconSize(props.size),
            fill: classes.iconColor[props.variant],
          })}
        </>
      )}
    </Box>
  );
}
