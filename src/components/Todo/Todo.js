import * as React from 'react';
// import { MdClose } from 'react-icons-md';

import { useDispatch } from 'react-redux';
import { deleteTodo, toggleCompleted } from 'redux/todos/operations';

// import css from './Task.module.css';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTodo(todo.id));
  const handleToggle = () => dispatch(toggleCompleted(todo));

  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <p>{todo.text}</p>
      <button onClick={handleDelete}>{/* <MdClose size={24} /> */}Del</button>
    </div>
  );
};

export default Todo;
// <div className={css.wrapper}>
//     <input
//       type="checkbox"
//       className={css.checkbox}
//       checked={todo.completed}
//       onChange={handleToggle}
//     />
//     <p className={css.text}>{todo.text}</p>
//     <button className={css.btn} onClick={handleDelete}>
//       <MdClose size={24} />
//     </button>
//   </div>
