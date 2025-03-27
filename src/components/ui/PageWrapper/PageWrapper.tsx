import { ReactNode, forwardRef } from 'react';
import { PageHeader } from '../PageHeader/PageHeader';
import classes from './PageWrapper.module.css';

interface PageWrapperProps {
  header?: ReactNode;
  children: ReactNode;
  className?: string;
}

export const PageWrapper = forwardRef((props: PageWrapperProps, ref) => {
  const { header, children, className } = props;

  return (
    <main className={`${classes.container} ${className ?? ''}`} ref={ref}>
      {header ? <PageHeader header={header} /> : null}
      {children}
    </main>
  );
});
