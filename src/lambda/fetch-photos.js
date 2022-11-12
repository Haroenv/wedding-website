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
      fields: { name, language },
      // @ts-ignore .find isn't typed
    } = await base('Invitations').find(id);

    if (!name) {
      throw new Error('unauthorized id');
    }

    const urls = await base('links').select().all();

    return {
      statusCode: 200,
      body: JSON.stringify({
        name,
        language,
        urls: urls.map((record) => record.fields),
      }),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e instanceof Error ? e.message : e }),
    };
  }
}
