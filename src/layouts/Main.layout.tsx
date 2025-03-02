import { useContext } from 'react';
import { IconWorld } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Button, Popover, UnstyledButton } from '@mantine/core';
import { Footer } from '@/components/Footer/Footer';
import { Stats } from '@/components/Stats/Stats';
import { QuizContext } from '@/context';
import classes from './Main.layout.module.css';

export const MainLayout = () => {
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

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        {location.pathname !== '/quiz' ? (
          <h1>Quizzly</h1>
        ) : (
          <Stats
            currentQuestion={currentQuestion}
            numOfQuestions={questionsData.questions?.length}
          />
        )}
        <div className={classes.links}>
          <Link to="/create">
            <Button>{t('button create')}</Button>
          </Link>
          <Popover width={200} position="bottom" withArrow shadow="md">
            <Popover.Target>
              <UnstyledButton>
                <IconWorld />
              </UnstyledButton>
            </Popover.Target>
            <Popover.Dropdown className={classes.languageListDropdown}>
              <ul className={classes.languageList}>
                {availableLanguages.map((language) => (
                  <li key={language.value}>
                    <UnstyledButton onClick={() => handlePickLanguage(language.value)}>
                      {language.label}
                    </UnstyledButton>
                  </li>
                ))}
              </ul>
            </Popover.Dropdown>
          </Popover>
        </div>
      </header>
      <section className={classes.main}>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};
