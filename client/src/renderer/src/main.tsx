import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Scope } from './components/Scope';

const router = createHashRouter([
  {
    path: '/',
    element: <Scope />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
