import { useContext } from 'react';
import { QuestionComponent } from '@/components/Question/Question';
import { PageWrapper } from '@/components/ui/PageWrapper/PageWrapper';
import { QuizContext } from '@/context';
import classes from './Questions.page.module.css';

export function QuestionsPage() {
  const { questionsData, currentQuestion, answers, handleSaveAnswer, mode } =
    useContext(QuizContext);
  return (
    <PageWrapper className={classes.questionArea}>
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
