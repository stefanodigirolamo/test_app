import TranslationsProvider from '@/presentation/providers/TranslationsProvider';
import initTranslations from '@/app/i18n';
import { Plp } from '@/presentation/blocks/pages/Plp';

const i18nNamespaces = ['plp'];

export default async function ProductListPage({ params: { locale } }: any) {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
      <Plp />
    </TranslationsProvider>
  );
}
