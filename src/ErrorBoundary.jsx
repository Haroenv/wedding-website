import React from 'react';
import { getMailTo } from './util';

const MAIL_NEWLINE = encodeURIComponent('\r\n');

export default class ErrorBoundary extends React.Component {
  state = {
    error: null,
    info: null,
  };

  /**
   * @param {any} error
   * @param {any} info
   */
  componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="vertical-center">
          <section lang="en">
            <h2>Error</h2>
            <p>
              An error has occurred, sorry! Please{' '}
              <a
                href={getMailTo(
                  'My page did not load',
                  `I'm having an error accessing ${window.location.href}. Thanks for taking a look!${MAIL_NEWLINE}${MAIL_NEWLINE}${this.state.error}`
                )}
              >
                let us know of this issue by clicking here
              </a>
              . Thanks!
            </p>
          </section>
          <section lang="nl">
            <h2>Fout</h2>
            <p>
              Een fout gebeurde tijdens het laden van deze pagina!{' '}
              <a
                href={getMailTo(
                  'Fout tijdens het laden van pagina',
                  `Ik zie een fout bij het laden van ${window.location.href}. Bedankt om het op te lossen!${MAIL_NEWLINE}${MAIL_NEWLINE}${this.state.error}`
                )}
              >
                Laat ons dit probleem weten door hier op te klikken
              </a>
              . Bedankt!
            </p>
          </section>
        </div>
      );
    }
    return this.props.children;
  }
}
