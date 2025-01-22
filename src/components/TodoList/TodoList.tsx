import { ITodo } from '../../types/todo';
import { Todo } from '../Todo/Todo';
import styles from './TodoList.module.css';

interface ITodoListProps {
  todos: ITodo[];
}

export const TodoList = ({ todos }: ITodoListProps) => {
  return (
    <ul className={styles.todo_list}>
      {todos.map((todo) => (
        <Todo {...todo} />
      ))}
    </ul>
  );
};
