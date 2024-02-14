import { Children as ReactChildren, CSSProperties, Fragment, useEffect, useMemo } from 'react';
import { forwardRef } from 'react';
import { Children } from '@/presentation/foundations/utils';

export type ContainerProps = {
  'data-test-id'?: string;
  rows: number;
  cols: number;
  rowsGap?: number;
  colsGap?: number;
  className?: string;
  style?: CSSProperties;
  children: Children | Children[];
};

const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const errorMessage = 'invalid child type, all children should be <Grid.Item />';

  useEffect(() => {
    if (Array.isArray(props.children)) {
      const check = props.children.every((child: any) => child?.type?.render?.displayName == 'Grid.Item');
      if (!check) console.warn(errorMessage);
    }
  }, [props.children]);

  const cssStyle: CSSProperties = useMemo(
    () => ({
      display: 'grid',
      gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
      gridTemplateRows: `repeat(${props.rows}, 1fr)`,
      columnGap: props.colsGap || 0,
      rowGap: props.rowsGap || 0,
      ...props.style,
    }),
    [props.rows, props.rowsGap, props.cols, props.colsGap, props.style]
  );

  return (
    <div ref={ref} style={cssStyle} data-test-id={props['data-test-id']} className={props.className}>
      {ReactChildren.map(props.children, (item, index) => (
        <Fragment key={index}>{item}</Fragment>
      ))}
    </div>
  );
});

export type ItemProps = {
  'data-test-id'?: string;
  children: Children;
  colStart?: number;
  colEnd?: number;
  rowStart?: number;
  rowEnd?: number;
  justifySelf?: 'start' | 'end' | 'center' | 'stretch';
  alignSelf?: 'start' | 'end' | 'center' | 'stretch';
  className?: string;
  style?: CSSProperties;
};

const Item = forwardRef<HTMLDivElement, ItemProps>((props, ref) => {
  const cssStyle: CSSProperties = useMemo(
    () => ({
      gridColumnStart: props.colStart,
      gridColumnEnd: props.colEnd,
      gridRowStart: props.rowStart,
      gridRowEnd: props.rowEnd,
      justifySelf: props.justifySelf,
      alignSelf: props.alignSelf,
      ...props.style,
    }),
    [props.colStart, props.colEnd, props.rowStart, props.rowEnd, props.style]
  );

  return (
    <div ref={ref} className={props.className} style={cssStyle} data-test-id={props['data-test-id']}>
      {ReactChildren.map(props.children, (child, index) => (
        <Fragment key={index}>{child}</Fragment>
      ))}
    </div>
  );
});

Item.displayName = 'Grid.Item';

export const Grid = {
  Container,
  Item,
};
