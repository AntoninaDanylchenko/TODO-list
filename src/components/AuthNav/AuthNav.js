const { Link } = require('react-router-dom');

const AuthNav = () => {
  return (
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="login">Log In</Link>
      </li>
    </ul>
  );
};
export default AuthNav;
