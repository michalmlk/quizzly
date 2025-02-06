import { useContext } from 'react';
import { QuestionComponent } from '@/components/Question/Question';
import { QuizContext } from '@/context';
import classes from './Home.page.module.css';

export function HomePage() {
  const { questions, currentQuestion } = useContext(QuizContext);
  return (
    <div className={classes.container}>
      <QuestionComponent {...questions[currentQuestion]} />
    </div>
  );
}
