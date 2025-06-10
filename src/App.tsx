import { RoutesTable } from './components/RoutesTable';
import { mockRoutes } from './data/mockRoutes';

export const App = () => {
  return (
    <div className="container">
      <h1>Таблица маршрутов</h1>
      <RoutesTable initialRoutes={mockRoutes} />
    </div>
  );
};