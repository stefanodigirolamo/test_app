import { Meta } from '@storybook/react';
import { TextLink, TextLinkProps } from './TextLink';
import { DesignLibraryVersion } from '@/utils/constants';

export default {
  title: 'Foundations/Typography/TextLink',
  component: TextLink,
  parameters: {
    viewport: {
      defaultViewport: 'small-desktop',
    },
    docs: {
      description: {
        component: `The <em>TextLink foundation</em> based on <strong>Test App - Design Library [${DesignLibraryVersion['v1.0.0']}]</strong>.`,
      },
    },
  },
} as Meta;

export const Default = (args: TextLinkProps) => {
  const { children, ...rest } = args;
  return (
    <div className="flex flex-col gap-3 p-5">
      <TextLink size="m">TextLink M</TextLink>
      <TextLink size="s">TextLink S</TextLink>
      <TextLink size="xs">TextLink XS</TextLink>

      <div className="p-5">
        <TextLink {...rest}>{args.children}</TextLink>
      </div>
    </div>
  );
};

Default.args = {
  children: 'Hello, please interact with this text using the storybook controls bellow',
  size: 'm',
};
