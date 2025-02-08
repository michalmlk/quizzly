import { useContext } from 'react';
import { IconWorld } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation } from 'react-router-dom';
import { Popover, UnstyledButton } from '@mantine/core';
import { Footer } from '@/components/Footer/Footer';
import { Stats } from '@/components/Stats/Stats';
import { QuizContext } from '@/context';
import classes from './Main.layout.module.css';

export const MainLayout = () => {
  const availableLanguages = ['en', 'pl'];
  const { i18n } = useTranslation();
  const handlePickLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const { currentQuestion, questions } = useContext(QuizContext);
  const location = useLocation();

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        {location.pathname !== '/quiz' ? (
          <h1>Quizzly</h1>
        ) : (
          <Stats currentQuestion={currentQuestion} numOfQuestions={questions.length} />
        )}
        <Popover width={200} position="bottom" withArrow shadow="md">
          <Popover.Target>
            <UnstyledButton>
              <IconWorld />
            </UnstyledButton>
          </Popover.Target>
          <Popover.Dropdown className={classes.languageListDropdown}>
            <ul className={classes.languageList}>
              {availableLanguages.map((language) => (
                <li key={language}>
                  <UnstyledButton onClick={() => handlePickLanguage(language)}>
                    {language}
                  </UnstyledButton>
                </li>
              ))}
            </ul>
          </Popover.Dropdown>
        </Popover>
      </header>
      <section className={classes.main}>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};
