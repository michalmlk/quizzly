import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '@mantine/core';
import { QuizItem } from '@/components/QuizItem/QuizItem';
import { PageWrapper } from '@/components/ui/PageWrapper/PageWrapper';
import { useLanguage } from '@/hooks/useLanguage';
import { QuestionsData } from '@/schema';
import classes from './Quizes.page.module.css';

export const QuizesPage = () => {
  const { t } = useTranslation();
  const [quizes, setQuizes] = useState<QuestionsData[]>([]);
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    const fetchQuizes = async () => {
      fetch('/quizes')
        .then((data) => data.json())
        .then((data) => setQuizes(data));
    };
    fetchQuizes();
  }, []);

  return (
    <PageWrapper>
      <div className={classes.header}>
        <Text size="xl" fw={700}>
          {t('quizes page title')}
        </Text>
      </div>
      <div className={classes.wrapper}>
        <section className={classes.quizes}>
          {quizes.length > 0 &&
            quizes.map((quiz) => (
              <QuizItem
                id={quiz.id}
                key={quiz.id}
                title={quiz.title}
                imageUrl={quiz.imageUrl}
                currentLanguage={currentLanguage}
              />
            ))}
        </section>
      </div>
    </PageWrapper>
  );
};
