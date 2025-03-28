import { QuizItem } from '@/components/QuizItem/QuizItem';
import { PageWrapper } from '@/components/ui/PageWrapper/PageWrapper';
import { useLanguage } from '@/hooks/useLanguage';
import { QuestionsData } from '@/schema';
import { Autocomplete, ComboboxStringData } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Quizes.page.module.css';

export const QuizesPage = () => {
  const { t } = useTranslation();
  const [quizes, setQuizes] = useState<QuestionsData[]>([]);
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    const fetchQuizes = async () => {
      fetch('/quizes')
        .then((data) => data.json())
        .then((data) => {
          setQuizes(data);
          setFilteredQuizes(data);
        });
    };
    fetchQuizes();
  }, []);

  const [filteredQuizes, setFilteredQuizes] = useState<QuestionsData[]>(quizes);

  const handleSearchQuizes = (value: string) => {
    if (!value.length) {
      setFilteredQuizes(quizes);
      return;
    }

    const newQuizes = quizes.filter((quiz) =>
      quiz.title[currentLanguage]
        ? quiz.title[currentLanguage]?.toLowerCase().includes(value.toLowerCase())
        : false
    );
    setFilteredQuizes(newQuizes);
  };

  return (
    <PageWrapper>
      <div className={classes.header}>
        <h1>{t('quizes page title')}</h1>
        <Autocomplete
          className={classes.search}
          placeholder={t('search')}
          leftSection={<IconSearch size={16} stroke={1.5} />}
          data={quizes.map((quiz) => quiz.title[currentLanguage]) as ComboboxStringData}
          onChange={handleSearchQuizes}
          visibleFrom="xs"
        />
      </div>
      <div className={classes.wrapper}>
        <section className={classes.quizes}>
          {filteredQuizes.length > 0 &&
            filteredQuizes.map((quiz) => (
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
