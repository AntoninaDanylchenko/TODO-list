import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/todos/selectorsTodo';
import TodoEditor from 'components/TodoEditor';
import TodoList from 'components/TodoList';
import { Helmet } from 'react-helmet';
// import { fetchTodos } from 'redux/todos/operations';

const TodoViews = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <TodoEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <TodoList />
    </>
  );
};

export default TodoViews;
