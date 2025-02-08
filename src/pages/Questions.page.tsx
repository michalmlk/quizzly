import { useContext } from 'react';
import { QuestionComponent } from '@/components/Question/Question';
import { QuizContext } from '@/context';
import classes from './Questions.page.module.css';

export function QuestionsPage() {
  const { questions, currentQuestion, answers, handleSaveAnswer, mode } = useContext(QuizContext);
  return (
    <div className={classes.container}>
      <QuestionComponent
        {...questions[currentQuestion]}
        currentQuestion={currentQuestion}
        answers={answers}
        handleSaveAnswer={handleSaveAnswer}
        mode={mode}
      />
    </div>
  );
}
