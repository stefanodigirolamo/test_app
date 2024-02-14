import TranslationsProvider from '@/presentation/providers/TranslationsProvider';
import initTranslations from '@/app/i18n';
import { Pdp } from '@/presentation/blocks/pages/Pdp';

const i18nNamespaces = ['pdp'];

export default async function ProductDetailPage({ params: { locale } }: any) {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
      <Pdp />
    </TranslationsProvider>
  );
}
