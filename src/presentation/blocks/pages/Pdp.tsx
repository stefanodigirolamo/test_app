'use client';

import { Row } from '@/presentation/foundations/Row';
import { Space } from '@/presentation/foundations/Space';
import { Button } from '@/presentation/components/Button';
import { useRouter, useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { Heading } from '@/presentation/foundations/Typography';

export function Pdp() {
  const router = useRouter();
  const { t } = useTranslation();
  const params = useParams();

  return (
    <Row variant="default" column className="flex" vAlignContent="top">
      <Heading size="s">{t('pdp.title') + ` ==> ${params.pdp[1]}`}</Heading>
      <Space size={10} />
      <Button
        id={'cta'}
        data-test-id={'cta'}
        variant="secondary"
        size="m"
        action={() => router.back()}
        className="w-fit sm:w-60 uppercase"
      >
        <h1>go back</h1>
      </Button>
    </Row>
  );
}
