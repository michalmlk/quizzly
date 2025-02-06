export interface Question {
  question: string | Record<string, string>;
  possibleAnswers: Record<string, string | number | Record<string, string>>;
  correctAnswer: string;
}

export const huntingQuestions: Question[] = [
  {
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
