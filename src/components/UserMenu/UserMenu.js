import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectorsAuth';
import { logOut } from 'redux/auth/operationsAuth';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
