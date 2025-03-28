import { CREATE_URL, HOME_URL, QUIZ_OVERVIEW_URL, QUIZ_URL } from '@/config';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

interface QuizState {
  isQuiz: boolean;
  isSettingsPage: boolean;
  isOverviewPage: boolean;
  isHomePage: boolean;
}

export const useLocationState = (): QuizState => {
  const location = useLocation();

  const isQuiz = useMemo(() => location.pathname === QUIZ_URL, [location.pathname]);
  const isSettingsPage = useMemo(() => location.pathname === CREATE_URL, [location.pathname]);
  const isOverviewPage = useMemo(
    () => location.pathname.includes(QUIZ_OVERVIEW_URL),
    [location.pathname]
  );
  const isHomePage = useMemo(() => location.pathname === HOME_URL, [location.pathname]);

  return {
    isQuiz,
    isSettingsPage,
    isOverviewPage,
    isHomePage,
  };
};
