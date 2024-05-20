import cx from "classnames";
import { ComponentProps } from "react";
import { BaseTypography } from "./BaseTypography";
import * as classes from "./Heading.css";

export interface HeadingProps {
  children: string;
  /**
   * The color of the heading.
   * @type ComponentProps<typeof BaseTypography>['color'];
   */
  color?: ComponentProps<typeof BaseTypography>["color"];
  /**
   * The custom className.
   * @type string
   */
  className?: string;
  /**
   * The font size of the heading.
   * @type "xxs" | "xs" | "s" | "m" | "l" | "xl";
   * @required
   * @default "m"
   */
  size: "xxs" | "xs" | "s" | "m" | "l" | "xl";
  /**
   * The component type.
   * @type 'h1' | 'h2' | "h3" | "h4"| "h5" | "h6"
   */
  component?: keyof Pick<
    JSX.IntrinsicElements,
    "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  >;
  /**
   * The heading title
   */
  title?: string;
  /**
   * The alignment of the heading.
   * @type "left" | "center" | "right"
   */
  hAlignContent?: "left" | "center" | "right";
  "data-test-id"?: string;
  /**
   * The text content of the Heading.
   * @type string
   * @required
   */
}

export function Heading(props: HeadingProps) {
  return (
    <BaseTypography
      role="heading"
      color={props.color}
      component={props.component ?? "span"}
      title={props.title}
      hAlignContent={props.hAlignContent}
      className={cx(classes.base, classes.size[props.size], props.className)}
      data-test-id={props["data-test-id"]}
    >
      {props.children}
    </BaseTypography>
  );
}
