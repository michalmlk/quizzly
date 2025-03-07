import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '@/layouts/Main.layout';
import { QuizesPage } from '@/pages/Quizes.page';
import { Summary } from '@/pages/Summary.page';
import { ConfigurationPage } from './pages/Configuration.page';
import { CreateSchemaPage } from './pages/CreateSchema.page';
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
        path: '/create',
        element: <CreateSchemaPage />,
      },
      {
        path: '/quiz',
        element: <QuestionsPage />,
      },
      {
        path: '/quizes',
        element: <QuizesPage />,
      },
      {
        path: '/overview/:id',
        element: <ConfigurationPage />,
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
