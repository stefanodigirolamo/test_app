'use client';

import cx from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Row } from '@/presentation/foundations';
import { LanguageSelector } from '@/presentation/blocks';
import { useResponsive } from '@/hooks/useResponsive';

export type HeaderProps = {
  'data-test-id'?: string;
  /**
   * Optional classname.
   * @type string
   */
  className?: string;
  /**
   * Header variants
   * @type "default" | "minimal";
   */
  ref?: any;
};

export function Header(props: HeaderProps) {
  const { isMd } = useResponsive();
  return !isMd ? <HeaderDefaultMobile {...props} /> : <HeaderDefaultDesktop {...props} />;
}

function HeaderDefaultDesktop(props: HeaderProps) {
  return (
    <Box
      data-test-id={props['data-test-id'] + '-desktop'}
      component="nav"
      hAlignContent="center"
      className={cx('bg-neutral-600 px-1.5 sm:px-0 fixed')}
      width="100%"
    >
      <Row
        variant="default"
        vAlignContent="center"
        className={cx('border-b-[2px] border-black py-3 justify-between')}
        classNameOuter="w-full"
      >
        <Link data-test-id="header-default-logo-desktop" prefetch={false} href="/" passHref>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={120}
            height={25}
            priority
          />
        </Link>
        <LanguageSelector />
      </Row>
    </Box>
  );
}

function HeaderDefaultMobile(props: HeaderProps) {
  return (
    <Box data-test-id={props['data-test-id'] + '-mobile'} component="nav" className={cx('bg-neutral-600 fixed')} width="100%">
      <Row
        variant="default"
        vAlignContent="center"
        className={cx('border-b-[2px] border-black py-1.5 justify-between')}
        classNameOuter="w-full"
      >
        <Link data-test-id="header-default-logo-mobile" href="/">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={120}
            height={25}
            priority
          />
        </Link>
        <LanguageSelector />
      </Row>
    </Box>
  );
}
