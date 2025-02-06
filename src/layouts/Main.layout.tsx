import { Outlet } from 'react-router-dom';
import { Footer } from '@/components/Footer/Footer';
import classes from './Main.layout.module.css';

export const MainLayout = () => {
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <h1>Quiz</h1>
      </header>
      <section className={classes.main}>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};
