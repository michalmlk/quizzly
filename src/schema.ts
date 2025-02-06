export interface Question {
  id: number;
  question: string | Record<string, string>;
  possibleAnswers: Record<string, string | number | Record<string, string>>;
  correctAnswer: string;
}

export type AnswerMap = Record<number, string>;

export const huntingQuestions: Question[] = [
  {
    id: 1,
    question: 'Jaki jest okres polowań na jelenia byka?',
    possibleAnswers: {
      A: '21 sierpnia – 28 lutego',
      B: '1 września – 31 stycznia',
      C: '1 października – 15 lutego',
      D: 'Cały rok',
    },
    correctAnswer: 'A',
  },
  {
    id: 2,
    question: {
      pl: 'W jakim okresie można polować na dzika?',
      en: 'During which period can wild boars be hunted?',
    },
    possibleAnswers: {
      A: 'Cały rok',
      B: '1 kwietnia – 31 października',
      C: '1 maja – 31 stycznia',
      D: '15 sierpnia – 15 lutego',
    },
    correctAnswer: 'A',
  },
  {
    id: 3,
    question: 'Jaki jest okres polowań na sarnę rogacza?',
    possibleAnswers: {
      A: '1 maja – 30 września',
      B: '1 czerwca – 31 grudnia',
      C: '1 lipca – 31 stycznia',
      D: '15 sierpnia – 15 lutego',
    },
    correctAnswer: 'A',
  },
  {
    id: 4,
    question: {
      pl: 'Kiedy można polować na bażanta?',
      en: 'When can pheasants be hunted?',
    },
    possibleAnswers: {
      A: '1 września – 31 grudnia',
      B: '1 października – 28 lutego',
      C: '1 listopada – 28 lutego',
      D: 'Cały rok',
    },
    correctAnswer: 'C',
  },
  {
    id: 5,
    question: 'Jaki jest okres polowań na lisa?',
    possibleAnswers: {
      A: '1 czerwca – 31 grudnia',
      B: '1 września – 31 stycznia',
      C: '1 czerwca – 31 marca',
      D: 'Cały rok',
    },
    correctAnswer: 'D',
  },
];
