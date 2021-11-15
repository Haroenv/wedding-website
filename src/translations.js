import React from 'react';
import { Link } from '@reach/router';
import { getMailTo } from './util';

export const English = {
  you_are_invited: 'You are invited',
  the_wedding_of: 'to the wedding of',
  abi_and_haroen: 'Abi & Haroen',
  image_alt: 'us together, looking amazing',
  std_image_alt: 'a Carcassonne tile in Carcassonne',
  timing: 'Early August',
  paragraphs: [
    "Of course it's still too early now to decide on an exact date or venue, but we would love to have you attend! We know it will be around the beginning of August 2021, and somewhere in France so all of you will have to travel a bit.",
    'Please use the comments below to let us know anything you need. We will send you another real invite once details have been confirmed.',
    'If you have any questions, feel free to reach out to us!',
  ],
  cta_email: 'Tell us your answer here',
  email_subject: "You are invited to Abi & Haroen's wedding!",
  form_names: 'Names',
  form_number_guests: 'Number of guests',
  form_comments: 'Other comments',
  form_comments_placeholder:
    'e.g. “I would prefer if the food is vegetarian and the venue is wheelchair accessible”. No promises',
  form_rsvp: 'RSVP',
  form_rsvp_yes: 'Will come',
  form_rsvp_maybe: 'Might come',
  form_rsvp_no: 'Won’t come',
  form_submit: 'Send',
  form_message_submitting: 'Submitting…',
  form_message_submitted: 'Submission received',
  form_message_failed: 'An error occurred sending, please retry',
  std_save_the_date: 'Save the date',
  std_the_wedding_of: 'For the wedding of',
  full_date: '30 July 2022',

  mail_preamble: 'We hope to see you next year at our wedding in Carcassonne.',
  mail_body:
    'Please let us know if you can make it, along with any special requests you may have.',
  mail_more_info: 'more information available on <a href="https://abi-and-haroen.fr">our site</a>',

  std_form_message_submitted: (
    <>
      Submission received. Find all information on the{' '}
      <Link to="/">home page</Link>
    </>
  ),
  std_paragraphs: [
    <>
      We are very pleased to welcome you in{' '}
      <q>
        <a href="https://lacavedesanges.fr">La Cave des Anges</a>
      </q>{' '}
      in sunny Carcassonne.
    </>,
    'Please confirm your availability and any food restrictions in the following form:',
  ],
  home_getting_married: 'are getting married',
  home_postponed: (
    <>
      <p>
        We have decided to postpone our wedding until it's safe for everyone to
        travel.
      </p>
      <p>We will keep you updated when we reschedule!</p>
    </>
  ),
  home_location: 'in La Cave des Anges, Carcassonne',
  home_getting_there: (
    <>
      <h2>Getting there</h2>
      <p>Carcassonne is reachable by airplane, train or via road.</p>
      <hr className="flourish" />
      <p>The venue is a 5 minute drive from the city centre.</p>
      <p>
        Unfortunately, it's not possible to walk to the venue. We therefore
        suggest you take a taxi, or drive, since there's parking at the venue.
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
        Note: it's possible that a GPS or Google Maps will send you to the wrong
        place, please make sure you check with the location on{' '}
        <a href="https://lacavedesanges.fr">the venue's site</a>.
      </p>
    </>
  ),
  home_practical: (
    <>
      <h2>Practical information</h2>
      <p>Welcoming everyone from 11.30 AM.</p>
      <p>No curfew, party all night!</p>
      <p>
        More info to come, but don't hesitate to{' '}
        <a href={getMailTo('I have a practical question')}>reach out</a> if you
        have any questions.
      </p>
    </>
  ),
  switch_language: 'Verander naar Nederlands',
};

/**
 * @type {typeof English}
 */
export const Dutch = {
  you_are_invited: 'Je bent uitgenodigd',
  the_wedding_of: 'voor het huwelijk van',
  abi_and_haroen: 'Abi & Haroen',
  image_alt: 'ons samen, die er super uit zien',
  std_image_alt: 'een tegel van Carcassonne, in Carcassonne',
  timing: 'Begin augustus',
  paragraphs: [
    'Natuurlijk is het nog veel te vroeg om de exacte data en plaats te beslissen, maar we zouden het super vinden als jullie komen! We hebben beslist dat we zullen trouwen rond het begin van Augustus 2021, en dat het ergens in Frankrijk zal zijn zodat iedereen een beetje moet reizen.',
    'Je kan het opmerkingen-veld hieronder gebruiken om ons te laten weten wat je nodig hebt.',
    'We sturen een een bevestiging wanneer we alles vastzetten om jullie op de hoogte te houden.',
    'Als je vragen hebt, twijfel niet om ons te contacteren.',
  ],
  cta_email: 'Laat ons je antwoord hier weten',
  email_subject: 'Je bent uitgenodigd voor de trouw van Haroen & Abi!',
  form_number_guests: 'Aantal gasten',
  form_names: 'Namen',
  form_comments: 'Opmerkingen',
  form_comments_placeholder:
    'bijvoorbeeld: “Ik zou graag vegetarisch eten en een groene stoel hebben”. Geen beloftes',
  form_rsvp: 'RSVP',
  form_rsvp_yes: 'zal komen',
  form_rsvp_maybe: 'wil komen',
  form_rsvp_no: 'zal niet komen',
  form_submit: 'Verzenden',
  form_message_submitting: 'Aan het verzenden…',
  form_message_submitted: 'Bericht ontvangen',
  form_message_failed: 'Er was een probleem bij het verzenden, probeer opnieuw',
  std_save_the_date: 'Hou de datum vrij',
  std_the_wedding_of: 'voor het huwelijk van',
  full_date: '30 juli 2022',

  mail_preamble:
    'We hopen jullie volgend jaar op onze trouw in Carcassonne te zien.',
  mail_body:
    'Laat ons weten of je erbij kan zijn, en of je speciale verzoeken hebt.',
  mail_more_info: 'meer info op <a href="https://abi-and-haroen.fr">onze site</a>',

  std_form_message_submitted: (
    <>
      Bericht ontvangen! Vind alle praktische informatie op de{' '}
      <Link to="/">hoofdpagina</Link>
    </>
  ),
  std_paragraphs: [
    <>
      We zijn zeer blij om jullie in{' '}
      <q>
        <a href="https://lacavedesanges.fr">La Cave des Anges</a>
      </q>
      , Carcassonne uit te nodigen.
    </>,
    'Laat ons weten of je er kan zijn, en of je bepaalde restricties hebt in het formulier:',
  ],
  home_getting_married: 'gaan trouwen',
  home_postponed: (
    <>
      <p>
        We hebben beslist om onze trouw uit te stellen tot het veilig is voor
        iedereen om te reizen.
      </p>
      <p>We houden jullie op de hoogte wanneer we herplannen!</p>
    </>
  ),
  home_location: 'in La Cave des Anges, Carcassonne',
  home_getting_there: (
    <>
      <h2>Vervoer</h2>
      <p>Carcassonne is berijkbaar via trein, auto, of zelfs vliegtuig.</p>
      <hr className="flourish" />
      <p>Onze locatie is ca. 5km van de stadskern.</p>
      <p>
        Jammer is het niet mogelijk is om te voet naar de locatie te komen. We
        stellen jullie daarvoor om een taxi te regelen, of met de auto,
        aangezien er parking is.
      </p>
      <hr className="flourish" />
      <p>Het adres is:</p>
      <address>
        La Cave des Anges,
        <br />
        Domaine de Maran,
        <br />
        11570 Cavanac
      </address>
      <p>
        Let op: het is mogelijk dat je GPS of Google Maps niet de exact juiste
        plaats heeft. Controleer op de{' '}
        <a href="https://lacavedesanges.fr">locatie's website</a> om zeker te
        zijn.
      </p>
    </>
  ),
  home_practical: (
    <>
      <h2>Praktische informatie</h2>
      <p>We verwelkomen iedereen vanaf 11u30.</p>
      <p>
        Er is geen strikt einduur, dus we kunnen de hele nacht door feesten!
      </p>
      <p>
        We zullen meer informatie informatie geven eens de datum dichterbij is,
        maar twijfel niet om{' '}
        <a href={getMailTo('Ik heb een praktische vraag')}>
          ons te contacteren
        </a>{' '}
        als je vragen hebt.
      </p>
    </>
  ),
  switch_language: 'Switch to English',
};

const languages = { en: English, nl: Dutch };

/**
 * @typedef {keyof typeof Dutch | keyof typeof English} TranslationKey
 */
/**
 * @typedef {keyof typeof languages} Language
 */

/**
 * get a translation value
 * @param {Language} language
 * @param {TranslationKey} key
 */
export const getTranslation = (language, key) => {
  if (languages[language] && languages[language][key]) {
    return languages[language][key];
  }
  return languages['en'][key];
};
