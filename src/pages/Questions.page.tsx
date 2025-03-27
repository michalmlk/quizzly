import { QuestionComponent } from '@/components/Question/Question';
import { PageWrapper } from '@/components/ui/PageWrapper/PageWrapper';
import { QuizContext } from '@/context';
import { useContext, useEffect, useRef } from 'react';
import classes from './Questions.page.module.css';

export function QuestionsPage() {
  const { questionsData, currentQuestion, answers, handleSaveAnswer, mode } =
    useContext(QuizContext);
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.focus();
    }
  }, [currentQuestion]);
  return (
    <PageWrapper className={classes.questionArea} ref={wrapperRef}>
      <QuestionComponent
        {...questionsData.questions[currentQuestion]}
        currentQuestion={currentQuestion}
        answers={answers}
        handleSaveAnswer={handleSaveAnswer}
        mode={mode}
      />
    </PageWrapper>
  );
}
