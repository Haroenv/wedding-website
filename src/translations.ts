export const English = {
  you_are_invited: 'You are invited',
  the_wedding_of: 'to the wedding of',
  abi_and_haroen: 'Abi & Haroen',
  image_alt: 'us together, looking amazing',
  timing: 'Early August',
  paragraph_1:
    "Of course it's still too early now to decide on an exact date or venue, but we would love to have you attend! We know it will be around the beginning of August 2021, and somewhere in France so all of you will have to travel a bit.",
  cta_email: 'Tell us your answer',
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
  switch_language: 'Verander naar Nederlands',
};

export const Dutch: typeof English = {
  you_are_invited: 'Je bent uitgenodigd',
  the_wedding_of: 'voor het huwelijk van',
  abi_and_haroen: 'Abi & Haroen',
  image_alt: 'ons samen, die er super uit zien',
  timing: 'Begin augustus',
  paragraph_1:
    'Natuurlijk is het nog veel te vroeg om de exacte data en plaats te beslissen, maar we zouden het super vinden als jullie komen! We hebben beslist dat we zullen trouwen rond het begin van Augustus 2021, en dat het ergens in Frankrijk zal zijn zodat iedereen een beetje moet reizen.',
  cta_email: 'Laat ons je antwoord weten',
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
  switch_language: 'Switch to English',
};

const languages = { en: English, nl: Dutch };

export type Language = keyof typeof languages;
export type TranslationKey = keyof typeof Dutch | keyof typeof English;

export const getTranslation = (language: Language, key: TranslationKey) => {
  if (languages[language] && languages[language][key]) {
    return languages[language][key];
  }
  return languages['en'][key];
};
