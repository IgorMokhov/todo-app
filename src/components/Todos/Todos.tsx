import { useState } from 'react';
import { ITodo } from '../../types/todo';
import { TodoForm } from '../TodoForm/TodoForm';
import { TodoList } from '../TodoList/TodoList';
import { v4 as uuidv4 } from 'uuid';
import styles from './Todos.module.css';

export const Todos = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { text, isCompleted: false, id: uuidv4() }]);
  };

  console.log(todos);

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <section className={styles.todos}>
      <h1 className={styles.todos_title}>todos</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </section>
  );
};
