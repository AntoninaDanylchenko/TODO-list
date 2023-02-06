import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import { useAuth } from 'hooks/useAuth';
import css from './AppBar.module.css';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.headerBar}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <hr />
    </header>
  );
};
export default AppBar;
