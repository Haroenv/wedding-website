import React, { useEffect, useState } from 'react';
import image from './carcassonne-tile.jpg';
import 'unfetch/polyfill';
import { useLanguage } from './useLanguage';

/**
 * @typedef {'clean' | 'submitting' | 'submitted' | 'failed'} FormState
 */

/**
 * @param {import('./useLanguage').GetText} getText
 * @param {FormState} formState
 */
const getFormStateText = (getText, formState) => {
  switch (formState) {
    case 'clean': {
      return '';
    }
    case 'submitting': {
      return getText('form_message_submitting');
    }
    case 'submitted': {
      return getText('std_form_message_submitted');
    }
    case 'failed': {
      return getText('form_message_failed');
    }
    default: {
      return '';
    }
  }
};

/**
 * @type {React.FunctionComponent<{name: string; number: number; getText: import('./useLanguage').GetText}>}
 */
const Form = ({ name, number, getText }) => {
  // prettier-ignore
  const [formState, setFormState] = useState(/** @type FormState */('clean'));

  return (
    <form
      className="futura"
      onSubmit={e => {
        e.preventDefault();
        // prettier-ignore
        const data = new FormData(/** @type HTMLFormElement */(e.target));
        if (data.entries === undefined) {
          if (document.querySelector('[name=rsvp]:checked') === null) {
            setFormState('failed');
            return;
          }
          // @ts-ignore iterable == array
          data.entries = function() {
            return [
              // @ts-ignore these elements exist for sure
              ['names', document.querySelector('[name=names]').value],
              // @ts-ignore these elements exist for sure
              ['guests', document.querySelector('[name=guests]').value],
              // @ts-ignore these elements exist for sure
              ['comments', document.querySelector('[name=comments]').value],
              // @ts-ignore these elements exist for sure
              ['rsvp', document.querySelector('[name=rsvp]:checked').value],
            ];
          };
        }
        const url = new URL(window.location.href);
        url.pathname = '/.netlify/functions/post-info';
        setFormState('submitting');
        fetch(url.href, {
          method: 'POST',
          body: JSON.stringify([...data.entries(), ['baseId', 'RSVP 3']]),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
          .then(res => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error('submission failed');
            }
          })
          .then(res => {
            console.log(res);
            setFormState('submitted');
          })
          .catch(err => {
            console.log(err);
            setFormState('failed');
          });
      }}
    >
      <div className="input-group">
        <label htmlFor="form-names">{getText('form_names')}</label>
        <input
          type="text"
          id="form-names"
          name="names"
          defaultValue={name}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="form-number-guests">
          {getText('form_number_guests')}
        </label>
        <input
          type="number"
          id="form-number-guests"
          name="guests"
          defaultValue={number.toString()}
          min="0"
          max={number + 2}
          pattern="\\d*"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="form-comments">{getText('form_comments')}</label>
        <textarea
          id="form-comments"
          name="comments"
          rows={5}
          // prettier-ignore
          placeholder={/**@type string */(getText('form_comments_placeholder'))}
        />
      </div>

      <fieldset className="inline-radio">
        <legend>{getText('form_rsvp')}</legend>
        <div className="inner">
          <div>
            <input
              className="visibly-hidden"
              required
              type="radio"
              name="rsvp"
              id="form-rsvp-yes"
              value="yes"
            />
            <label htmlFor="form-rsvp-yes">{getText('form_rsvp_yes')}</label>
          </div>
          <hr />
          <div>
            <input
              className="visibly-hidden"
              required
              type="radio"
              name="rsvp"
              id="form-rsvp-maybe"
              value="maybe"
            />
            <label htmlFor="form-rsvp-maybe">
              {getText('form_rsvp_maybe')}
            </label>
          </div>
          <hr />
          <div>
            <input
              className="visibly-hidden"
              required
              type="radio"
              name="rsvp"
              id="form-rsvp-no"
              value="no"
            />
            <label htmlFor="form-rsvp-no">{getText('form_rsvp_no')}</label>
          </div>
        </div>
      </fieldset>

      <div className="input-group">
        {formState === 'clean' ? null : (
          <p>{getFormStateText(getText, formState)}</p>
        )}
        <input
          type="submit"
          // prettier-ignore
          value={/** @type string */(getText('form_submit'))}
        />
      </div>
    </form>
  );
};

/**
 * @type {React.FunctionComponent<{
 *  name: string;
 *  number: number;
 *  defaultLanguage: import('./translations').Language}
 * >}
 */
const SaveTheDate = ({ name, number, defaultLanguage }) => {
  const { getText, toggleLanguage } = useLanguage(defaultLanguage);

  return (
    <>
      <button className="language" onClick={toggleLanguage}>
        {getText('switch_language')}
      </button>
      <h1 className="futura">{getText('form_rsvp')}</h1>
      <p className="script subtitle">{name}</p>
      <p className="futura">{getText('full_date')}</p>
      <p className="futura">{getText('std_the_wedding_of')}</p>
      <p className="subtitle script">{getText('abi_and_haroen')}</p>
      <img
        src={image}
        // prettier-ignore
        alt={/** @type string */(getText('image_alt'))}
        className="border"
      />
      <hr className="flourish" />
      {// prettier-ignore
      /**@type string[] */ (getText('std_paragraphs')).map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      <Form name={name} number={number} getText={getText} />
    </>
  );
};

const errorSubject = 'Received an error signing up';
const emailAddress = 'help@abi-and-haroen.fr';
const errorMailto = new URL(`mailto:${emailAddress}?subject=${errorSubject}`);

/**
 * @typedef {{
 *   name: string;
 *   number: number;
 *   language: string[];
 *   comments?: string;
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
    <SaveTheDate
      name={data.name}
      number={data.number}
      defaultLanguage={defaultLanguage}
    />
  );
};

export default InfoWrapper;
