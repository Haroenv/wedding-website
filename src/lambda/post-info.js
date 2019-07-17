import Airtable from 'airtable';
import ObjectFromEntries from 'object.fromentries';
import dotenv from 'dotenv';
dotenv.config();

const { AIRTABLE_API_KEY, AIRTABLE_BASE } = process.env;

export async function handler(event, context) {
  try {
    if (event.httpMethod !== 'POST' || !event.body) {
      throw new Error('no data returned');
    }
    const { id } = event.queryStringParameters;
    const { names, guests, comments, rsvp } = ObjectFromEntries(
      JSON.parse(event.body)
    );

    const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE);

    const record = await base('RSVP').create({
      names,
      number_guests: parseInt(guests, 10),
      comments,
      rsvp,
      invitation: [id],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        id: record.getId(),
      }),
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
}