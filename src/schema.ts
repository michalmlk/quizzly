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
      A: '21 sierpnia – koniec lutego',
      B: '1 września – 31 stycznia',
      C: '1 października – 15 lutego',
      D: 'Cały rok',
    },
    correctAnswer: 'A',
  },
  {
    id: 2,
    question: 'Jaki jest okres polowań na jelenia łanie?',
    possibleAnswers: {
      A: '21 sierpnia – koniec lutego',
      B: '1 września – 15 stycznia',
      C: '1 października – 15 lutego',
      D: 'Cały rok',
    },
    correctAnswer: 'B',
  },
  {
    id: 3,
    question: 'Jaki jest okres polowań na cielęta jelenia?',
    possibleAnswers: {
      A: '21 sierpnia – koniec lutego',
      B: '1 września – koniec lutego',
      C: '1 października – 15 lutego',
      D: 'Cały rok',
    },
    correctAnswer: 'B',
  },
  {
    id: 4,
    question: 'Jaki jest okres polowań na byka daniela?',
    possibleAnswers: {
      A: '1 września – koniec lutego',
      B: '21 sierpnia – koniec lutego',
      C: '1 października – 15 lutego',
      D: 'Cały rok',
    },
    correctAnswer: 'A',
  },
  {
    id: 5,
    question: 'Jaki jest okres polowań na cielęta daniela?',
    possibleAnswers: {
      A: '1 września – koniec lutego',
      B: '21 sierpnia – koniec lutego',
      C: '1 października – 15 lutego',
      D: 'Cały rok',
    },
    correctAnswer: 'A',
  },
  {
    id: 6,
    question: 'Jaki jest okres polowań na łanie daniela?',
    possibleAnswers: {
      A: '1 września – koniec lutego',
      B: '21 sierpnia – koniec lutego',
      C: '1 września – 15 stycznia',
      D: 'Cały rok',
    },
    correctAnswer: 'C',
  },
  {
    id: 7,
    question: 'Jaki jest okres polowań na tryki muflona?',
    possibleAnswers: {
      A: '1 października – koniec lutego',
      B: '21 sierpnia – koniec lutego',
      C: '1 września – 15 stycznia',
      D: 'Cały rok',
    },
    correctAnswer: 'A',
  },
  {
    id: 8,
    question: 'Jaki jest okres polowań na owce muflona?',
    possibleAnswers: {
      A: '1 września – koniec lutego',
      B: '21 sierpnia – koniec lutego',
      C: '1 września – 15 stycznia',
      D: '1 października - 15 stycznia',
    },
    correctAnswer: 'D',
  },
  {
    id: 9,
    question: 'Jaki jest okres polowań na jagnięta muflona?',
    possibleAnswers: {
      A: '1 września – koniec lutego',
      B: '1 października – 15 stycznia',
      C: '1 września – 15 stycznia',
      D: 'Cały rok',
    },
    correctAnswer: 'B',
  },
  {
    id: 10,
    question: 'Jaki jest okres polowań na kozła sarny?',
    possibleAnswers: {
      A: '11 maja – 30 września',
      B: '1 października – 15 stycznia',
      C: '1 września – 15 stycznia',
      D: 'Cały rok',
    },
    correctAnswer: 'A',
  },
  {
    id: 11,
    question: 'Jaki jest okres polowań na koze sarny?',
    possibleAnswers: {
      A: '1 września – koniec lutego',
      B: '1 października – 15 stycznia',
      C: '1 września – 15 stycznia',
      D: 'Cały rok',
    },
    correctAnswer: 'B',
  },
  {
    id: 12,
    question: 'Jaki jest okres polowań na koźlęta sarny?',
    possibleAnswers: {
      A: '1 września – koniec lutego',
      B: '1 września – 15 stycznia',
      C: '1 października – 15 stycznia',
      D: 'Cały rok',
    },
    correctAnswer: 'C',
  },
  {
    id: 13,
    question: 'Jaki jest okres polowań na dzika?',
    possibleAnswers: {
      A: '1 września – koniec lutego',
      B: '1 września – 15 stycznia',
      C: '1 października – 15 stycznia',
      D: 'Cały rok',
    },
    correctAnswer: 'D',
  },
  {
    id: 14,
    question: 'Jaki jest okres polowań na borsuka?',
    possibleAnswers: {
      A: '1 września – koniec lutego (w obwodach, w których występuje głuszec, lub cietrzew - cały rok)',
      B: '1 września – 30 listopada (w obwodach, w których występuje głuszec, lub cietrzew - cały rok)',
      C: '1 października – 15 stycznia (w obwodach, w których występuje głuszec, lub cietrzew - cały rok)',
      D: 'Cały rok',
    },
    correctAnswer: 'B',
  },
  {
    id: 15,
    question: 'Jaki jest okres polowań na tchórze?',
    possibleAnswers: {
      A: '1 września – 31 marca (w obwodach, w których występuje głuszec, lub cietrzew - cały rok)',
      B: '1 września – 30 listopada (w obwodach, w których występuje głuszec, lub cietrzew - cały rok)',
      C: '1 października – 15 stycznia (w obwodach, w których występuje głuszec, lub cietrzew - cały rok)',
      D: 'Cały rok',
    },
    correctAnswer: 'A',
  },
  {
    id: 16,
    question: 'Jaki jest okres polowań na kuny?',
    possibleAnswers: {
      A: '1 września – koniec lutego (w obwodach, w których występuje głuszec, lub cietrzew - cały rok)',
      B: '1 września – 30 listopada (w obwodach, w których występuje głuszec, lub cietrzew - cały rok)',
      C: '1 września – 31 marca (w obwodach, w których występuje głuszec, lub cietrzew - cały rok)',
      D: 'Cały rok',
    },
    correctAnswer: 'C',
  },
  {
    id: 17,
    question: 'Jaki jest okres polowań na lisa?',
    possibleAnswers: {
      A: '1 września – 31 marca (w obwodach, w których występuje głuszec, lub cietrzew lub w obwodach, w których w ostatnich 2 latach kalend. prowadzono zasiedlenie bażanta, zająca lub kuropatwy - cały rok)',
      B: '1 września – 30 listopada (w obwodach, w których występuje głuszec, lub cietrzew lub w obwodach, w których w ostatnich 2 latach kalend. prowadzono zasiedlenie bażanta, zająca lub kuropatwy - cały rok)',
      C: 'Cały rok',
      D: '1 czerwca – 31 marca (w obwodach, w których występuje głuszec, lub cietrzew lub w obwodach, w których w ostatnich 2 latach kalend. prowadzono zasiedlenie bażanta, zająca lub kuropatwy - cały rok)',
    },
    correctAnswer: 'D',
  },
  {
    id: 18,
    question: 'Jaki jest okres polowań na szakala złocistego?',
    possibleAnswers: {
      A: '1 lipca  – koniec lutego (w obwodach, w których występuje głuszec, lub cietrzew lub w obwodach, w których w ostatnich 2 latach kalend. prowadzono zasiedlenie bażanta, zająca lub kuropatwy - cały rok)',
      B: '1 września – 15 stycznia (w obwodach, w których występuje głuszec, lub cietrzew lub w obwodach, w których w ostatnich 2 latach kalend. prowadzono zasiedlenie bażanta, zająca lub kuropatwy - cały rok)',
      C: '1 sierpnia – koniec lutego (w obwodach, w których występuje głuszec, lub cietrzew lub w obwodach, w których w ostatnich 2 latach kalend. prowadzono zasiedlenie bażanta, zająca lub kuropatwy - cały rok)',
      D: 'Cały rok',
    },
    correctAnswer: 'C',
  },
  {
    id: 19,
    question: 'Jaki jest okres polowań na norke amerykańską?',
    possibleAnswers: {
      A: '11 maja – 30 września',
      B: 'Cały rok',
      C: '1 września – 15 stycznia',
      D: '1 października – 15 stycznia',
    },
    correctAnswer: 'B',
  },
  {
    id: 20,
    question: 'Jaki jest okres polowań na zająca szaraka?',
    possibleAnswers: {
      A: '1 września – 31 stycznia (w drodze odłowu: 1 września 15 grudnia)',
      B: '1 października – 15 lutego (w drodze odłowu: 1 października - 31 stycznia)',
      C: '1 listopada – 31 grudnia (w drodze odłowu: 1 listopada - 15 stycznia)',
      D: 'Cały rok',
    },
    correctAnswer: 'C',
  },
  {
    id: 21,
    question: 'Jaki jest okres polowań na dzikiego królika?',
    possibleAnswers: {
      A: '1 listopada – 31 grudnia (w drodze odłowu: 1 listopada - 15 stycznia)',
      B: '1 września – 31 stycznia (w drodze odłowu: 1 września 15 grudnia)',
      C: '1 października – 15 lutego (w drodze odłowu: 1 października - 31 stycznia)',
      D: 'Cały rok',
    },
    correctAnswer: 'A',
  },
  {
    id: 22,
    question: 'Jaki jest okres polowań na jarząbka?',
    possibleAnswers: {
      A: '1 listopada – 31 grudnia',
      B: '1 września – 30 listopada',
      C: '1 października – 15 lutego',
      D: 'Cały rok',
    },
    correctAnswer: 'B',
  },
  {
    id: 23,
    question: 'Jaki jest okres polowań na słonke?',
    possibleAnswers: {
      A: '1 września – 21 grudnia',
      B: '1 września – 30 listopada',
      C: '1 października – 15 lutego',
      D: 'Cały rok',
    },
    correctAnswer: 'A',
  },
  {
    id: 24,
    question: 'Jaki jest okres polowań na koguta bażanta?',
    possibleAnswers: {
      A: '11 maja – 30 września',
      B: 'Cały rok',
      C: '1 września – 15 stycznia',
      D: '1 października – koniec lutego',
    },
    correctAnswer: 'D',
  },
  {
    id: 25,
    question: 'Jaki jest okres polowań na kure bażanta (OHZ)?',
    possibleAnswers: {
      A: '1 października – 31 stycznia',
      B: 'Cały rok',
      C: '1 września – 15 stycznia',
      D: '1 października – koniec lutego',
    },
    correctAnswer: 'A',
  },
  {
    id: 26,
    question: 'Jaki jest okres polowań na kuropatwe?',
    possibleAnswers: {
      A: '11 maja – 30 września (w drodze odłowu 11 maja - 15 stycznia)',
      B: 'Cały rok',
      C: '1 września – 21 października (w drodze odłowu 11 września - 15 stycznia)',
      D: '1 października – 15 stycznia (w drodze odłowu 11 października - 31 grudnia)',
    },
    correctAnswer: 'C',
  },
  {
    id: 27,
    question: 'Jaki jest okres polowań na kaczki (krzyżówki, cyraneczki, głowienki, czernice)?',
    possibleAnswers: {
      A: '1 września – 31 grudnia',
      B: '1 września – 30 listopada',
      C: '1 października – 15 lutego',
      D: 'Cały rok',
    },
    correctAnswer: 'A',
  },
  {
    id: 28,
    question: 'Jaki jest okres polowań na gołębia grzywacza?',
    possibleAnswers: {
      A: '1 października – 31 stycznia',
      B: 'Cały rok',
      C: '15 sierpnia – 31 listopada',
      D: '1 października – koniec lutego',
    },
    correctAnswer: 'C',
  },
  {
    id: 29,
    question: 'Jaki jest okres polowań na łyske?',
    possibleAnswers: {
      A: 'Cały rok',
      B: '1 października – koniec lutego',
      C: '15 sierpnia – 31 listopada',
      D: '1 września – 31 grudnia',
    },
    correctAnswer: 'D',
  },
  {
    id: 30,
    question: 'Jaki jest okres polowań na byka łosia?',
    possibleAnswers: {
      A: 'Cały rok',
      B: '1 października – koniec lutego',
      C: 'Pod całoroczną ochroną',
      D: '1 września – 31 grudnia',
    },
    correctAnswer: 'C',
  },
  {
    id: 31,
    question: 'Jaki jest okres polowań na łoszaka łosia?',
    possibleAnswers: {
      A: '1 października – koniec lutego',
      B: '1 września – 31 grudnia',
      C: 'Cały rok',
      D: 'Pod całoroczną ochroną',
    },
    correctAnswer: 'D',
  },
  {
    id: 32,
    question: 'Jaki jest okres polowań na klępe łosia?',
    possibleAnswers: {
      A: 'Pod całoroczną ochroną',
      B: 'Cały rok',
      C: '1 października – koniec lutego',
      D: '1 września – 31 grudnia',
    },
    correctAnswer: 'A',
  },
  {
    id: 33,
    question: 'Jaki jest okres polowań na jelenie sika?',
    possibleAnswers: {
      A: '1 października – 31 stycznia',
      B: 'Cały rok',
      C: '1 października – koniec lutego',
      D: '1 września – 15 stycznia',
    },
    correctAnswer: 'B',
  },
  {
    id: 34,
    question: 'Jaki jest okres polowań na jenoty?',
    possibleAnswers: {
      A: '1 września – 15 stycznia',
      B: 'Cały rok',
      C: '1 października – koniec lutego',
      D: '1 października – 31 stycznia',
    },
    correctAnswer: 'B',
  },
  {
    id: 35,
    question: 'Jaki jest okres polowań na szopy pracze?',
    possibleAnswers: {
      A: '1 października – 31 stycznia',
      B: '1 września – 15 stycznia',
      C: 'Cały rok',
      D: '1 października – koniec lutego',
    },
    correctAnswer: 'C',
  },
  {
    id: 36,
    question: 'Jaki jest okres polowań na piżmaki?',
    possibleAnswers: {
      A: 'Cały rok',
      B: '1 października – 31 stycznia',
      C: '1 września – 15 stycznia',
      D: '1 października – koniec lutego',
    },
    correctAnswer: 'A',
  },
  {
    id: 37,
    question: 'Jaki jest okres polowań na gęsi (zbożowe i białoczelne)?',
    possibleAnswers: {
      A: 'Cały rok',
      B: '1 października – 31 stycznia (na terenie woj. wlkp. dolnośl., lubuskiego, i zach. pom do 15 lutego)',
      C: '1 września – 21 grudnia (na terenie woj. wlkp. dolnośl., lubuskiego, i zach. pom do 31 stycznia)',
      D: '1 października – koniec lutego (na terenie woj. wlkp. dolnośl., lubuskiego, i zach. pom do 15 stycznia)',
    },
    correctAnswer: 'C',
  },
];
