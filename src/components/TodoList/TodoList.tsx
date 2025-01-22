import { ITodo } from '../../types/todo';
import { Todo } from '../Todo/Todo';
import styles from './TodoList.module.css';

interface ITodoListProps {
  todos: ITodo[];
  toggleTodo: (id: string) => void;
}

export const TodoList = ({ todos, toggleTodo }: ITodoListProps) => {
  return (
    <ul className={styles.todo_list}>
      {todos.map((todo) => (
        <Todo {...todo} key={todo.id} toggleTodo={toggleTodo}/>
      ))}
    </ul>
  );
};
