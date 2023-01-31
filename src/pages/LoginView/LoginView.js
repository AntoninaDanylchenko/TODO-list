import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operationsAuth';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    // const newUser = ;
    dispatch(logIn({ email, password }));
    reset();
  };
  const reset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginView;
