import { ITodo } from '../../types/todo';
import styles from './Todo.module.css';

interface ITodoProps extends ITodo {}

export const Todo = ({ text, isCompleted }: ITodoProps) => {
  return (
    <li className={styles.todo}>
      <input
        className={styles.todo_checkbox}
        type="checkbox"
        checked={isCompleted}
        onChange={() => {}}
      />
      <p className={styles.todo_text}>{text}</p>
    </li>
  );
};
