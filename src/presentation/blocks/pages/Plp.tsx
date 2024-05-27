'use client';

import { Row } from '@/presentation/foundations/Row';
import { Space } from '@/presentation/foundations/Space';
import { useTranslation } from 'react-i18next';
import data from '@/data/data.json';
import { ProductsList } from '../ProductsList';
import { Heading } from '@/presentation/foundations/Typography';
import { spaceUnit } from '@/utils';

export function Plp() {
  const { t } = useTranslation('');

  return (
    <Row variant="default" column className="flex" vAlignContent="top" hAlignContent="center">
      <Space size={spaceUnit * 10} />
      <Heading size="xl" className="font-semibold">
        {t('plp.title')}
      </Heading>
      <ProductsList list={data} />
    </Row>
  );
}
