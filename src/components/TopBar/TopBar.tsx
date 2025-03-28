import { LanguagePicker } from '@/components/LanguagePicker/LanguagePicker';
import { Stats } from '@/components/Stats/Stats';
import { CREATE_URL } from '@/config';
import { QuizContext } from '@/context';
import { useLocationState } from '@/hooks/useLocationState';
import { useMobileView } from '@/hooks/useMobileView';
import { Button } from '@mantine/core';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import classes from './TopBar.module.css';

export const TopBar = () => {
  const availableLanguages = [
    { label: 'EN', value: 'en' },
    { label: 'PL', value: 'pl' },
  ];

  const { t, i18n } = useTranslation();
  const handlePickLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const { currentQuestion, questionsData } = useContext(QuizContext);
  const { isMobileView } = useMobileView();
  const { isHomePage, isQuiz } = useLocationState();
  const navigate = useNavigate();

  return (
    <header className={classes.navigation}>
      {!isQuiz && <p>Quizzly</p>}
      {isQuiz && (
        <Stats currentQuestion={currentQuestion} numOfQuestions={questionsData.questions?.length} />
      )}
      <nav className={classes.links}>
        {!isMobileView && isHomePage && (
          <>
            <Button aria-label={t('button create')} size="md" onClick={() => navigate(CREATE_URL)}>
              {t('button create')}
            </Button>
            <Button variant="outline" aria-label={t('button add')} size="md">
              {t('button add')}
            </Button>
          </>
        )}
        <LanguagePicker
          availableLanguages={availableLanguages}
          handlePickLanguage={handlePickLanguage}
        />
      </nav>
    </header>
  );
};
