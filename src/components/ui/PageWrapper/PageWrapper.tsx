import { ReactNode } from 'react';
import { PageHeader } from '../PageHeader/PageHeader';
import classes from './PageWrapper.module.css';

interface PageWrapperProps {
  header?: ReactNode;
  children: ReactNode;
  className?: string;
}

export const PageWrapper = (props: PageWrapperProps) => {
  const { header, children, className } = props;

  return (
    <div className={`${classes.container} ${className ?? ''}`}>
      {header ? <PageHeader header={header} /> : null}
      {children}
    </div>
  );
};
