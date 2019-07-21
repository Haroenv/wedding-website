import { promises as fs } from 'fs';
import mjml from 'mjml';
const { readFile } = fs;

const getAdjacentFile = name => {
  const file = new URL(import.meta.url);
  const pathname = file.pathname.split('/');
  pathname.splice(-1, 1, name);
  file.pathname = pathname.join('/');
  return file;
};

// TODO: import this from TS (not possible now because running directly in node)
const lang = {
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

readFile(getAdjacentFile('invite.mjml'))
  .then(contents =>
    contents.toString().replace(/{{(.*)}}/g, (_match, token) => {
      if (token === 'name') {
        return 'Mumtaaz';
      }
      return lang[token];
    })
  )
  .then(email => mjml(email))
  .then(({ html }) => console.log(html));
