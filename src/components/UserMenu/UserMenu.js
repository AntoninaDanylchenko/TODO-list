import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operationsAuth';
import { useAuth } from 'hooks/useAuth';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div className={css.wrapper}>
      <p>Welcome, {user.name}</p>
      <button
        type="button"
        className={css.username}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
