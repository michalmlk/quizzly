import { Outlet } from 'react-router-dom';
import { Footer } from '@/components/Footer/Footer';
import { TopBar } from '@/components/TopBar/TopBar';
import classes from './Main.layout.module.css';

export const MainLayout = () => {
  return (
    <div className={classes.root}>
      <TopBar />
      <section className={classes.main}>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};
