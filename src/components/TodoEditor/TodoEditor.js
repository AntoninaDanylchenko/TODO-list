import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'redux/todos/operations';
import css from './TodoEditor.module.css';

const TodoEditor = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (text !== '') {
      dispatch(addTodo(text));
      setText('');
      return;
    }
    alert('Task cannot be empty. Enter some text!');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        name="text"
        value={text}
        onChange={e => setText(e.currentTarget.value)}
        className={css.input}
      />
      <button type="submit" className={css.button}>
        Add task
      </button>
    </form>
  );
};

export default TodoEditor;
