import Airtable from 'airtable';
import dotenv from 'dotenv';
dotenv.config();

const { AIRTABLE_API_KEY, AIRTABLE_BASE } = process.env;

export async function handler(event, context) {
  var base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE);

  const {
    fields: { name, 'number of people': number, language },
  } = await base('Invitations').find('recu1wxdt7GUx00qJ');

  return {
    statusCode: 200,
    body: JSON.stringify({ name, number, language }),
  };
}
