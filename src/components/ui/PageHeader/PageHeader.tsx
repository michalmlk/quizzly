import { ReactNode } from 'react';
import { Text } from '@mantine/core';
import classes from './PageHeader.module.css';

interface PageHeaderProps {
  header: string | ReactNode;
}

export const PageHeader = ({ header }: PageHeaderProps) => {
  return (
    <header className={classes.wrapper}>
      {header ? (
        typeof header === 'string' ? (
          <Text size="xl" fw={700}>
            {header}
          </Text>
        ) : (
          <>{header}</>
        )
      ) : null}
    </header>
  );
};
