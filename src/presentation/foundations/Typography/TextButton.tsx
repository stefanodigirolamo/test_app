import cx from "classnames";
import { AriaRole, ComponentProps } from "react";
import { BaseTypography } from "./BaseTypography";
import * as classes from "./TextButton.css";
import { Filter } from "../utils";

export interface TextButtonProps {
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
   * The font size of the TextLink.
   * @type "m" | "s";
   * @default "m"
   * @required
   */
  size: "m" | "s";
  /**
   * The component type.
   * @type 'span' | 'p' | 'label'
   * @default "span"
   */
  component?: keyof Pick<JSX.IntrinsicElements, "span" | "p">;
  /**
   * The TextLink role
   * @type 'link' | 'none'
   * @default "none"
   */
  role?: Filter<AriaRole, "link" | "presentation" | "none">;
}

export function TextButton(props: TextButtonProps) {
  return (
    <BaseTypography
      role={props.role ?? "presentation"}
      component={props.component ?? "span"}
      className={cx(classes.base, classes.size[props.size], props.className)}
      data-test-id={props["data-test-id"]}
      color={props.color}
    >
      {props.children}
    </BaseTypography>
  );
}
