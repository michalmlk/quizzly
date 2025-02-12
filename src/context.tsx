import { createContext, ReactNode, useState } from 'react';
import { AnswerMap, ApplicationMode, huntingQuestions, Question } from '@/schema';

interface QuizContextModel {
  handleGoNext: () => void;
  handleGoBack: () => void;
  handleResetStats: () => void;
  handleSaveAnswer: (id: number, option: string) => void;
  currentQuestion: number;
  getNumberOfCorrectAnswers: () => number;
  handleSetApplicationMode: (mode: ApplicationMode) => void;
  shuffleQuestions: () => void;
  questions: Question[];
  handleSetQuestions: (questions: Question[]) => void;
  answers: AnswerMap;
  mode: ApplicationMode;
}

export const QuizContext = createContext<QuizContextModel>({
  handleGoBack: () => {},
  handleGoNext: () => {},
  handleResetStats: () => {},
  handleSaveAnswer: (id: number, option: string) => {},
  getNumberOfCorrectAnswers: (): number => 0,
  shuffleQuestions: () => {},
  handleSetApplicationMode: (mode: ApplicationMode) => {},
  handleSetQuestions: (questions: Question[]) => {},
  currentQuestion: 0,
  questions: [],
  answers: [],
  mode: 'learning',
});

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [questions, setQuestions] = useState<Question[]>(huntingQuestions);
  const [applicationMode, setApplicationMode] = useState<ApplicationMode>('learning');

  const handleResetStats = () => {
    setCurrQuestion(0);
    setAnswers({});
  };

  const handleSetApplicationMode = (mode: ApplicationMode) => setApplicationMode(mode);
  const handleSetQuestions = (questions: Question[]) => {
    setQuestions(questions);
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
        mode: applicationMode,
        questions,
        answers,
        handleSaveAnswer,
        getNumberOfCorrectAnswers,
        shuffleQuestions,
        handleSetApplicationMode,
        handleSetQuestions,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
