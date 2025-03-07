import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button, Text } from '@mantine/core';
import { Language } from '@/hooks/useLanguage';
import { QuestionsData } from '@/schema';
import classes from './QuizItem.module.css';

type QuizItemProps = Omit<QuestionsData, 'questions'> & { currentLanguage: Language };

export const QuizItem = (props: QuizItemProps) => {
  const { title, imageUrl, currentLanguage, id } = props;
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className={classes.wrapper} style={{ backgroundImage: `url(${imageUrl})` }}>
      <Text fw={700} size="xl">
        {title[currentLanguage]}
      </Text>
      <Button onClick={() => navigate(`/overview/${id}`)}>{t('button select')}</Button>
    </div>
  );
};
