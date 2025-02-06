import { createContext, ReactNode, useState } from 'react';
import { huntingQuestions, Question } from '@/schema';

interface QuizContextModel {
  correctAnswers: number;
  handleAddPoint: () => void;
  handleGoNext: () => void;
  handleGoBack: () => void;
  handleResetStats: () => void;
  currentQuestion: number;
  questions: Question[];
}

export const QuizContext = createContext<QuizContextModel>({
  correctAnswers: 0,
  handleAddPoint: () => {},
  handleGoBack: () => {},
  handleGoNext: () => {},
  handleResetStats: () => {},
  currentQuestion: 0,
  questions: [],
});

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);
  const [currQuestion, setCurrQuestion] = useState(0);

  const handleAddPoint = () => setNumberOfCorrectAnswers((prev) => prev + 1);
  const handleResetStats = (): void => {
    setCurrQuestion(0);
    setNumberOfCorrectAnswers(0);
  };

  const handleGoNext = () =>
    setCurrQuestion((prev) => (prev < huntingQuestions.length - 1 ? prev + 1 : prev));
  const handleGoBack = () => setCurrQuestion((prev) => (prev > 0 ? prev - 1 : prev));

  return (
    <QuizContext.Provider
      value={{
        handleGoNext,
        handleGoBack,
        handleAddPoint,
        handleResetStats,
        correctAnswers: numberOfCorrectAnswers,
        currentQuestion: currQuestion,
        questions: huntingQuestions,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
