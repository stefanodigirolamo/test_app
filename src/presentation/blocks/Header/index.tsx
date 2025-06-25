'use client';

import cx from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Row } from '@/presentation/foundations';
import { Selector } from '@/presentation/blocks';
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
    <Row
      data-test-id={props['data-test-id'] + '-desktop'}
      variant="default"
      vAlignContent="center"
      className={cx('border-b-[2px] border-black py-3 justify-between')}
      classNameOuter="w-full"
    >
      <Link data-test-id="header-default-logo-desktop" prefetch={false} href="/" passHref>
        <Image
          className="relative"
          src="/next.svg"
          alt="Next.js Logo"
          width={120}
          height={25}
          priority
        />
      </Link>
      <Selector />
    </Row>
  );
}

function HeaderDefaultMobile(props: HeaderProps) {
  return (
      <Row
        data-test-id={props['data-test-id'] + '-mobile'}
        variant="default"
        vAlignContent="center"
        className={cx('border-b-[2px] border-black py-1.5 justify-between')}
        classNameOuter="w-full"
      >
        <Link data-test-id="header-default-logo-mobile" href="/">
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={120}
            height={25}
            priority
          />
        </Link>
        <Selector />
      </Row>
  );
}
