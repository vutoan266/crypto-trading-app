import React, { useCallback, useMemo } from 'react';
import styles from './homeTable.module.scss';
import { useTable, useSortBy, Column } from 'react-table';
import { CoinType } from 'src/types';
import useHomeTableColumn from './useHomeTableColumn';
import {
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiArrowUnsorted,
} from 'react-icons/ti';
import Button from 'src/components/Common/Button';

const DEFAULT_SHOWING_NUMBER = 10;
const STEP_SHOWING_NUMBER = 10;
interface HomePageProps {
  data: CoinType[];
}

const HomeTable: React.FC<HomePageProps> = (props: HomePageProps) => {
  const { data } = props;
  const [showingNumber, setShowingNumber] = React.useState(
    DEFAULT_SHOWING_NUMBER,
  );
  const columns = useHomeTableColumn();

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns: columns,
        data: data || [],
      },
      useSortBy,
    );

  const handleLoadMore = useCallback(() => {
    setShowingNumber(prev => prev + STEP_SHOWING_NUMBER);
  }, []);

  const { showingRows, hasMore } = useMemo(() => {
    return {
      showingRows: rows.slice(0, showingNumber),
      hasMore: showingNumber < rows.length,
    };
  }, [showingNumber, rows]);

  return (
    <div className={styles.homeTable}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <TiArrowSortedDown />
                      ) : (
                        <TiArrowSortedUp />
                      )
                    ) : column.canSort ? (
                      <TiArrowUnsorted />
                    ) : null}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {showingRows.map((row, i) => {
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
      {hasMore && (
        <Button className={styles.loadMoreBtn} onClick={handleLoadMore}>
          See more
        </Button>
      )}
    </div>
  );
};

export default HomeTable;
