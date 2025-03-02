import { createContext, ReactNode, useState } from 'react';
import { carQuestions } from '@/mocks/resources';
import { AnswerMap, ApplicationMode, QuestionsData } from '@/schema';

interface QuizContextModel {
  handleGoNext: () => void;
  handleGoBack: () => void;
  handleResetStats: () => void;
  handleSaveAnswer: (id: number, option: string) => void;
  currentQuestion: number;
  getNumberOfCorrectAnswers: () => number;
  handleSetApplicationMode: (mode: ApplicationMode) => void;
  shuffleQuestions: () => void;
  questionsData: QuestionsData;
  handleSetQuestions: (questions: QuestionsData) => void;
  answers: AnswerMap;
  mode: ApplicationMode;
  isSchemaValid: boolean;
  handleSetSchemaValidity: (schemaValidity: boolean) => void;
}

export const QuizContext = createContext<QuizContextModel>({
  handleGoBack: () => {},
  handleGoNext: () => {},
  handleResetStats: () => {},
  handleSaveAnswer: (id: number, option: string) => {},
  getNumberOfCorrectAnswers: (): number => 0,
  shuffleQuestions: () => {},
  handleSetApplicationMode: (mode: ApplicationMode) => {},
  handleSetQuestions: (questionsData: QuestionsData) => {},
  currentQuestion: 0,
  questionsData: {} as QuestionsData,
  answers: [],
  mode: 'learning',
  isSchemaValid: false,
  handleSetSchemaValidity: (schemaValidity: boolean) => {},
});

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [questionsData, setQuestionsData] = useState<QuestionsData>(carQuestions);
  const [applicationMode, setApplicationMode] = useState<ApplicationMode>('learning');
  const [isSchemaValid, setIsSchemaValid] = useState(false);

  const handleResetStats = () => {
    setCurrQuestion(0);
    setAnswers({});
  };

  const handleSetSchemaValidity = (schemaValidity: boolean) => {
    setIsSchemaValid(schemaValidity);
  };

  const handleSetApplicationMode = (mode: ApplicationMode) => setApplicationMode(mode);
  const handleSetQuestions = (data: QuestionsData) => {
    setQuestionsData(data);
  };

  const shuffleQuestions = () => {
    const shuffled = questionsData.questions
      .map((value) => ({ value, sortProperty: Math.random() }))
      .sort((a, b) => a.sortProperty - b.sortProperty)
      .map(({ value }) => value);

    setQuestionsData((prev) => ({
      ...prev,
      questions: shuffled,
    }));
  };

  const handleSaveAnswer = (id: number, selectedAnswer: string) => {
    setAnswers((prev) => ({ ...prev, [id]: selectedAnswer }));
  };

  const handleGoNext = () =>
    setCurrQuestion((prev) => (prev < questionsData.questions.length - 1 ? prev + 1 : prev));
  const handleGoBack = () => setCurrQuestion((prev) => (prev > 0 ? prev - 1 : prev));

  const getNumberOfCorrectAnswers = (): number =>
    questionsData.questions.reduce((acc: number, question) => {
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
        questionsData,
        answers,
        handleSaveAnswer,
        getNumberOfCorrectAnswers,
        shuffleQuestions,
        handleSetApplicationMode,
        handleSetQuestions,
        handleSetSchemaValidity,
        isSchemaValid,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
