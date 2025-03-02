import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, ComboboxItem, Image, Select } from '@mantine/core';
import { PageHeader } from '@/components/ui/PageHeader/PageHeader';
import { PageWrapper } from '@/components/ui/PageWrapper/PageWrapper';
import { QuizContext } from '@/context';
import { useLanguage } from '@/hooks/useLanguage';
import { ApplicationMode } from '@/schema';
import classes from './Configuration.page.module.css';

export const ConfigurationPage = () => {
  const { id } = useParams();
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    if (id) {
      fetch(`/quiz/${id}`)
        .then((res) => res.json())
        .then((data) => {
          handleSetQuestions(data);
        });
    }
  }, []);

  const navigate = useNavigate();
  const { mode, handleSetApplicationMode, handleSetQuestions, questionsData } =
    useContext(QuizContext);

  const [selectedMode, setSelectedMode] = useState<ApplicationMode>(mode);

  const handleModeChange = (value: string | null, _: ComboboxItem) => {
    handleSetApplicationMode(value as ApplicationMode);
    setSelectedMode(value as ApplicationMode);
  };

  return (
    <PageWrapper>
      <PageHeader
        header={`${t('quiz overview page title')} ${questionsData?.title[currentLanguage ?? 'pl']}`}
      />
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <Image radius="sm" src={questionsData?.imageUrl} />
        </div>
        <div className={classes.configuration}>
          <Select
            label={t('select mode label')}
            onChange={handleModeChange}
            value={selectedMode}
            data={[
              { value: 'learning', label: t('mode learning') },
              { value: 'challenge', label: t('mode challenge') },
            ]}
          />
          <Button onClick={() => navigate('/quiz')}>{t('button start')}</Button>
        </div>
      </div>
    </PageWrapper>
  );
};
