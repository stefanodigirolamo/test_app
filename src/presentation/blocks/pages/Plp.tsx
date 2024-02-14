'use client';

import { Row } from '@/presentation/foundations/Row';
import { Space } from '@/presentation/foundations/Space';
import { useTranslation } from 'react-i18next';
import data from '@/data/data.json';
import { ProductsList } from '../ProductsList';

export function Plp() {
  const { t } = useTranslation('');

  return (
    <Row variant="default" column className="flex" vAlignContent="top">
      <h1>{t('plp.title')}</h1>
      <Space size={10} />
      <ProductsList list={data} />
    </Row>
  );
}
