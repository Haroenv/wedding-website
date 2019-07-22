import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const errorSubject = 'Received an error signing up';
const emailAddress = 'help@abi-and-haroen.fr';
const errorMailto = new URL(`mailto:${emailAddress}`);
errorMailto.searchParams.set('subject', errorSubject);

/**
 * @typedef {{
 *   name: string;
 *   number: number;
 *   language: string[];
 * }} Data
 */

function Wrapper() {
  // prettier-ignore
  const [data, setData] = useState(/** @type Data | undefined */(undefined));
  // prettier-ignore
  const [error, setError] = useState(/** @type Error | null */(null));

  useEffect(() => {
    const url = new URL(window.location.href);
    url.pathname = '/.netlify/functions/fetch-info';
    fetch(url.href)
      .then(res => {
        if (res.ok) {
          return res;
        } else {
          throw new Error('could not retrieve user');
        }
      })
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => setError(err));
  }, []);
  if (error) {
    return (
      <>
        <p>Sorry, </p>
        <p>{error.message}</p>
        <p>
          Please email us: <a href={errorMailto.href}>{emailAddress}</a>
        </p>
      </>
    );
  }
  if (!data) {
    return null;
  }
  const defaultLanguage =
    (data.language || []).indexOf('Dutch') > -1 ? 'nl' : 'en';
  return (
    <App
      name={data.name}
      number={data.number}
      defaultLanguage={defaultLanguage}
    />
  );
}

ReactDOM.render(<Wrapper />, document.getElementById('root'));
