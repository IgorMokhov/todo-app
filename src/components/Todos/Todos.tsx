import { useState } from 'react';
import styles from './Todos.module.css';
import { ITodo } from '../../types/todo';
import { TodoForm } from '../TodoForm/TodoForm';
import { TodoList } from '../TodoList/TodoList';

export const Todos = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { text, isCompleted: false }]);
  };

  return (
    <section className={styles.todos}>
      <h1 className={styles.todos_title}>todos</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </section>
  );
};
