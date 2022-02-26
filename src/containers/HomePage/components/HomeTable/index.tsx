import React from 'react';
import styles from './homeTable.module.scss';
import { useTable, useSortBy } from 'react-table';
import { CoinType } from 'src/types';

const data: CoinType[] = [
  {
    name: 'hi',
    price: 1000,
  },
  {
    name: 'aa',
    price: 1000,
  },
];

const HomeTable: React.FC = props => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns: [
          {
            Header: 'Coin Name',
            accessor: (row: CoinType) => row.name,
          },
          {
            Header: 'Price',
            accessor: 'price',
          },
          {
            Header: 'Action',
            accessor: () => 'hihi',
          },
        ],
        data: data,
      },
      useSortBy,
    );

  return (
    <div className={styles.homeTable}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HomeTable;
