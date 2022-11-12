import React, { useEffect, useState } from 'react';
import 'unfetch/polyfill';
import { useLanguage } from './useLanguage';
import photo1 from './images/JMG-1.jpg';
import photo2 from './images/JMG-2.jpg';
import photo3 from './images/JMG-3.jpg';

/**
 * @type {React.FunctionComponent<{
 *  name: string;
 *  urls: Data['urls'],
 *  defaultLanguage: import('./translations').Language
 * }>}
 */
const Photos = ({ defaultLanguage, name, urls }) => {
  const { getText, toggleLanguage } = useLanguage(defaultLanguage);
  const [index, setIndex] = useState(0);

  const images = [
    { url: photo1, alt: getText('photo_1_alt') },
    { url: photo2, alt: getText('photo_2_alt') },
    { url: photo3, alt: getText('photo_3_alt') },
  ];

  const image = images[index];

  return (
    <>
      <button className="language" onClick={toggleLanguage}>
        {getText('switch_language')}
      </button>
      <h1>{getText('photos_title')}</h1>

      <button
        className="invisible-button border"
        type="button"
        onClick={() => {
          setIndex((index + 1) % images.length);
        }}
        style={{
          position: 'relative',
        }}
      >
        <img
          src={image.url}
          alt={/** @type string */ (image.alt)}
          style={{ maxHeight: '100%' }}
        />
        <span
          style={{
            lineHeight: '1.1',
            textDecoration: 'underline',
            position: 'absolute',
            bottom: 0,
            right: 0,
            background: 'black',
            padding: '.2em .5em',
          }}
        >
          {getText('home_next_image')}
        </span>
      </button>

      <p>
        {getText('photos_subtitle')}, {name}:
      </p>

      <ul>
        {urls.map(
          ({
            Name,
            URL,
            Photographer,
            'Photographer URL': PhotographerURL,
          }) => (
            <li>
              <a href={URL}>{Name}</a>, {getText('photos_made_by')}{' '}
              <a href={PhotographerURL}>{Photographer}</a>
            </li>
          )
        )}
      </ul>
    </>
  );
};

const errorSubject = 'Received an error';
const emailAddress = 'help@abi-and-haroen.fr';
const errorMailto = new URL(`mailto:${emailAddress}?subject=${errorSubject}`);

/**
 * @typedef {{
 *   name: string;
 *   language: string[];
 *   urls: {
 *     Name: string;
 *     URL: string;
 *     Photographer: string,
 *     'Photographer URL': string
 *   }[];
 * }} Data
 */

/**
 * @type React.FunctionComponent<import('@reach/router').RouteComponentProps>
 */
const InfoWrapper = () => {
  // prettier-ignore
  const [data, setData] = useState(/** @type Data | undefined */(undefined));
  // prettier-ignore
  const [error, setError] = useState(/** @type Error | null */(null));

  useEffect(() => {
    const url = new URL(window.location.href);
    url.pathname = '/.netlify/functions/fetch-photos';
    fetch(url.href)
      .then((res) => {
        if (res.ok) {
          return res;
        } else {
          throw new Error('could not retrieve user');
        }
      })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => setError(err));
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
    <Photos
      defaultLanguage={defaultLanguage}
      name={data.name}
      urls={data.urls}
    />
  );
};

export default InfoWrapper;
