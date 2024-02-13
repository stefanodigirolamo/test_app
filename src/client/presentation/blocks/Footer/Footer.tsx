'use client';
import Image from 'next/image';
import { Box } from '@/client/presentation/foundations/Box/Box';
import { Row } from '@/client/presentation/foundations/Row/Row';
import { Divider } from '@/client/presentation/components/Divider/Divider';
import { Space } from '@/client/presentation/foundations/Space/Space';
import { spaceUnit } from '@/client/presentation/foundations/utils';

export type FooterProps = {
  'data-test-id'?: string;
  /**
   * Optional classname.
   * @type string
   */
  className?: string;
};

export function Footer(props: FooterProps) {
  return (
    <Row data-test-id={props['data-test-id']} column variant="default">
      <Space size={spaceUnit * 10} />
      <Divider className="bg-neutral-100" thickness={2} />
      <Box grow className="justify-between py-3" vAlignContent="center">
        <p>FOOTER</p>
        <Image src="/vercel.svg" alt="Vercel Logo" className="dark:invert" width={100} height={24} priority />
      </Box>
    </Row>
  );
}
