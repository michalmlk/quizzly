import { useCallback, useEffect, useState } from 'react';
import { Card, Radio, Stack, Text } from '@mantine/core';
import { AnswerMap, Question } from '@/schema';
import classes from './Question.module.css';

interface QuestionProps extends Question {
  currentQuestion: number;
  handleSaveAnswer: (id: number, option: string) => void;
  answers: AnswerMap;
}

export const QuestionComponent = (props: QuestionProps) => {
  const {
    question,
    possibleAnswers,
    correctAnswer,
    currentQuestion,
    id,
    answers,
    handleSaveAnswer,
  } = props;
  const [selectedOption, setSelectedOption] = useState<string | undefined>();

  useEffect(() => {
    if (answers[id]) {
      setSelectedOption(answers[id]);
    } else {
      setSelectedOption(undefined);
    }
  }, [currentQuestion, setSelectedOption]);

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
    [selectedOption, currentQuestion]
  );

  const handleCheckAnswer = (option: string) => {
    setSelectedOption(option);
    handleSaveAnswer(id, option);
  };

  return (
    <Card shadow="sm" p="lg" radius="sm" withBorder miw={360}>
      <Text fw={700}>{typeof question === 'object' ? question[lang] : question}</Text>
      <Card.Section py="md" px="lg">
        {Object.keys(possibleAnswers).length > 0 ? (
          <Radio.Group onChange={handleCheckAnswer} defaultValue={undefined}>
            <Stack>
              {Object.entries(possibleAnswers).map(([key, value]) => (
                <Radio.Card value={key} className={`${classes.option} ${getChoiceClassName(key)}`}>
                  <Radio.Indicator checked={selectedOption === key} />
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
