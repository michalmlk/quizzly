import { Stats } from '@/components/Stats/Stats';
import { QuizContext } from '@/context';
import { useMobileView } from '@/hooks/useMobileView';
import { Button, Popover, UnstyledButton } from '@mantine/core';
import { IconWorld } from '@tabler/icons-react';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  const { isMobileView } = useMobileView();

  return (
    <nav className={classes.navigation}>
      {location.pathname !== '/quiz' ? (
        <p>Quizzly</p>
      ) : (
        <Stats currentQuestion={currentQuestion} numOfQuestions={questionsData.questions?.length} />
      )}
      <nav className={classes.links}>
        {!isMobileView && (
          <>
            <Link to="/create">
              <Button aria-label={t('button create')} size="md">
                {t('button create')}
              </Button>
            </Link>
            <Button variant="outline" aria-label={t('button add')} size="md">
              {t('button add')}
            </Button>
          </>
        )}
        <Popover width={200} position="bottom" withArrow shadow="md">
          <Popover.Target>
            <UnstyledButton aria-label={t('choose language')} size="md">
              <IconWorld />
            </UnstyledButton>
          </Popover.Target>
          <Popover.Dropdown className={classes.languageListDropdown}>
            <ul className={classes.languageList}>
              {availableLanguages.map((language) => (
                <li key={language.value}>
                  <UnstyledButton
                    className={classes.languageListItem}
                    onClick={() => handlePickLanguage(language.value)}
                    aria-label={language.label}
                  >
                    {language.label}
                  </UnstyledButton>
                </li>
              ))}
            </ul>
          </Popover.Dropdown>
        </Popover>
      </nav>
    </nav>
  );
};
