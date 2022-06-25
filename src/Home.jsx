import React, { useState } from 'react';
import image1 from './images/boissy-saint-leger-1.jpg';
import image2 from './images/boissy-saint-leger-2.jpg';
import image3 from './images/boissy-saint-leger-3.jpg';
import image4 from './images/boissy-saint-leger-4.jpg';
import image5 from './images/boissy-saint-leger-5.jpg';
import image6 from './images/boissy-saint-leger-6.jpg';
import planImage from './images/plan-cave-des-anges.png';
import { getMailTo, emailAddress } from './util';
import { useLanguage } from './useLanguage';

/**
 * @type React.FunctionComponent<{
 *   apiKey: string;
 *   placeId: string;
 *   center: [number, number];
 *   zoom: number; // 1 - 21
 *   language: import('./translations').Language
 * }>
 */
const GoogleMaps = ({ apiKey, placeId, center, zoom, language }) => {
  return (
    <div className="darkmode">
      <iframe
        title="Map"
        height="400"
        frameBorder="0"
        style={{
          border: 0,
          width: '100%',
          height: '100%',
          minHeight: '400px',
        }}
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:${placeId}&key=${apiKey}&center=${center.join(
          ','
        )}&zoom=${zoom}&language=${language}`}
      />
    </div>
  );
};

const images = [image1, image2, image3, image4, image5, image6];

/**
 * @type React.FunctionComponent<import('@reach/router').RouteComponentProps>
 */
const Home = () => {
  const { getText, toggleLanguage, language } = useLanguage('en');
  const [index, setIndex] = useState(0);

  const image = images[index];

  return (
    <>
      <button className="language" onClick={toggleLanguage}>
        {getText('switch_language')}
      </button>
      <p className="script subtitle" style={{ marginTop: '1em' }}>
        {getText('abi_and_haroen')}
      </p>
      <p className="medium-small">{getText('home_getting_married')}</p>
      <p className="futura medium">{getText('full_date')}</p>
      <p>{getText('home_location')}</p>
      <hr className="flourish margin-v-large" />
      <div className="grid">
        <GoogleMaps
          apiKey="AIzaSyCkc96KA1VumP4C1BrPVCxVtaSJrPJ09Ns"
          placeId="ChIJLZzH3hEtrhIRteQDxd_URV4"
          center={[43.2, 2.33]}
          zoom={13}
          language={language}
        />

        <button
          className="invisible-button"
          type="button"
          onClick={() => {
            setIndex((index + 1) % images.length);
          }}
          style={{
            position: 'relative',
          }}
        >
          <img src={image} alt={/** @type string */ (getText('image_alt'))} />
          <span
            style={{
              lineHeight: '1.1',
              textDecoration: 'underline',
              position: 'absolute',
              bottom: 0,
              right: 0,
              background: 'black',
              padding: '.2em .5em'
            }}
          >
            {getText('home_next_image')}
          </span>
        </button>

        <section>{getText('home_getting_there')}</section>
        <section>
          {getText('home_practical')}
          <img src={planImage} alt="Plan of La Cave Des Anges" />
        </section>
      </div>
      <footer>
        <p>
          contact: <a href={getMailTo('Contact')}>{emailAddress}</a>
        </p>
      </footer>
    </>
  );
};

export default Home;
