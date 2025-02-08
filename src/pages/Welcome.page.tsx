import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button, ComboboxItem, Select, Text } from '@mantine/core';
import { QuizContext } from '@/context';
import { ApplicationMode } from '@/schema';
import classes from './Welcome.page.module.css';


export const WelcomePage = () => {
  const navigate = useNavigate();
  const { mode, handleSetApplicationMode } = useContext(QuizContext);
  const { t } = useTranslation();

  const [selectedMode, setSelectedMode] = useState<ApplicationMode>(mode);
  const handleModeChange = (value: string | null, _: ComboboxItem) => {
    handleSetApplicationMode(value as ApplicationMode);
    setSelectedMode(value as ApplicationMode);
  };

  return (
    <div className={classes.wrapper}>
      <Text size="xl">{t('welcome')}</Text>
      <div className={classes.actions}>
        <Select
          label={t("select mode label")}
          onChange={handleModeChange}
          value={selectedMode}
          data={[
            { value: 'learning', label: t("mode learning")},
            { value: 'challenge', label: t("mode challenge") },
          ]}
        />
        <Button onClick={() => navigate('/quiz')}>Start</Button>
      </div>
    </div>
  );
};
