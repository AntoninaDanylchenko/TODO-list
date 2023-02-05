import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operationsAuth';

const RegisterView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    reset();
  };
  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type="text"
          value={name}
          name="name"
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          value={email}
          name="email"
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          name="password"
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterView;
