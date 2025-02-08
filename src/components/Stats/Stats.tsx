import { useTranslation } from 'react-i18next';
import { Card, Progress, Text } from '@mantine/core';
import classes from './Stats.module.css';

interface StatsProps {
  currentQuestion: number;
  numOfQuestions: number;
}

export const Stats = ({ currentQuestion, numOfQuestions }: StatsProps) => {
  const percentage = ((currentQuestion + 1) / numOfQuestions) * 100;
  const { t } = useTranslation();
  return (
    <Card withBorder radius="sm" bg="var(--mantine-color-body)" className={classes.statsWrapper}>
      <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
        {t('question')}
      </Text>
      <Text fz="md" fw={500}>
        {currentQuestion + 1} / {numOfQuestions}
      </Text>
      <Progress value={percentage} mt="md" size="lg" radius="xl" className={classes.progressBar} />
    </Card>
  );
};
