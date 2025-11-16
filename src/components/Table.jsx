"use client";
import React from 'react';

// Table Component
// Styled table with hover effects

// Variants: default, black, minimal

export function Table({
  columns = [],
  data = [],
  renderCell,
  highlightFirstRow = false,
  emptyState = null,
  variant = 'default',
  className = '',
}) {
  if (data.length === 0 && emptyState) {
    return <div className="flex items-center justify-center py-12">{emptyState}</div>;
  }

  const headerClass = variant === 'black'
    ? 'bg-gray-900 dark:bg-gray-950 border-cyan-700'
    : variant === 'minimal'
    ? 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600'
    : 'bg-gray-300 dark:bg-gray-900 border-gray-200 dark:border-gray-700';

  const hoverClass = variant === 'black'
    ? 'hover:bg-cyan-900/20'
    : 'hover:bg-blue-50 dark:hover:bg-blue-900/20';

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full">
        <thead>
          <tr className={`border-b-2 ${headerClass}`}>
            {columns.map((column, index) => (
              <th key={index} className={`px-4 py-3 text-center text-md font-bold ${variant === 'black' ? 'text-cyan-300' : 'text-gray-700 dark:text-gray-300'} uppercase tracking-wider`}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`
                border-b ${variant === 'black' ? 'border-cyan-900/30' : 'border-gray-200 dark:border-gray-700'}
                transition-all duration-200 ${hoverClass} text-center
                ${highlightFirstRow && rowIndex === 0 ? 'bg-gray-50 dark:bg-gray-800/50' : ''}
              `}
            >
              {renderCell ? renderCell(row, rowIndex) : Object.values(row).map((value, cellIndex) => (
                <TableCell key={cellIndex} variant={variant}>{value}</TableCell>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function TableCell({ children, variant = 'default', className = '' }) {
  const textClass = variant === 'black' ? 'text-cyan-100' : 'text-gray-900 dark:text-gray-100';
  return (
    <td className={`px-4 py-3 text-sm text-center ${textClass} ${className}`}>
      {children}
    </td>
  );
}
