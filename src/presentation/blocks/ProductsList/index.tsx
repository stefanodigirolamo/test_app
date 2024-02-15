'use client';

import React, { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useResponsive } from '@/hooks/useResponsive';
import { Box, Row, Grid } from '@/presentation/foundations';
import { spaceUnit } from '@/presentation/foundations/utils';
import Image from 'next/image';

export interface ProductsListProps {
  'data-test-id'?: string;
  list: any[];
  color?: string;
}

export function ProductsList(props: ProductsListProps) {
  const { isSm, isMd } = useResponsive();
  const router = useRouter();

  const gridResponsive = useMemo(() => {
    switch (true) {
      case !isSm:
        return { cols: 1, rows: 6 };
      case !isMd:
        return { cols: 2, rows: 3 };
      default:
        return { cols: 3, rows: 2 };
    }
  }, [isMd, isSm]);

  return (
    <Box grow column>
      <Row variant="full" className="py-8" hAlignContent="center" data-test-id={props['data-test-id']}>
        <Grid.Container {...gridResponsive} colsGap={spaceUnit * 4} rowsGap={spaceUnit * 4}>
          {props.list.map((item, index) => (
            <Grid.Item key={index} alignSelf="center">
              <Box onClick={() => router.push(`/pdp/${item.title.replaceAll(' ', '-')}`)} width={300} height={300}>
                <Image src={item.url} alt="not found" width={300} height={300} priority />
              </Box>
            </Grid.Item>
          ))}
        </Grid.Container>
      </Row>
    </Box>
  );
}
