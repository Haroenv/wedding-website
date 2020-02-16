import React, { useState } from 'react';
import * as Translations from './translations';
import image from './us-two.jpg';
import { getMailTo, emailAddress } from './util';

/**
 * @returns {"en" | "nl"}
 */
function getDefaultLanguage() {
  return 'en';
}

/**
 * @type React.FunctionComponent<{
 *   apiKey: string;
 *   placeId: string;
 *   center: [number, number];
 *   zoom: number; // 1 - 21
 * }>
 */
const GoogleMaps = ({ apiKey, placeId, center, zoom }) => {
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
        )}&zoom=${zoom}`}
      />
    </div>
  );
};

/**
 * @type React.FunctionComponent<import('@reach/router').RouteComponentProps>
 */
const Home = () => {
  const [language, setLanguage] = useState(getDefaultLanguage());
  /**
   * @param {import('./translations').TranslationKey} key
   */
  const getText = key => Translations.getTranslation(language, key);

  const toggleLanguage = () =>
    language === 'en' ? setLanguage('nl') : setLanguage('en');

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
      <div className="grid" style={{ '--columns': 2 }}>
        <GoogleMaps
          apiKey="AIzaSyCkc96KA1VumP4C1BrPVCxVtaSJrPJ09Ns"
          placeId="ChIJLZzH3hEtrhIRteQDxd_URV4"
          center={[43.2, 2.33]}
          zoom={13}
        />
        <img
          src={image}
          // prettier-ignore
          alt={/** @type string */ (getText('image_alt'))}
        />

        <section>{getText('home_getting_there')}</section>
        <section>{getText('home_practical')}</section>
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
