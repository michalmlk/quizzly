import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '@/layouts/Main.layout';
import { Summary } from '@/pages/Summary.page';
import { QuestionsPage } from './pages/Questions.page';
import { WelcomePage } from './pages/Welcome.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <WelcomePage />,
      },
      {
        path: '/quiz',
        element: <QuestionsPage />,
      },
      {
        path: '/summary',
        element: <Summary />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
