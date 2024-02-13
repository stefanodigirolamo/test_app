import TranslationsProvider from '@/client/presentation/providers/TranslationsProvider';
import initTranslations from '../i18n';
import { Hp } from '@/client/presentation/blocks/pages/Hp';

const i18nNamespaces = ['home'];

export default async function HomePage({ params: { locale } }: any) {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
      <Hp />
    </TranslationsProvider>
  );
}
