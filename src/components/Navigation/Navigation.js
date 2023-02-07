import AuthNav from 'components/AuthNav';
import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const { isLoggedIn } = AuthNav();
  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {!isLoggedIn && (
        <NavLink className={css.link} to="/todos">
          Tasks
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
