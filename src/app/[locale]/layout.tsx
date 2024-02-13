import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import cx from 'classnames';
import { dir } from 'i18next';
import i18nConfig from '../../../i18nConfig';
import { Space } from '@/client/presentation/foundations/Space/Space';
import { Header } from '@/client/presentation/blocks/Header/Header';
import { Footer } from '@/client/presentation/blocks/Footer/Footer';
import { spaceUnit } from '@/client/presentation/foundations/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'test_app',
  description: 'nextjs ecommerce template app',
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={cx(inter.className, 'h-screen flex flex-col items-between justify-between')}>
        <Header data-test-id="header" />
        <Space size={spaceUnit * 10} />
        {children}
        <Footer data-test-id="footer" />
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return i18nConfig.locales.map((locale: string) => ({ locale }));
}
