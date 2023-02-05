import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/todos/selectorsTodo';
import TodoEditor from 'components/TodoEditor';
import TodoList from 'components/TodoList';
// import { fetchTodos } from 'redux/todos/operations';

const TodoViews = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <h1>Your tasks</h1>
      <TodoEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <TodoList />
    </>
  );
};

export default TodoViews;
