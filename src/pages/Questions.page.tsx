import { useContext } from 'react';
import { QuestionComponent } from '@/components/Question/Question';
import { Stats } from '@/components/Stats/Stats';
import { QuizContext } from '@/context';
import classes from './Questions.page.module.css';

export function QuestionsPage() {
  const { questions, currentQuestion, answers, handleSaveAnswer } = useContext(QuizContext);
  return (
    <div className={classes.container}>
      <Stats currentQuestion={currentQuestion} numOfQuestions={questions.length} />
      <QuestionComponent
        {...questions[currentQuestion]}
        currentQuestion={currentQuestion}
        answers={answers}
        handleSaveAnswer={handleSaveAnswer}
      />
    </div>
  );
}
