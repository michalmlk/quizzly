import { useContext } from 'react';
import { IconArrowDownRight, IconArrowUpRight } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { Button, Center, Group, Paper, RingProgress, Text } from '@mantine/core';
import { QuizContext } from '@/context';
import classes from './Summary.page.module.css';

const icons = {
  up: IconArrowUpRight,
  down: IconArrowDownRight,
};

export const Summary = () => {
  const { correctAnswers, questions, handleResetStats } = useContext(QuizContext);
  const navigate = useNavigate();

  const handleReset = () => {
    handleResetStats();
    navigate('/');
  };

  const correctionPercentage = correctAnswers / questions.length;

  const Icon = icons.up;

  return (
    <div>
      <Paper withBorder radius="md" className={classes.summaryStats}>
        <Group>
          <RingProgress
            size={80}
            roundCaps
            thickness={8}
            sections={[{ value: correctionPercentage, color: 'red' }]}
            label={
              <Center>
                <Icon size={20} stroke={1.5} />
              </Center>
            }
          />

          <div>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
              Correct answers
            </Text>
            <Text fw={700} size="xl">
              {correctAnswers}
            </Text>
          </div>
        </Group>
        <Button onClick={handleReset}>Try again</Button>
      </Paper>
    </div>
  );
};
