import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Scope } from './components/Scope/Scope';

const router = createHashRouter([
  {
    path: '/',
    element: <Scope className="w-96 h-96" />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
