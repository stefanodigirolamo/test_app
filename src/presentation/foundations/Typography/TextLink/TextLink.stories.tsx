import { Meta } from '@storybook/react';
import { TextLink } from '.';
import { DesignLibraryVersion, spaceUnit } from '@/utils';
import { Stack } from '../..';

export default {
  title: 'Foundations/Typography/TextLink',
  component: TextLink,
  parameters: {
    viewport: {
      defaultViewport: 'reset',
    },
    docs: {
      description: {
        component: `The <strong>TextLink</strong> typography based on <strong>Design Library [ ${DesignLibraryVersion['v1.0.0']} ]</strong>.`,
      },
    },
  },
} as Meta;

export const Default = () => {
  return (
    <Stack gap={spaceUnit * 3} column>
      <TextLink size="m">TextLink M</TextLink>
      <TextLink size="s">TextLink S</TextLink>
    </Stack>
  );
};
