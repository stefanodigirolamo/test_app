import { Meta } from '@storybook/react';
import { variant } from './Button.css';
import { Box, Stack, spaceUnit } from '@/presentation/foundations';
import { Button } from '.';
import { DesignLibraryVersion } from '@/utils/constants';
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

// const Variants = Object.keys(variant).map(v => () => (
//   <div className={`flex gap-3 p-3 ${v.includes('inverted') ? 'bg-neutral-grey-dark' : ''}`}>
//     <div className="flex flex-col gap-3">
//       <Box>
//         <Button id="story" variant={v as keyof typeof variant} size="l">
//           Button L
//         </Button>
//       </Box>
//       <Box>
//         <Button disabled id="story" variant={v as keyof typeof variant} size="l">
//           Button L
//         </Button>
//       </Box>
//       <Box>
//         <Button id="story" variant={v as keyof typeof variant} size="m">
//           Button M
//         </Button>
//       </Box>
//       <Box>
//         <Button disabled id="story" variant={v as keyof typeof variant} size="m">
//           Button M
//         </Button>
//       </Box>
//     </div>
//     <div className="flex flex-col gap-3">
//       <Box>
//         <Button id="story" variant={v as keyof typeof variant} afterIcon={Icons.ArrowRight} size="l">
//           Button L
//         </Button>
//       </Box>
//       <Box>
//         <Button disabled id="story" variant={v as keyof typeof variant} afterIcon={Icons.ArrowRight} size="l">
//           Button L
//         </Button>
//       </Box>
//       <Box>
//         <Button id="story" variant={v as keyof typeof variant} afterIcon={Icons.ArrowRight} size="m">
//           Button M
//         </Button>
//       </Box>
//       <Box>
//         <Button disabled id="story" variant={v as keyof typeof variant} afterIcon={Icons.ArrowRight} size="m">
//           Button M
//         </Button>
//       </Box>
//     </div>
//     <div className="flex flex-col gap-3">
//       <Box>
//         <Button id="story" variant={v as keyof typeof variant} beforeIcon={Icons.ArrowRight} size="l">
//           Button L
//         </Button>
//       </Box>
//       <Box>
//         <Button disabled id="story" variant={v as keyof typeof variant} beforeIcon={Icons.ArrowRight} size="l">
//           Button L
//         </Button>
//       </Box>
//       <Box>
//         <Button id="story" variant={v as keyof typeof variant} beforeIcon={Icons.ArrowRight} size="m">
//           Button M
//         </Button>
//       </Box>
//       <Box>
//         <Button disabled id="story" variant={v as keyof typeof variant} beforeIcon={Icons.ArrowRight} size="m">
//           Button M
//         </Button>
//       </Box>
//     </div>
//     <div className="flex flex-col gap-3">
//       <Box>
//         <Button
//           id="story"
//           variant={v as keyof typeof variant}
//           afterIcon={Icons.ArrowRight}
//           beforeIcon={Icons.ArrowRight}
//           size="l"
//         >
//           Button L
//         </Button>
//       </Box>
//       <Box>
//         <Button
//           disabled
//           id="story"
//           variant={v as keyof typeof variant}
//           afterIcon={Icons.ArrowRight}
//           beforeIcon={Icons.ArrowRight}
//           size="l"
//         >
//           Button L
//         </Button>
//       </Box>
//       <Box>
//         <Button
//           id="story"
//           variant={v as keyof typeof variant}
//           afterIcon={Icons.ArrowRight}
//           beforeIcon={Icons.ArrowRight}
//           size="m"
//         >
//           Button M
//         </Button>
//       </Box>
//       <Box>
//         <Button
//           disabled
//           id="story"
//           variant={v as keyof typeof variant}
//           afterIcon={Icons.ArrowRight}
//           beforeIcon={Icons.ArrowRight}
//           size="m"
//         >
//           Button M
//         </Button>
//       </Box>
//     </div>
//     <div className="flex flex-col gap-3">
//       <Box>
//         <Button id="story" variant={v as keyof typeof variant} size="l">
//           <Icons.ArrowRight id="story-button-icon-l" size="m" />
//         </Button>
//       </Box>
//       <Box>
//         <Button disabled id="story" variant={v as keyof typeof variant} size="l">
//           <Icons.Placeholder id="story-button-icon-l" size="m" />
//         </Button>
//       </Box>
//       <Box>
//         <Button id="story" variant={v as keyof typeof variant} size="m">
//           <Icons.Placeholder id="story-button-icon-m" size="m" />
//         </Button>
//       </Box>

//       <Box>
//         <Button disabled id="story" variant={v as keyof typeof variant} size="m">
//           <Icons.Placeholder id="story-button-icon-m" size="m" />
//         </Button>
//       </Box>
//     </div>
//   </div>
// ));

// export const Primary = Variants[0];
// export const Secondary = Variants[1];
// export const Ghost = Variants[2];

export const Primary = () => {
  return (
    <Box column>
      <Stack gap={spaceUnit * 2}>
        <Box>
          <Button id="story" variant="primary" size="l">
            Button L
          </Button>
        </Box>
        <Box>
          <Button disabled id="story" variant="primary" size="l">
            Button L
          </Button>
        </Box>
        <Box>
          <Button id="story" variant="primary" size="l" beforeIcon={Icons.Check}>
            Button L
          </Button>
        </Box>
        <Box>
          <Button id="story" variant="primary" size="l" afterIcon={Icons.Check}>
            Button L
          </Button>
        </Box>
        <Box>
          <Button id="story" variant="primary" size="l">
            <Icons.Check id="placeholder" size="l" />
          </Button>
        </Box>
      </Stack>

      

      <Stack gap={spaceUnit * 2}>
        <Box>
          <Button id="story" variant="primary" size="m">
            Button M
          </Button>
        </Box>
        <Box>
          <Button disabled id="story" variant="primary" size="m">
            Button M
          </Button>
        </Box>
        <Box>
          <Button id="story" variant="primary" size="m" beforeIcon={Icons.Check}>
            Button M
          </Button>
        </Box>
        <Box>
          <Button id="story" variant="primary" size="m" afterIcon={Icons.Check}>
            Button M
          </Button>
        </Box>
        <Box>
          <Button id="story" variant="primary" size="m">
            <Icons.Check id="placeholder" size="m" />
          </Button>
        </Box>
      </Stack>

      {/* <Box>
        <Button id="story" variant="primary" size="m">
          Button M
        </Button>
      </Box>
      <Box>
        <Button disabled id="story" variant="primary" size="m">
          Button M
        </Button>
      </Box> */}
    </Box>
  );
};
