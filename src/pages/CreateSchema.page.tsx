import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Switch, Text } from '@mantine/core';
import { SchemaEditor } from '@/components/Editor/Editor';
import { PageWrapper } from '@/components/ui/PageWrapper/PageWrapper';
import classes from './CreateSchema.page.module.css';

export const CreateSchemaPage = () => {
  const { t } = useTranslation();
  const [isExpertMode, setIsExpertMode] = useState(true);

  const header = useMemo(() => {
    return (
      <div className={classes.header}>
        <Text size="xl" fw={700}>
          {t(isExpertMode ? 'create schema page title' : 'create schema page title')}
        </Text>
        <div className={classes.actions}>
          <Switch
            onChange={(event) => setIsExpertMode(event.currentTarget.checked)}
            label={t('switch expert mode')}
            labelPosition="left"
            defaultChecked
          />
          <Button>{t('button save')}</Button>
        </div>
      </div>
    );
  }, [isExpertMode, t]);

  useEffect(() => {
    setIsExpertMode(isSchemaValid);
  }, [isExpertMode]);

  return (
    <PageWrapper header={header}>
      <SchemaEditor />
    </PageWrapper>
  );
};
