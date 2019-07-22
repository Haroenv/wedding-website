import React, { useState, useEffect } from 'react';
import image from './us-two.jpg';
import { getTranslation } from './translations';

/**
 * @typedef {(key: import('./translations').TranslationKey) => string} GetText
 */

/**
 * @typedef {'clean' | 'submitting' | 'submitted' | 'failed'} FormState
 */

/**
 * @param {GetText} getText
 * @param {FormState} formState
 * @returns string
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
      return getText('form_message_submitted');
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
 * @type {React.FunctionComponent<{name: string; number: number; getText: GetText}>}
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
        const url = new URL(window.location.href);
        url.pathname = '/.netlify/functions/post-info';
        setFormState('submitting');
        fetch(url.href, {
          method: 'POST',
          body: JSON.stringify([...data]),
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
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="form-comments">{getText('form_comments')}</label>
        <textarea
          id="form-comments"
          name="comments"
          rows={5}
          placeholder={getText('form_comments_placeholder')}
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
        {formState === 'clean' ? null : getFormStateText(getText, formState)}
        <input type="submit" value={getText('form_submit')} />
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
const App = ({ name, number, defaultLanguage }) => {
  const [language, setLanguage] = useState(defaultLanguage);
  /**
   * @param {import('./translations').TranslationKey} key
   */
  const getText = key => getTranslation(language, key);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () =>
    language === 'en' ? setLanguage('nl') : setLanguage('en');

  return (
    <>
      <button className="language" onClick={toggleLanguage}>
        {getText('switch_language')}
      </button>
      <h1 className="futura">{getText('you_are_invited')}</h1>
      <p className="script subtitle">{name}</p>
      <p className="futura">{getText('the_wedding_of')}</p>
      <p className="subtitle script">{getText('abi_and_haroen')}</p>
      <img src={image} alt={getText('image_alt')} className="border" />
      <p className="futura">{getText('timing')}</p>
      <p className="futura medium">2021</p>
      <hr className="flourish" />
      <p>{getText('paragraph_1')}</p>
      <Form name={name} number={number} getText={getText} />
    </>
  );
};

export default App;
