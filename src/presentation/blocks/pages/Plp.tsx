'use client';

import { Row } from '@/presentation/foundations/Row';
import { Space } from '@/presentation/foundations/Space';
import { useTranslation } from 'react-i18next';
import data from '@/data/data.json';
import { ProductsList } from '../ProductsList';
import { Heading } from '@/presentation/foundations/Typography';

export function Plp() {
  const { t } = useTranslation('');

  return (
    <Row variant="default" column className="flex" vAlignContent="top">
      <Heading size="xl">{t('plp.title')}</Heading>
      <Space size={10} />
      <ProductsList list={data} />
    </Row>
  );
}
