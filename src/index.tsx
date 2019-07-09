import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function Wrapper() {
  const [data, setData] = useState<{ name: string, number: number, language: string[] }>({
    name: "", number: 0, language: []
  })

  useEffect(() => {
    fetch("/.netlify/functions/fetch-info")
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err)
      )
  }, [])

  return <App name={data.name} number={data.number} defaultLanguage={'en'} />
}

ReactDOM.render(
  <Wrapper></Wrapper>,
  document.getElementById('root')
);
