import { Meta } from '@storybook/react';
import { TextButton } from '.';
import { DesignLibraryVersion, spaceUnit } from '@/utils';
import { Stack } from '../..';

export default {
  title: 'Foundations/Typography/TextButton',
  component: TextButton,
  parameters: {
    viewport: {
      defaultViewport: 'reset',
    },
    docs: {
      description: {
        component: `The <strong>TextButton</strong> typography based on <strong>Design Library [ ${DesignLibraryVersion['v1.0.0']} ]</strong>.`,
      },
    },
  },
} as Meta;

export const Default = () => {
  return (
    <Stack gap={spaceUnit * 3} column>
      <TextButton size="m">TextButton M</TextButton>
      <TextButton size="s">TextButton S</TextButton>
    </Stack>
  );
};
