import css from './HomeView.module.css';

const HomeView = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Task manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
};
export default HomeView;
