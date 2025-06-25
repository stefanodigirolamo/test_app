'use client';

import cx from 'classnames';
import Image from 'next/image';
import { Box, Row } from '@/presentation/foundations';

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
      <Box
        className={cx('border-t-[2px] border-black py-3 justify-between', props.className)}
        grow
        vAlignContent="center"
      >
        <Image src="/vercel.svg" alt="Vercel Logo" className="dark:invert" width={100} height={24} priority />
      </Box>
    </Row>
  );
}
