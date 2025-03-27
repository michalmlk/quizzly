import { PageWrapper } from '@/components/ui/PageWrapper/PageWrapper';
import { QuizContext } from '@/context';
import { Button, Center, Group, Paper, RingProgress, Text } from '@mantine/core';
import { IconArrowDownRight, IconArrowUpRight } from '@tabler/icons-react';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import classes from './Summary.page.module.css';

const icons = {
  up: IconArrowUpRight,
  down: IconArrowDownRight,
};

export const Summary = () => {
  const {
    getNumberOfCorrectAnswers,
    questionsData: { questions },
    handleResetStats,
  } = useContext(QuizContext);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleReset = () => {
    handleResetStats();
    navigate('/');
  };

  const correctAnswers = getNumberOfCorrectAnswers();
  const correctionPercentage = (correctAnswers / questions.length) * 100;
  const Icon = icons.up;

  return (
    <PageWrapper className={classes.summaryContainer}>
      <Paper withBorder radius="md" className={classes.stats} tabIndex={0}>
        <Group>
          <RingProgress
            size={80}
            roundCaps
            thickness={8}
            sections={[{ value: correctionPercentage, color: 'green' }]}
            tabIndex={0}
            role="progressbar"
            aria-valuenow={correctionPercentage}
            aria-label={`${t('correction percentage')} ${correctionPercentage}%`}
            label={
              <Center>
                <Icon size={20} stroke={1.5} />
              </Center>
            }
          />

          <div tabIndex={0}>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
              {t('correct answers')}
            </Text>
            <Text fw={700} size="xl">
              {correctAnswers}
            </Text>
          </div>
        </Group>
        <Button onClick={handleReset}>{t('button tryAgain')}</Button>
      </Paper>
    </PageWrapper>
  );
};
