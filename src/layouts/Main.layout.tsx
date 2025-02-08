import { IconWorld } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { Popover, UnstyledButton } from '@mantine/core';
import { Footer } from '@/components/Footer/Footer';
import classes from './Main.layout.module.css';

export const MainLayout = () => {
  const availableLanguages = ['en', 'pl'];
  const { i18n } = useTranslation();
  const handlePickLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <h1>Quizzly</h1>
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
