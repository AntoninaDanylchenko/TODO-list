import { useDispatch } from 'react-redux';
import { deleteTodo } from 'redux/todos/operations';

import css from './Todo.module.css';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTodo(todo.id));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{todo.text}</p>
      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
      </button>
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
