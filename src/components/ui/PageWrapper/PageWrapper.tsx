import { ReactNode, Ref, forwardRef } from 'react';
import { PageHeader } from '../PageHeader/PageHeader';
import classes from './PageWrapper.module.css';

interface PageWrapperProps {
  header?: ReactNode;
  children: ReactNode;
  className?: string;
  ref?: Ref<HTMLDivElement>;
}

export const PageWrapper = (props: PageWrapperProps) => {
  const { header, children, className, ref } = props;

  return (
    <div className={`${classes.container} ${className ?? ''}`} ref={ref}>
      {header ? <PageHeader header={header} /> : null}
      {children}
    </div>
  );
};
