import { useState } from 'react';
import { ITodo } from '../../types/todo';
import { TodoForm } from '../TodoForm/TodoForm';
import { TodoList } from '../TodoList/TodoList';
import { v4 as uuidv4 } from 'uuid';
import styles from './Todos.module.css';
import { TodoActions } from '../TodoActions/TodoActions';
import { Filters } from '../../types/filters';

export const Todos = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [activeFilter, setActiveFilter] = useState<Filters>('all');

  const addTodo = (text: string) => {
    setTodos([...todos, { text, isCompleted: false, id: uuidv4() }]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const setFilter = (filter: Filters) => {
    setActiveFilter(filter);
  };

  return (
    <section className={styles.todos}>
      <h1 className={styles.todos_title}>todos</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <TodoActions
        todos={todos}
        activeFilter={activeFilter}
        setFilter={setFilter}
      />
    </section>
  );
};
