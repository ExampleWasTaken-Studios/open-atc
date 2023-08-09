import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { HomeView } from './components/views/home/HomeView';

const router = createHashRouter([
  {
    path: '/',
    element: <HomeView />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
