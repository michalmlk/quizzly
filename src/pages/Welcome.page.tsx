import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button, ComboboxItem, FileInput, Select, Text } from '@mantine/core';
import { QuizContext } from '@/context';
import { ApplicationMode } from '@/schema';
import classes from './Welcome.page.module.css';

export const WelcomePage = () => {
  const navigate = useNavigate();
  const { mode, handleSetApplicationMode, handleSetQuestions } = useContext(QuizContext);
  const { t } = useTranslation();

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
    <div className={classes.wrapper}>
      <Text size="xl">{t('welcome')}</Text>
      <div className={classes.actions}>
        <Select
          label={t('select mode label')}
          onChange={handleModeChange}
          value={selectedMode}
          data={[
            { value: 'learning', label: t('mode learning') },
            { value: 'challenge', label: t('mode challenge') },
          ]}
        />
        <FileInput
          label={t('schemaInput label')}
          accept=".json"
          onChange={handleFileChange}
          placeholder={t('schemaInput label')}
        />
        <Button onClick={() => navigate('/quiz')}>{t('button start')}</Button>
      </div>
    </div>
  );
};
