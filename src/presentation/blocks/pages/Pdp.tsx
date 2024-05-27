'use client';

import { Row } from '@/presentation/foundations/Row';
import { Space } from '@/presentation/foundations/Space';
import { Button } from '@/presentation/components/Button';
import { useRouter, useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { Body, Heading } from '@/presentation/foundations/Typography';
import { spaceUnit } from '@/utils';
import { Stack } from '@/presentation/foundations';

export function Pdp() {
  const router = useRouter();
  const { t } = useTranslation();
  const params = useParams();

  return (
    <Row variant="default" column className="flex" vAlignContent="top" hAlignContent="center">
      <Stack column gap={spaceUnit * 5} hAlignContent="center">
        <Heading size="l" className="font-semibold">
          {t('pdp.title')}
        </Heading>
        <Body size="l">{params.pdp[1]}</Body>
      </Stack>
      <Space size={spaceUnit * 10} />
      <Button
        id={'cta'}
        data-test-id={'cta'}
        size="m"
        action={() => router.push('/plp')}
        className="w-fit sm:w-60 uppercase"
      >
        <h1>go back</h1>
      </Button>
    </Row>
  );
}
