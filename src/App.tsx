import React, { useState, FunctionComponent } from 'react';
import image from './us-two.jpg';
import { getTranslation, TranslationKey, Language } from './translations';

const Form: React.FunctionComponent<{
  name: string;
  number: number;
  getText: (key: TranslationKey) => string;
}> = ({ name, number, getText }) => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="futura"
      onSubmit={e => {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);
        console.log(new Map(data));
        setSubmitted(true);
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
          type="form-number-guests"
          id="number"
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
        {submitted ? getText('form_received') : null}
        <input type="submit" value={getText('form_submit')} />
      </div>
    </form>
  );
};

const App: FunctionComponent<{
  name: string;
  number: number;
  defaultLanguage: Language;
}> = ({ name, number, defaultLanguage }) => {
  const [language, setLanguage] = useState(defaultLanguage);
  const getText = (key: TranslationKey) => getTranslation(language, key);

  return (
    <>
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
