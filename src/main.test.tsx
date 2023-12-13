import React from 'react';
import { render, screen } from '@testing-library/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import Home from './routes/home';
import Reservations from './routes/reservations';
import Confirmation from './routes/confirmation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'reservations',
        element: <Reservations />,
      },
      {
        path: 'confirmation',
        element: <Confirmation />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

test('renders Root component with default route', () => {
  render(
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  );

  expect(screen.getByText("Little Lemon")).toBeDefined();

});
