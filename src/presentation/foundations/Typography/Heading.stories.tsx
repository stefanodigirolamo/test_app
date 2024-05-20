import { Meta } from '@storybook/react';
import { Heading, HeadingProps } from './Heading';
import { DesignLibraryVersion } from '@/utils/constants';
import { Box } from '..';

export default {
  title: 'Foundations/Typography/Heading',
  component: Heading,
  parameters: {
    viewport: {
      defaultViewport: 'small-desktop',
    },
    docs: {
      description: {
        component: `The <em>Heading foundation</em> based on <strong>Test App - Design Library [${DesignLibraryVersion['v1.0.0']}]</strong>.`,
      },
    },
  },
} as Meta;

export const Default = (args: HeadingProps) => {
  const { children, ...rest } = args;
  return (
    <Box column>
      <Heading size="xl">Heading XL</Heading>
      <Heading size="l">Heading L</Heading>
      <Heading size="m">Heading M</Heading>
      <Heading size="s">Heading S</Heading>
      <Heading size="xs">Heading XS</Heading>
      <Heading size="xxs">Heading XXS</Heading>
    </Box>
  );
};
