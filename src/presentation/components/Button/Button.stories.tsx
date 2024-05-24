import { Meta } from '@storybook/react';
import { Box, Stack } from '@/presentation/foundations';
import { Button } from '.';
import { DesignLibraryVersion, spaceUnit } from '@/utils';
import { Icons } from '../Icons';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    viewport: {
      defaultViewport: 'reset',
    },
    docs: {
      description: {
        component: `The <strong>Button</strong> component based on <strong>Design Library [ ${DesignLibraryVersion['v1.0.0']} ]</strong>.`,
      },
    },
  },
} as Meta;

export const SizeM = () => {
  return (
    <Stack gap={spaceUnit * 2}>
      <Box>
        <Button id="story" size="m">
          Button M
        </Button>
      </Box>
      <Box>
        <Button disabled id="story" size="m">
          Button M
        </Button>
      </Box>
      <Box>
        <Button id="story" size="m" beforeIcon={Icons.Check}>
          Button M
        </Button>
      </Box>
      <Box>
        <Button id="story" size="m" afterIcon={Icons.Check}>
          Button M
        </Button>
      </Box>
      <Box>
        <Button id="story" size="m" beforeIcon={Icons.Check} afterIcon={Icons.Check}>
          Button M
        </Button>
      </Box>
      <Box>
        <Button id="story" size="m">
          <Icons.Check id="placeholder" size="m" />
        </Button>
      </Box>
    </Stack>
  );
};

export const SizeL = () => {
  return (
    <Stack gap={spaceUnit * 2}>
      <Box>
        <Button id="story" size="l">
          Button L
        </Button>
      </Box>
      <Box>
        <Button disabled id="story" size="l">
          Button L
        </Button>
      </Box>
      <Box>
        <Button id="story" size="l" beforeIcon={Icons.Check}>
          Button L
        </Button>
      </Box>
      <Box>
        <Button id="story" size="l" afterIcon={Icons.Check}>
          Button L
        </Button>
      </Box>
      <Box>
        <Button id="story" size="l" beforeIcon={Icons.Check} afterIcon={Icons.Check}>
          Button L
        </Button>
      </Box>
      <Box>
        <Button id="story" size="l">
          <Icons.Check id="placeholder" size="l" />
        </Button>
      </Box>
    </Stack>
  );
};
