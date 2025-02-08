import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button, Text } from '@mantine/core';
import classes from './Welcome.page.module.css';

export const WelcomePage = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <div className={classes.wrapper}>
      <Text size="xl">{t('welcome')}</Text>
      <Button onClick={() => navigate('/quiz')}>Start</Button>
    </div>
  );
};
