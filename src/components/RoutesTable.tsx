import { useState } from 'react';
import { Route } from '../types/routes';
import { sortRoutes } from '../utils/sortRoutes';
import { TableHeader } from './TableHeader';

type Props = {
  initialRoutes: Route[];
};

const SORTABLE_COLUMNS: (keyof Route)[] = ['address', 'gateway', 'interface', 'mask'];

export const RoutesTable = ({ initialRoutes }: Props) => {
  const [routes, setRoutes] = useState<Route[]>(initialRoutes);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Route;
    direction: 'asc' | 'desc';
  } | null>(null);

  const handleSort = (key: keyof Route) => {
    if (!SORTABLE_COLUMNS.includes(key)) return;
    
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig?.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
    setRoutes(sortRoutes(routes, key as 'address' | 'gateway' | 'interface' | 'mask', direction));
  };

  return (
    <table>
      <thead>
        <tr>
          {(Object.keys(initialRoutes[0]) as (keyof Route)[]).map((column) => (
            <TableHeader
              key={column}
              column={column}
              onSort={handleSort}
              sortConfig={sortConfig}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {routes.map((route) => (
          <tr key={route.uuid}>
            <td>{route.uuid}</td>
            <td>{route.address}</td>
            <td>{route.mask}</td>
            <td>{route.gateway}</td>
            <td>{route.interface}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};