import { useCallback, useState } from 'react';
import { Card, Radio, Stack, Text } from '@mantine/core';
import { Question } from '@/schema';
import classes from './Question.module.css';

export const QuestionComponent = (props: Question) => {
  const { question, possibleAnswers, correctAnswer } = props;
  const [selectedOption, setSelectedOption] = useState<string>();

  const lang = 'pl';

  const getChoiceClassName = useCallback(
    (key: string): string => {
      if (selectedOption === key && key === correctAnswer) {
        return classes.correctAnswer;
      } else if (selectedOption === key && key !== correctAnswer) {
        return classes.incorrectAnswer;
      }
      return '';
    },
    [selectedOption]
  );

  const handleCheckAnswer = (option: string) => {
    setSelectedOption(option);
    if (option === correctAnswer) {
      setTimeout(() => {
        alert('great answer!');
      }, 500);
    }
  };

  return (
    <Card shadow="sm" p="lg" radius="sm" withBorder miw={360}>
      <Text fw={700}>{typeof question === 'object' ? question[lang] : question}</Text>
      <Card.Section py="md" px="lg">
        {Object.keys(possibleAnswers).length > 0 ? (
          <Radio.Group onChange={handleCheckAnswer}>
            <Stack>
              {Object.entries(possibleAnswers).map(([key, value]) => (
                <Radio.Card value={key} className={`${classes.option} ${getChoiceClassName(key)}`}>
                  <Radio.Indicator />
                  {typeof value === 'object' ? value[lang] : value}
                </Radio.Card>
              ))}
            </Stack>
          </Radio.Group>
        ) : null}
      </Card.Section>
    </Card>
  );
};
