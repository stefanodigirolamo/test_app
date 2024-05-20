import { Meta } from '@storybook/react';
import { TextButton, TextButtonProps } from './TextButton';
import { DesignLibraryVersion } from '@/utils/constants';

export default {
  title: 'Foundations/Typography/TextButton',
  component: TextButton,
  parameters: {
    viewport: {
      defaultViewport: 'small-desktop',
    },
    docs: {
      description: {
        component: `The <em>TextButton foundation</em> based on <strong>Test App - Design Library [${DesignLibraryVersion['v1.0.0']}]</strong>.`,
      },
    },
  },
} as Meta;

export const Default = (args: TextButtonProps) => {
  const { children, ...rest } = args;
  return (
    <div className="flex flex-col gap-3 p-5">
      <TextButton size="m">TextButton M</TextButton>
      <TextButton size="s">TextButton S</TextButton>

      <div className="p-5">
        <TextButton {...rest}>{args.children}</TextButton>
      </div>
    </div>
  );
};

Default.args = {
  children: 'Hello, please interact with this text using the storybook controls bellow',
  size: 'm',
};
