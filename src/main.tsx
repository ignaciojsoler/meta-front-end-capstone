import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import Home from './routes/home';
import Reservations from './routes/reservations';
import Confirmation from './routes/confirmation';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "reservations",
        element: <Reservations/>
      },
      {
        path: "confirmation",
        element: <Confirmation/>
      },
      {
        path: "*",
        element: <ErrorPage/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
