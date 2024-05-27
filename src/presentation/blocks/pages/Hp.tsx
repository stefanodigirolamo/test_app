'use client';

import { Row } from '@/presentation/foundations/Row';
import { Space } from '@/presentation/foundations/Space';
import { Button } from '@/presentation/components/Button';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { Heading } from '@/presentation/foundations/Typography';
import { spaceUnit } from '@/utils';

export function Hp() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <Row variant="default" column className="flex" vAlignContent="top" hAlignContent="center">
      <Heading size="xl" className='font-semibold'>{t('home.title')}</Heading>
      <Space size={spaceUnit * 5} />
      <Button
        id={'cta'}
        data-test-id={'cta'}
        size="l"
        action={() => router.push('/plp')}
        className="w-fit sm:w-60 uppercase"
      >
        Go to plp
      </Button>
    </Row>
  );
}
