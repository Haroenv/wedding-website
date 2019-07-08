import React, { useState } from 'react';
import image from './us-two.jpg';
import { getTranslation, TranslationKey, Language } from './translations';

function Form({
  name,
  number,
  getText,
}: {
  name: any;
  number: any;
  getText: any;
}) {
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
        <label htmlFor="form-names">Names</label>
        <input
          type="text"
          id="form-names"
          name="names"
          defaultValue={name}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="form-number-guests">{getText('number_guests')}</label>
        <input
          type="form-number-guests"
          id="number"
          name="guests"
          defaultValue={number}
          min="0"
          max={number + 2}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="form-comments">Other comments</label>
        <textarea
          id="form-comments"
          name="comments"
          rows={5}
          placeholder="e.g. “I would prefer if the food is vegetarian and the venue is wheelchair accessible.”"
        />
      </div>

      <fieldset className="inline-radio">
        <legend>RSVP</legend>
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
            <label htmlFor="form-rsvp-yes">Will come</label>
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
            <label htmlFor="form-rsvp-maybe">Might come</label>
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
            <label htmlFor="form-rsvp-no">Won’t come</label>
          </div>
        </div>
      </fieldset>

      <div className="input-group">
        {submitted ? 'Submission received' : null}
        <input type="submit" value="Send" />
      </div>
    </form>
  );
}

function App({
  name,
  number,
  defaultLanguage,
}: {
  name: string;
  number: number;
  defaultLanguage: Language;
}) {
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
}

export default App;
