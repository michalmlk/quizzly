import { useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@/components/Modal/Modal';
import { QuizContext } from '@/context';
import classes from '@/layouts/Main.layout.module.css';

export const Footer = () => {
  const {
    currentQuestion,
    questions,
    handleGoNext,
    handleGoBack,
    shuffleQuestions,
    handleResetStats,
  } = useContext(QuizContext);

  const [opened, { open, close }] = useDisclosure(false);

  const handleExit = () => {
    handleResetStats();
    navigate('/');
  };

  const navigate = useNavigate();
  const location = useLocation();
  const isQuiz = useMemo(() => location.pathname === '/quiz', [location.pathname]);

  const { t, i18n } = useTranslation();

  const handleFinish = () => {
    shuffleQuestions();
    navigate('/summary');
  };

  const leftArea = useMemo(() => {
    return (
      isQuiz && (
        <div className={classes.footerArea}>
          <Button onClick={open} className={classes.exitButton}>
            {t('button exit')}
          </Button>
          <Button onClick={handleGoBack} disabled={currentQuestion === 0} variant="outline">
            {t('button back')}
          </Button>
        </div>
      )
    );
  }, [currentQuestion, isQuiz, i18n.language]);

  const rightArea = useMemo(() => {
    if (!isQuiz) {
      return;
    }
    return currentQuestion === questions.length - 1 ? (
      <Button onClick={handleFinish} disabled={currentQuestion === 0} variant="outline">
        {t('button submit')}
      </Button>
    ) : (
      <Button onClick={handleGoNext} disabled={currentQuestion === questions.length - 1}>
        {t('button next')}
      </Button>
    );
  }, [currentQuestion, isQuiz, i18n.language]);

  const footerClassName = () => {
    if (leftArea && rightArea) {
      return classes.withTwoButtons;
    } else if (rightArea && !leftArea) {
      return classes.withOnlyRightArea;
    }
    return classes.withOnlyLeftArea;
  };

  return (
    <>
      <Modal
        isOpen={opened}
        onClose={close}
        onAccept={handleExit}
        title={t('exit quiz modal title')}
      >
        {t('exit quiz confirmation')}
      </Modal>
      <footer className={`${classes.footer} ${footerClassName()}`}>
        {leftArea} {rightArea}
      </footer>
    </>
  );
};
