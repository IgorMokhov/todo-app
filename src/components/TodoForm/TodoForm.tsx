import { useState } from 'react';
import styles from './TodoForm.module.css';

interface ITodoFormProps {
  addTodo: (text: string) => void;
}

export const TodoForm = ({ addTodo }: ITodoFormProps) => {
  const [text, setText] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text.trim()) {
      addTodo(text.trim());
      setText('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
      />
    </form>
  );
};
