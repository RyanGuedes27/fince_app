import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ReusableTableProps } from './types';

export function ReusableTable<T>({ columns, data, caption, footerData }: ReusableTableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T;
    direction: 'asc' | 'desc';
  } | null>(null);

  const sortedData = React.useMemo(() => {
    if (sortConfig !== null) {
      return [...data].sort((a, b) => {
        const valueA = a[sortConfig.key];
        const valueB = b[sortConfig.key];

        // Ordenação com base no tipo da coluna
        const columnType = columns.find(col => col.accessor === sortConfig.key)?.type;

        switch (columnType) {
          case 'Numeric':
            if (typeof valueA === 'number' && typeof valueB === 'number') {
              return sortConfig.direction === 'asc' ? valueA - valueB : valueB - valueA;
            }
            break;
          case 'Text':
            if (typeof valueA === 'string' && typeof valueB === 'string') {
              return sortConfig.direction === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
            }
            break;
          case 'Date':
            if (valueA instanceof Date && valueB instanceof Date) {
              return sortConfig.direction === 'asc'
                ? valueA.getTime() - valueB.getTime()
                : valueB.getTime() - valueA.getTime();
            }
            break;
          default:
            return 0;
        }

        return 0;
      });
    }
    return data;
  }, [data, sortConfig, columns]);

  const requestSort = (key: keyof T) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortIndicator = (key: keyof T) => {
    if (!sortConfig || sortConfig.key !== key) {
      return null;
    }
    return sortConfig.direction === 'asc' ? '▲' : '▼';
  };

  return (
    <Table className='w-full'>
      {caption && <TableCaption>{caption}</TableCaption>}
      <TableHeader>
        <TableRow>
          {columns.map(column => (
            <TableHead
              key={String(column.accessor)}
              onClick={() => requestSort(column.accessor)}
              className='cursor-pointer'
            >
              {column.header} {getSortIndicator(column.accessor)}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedData.length > 0 ? (
          sortedData.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map(column => {
                const cellValue = row[column.accessor];
                const formattedValue = column.format ? column.format(cellValue) : String(cellValue);

                // Estilização condicional para valores numéricos
                const cellStyle =
                  column.type === 'Numeric' && typeof cellValue === 'number'
                    ? cellValue >= 0
                      ? 'text-green-500'
                      : 'text-red-500'
                    : '';

                return (
                  <TableCell key={String(column.accessor)} className={cellStyle}>
                    {formattedValue}
                  </TableCell>
                );
              })}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className='text-center'>
              Nenhum valor cadastrado
            </TableCell>
          </TableRow>
        )}
      </TableBody>
      {footerData && (
        <TableFooter>
          <TableRow>
            <TableCell colSpan={columns.length}>{footerData}</TableCell>
          </TableRow>
        </TableFooter>
      )}
    </Table>
  );
}
