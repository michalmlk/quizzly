import { useContext, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mantine/core';
import { QuizContext } from '@/context';
import classes from '@/layouts/Main.layout.module.css';

export const Footer = () => {
  const { currentQuestion, questions, handleGoNext, handleGoBack, shuffleQuestions } = useContext(QuizContext);

  const navigate = useNavigate();
  const location = useLocation();
  const isQuiz = useMemo(() => location.pathname === '/quiz', [location.pathname]);



  const handleFinish = () => {
    shuffleQuestions();
    navigate('/summary');
  };

  const leftArea = useMemo(() => {
    return (
      isQuiz && (
        <Button onClick={handleGoBack} disabled={currentQuestion === 0} variant="outline">
          Back
        </Button>
      )
    );
  }, [currentQuestion, isQuiz]);

  const rightArea = useMemo(() => {
    if (!isQuiz) {
      return;
    }
    return currentQuestion === questions.length - 1 ? (
      <Button onClick={handleFinish} disabled={currentQuestion === 0} variant="outline">
        Finish
      </Button>
    ) : (
      <Button onClick={handleGoNext} disabled={currentQuestion === questions.length - 1}>
        Next
      </Button>
    );
  }, [currentQuestion, isQuiz]);

  const footerClassName = () => {
    if (leftArea && rightArea) {
      return classes.withTwoButtons;
    } else if (rightArea && !leftArea) {
      return classes.withOnlyRightArea;
    }
    return classes.withOnlyLeftArea;
  };

  return (
    <footer className={`${classes.footer} ${footerClassName()}`}>
      {leftArea} {rightArea}
    </footer>
  );
};
