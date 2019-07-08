export const English = {
  number_guests: 'Number of guests',
  you_are_invited: 'You are invited',
  the_wedding_of: 'the wedding of',
  abi_and_haroen: 'Abi & Haroen',
  image_alt: 'us together, looking amazing',
  timing: 'Early August',
  paragraph_1:
    "Of course it's still too early now to decide on an exact date or venue, but we would love to have you attend! We know it will be around the beginning of August 2021, and somewhere in France so all of you will have to travel a bit.",
};
export const Dutch: typeof English = {
  number_guests: 'Aantal gasten',
  you_are_invited: 'Je bent uitgenodigd',
  the_wedding_of: 'het huwelijk van',
  abi_and_haroen: 'Abi & Haroen',
  image_alt: 'ons samen, die er super uit zien',
  timing: 'Vroeg augustus',
  paragraph_1:
    // TODO: translate
    "Of course it's still too early now to decide on an exact date or venue, but we would love to have you attend! We know it will be around the beginning of August 2021, and somewhere in France so all of you will have to travel a bit.",
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
