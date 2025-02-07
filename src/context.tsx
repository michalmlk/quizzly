import { createContext, ReactNode, useState } from 'react';
import { AnswerMap, huntingQuestions, Question } from '@/schema';

interface QuizContextModel {
  handleGoNext: () => void;
  handleGoBack: () => void;
  handleResetStats: () => void;
  handleSaveAnswer: (id: number, option: string) => void;
  currentQuestion: number;
  getNumberOfCorrectAnswers: () => number;
  shuffleQuestions: () => void;
  questions: Question[];
  answers: AnswerMap;
}

export const QuizContext = createContext<QuizContextModel>({
  handleGoBack: () => {},
  handleGoNext: () => {},
  handleResetStats: () => {},
  handleSaveAnswer: (id: number, option: string) => {},
  getNumberOfCorrectAnswers: (): number => 0,
  shuffleQuestions: () => {},
  currentQuestion: 0,
  questions: [],
  answers: [],
});

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [questions, setQuestions] = useState<Question[]>(huntingQuestions);

  const handleResetStats = () => {
    setCurrQuestion(0);
    setAnswers({});
  };

  const shuffleQuestions = () => {
    const shuffled = questions
      .map((value) => ({ value, sortProperty: Math.random() }))
      .sort((a, b) => a.sortProperty - b.sortProperty)
      .map(({ value }) => value);

    setQuestions(shuffled);
  };

  const handleSaveAnswer = (id: number, selectedAnswer: string) => {
    setAnswers((prev) => ({ ...prev, [id]: selectedAnswer }));
  };

  const handleGoNext = () =>
    setCurrQuestion((prev) => (prev < huntingQuestions.length - 1 ? prev + 1 : prev));
  const handleGoBack = () => setCurrQuestion((prev) => (prev > 0 ? prev - 1 : prev));

  const getNumberOfCorrectAnswers = (): number =>
    questions.reduce((acc: number, question) => {
      if (question.id in answers && question.correctAnswer === answers[question.id]) {
        return acc + 1;
      }
      return acc;
    }, 0);

  return (
    <QuizContext.Provider
      value={{
        handleGoNext,
        handleGoBack,
        handleResetStats,
        currentQuestion: currQuestion,
        questions,
        answers,
        handleSaveAnswer,
        getNumberOfCorrectAnswers,
        shuffleQuestions,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
