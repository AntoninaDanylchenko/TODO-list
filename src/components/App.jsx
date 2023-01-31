import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar';
import HomeView from 'pages/HomeView';
import RegisterView from 'pages/RegisterView';
import LoginView from 'pages/LoginView';
import TodosView from 'pages/TodosView';

export const App = () => {
  return (
    <div className="Container">
      <AppBar />
      <Routes>
        <Route index path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/todos" element={<TodosView />} />
      </Routes>
    </div>
  );
};
