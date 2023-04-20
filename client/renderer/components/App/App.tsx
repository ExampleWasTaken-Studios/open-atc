import { useEffect, useState } from 'react';

export const App = () => {
  const [isDev] = useState(false);

  const [basename, setBasename] = useState('');

  useEffect(() => {
    if (isDev) {
      setBasename('http://localhost:3000');
    } else {
      setBasename('openatc://../renderer/');
    }
  }, [isDev]);

  return (
    <div>Hello World! - Basename: {basename}</div>
  );
};
