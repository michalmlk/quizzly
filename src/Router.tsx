import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '@/layouts/Main.layout';
import { Summary } from '@/pages/Summary.page';
import { HomePage } from './pages/Home.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
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
