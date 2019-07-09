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

  useEffect(() => {
    fetch('/.netlify/functions/fetch-info')
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err));
  }, []);

  if (!data) {
    return null;
  }
  return <App name={data.name} number={data.number} defaultLanguage={'en'} />;
}

ReactDOM.render(<Wrapper />, document.getElementById('root'));
