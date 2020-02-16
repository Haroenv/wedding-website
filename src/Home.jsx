import React, { useState } from 'react';
import * as Translations from './translations';
import image from './us-two.jpg';

/**
 * @returns {"en" | "nl"}
 */
function getDefaultLanguage() {
  return 'en';
}

const emailAddress = 'help@abi-and-haroen.fr';
/**
 * @param {string} subject
 */
function getMailTo(subject) {
  const url = new URL(`mailto:${emailAddress}?subject=${subject}`);
  return url.toString();
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
      <p className="script subtitle">Abi & Haroen</p>
      <p className="medium-small">are getting married</p>
      <p className="futura medium">7 august 2021</p>
      <p>in La Cave des Anges, Carcassonne</p>
      <hr className="flourish margin-v-large" />
      <div className="grid" style={{ '--columns': 2 }}>
        <GoogleMaps
          apiKey="AIzaSyCkc96KA1VumP4C1BrPVCxVtaSJrPJ09Ns"
          placeId="ChIJLZzH3hEtrhIRteQDxd_URV4"
          center={[43.2, 2.33]}
          zoom={13}
        />
        <img src={image} alt="us having fun" />

        <section>
          <h2>Getting there</h2>
          <p>Carcassonne is reachable by airplane, train or via road.</p>
          <hr className="flourish" />
          <p>The venue is a 5 minute drive from the city centre.</p>
          <p>
            Unfortunately, it's not possible to walk to the venue, we therefore
            suggest you take a taxi, or drive, since there's parking at the
            venue.
          </p>
          <hr className="flourish" />
          <p>The address of the venue is:</p>
          <address>
            La Cave des Anges,
            <br />
            Domaine de Maran,
            <br />
            11570 Cavanac
          </address>
          <p>
            Note: it's possible that a GPS or Google Maps will send you to the
            wrong place, please make sure you check with the location on{' '}
            <a href="https://lacavedesanges.fr">the venue's site</a>.
          </p>
          <p></p>
        </section>
        <section>
          <h2>Practical information</h2>
          <p>Welcoming everyone from 11.30 AM.</p>
          <p>No strict curfew, party all night!</p>
          <p>
            More info to come, but don't hesitate to{' '}
            <a href={getMailTo('I have a practical question')}>reach out</a> if
            you have any questions.
          </p>
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
