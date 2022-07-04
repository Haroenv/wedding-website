import * as jsx from './translations-jsx.jsx';
// const jsx = { English: {}, Dutch: {} };

export const English = {
  you_are_invited: 'You are invited',
  the_wedding_of: 'to the wedding of',
  abi_and_haroen: 'Abi & Haroen',
  image_alt: 'us together, looking amazing',
  home_next_image: 'next picture',
  std_image_alt: 'a Carcassonne tile in Carcassonne',
  timing: 'Early August',
  paragraphs: [
    "Of course it's still too early now to decide on an exact date or venue, but we would love to have you attend! We know it will be around the beginning of August 2021, and somewhere in France so all of you will have to travel a bit.",
    'Please use the comments below to let us know anything you need. We will send you another real invite once details have been confirmed.',
    'If you have any questions, feel free to reach out to us!',
  ],
  cta_email: '👉 RSVP on this site 👈',
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
  switch_language: 'Verander naar Nederlands',

  mail_preamble: 'We hope to see you at our wedding in Carcassonne.',
  mail_body:
    'Please let us know if you can make it by filling in the following form:',
  mail_more_info:
    'more information available on <a href="https://abi-and-haroen.fr">our site</a>. If you have any trouble with the previous link — go enter the following in your browser:',
  mail_body_confirmation:
    'To help us finish planning, please fill in the following form with your food preferences. Also note we have given more information on the main website once you fill in the form!',

  ...jsx.English,
};

/**
 * @type {typeof English}
 */
export const Dutch = {
  you_are_invited: 'Je bent uitgenodigd',
  the_wedding_of: 'voor het huwelijk van',
  abi_and_haroen: 'Abi & Haroen',
  image_alt: 'ons samen, die er super uit zien',
  home_next_image: 'volgende foto',
  std_image_alt: 'een tegel van Carcassonne, in Carcassonne',
  timing: 'Begin augustus',
  paragraphs: [
    'Natuurlijk is het nog veel te vroeg om de exacte data en plaats te beslissen, maar we zouden het super vinden als jullie komen! We hebben beslist dat we zullen trouwen rond het begin van Augustus 2021, en dat het ergens in Frankrijk zal zijn zodat iedereen een beetje moet reizen.',
    'Je kan het opmerkingen-veld hieronder gebruiken om ons te laten weten wat je nodig hebt.',
    'We sturen een een bevestiging wanneer we alles vastzetten om jullie op de hoogte te houden.',
    'Als je vragen hebt, twijfel niet om ons te contacteren.',
  ],
  cta_email: '👉 Vul het formulier in hier 👈',
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
  switch_language: 'Switch to English',

  mail_preamble: 'We hopen jullie op onze trouw in Carcassonne te zien!',
  mail_body: 'Laat ons weten via het volgende formulier of je erbij kan zijn:',
  mail_more_info:
    'meer info op <a href="https://abi-and-haroen.fr">onze site</a>. Als de link niet werkt, kopieer het volgende in je browser:',
  mail_body_confirmation:
    'Om onze planning te helpen, vul het volgende formulier in met je etensvoorkeuren. We hebben ook nog meer info op de website als je het formulier hebt ingevuld!',

  ...jsx.Dutch,
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
