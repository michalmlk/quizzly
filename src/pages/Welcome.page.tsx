import { useNavigate } from 'react-router-dom';
import { Button, Text } from '@mantine/core';
import classes from './Welcome.page.module.css';

export const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.wrapper}>
      <Text size="xl">Welcome to quizzly</Text>
      <Button onClick={() => navigate('/quiz')}>Start</Button>
    </div>
  );
};
