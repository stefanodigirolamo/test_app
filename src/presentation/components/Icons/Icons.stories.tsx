import { Meta } from '@storybook/react';
import { Icon } from './Icon';
import { IconPackage } from './IconPackage';
import { DesignLibraryVersion } from '@/utils';

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    viewport: {
      defaultViewport: 'reset',
    },
    docs: {
      description: {
        component: `The <strong>Icon</strong> component based on <strong>Design Library [ ${DesignLibraryVersion['v1.0.0']} ]</strong>.`,
      },
    },
  },
} as Meta;

export const SizeS = () => <IconPackage size="s" className="fill-black" />;

export const SizeM = () => <IconPackage size="m" className="fill-black" />;

export const SizeL = () => <IconPackage size="l" className="fill-black" />;
