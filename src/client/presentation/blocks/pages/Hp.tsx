'use client';
import { Row } from '@/client/presentation/foundations/Row/Row';
import { Space } from '@/client/presentation/foundations/Space/Space';
import { Button } from '@/client/presentation/components/Button/Button';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export function Hp() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <Row variant="default" column className="flex" vAlignContent="top">
      <h1 className="fill-neutral-off-white">{t('home.title')}</h1>
      <Space size={10} />
      <Button
        id={'cta'}
        data-test-id={'cta'}
        variant="secondary-inverted"
        size="m"
        action={() => router.push('/plp')}
        className="w-fit sm:w-60 uppercase"
      >
        <h1>got to plp</h1>
      </Button>
    </Row>
  );
}
