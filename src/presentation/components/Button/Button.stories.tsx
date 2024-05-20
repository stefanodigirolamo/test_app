import { Meta } from '@storybook/react';
import { variant } from './Button.css';
import { Box } from '@/presentation/foundations';
import { Button } from '.';
import { DesignLibraryVersion } from '@/utils/constants';
import { Icons } from '../Icons';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    viewport: {
      defaultViewport: 'small-desktop',
    },
    docs: {
      description: {
        component: `The <em>Button Component</em> based on <strong>Test App - Design Library [${DesignLibraryVersion['v1.0.0']}]</strong>.`,
      },
    },
  },
} as Meta;

const Variants = Object.keys(variant).map(v => () => (
  <div className={`flex gap-3 p-3 ${v.includes('inverted') ? 'bg-neutral-grey-dark' : ''}`}>
    <div className="flex flex-col gap-3">
      <Box>
        <Button id="story" variant={v as keyof typeof variant} size="l">
          Button L
        </Button>
      </Box>
      <Box>
        <Button disabled id="story" variant={v as keyof typeof variant} size="l">
          Button L
        </Button>
      </Box>
      <Box>
        <Button id="story" variant={v as keyof typeof variant} size="m">
          Button M
        </Button>
      </Box>
      <Box>
        <Button disabled id="story" variant={v as keyof typeof variant} size="m">
          Button M
        </Button>
      </Box>
    </div>
    <div className="flex flex-col gap-3">
      <Box>
        <Button id="story" variant={v as keyof typeof variant} afterIcon={Icons.Placeholder} size="l">
          Button L
        </Button>
      </Box>
      <Box>
        <Button disabled id="story" variant={v as keyof typeof variant} afterIcon={Icons.Placeholder} size="l">
          Button L
        </Button>
      </Box>
      <Box>
        <Button id="story" variant={v as keyof typeof variant} afterIcon={Icons.Placeholder} size="m">
          Button M
        </Button>
      </Box>

      <Box>
        <Button disabled id="story" variant={v as keyof typeof variant} afterIcon={Icons.Placeholder} size="m">
          Button M
        </Button>
      </Box>
    </div>
    <div className="flex flex-col gap-3">
      <Box>
        <Button id="story" variant={v as keyof typeof variant} beforeIcon={Icons.Placeholder} size="l">
          Button L
        </Button>
      </Box>
      <Box>
        <Button disabled id="story" variant={v as keyof typeof variant} beforeIcon={Icons.Placeholder} size="l">
          Button L
        </Button>
      </Box>
      <Box>
        <Button id="story" variant={v as keyof typeof variant} beforeIcon={Icons.Placeholder} size="m">
          Button M
        </Button>
      </Box>

      <Box>
        <Button disabled id="story" variant={v as keyof typeof variant} beforeIcon={Icons.Placeholder} size="m">
          Button M
        </Button>
      </Box>
    </div>
    <div className="flex flex-col gap-3">
      <Box>
        <Button
          id="story"
          variant={v as keyof typeof variant}
          afterIcon={Icons.Placeholder}
          beforeIcon={Icons.Placeholder}
          size="l"
        >
          Button L
        </Button>
      </Box>
      <Box>
        <Button
          disabled
          id="story"
          variant={v as keyof typeof variant}
          afterIcon={Icons.Placeholder}
          beforeIcon={Icons.Placeholder}
          size="l"
        >
          Button L
        </Button>
      </Box>
      <Box>
        <Button
          id="story"
          variant={v as keyof typeof variant}
          afterIcon={Icons.Placeholder}
          beforeIcon={Icons.Placeholder}
          size="m"
        >
          Button M
        </Button>
      </Box>

      <Box>
        <Button
          disabled
          id="story"
          variant={v as keyof typeof variant}
          afterIcon={Icons.Placeholder}
          beforeIcon={Icons.Placeholder}
          size="m"
        >
          Button M
        </Button>
      </Box>
    </div>
    <div className="flex flex-col gap-3">
      <Box>
        <Button id="story" variant={v as keyof typeof variant} size="l">
          <Icons.Placeholder id="story-button-icon-l" size="m" />
        </Button>
      </Box>
      <Box>
        <Button disabled id="story" variant={v as keyof typeof variant} size="l">
          <Icons.Placeholder id="story-button-icon-l" size="m" />
        </Button>
      </Box>
      <Box>
        <Button id="story" variant={v as keyof typeof variant} size="m">
          <Icons.Placeholder id="story-button-icon-m" size="m" />
        </Button>
      </Box>

      <Box>
        <Button disabled id="story" variant={v as keyof typeof variant} size="m">
          <Icons.Placeholder id="story-button-icon-m" size="m" />
        </Button>
      </Box>
    </div>
  </div>
));

export const Primary = Variants[0];
export const PrimaryInverted = Variants[1];
export const Secondary = Variants[2];
export const SecondaryInverted = Variants[3];
export const Ghost = Variants[4];
export const GhostInverted = Variants[5];
