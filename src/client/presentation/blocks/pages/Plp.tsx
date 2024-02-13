'use client';
import { Row } from '@/client/presentation/foundations/Row/Row';
import { Box } from '@/client/presentation/foundations/Box/Box';
import { Stack } from '@/client/presentation/foundations/Stack/Stack';
import { Space } from '@/client/presentation/foundations/Space/Space';
import { useTranslation } from 'react-i18next';

export function Plp() {
  const { t } = useTranslation('');
  return (
    <Row variant="default" column className="flex" vAlignContent="top">
      <h1>{t('plp.title')}</h1>
      <Space size={10} />
      <Stack gap={10} column>
        <Box grow className="bg-feedback-warning-medium" height={300} />
        <Box grow className="bg-feedback-success-medium" height={300} />
        <Box grow className="bg-brand-off-white" height={300} />
        <Box grow className="bg-feedback-warning-dark" height={300} />
        <Box grow className="bg-feedback-error-dark" height={300} />
      </Stack>
    </Row>
  );
}
