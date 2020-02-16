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
 * @param {import('aws-lambda').APIGatewayEvent} event
 * @param {import('aws-lambda').Context} context
 */
export async function handler(event, context) {
  try {
    const { id } = event.queryStringParameters || { id: undefined };
    const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE);

    const {
      fields: { name, 'number of people': number, language, RSVP },
      // @ts-ignore .find isn't typed
    } = await base('Invitations').find(id);

    const {
      fields: { names: correctName, number_guests: correctNumber, comments },
      // @ts-ignore .find isn't typed
    } = await base('RSVP').find(RSVP[0]);

    return {
      statusCode: 200,
      body: JSON.stringify({
        name: correctName || name,
        number: correctNumber || number,
        comments,
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
