import { Route } from '../types/routes';

const COLUMN_NAMES: Record<keyof Route, string> = {
  uuid: 'UUID',
  address: 'Адрес',
  mask: 'Маска',
  gateway: 'Шлюз',
  interface: 'Интерфейс'
};

type Props = {
  column: keyof Route;
  onSort: (key: keyof Route) => void;
  sortConfig: { key: keyof Route; direction: 'asc' | 'desc' } | null;
};

export const TableHeader = ({ column, onSort, sortConfig }: Props) => {
  return (
    <th 
      onClick={() => onSort(column)}
      style={{ cursor: 'pointer' }}
    >
      {COLUMN_NAMES[column]}
      {sortConfig?.key === column && (
        sortConfig.direction === 'asc' ? ' ▲' : ' ▼'
      )}
    </th>
  );
};