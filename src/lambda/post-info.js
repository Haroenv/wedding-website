import Airtable from 'airtable';
import ObjectFromEntries from 'object.fromentries';
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
    if (event.httpMethod !== 'POST' || !event.body) {
      throw new Error('no data returned');
    }
    const { id } = event.queryStringParameters || { id: undefined };
    const { baseId, names, guests, comments, rsvp, food } = ObjectFromEntries(
      JSON.parse(event.body)
    );

    const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE);

    const records = [];

    if (Array.isArray(food)) {
      for (const item of food) {
        // @ts-ignore
        const record = await base(baseId || 'RSVP').create({
          names,
          number_guests: parseInt(guests, 10),
          comments,
          rsvp,
          invitation: [id],
          food: item,
        });

        records.push(record);
      }
    } else {
      // @ts-ignore
      const record = await base(baseId || 'RSVP').create({
        names,
        number_guests: parseInt(guests, 10),
        comments,
        rsvp,
        invitation: [id],
      });

      records.push(record);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        id: records[0].getId(),
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
