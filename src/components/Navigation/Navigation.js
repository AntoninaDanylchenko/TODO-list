const { NavLink } = require('react-router-dom');

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/todos">Todo list</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
