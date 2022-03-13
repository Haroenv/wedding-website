import Airtable from 'airtable';
import dotenv from 'dotenv';
dotenv.config();

const { AIRTABLE_API_KEY = '', AIRTABLE_BASE = '' } = process.env;

if (AIRTABLE_API_KEY === '' || AIRTABLE_BASE === '') {
  throw new Error(
    'pass AIRTABLE_API_KEY & AIRTABLE_BASE as environment variables'
  );
}

/**
 * get info from airtable, but give empty if base doesn't exist
 * @param {Airtable.Base} base
 * @param {string[]} RSVP
 */
function getFallbackInfo(base, RSVP = []) {
  return (
    base('Invitations')
      // @ts-ignore .find isn't typed
      .find(RSVP[0])
      .catch(() => ({
        fields: {},
      }))
  );
}

/**
 * @param {import('aws-lambda').APIGatewayEvent} event
 * @param {import('aws-lambda').Context} context
 */
export async function handler(event, context) {
  try {
    const { id } = event.queryStringParameters || { id: undefined };
    const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE);

    const {
      fields: {
        name,
        guests,
        language,
        RSVP,
        'RSVP 2': RSVP2,
        'RSVP 3': RSVP3,
      },
      // @ts-ignore .find isn't typed
    } = await base('Invitations').find(id);

    const {
      fields: { number_guests: guests_1, comments: comments_1 },
    } = await getFallbackInfo(base, RSVP);

    const {
      fields: { number_guests: guests_2, comments: comments_2 },
    } = await getFallbackInfo(base, RSVP2);

    const {
      fields: { number_guests: guests_3, comments: comments_3 },
    } = await getFallbackInfo(base, RSVP3);

    return {
      statusCode: 200,
      body: JSON.stringify({
        name: name,
        number: guests_3 || guests_2 || guests_1 || guests,
        comments: comments_3 || comments_2 || comments_1,
        language,
      }),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
}
