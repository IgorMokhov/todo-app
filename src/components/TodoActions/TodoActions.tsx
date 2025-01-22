import { Filters } from '../../types/filters';
import { ITodo } from '../../types/todo';
import { TodoFilters } from '../TodoFilters/TodoFilters';
import styles from './TodoActions.module.css';

interface ITodoActionsProps {
  todos: ITodo[];
  activeFilter: Filters;
  setFilter: (filter: Filters) => void;
  removeCompletedTodos: () => void;
}

export const TodoActions = ({
  todos,
  activeFilter,
  setFilter,
  removeCompletedTodos,
}: ITodoActionsProps) => {
  const activeTodosCount = todos.filter(
    (todo) => todo.isCompleted === false
  ).length;

  if (!todos.length) return <></>;

  return (
    <div className={styles.actions}>
      <span>{activeTodosCount} items left</span>
      <TodoFilters activeFilter={activeFilter} setFilter={setFilter} />
      <button
        className={styles.actions_clear_btn}
        onClick={() => removeCompletedTodos()}
      >
        Clear completed
      </button>
    </div>
  );
};
