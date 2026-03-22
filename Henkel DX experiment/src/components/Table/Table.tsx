import React from 'react';
import './Table.css';

export interface Column<T> {
  key: keyof T | string;
  label: string;
  sortable?: boolean;
  width?: string;
  render?: (value: unknown, row: T) => React.ReactNode;
}

export interface TableProps<T extends Record<string, unknown>> {
  columns: Column<T>[];
  rows: T[];
  striped?: boolean;
  selectedIds?: string[];
  emptyMessage?: string;
  className?: string;
}

export function Table<T extends Record<string, unknown>>({
  columns,
  rows,
  striped = true,
  emptyMessage = 'No data available',
  className = '',
}: TableProps<T>) {
  return (
    <div className={`table-wrapper ${className}`.trim()}>
      <table className="table" role="grid">
        <thead className="table__head">
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className={`table__th${col.sortable ? ' table__th--sortable' : ''}`}
                style={col.width ? { width: col.width } : undefined}
                scope="col"
              >
                {col.label}
                {col.sortable && <span className="table__sort-icon" aria-hidden="true">↕</span>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="table__empty">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`table__row${striped && rowIndex % 2 !== 0 ? ' table__row--striped' : ''}`}
              >
                {columns.map((col) => {
                  const value = row[col.key as keyof T];
                  return (
                    <td key={String(col.key)} className="table__td">
                      {col.render ? col.render(value, row) : String(value ?? '—')}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
