import { Route } from '../types/routes';
import { ipToNumber } from './ipToNumber';

type SortableKey = 'address' | 'gateway' | 'interface' | 'mask'; // Поля, по которым возможна сортировка

export const sortRoutes = (
  routes: Route[],
  key: SortableKey,
  direction: 'asc' | 'desc'
): Route[] => {
  return [...routes].sort((a, b) => {
    let comparison = 0;

    if (key === 'address' || key === 'gateway' || key === 'mask') {
      comparison = ipToNumber(a[key]) - ipToNumber(b[key]);
    } else {
      comparison = a[key].localeCompare(b[key]);
    }

    return direction === 'asc' ? comparison : -comparison;
  });
};