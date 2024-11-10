import React from 'react';
import { useLanguage } from './useLanguage';

/**
 * @type React.FunctionComponent<import('@reach/router').RouteComponentProps>
 */
const Home = () => {
  const { getText } = useLanguage('en');

  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p>{getText('welcome_to_website')}</p>
      <p className="script subtitle" style={{ marginTop: '1em' }}>
        {getText('abi_and_haroen')}
      </p>
      <hr className="flourish margin-v-large" />
      <p>{getText('nice_day')}</p>
    </div>
  );
};

export default Home;
