import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshCurrentUser } from 'redux/auth/operationsAuth';
import { lazy } from 'react';

const HomeView = lazy(() => import('../pages/HomeView'));
const RegisterView = lazy(() => import('../pages/RegisterView'));
const LoginView = lazy(() => import('../pages/LoginView'));
const TodosView = lazy(() => import('../pages/TodosView'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <div className="Container">
      <AppBar />
      <Routes>
        <Route index path="/" element={HomeView} />
        <Route path="/register" element={RegisterView} />
        <Route path="/login" element={LoginView} />
        <Route path="/todos" element={TodosView} />
      </Routes>
    </div>
  );
};
