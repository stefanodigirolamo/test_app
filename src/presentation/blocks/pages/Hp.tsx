'use client';

import { Row } from '@/presentation/foundations/Row';
import { Space } from '@/presentation/foundations/Space';
import { Button } from '@/presentation/components/Button';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { Heading } from '@/presentation/foundations/Typography';

export function Hp() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <Row variant="default" column className="flex" vAlignContent="top">
      <Heading size="xl">{t('home.title')}</Heading>
      <Space size={10} />
      <Button
        id={'cta'}
        data-test-id={'cta'}
        variant="secondary-inverted"
        size="m"
        action={() => router.push('/plp')}
        className="w-fit sm:w-60 uppercase"
      >
        Go to plp
      </Button>
    </Row>
  );
}
