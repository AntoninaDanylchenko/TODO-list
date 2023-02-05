import Todo from 'components/Todo/Todo';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from 'redux/todos/operations';
import { selectVisibleTodos } from 'redux/todos/selectorsTodo';

const TodoList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const todos = useSelector(selectVisibleTodos);

  console.log(todos);
  return (
    todos && (
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <Todo todo={todo} />
          </li>
        ))}
      </ul>
    )
  );
};

export default TodoList;
