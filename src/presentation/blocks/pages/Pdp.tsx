'use client';

import { Row } from '@/presentation/foundations/Row';
import { Space } from '@/presentation/foundations/Space';
import { Button } from '@/presentation/components/Button';
import { useRouter, useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export function Pdp() {
  const router = useRouter();
  const { t } = useTranslation();
  const params = useParams();

  return (
    <Row variant="default" column className="flex" vAlignContent="top">
      <h1 className="fill-neutral-off-white">{t('pdp.title') + ` ==> ${params.pdp[1]}`}</h1>
      <Space size={10} />
      <Button
        id={'cta'}
        data-test-id={'cta'}
        variant="secondary-inverted"
        size="m"
        action={() => router.back()}
        className="w-fit sm:w-60 uppercase"
      >
        <h1>go back</h1>
      </Button>
    </Row>
  );
}
