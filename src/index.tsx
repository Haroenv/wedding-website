import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

type Data = {
  name: string;
  number: number;
  language: string[];
};

function Wrapper() {
  const [data, setData] = useState<Data | undefined>(undefined);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch('/.netlify/functions/fetch-info')
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => setError(err));
  }, []);

  if (!data) {
    return null;
  }
  if (error) {
    return <>{error.message}</>;
  }
  return <App name={data.name} number={data.number} defaultLanguage={'en'} />;
}

ReactDOM.render(<Wrapper />, document.getElementById('root'));
