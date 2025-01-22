import { ITodo } from '../../types/todo';
import styles from './Todo.module.css';

interface ITodoProps extends ITodo {
  toggleTodo: (id: string) => void;
}

export const Todo = ({ text, isCompleted, id, toggleTodo }: ITodoProps) => {
  return (
    <li className={styles.todo}>
      <input
        className={styles.todo_checkbox}
        type="checkbox"
        checked={isCompleted}
        onChange={() => toggleTodo(id)}
      />
      <p
        className={`${styles.todo_text} ${
          isCompleted ? styles.isCompleted : ''
        }`}
      >
        {text}
      </p>
    </li>
  );
};
