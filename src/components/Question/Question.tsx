import { useLanguage } from '@/hooks/useLanguage';
import { AnswerMap, ApplicationMode, Question } from '@/schema';
import { Card, Radio, Stack, Text } from '@mantine/core';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Question.module.css';

interface QuestionProps extends Question {
  currentQuestion: number;
  handleSaveAnswer: (id: number, option: string) => void;
  answers: AnswerMap;
  mode: ApplicationMode;
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
    mode,
  } = props;
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    if (answers[id]) {
      setSelectedOption(answers[id]);
    } else {
      setSelectedOption(undefined);
    }
  }, [currentQuestion, setSelectedOption]);

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

  const correctAnswerRef = useRef<HTMLParagraphElement>(null);

  const handleCheckAnswer = (option: string) => {
    setSelectedOption(option);
    handleSaveAnswer(id, option);

    setTimeout(() => {
      if (option !== correctAnswer) {
        correctAnswerRef.current?.focus();
      }
    }, 3000);
  };

  return (
    <Card
      shadow="sm"
      p="lg"
      radius="sm"
      withBorder
      className={classes.questionWrapper}
      aria-label={question[currentLanguage]}
      tabIndex={0}
    >
      <Text fw={700} aria-level={2}>
        {typeof question === 'object' ? question[currentLanguage] : question}
      </Text>
      <Card.Section py="md" px="lg" aria-label={t('quiz options')}>
        {Object.keys(possibleAnswers).length > 0 ? (
          <Radio.Group onChange={handleCheckAnswer} defaultValue={undefined}>
            <Stack>
              {Object.entries(possibleAnswers).map(([key, value]) => (
                <Radio.Card
                  key={key}
                  value={key}
                  className={`${classes.option} ${getChoiceClassName(key)}`}
                  disabled={mode !== 'learning' && !!selectedOption}
                >
                  <Radio.Indicator
                    checked={selectedOption === key}
                    aria-checked={selectedOption === key}
                    disabled={mode !== 'learning' && !!selectedOption}
                  />
                  {typeof value === 'object' ? value[currentLanguage] : value}
                </Radio.Card>
              ))}
            </Stack>
          </Radio.Group>
        ) : null}
        {selectedOption && selectedOption !== correctAnswer && mode === 'learning' && (
          <div role="textbox" className={classes.info} ref={correctAnswerRef} tabIndex={0}>
            <Text mt="lg" fs="lg">
              {t('correct answer')}
            </Text>
            <Text fw={700}>{possibleAnswers[`${correctAnswer}`][`${currentLanguage}`]}</Text>
          </div>
        )}
      </Card.Section>
    </Card>
  );
};
