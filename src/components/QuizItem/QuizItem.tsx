import { QUIZ_OVERVIEW_URL } from '@/config';
import { Language } from '@/hooks/useLanguage';
import { QuestionsData } from '@/schema';
import { Button, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import classes from './QuizItem.module.css';

type QuizItemProps = Omit<QuestionsData, 'questions'> & { currentLanguage: Language };

export const QuizItem = (props: QuizItemProps) => {
  const { title, imageUrl, currentLanguage, id } = props;
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div
      className={classes.wrapper}
      style={{ backgroundImage: `url(${imageUrl})` }}
      aria-label={title[currentLanguage]}
    >
      <Text fw={700} size="xl">
        {title[currentLanguage]}
      </Text>
      <Button onClick={() => navigate(`${QUIZ_OVERVIEW_URL}/${id}`)}>{t('button select')}</Button>
    </div>
  );
};
