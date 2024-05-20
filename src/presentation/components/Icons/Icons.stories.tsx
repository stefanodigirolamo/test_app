import { Meta } from '@storybook/react';
import { Icon } from './Icon';
import { IconPackage } from './IconPackage';
import { DesignLibraryVersion } from '@/utils/constants';

export default {
  title: 'Components/Icons',
  component: Icon,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'reset',
    },
    docs: {
      description: {
        component: `Component based on <strong>Test App - Design Library [${DesignLibraryVersion['v1.0.0']}]</strong>`,
      },
    },
  },
} as Meta;

export const SizeS = () => <IconPackage size="s" className="fill-base-900" />;

export const SizeM = () => <IconPackage size="m" className="fill-base-900" />;

export const SizeL = () => <IconPackage size="l" className="fill-base-900" />;
