import { Footer } from '@/components/Footer/Footer';
import { TopBar } from '@/components/TopBar/TopBar';
import { Outlet } from 'react-router-dom';
import classes from './Main.layout.module.css';

export const MainLayout = () => {
  return (
    <div className={classes.root}>
      <TopBar />
      <main className={classes.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
