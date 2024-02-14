'use client';

import i18nConfig from '../../../../i18nConfig';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

export function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);

    Cookies.set('NEXT_LOCALE', newLocale, { expires: expires, path: '/' });

    // redirect to the new locale path
    if (currentLocale === i18nConfig.defaultLocale) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
    }

    router.refresh();
  };

  return (
    <select onChange={handleChange} value={currentLocale} className='!bg-transparent'>
      <option value="it">Italian</option>
      <option value="en">English</option>
    </select>
  );
}
