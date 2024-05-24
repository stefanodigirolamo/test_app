import { Meta } from '@storybook/react';
import { Body } from '.';
import { DesignLibraryVersion, spaceUnit } from '@/utils';
import { Stack } from '../..';

export default {
  title: 'Foundations/Typography/Body',
  component: Body,
  parameters: {
    viewport: {
      defaultViewport: 'reset',
    },
    docs: {
      description: {
        component: `The <strong>Body</strong> typography based on <strong>Design Library [ ${DesignLibraryVersion['v1.0.0']} ]</strong>.`,
      },
    },
  },
} as Meta;

export const Default = () => {
  return (
    <Stack gap={spaceUnit * 3} column>
      <Body size="l">Body L</Body>
      <Body size="m">Body M</Body>
      <Body size="s">Body S</Body>
    </Stack>
  );
};

export const Bold = () => {
  return (
    <Stack gap={spaceUnit * 3} column>
      <Body size="l" bold>
        Body L
      </Body>
      <Body size="m" bold>
        Body M
      </Body>
      <Body size="s" bold>
        Body S
      </Body>
    </Stack>
  );
};
