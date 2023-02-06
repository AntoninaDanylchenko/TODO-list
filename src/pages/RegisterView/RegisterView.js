import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operationsAuth';
import css from './RegisterView.module.css';

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
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <form autoComplete="off" onSubmit={handleSubmit} className={css.form}>
        <label>
          Username
          <input
            type="text"
            value={name}
            name="name"
            onChange={e => setName(e.target.value)}
            className={css.label}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            name="email"
            onChange={e => setEmail(e.target.value)}
            className={css.label}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            name="password"
            onChange={e => setPassword(e.target.value)}
            className={css.label}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterView;
