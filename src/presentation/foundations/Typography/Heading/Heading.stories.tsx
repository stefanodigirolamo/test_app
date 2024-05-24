import { Meta } from '@storybook/react';
import { Heading } from '.';
import { DesignLibraryVersion, spaceUnit } from '@/utils';
import { Stack } from '../..';

export default {
  title: 'Foundations/Typography/Heading',
  component: Heading,
  parameters: {
    viewport: {
      defaultViewport: 'reset',
    },
    docs: {
      description: {
        component: `The <strong>Heading</strong> typography based on <strong>Design Library [ ${DesignLibraryVersion['v1.0.0']} ]</strong>.`,
      },
    },
  },
} as Meta;

export const Default = () => {
  return (
    <Stack gap={spaceUnit * 3} column>
      <Heading size="xl">Heading XL</Heading>
      <Heading size="l">Heading L</Heading>
      <Heading size="m">Heading M</Heading>
      <Heading size="s">Heading S</Heading>
    </Stack>
  );
};
