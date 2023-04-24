import { createHashRouter, RouterProvider } from 'react-router-dom';

const router = createHashRouter([
  {
    path: '/',
    element: <div>Hello World!</div>,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
