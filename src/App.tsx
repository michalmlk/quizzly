import '@mantine/core/styles.css';
import './index.css'

import { MantineProvider } from '@mantine/core';
import { QuizProvider } from '@/context';
import { Router } from './Router';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <QuizProvider>
        <Router />
      </QuizProvider>
    </MantineProvider>
  );
}
