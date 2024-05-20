import cx from "classnames";
import { AriaRole, ComponentProps } from "react";
import { BaseTypography } from "./BaseTypography";
import * as classes from "./Body.css";
import { Filter } from "../utils";

export interface BodyProps {
  "data-test-id"?: string;
  /**
   * The text content of the Body.
   * @type string
   * @required
   */
  children: string;
  /**
   * The color of the Body.
   * @type ComponentProps<typeof BaseTypography>['color'];
   */
  color?: ComponentProps<typeof BaseTypography>["color"];
  /**
   * The custom className.
   * @type string
   */
  className?: string;
  /**
   * The font size of the Body.
   * @type "xxs" | "xs" | "s" | "m"
   * @required
   * @default "m"
   */
  size: "xxs" | "xs" | "s" | "m";
  /**
   * The component type.
   * @type "span" | "p" | "label" | "h4" | "h5"
   * @required
   */
  component?: keyof Pick<
    JSX.IntrinsicElements,
    "span" | "p" | "label" | "h4" | "h5"
  >;
  /**
   * The text  role
   * @type  'article' | 'caption' | 'listitem' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'option' | 'none'
   * @required
   */
  role?: Filter<
    AriaRole,
    | "article"
    | "caption"
    | "listitem"
    | "menuitem"
    | "menuitemcheckbox"
    | "menuitemradio"
    | "option"
    | "link"
    | "none"
  >;
  /**
   * The label for if associated with an input.
   * @type string
   * @optional
   */
  htmlFor?: string;
  /**
   * The alignment of the heading.
   * @type "left" | "center" | "right"
   */
  hAlignContent?: "left" | "center" | "right";
  /**
   * The title of the Body.
   * @type string
   * @optional
   */
  title?: string;
  /**
   * Makes font-weight bold
   * @type boolean
   * @optional
   */
  bold?: boolean;
}

export function Body(props: BodyProps) {
  return (
    <BaseTypography
      role={props.role ?? "none"}
      className={cx(
        classes.base,
        classes.size[props.size],
        {
          "font-bold": props.bold
        },
        props.className
      )}
      data-test-id={props["data-test-id"]}
      component={props.component ?? "span"}
      color={props.color}
      htmlFor={props.htmlFor}
      hAlignContent={props.hAlignContent}
      title={props.title}
    >
      {props.children}
    </BaseTypography>
  );
}
