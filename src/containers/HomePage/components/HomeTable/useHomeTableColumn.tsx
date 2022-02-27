import React, { useMemo } from 'react';
import { Column } from 'react-table';
import Dropdown from 'src/components/Common/Dropdown';
import { CoinType } from 'src/types';

const useHomeTableColumn = (): Column<CoinType>[] => {
  return useMemo(
    () => [
      {
        Header: 'Coin Name',
        accessor: 'name',
        Cell: ({
          cell: {
            row: { original },
          },
        }) => (
          <span>
            <b>{original.name} </b>
            {original.symbol}
          </span>
        ),
      },
      {
        Header: 'Price',
        accessor: data => data.metrics.market_data.price_usd,
        Cell: ({
          cell: {
            row: { original },
          },
        }: {
          cell: { row: { original: CoinType } };
        }) => <b>${original.metrics.market_data.price_usd?.toFixed(4)}</b>,
      },
      {
        Header: 'Action',
        accessor: () => (
          <Dropdown
            value=""
            options={[
              { label: 'Buy', value: 'BUY' },
              { label: 'Sell', value: 'SELL' },
            ]}
            onChange={() => null}
            placeholder="Buy/Sell"
          />
        ),
        disableSortBy: true,
      },
    ],
    [],
  );
};

export default useHomeTableColumn;
