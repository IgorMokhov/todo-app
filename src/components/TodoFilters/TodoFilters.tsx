import { Filters } from '../../types/filters';
import styles from './TodoFilters.module.css';

interface ITodoFiltersProps {
  activeFilter: Filters;
  setFilter: (filter: Filters) => void;
}

export const TodoFilters = ({ activeFilter, setFilter }: ITodoFiltersProps) => {
  return (
    <div className={styles.filters}>
      <button
        className={`${styles.filters_btn} ${
          activeFilter === 'all' ? styles.isActive : ''
        }`}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={`${styles.filters_btn} ${
          activeFilter === 'active' ? styles.isActive : ''
        }`}
        onClick={() => setFilter('active')}
      >
        Active
      </button>
      <button
        className={`${styles.filters_btn} ${
          activeFilter === 'completed' ? styles.isActive : ''
        }`}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
    </div>
  );
};
