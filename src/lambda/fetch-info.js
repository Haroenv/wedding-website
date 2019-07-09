import Airtable from "airtable";
import dotenv from "dotenv"
dotenv.config()

export async function handler(event, context) {
  var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('appz9qTGdIpJRyMz2');

  const { fields: { name, ["number of people"]: number, language } } = await base('Invitations').find('recu1wxdt7GUx00qJ')

  return {
    statusCode: 200,
    body: JSON.stringify({ name, number, language })
  }

} 