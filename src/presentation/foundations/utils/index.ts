export type Children = React.ReactElement<unknown> | Array<Children> | boolean | null | undefined;

export type Override<O1, O2> = Pick<O1, Exclude<keyof O1, keyof O2>> & O2;

function warn(warning: string): void {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(warning); // eslint-disable-line no-console
  }
}

export const logger = {
  warn,
};

export const spaceUnit = 8;