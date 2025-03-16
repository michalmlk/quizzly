import { useContext, useState } from 'react';
import { IconArrowRight } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Button, ComboboxItem, FileInput, Select, Text } from '@mantine/core';
import { CarouselComponent } from '@/components/ui/Carousel/Carousel';
import { PageWrapper } from '@/components/ui/PageWrapper/PageWrapper';
import { QuizContext } from '@/context';
import { animalQuestions, carQuestions, fashionQuestions, techQuestions } from '@/mocks/resources';
import { ApplicationMode } from '@/schema';
import classes from './Welcome.page.module.css';

export const WelcomePage = () => {
  const navigate = useNavigate();
  const { mode, handleSetApplicationMode, handleSetQuestions } = useContext(QuizContext);
  const { t } = useTranslation();

  const quizes = [carQuestions, animalQuestions, fashionQuestions, techQuestions];

  const [selectedMode, setSelectedMode] = useState<ApplicationMode>(mode);

  const handleModeChange = (value: string | null, _: ComboboxItem) => {
    handleSetApplicationMode(value as ApplicationMode);
    setSelectedMode(value as ApplicationMode);
  };

  const handleFileChange = (file: File | null) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target) {
        try {
          if (typeof e.target.result === 'string') {
            const content = e.target.result && JSON.parse(e.target.result);
            if (content) {
              // TODO add schema validator
              handleSetQuestions(content);
              reader.readAsText(file as Blob);
            }
          }
        } catch (error) {
          throw new Error('Invalid JSON format');
        }
      }
    };
  };

  return (
    <PageWrapper className={classes.wrapper}>
      <div className={classes.header}>
        <div className={classes.text}>
          <h1>{t('welcome')}</h1>
          <div className={classes.description} aria-hidden="false">
            <p>{t('welcome description')}</p>
            <Button>
              <Link className={classes.linkMore} to="/quizes">
                {t('explore quizes')}
              </Link>
            </Button>
          </div>
        </div>
        {/*<div className={classes.actions}>*/}
        {/*  <Select*/}
        {/*    label={t('select mode label')}*/}
        {/*    onChange={handleModeChange}*/}
        {/*    value={selectedMode}*/}
        {/*    data={[*/}
        {/*      { value: 'learning', label: t('mode learning') },*/}
        {/*      { value: 'challenge', label: t('mode challenge') },*/}
        {/*    ]}*/}
        {/*  />*/}
        {/*  <FileInput*/}
        {/*    label={t('schemaInput label')}*/}
        {/*    accept=".json"*/}
        {/*    onChange={handleFileChange}*/}
        {/*    placeholder={t('schemaInput label')}*/}
        {/*  />*/}
        {/*  <Button onClick={() => navigate('/quiz')}>{t('button start')}</Button>*/}
        {/*</div>*/}
      </div>
      <div className={classes.quizCarouselWrapper}>
        <h1>{t('most popular quizes')}</h1>
        <CarouselComponent data={quizes} />
      </div>
    </PageWrapper>
  );
};
