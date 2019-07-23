#!/usr/bin/env node --experimental-modules

import { promises as fs } from 'fs';
import mjml from 'mjml';
import dotenv from 'dotenv';
import Airtable from 'airtable';
import sgMail from '@sendgrid/mail';
import { getTranslation } from '../src/translations.js';
const { readFile } = fs;
dotenv.config();

const {
  AIRTABLE_API_KEY = '',
  AIRTABLE_BASE = '',
  SENDGRID_API_KEY = '',
} = process.env;

if (
  AIRTABLE_API_KEY === '' ||
  AIRTABLE_BASE === '' ||
  SENDGRID_API_KEY === ''
) {
  throw new Error(
    'pass SENDGRID_API_KEY, AIRTABLE_API_KEY & AIRTABLE_BASE as environment variables'
  );
}

/**
 * get the URL of an adjacent file to the current file using import.meta
 * @param {string} name
 */
const getAdjacentFile = name => {
  const base = import.meta.url;
  const file = new URL(base);
  const pathname = file.pathname.split('/');
  pathname.splice(-1, 1, name);
  file.pathname = pathname.join('/');
  return file;
};

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE);
sgMail.setApiKey(SENDGRID_API_KEY);

/**
 * @typedef {'Dutch' | 'English'} Language
 */

/**
 * @typedef {{name: string; email: string, language: Language[]}} Invitee
 */

async function main() {
  const template = await readFile(getAdjacentFile('invite.mjml'), 'utf-8');

  // prettier-ignore
  // @ts-ignore
  const invitations = /** @type Airtable.Table<Invitee> */(await base(
    'Invitations'
  ));

  const invitees = await invitations.select().firstPage();

  const emails = invitees.map(({ fields, id }) => {
    const { name, email } = fields;
    const language = fields.language.includes('Dutch') ? 'nl' : 'en';
    const mjmlEmail = template.replace(/{{\s*(.*)\s*}}/g, (_match, token) => {
      if (token === 'name') {
        return name;
      }
      if (token === 'user_id') {
        return id;
      }
      return getTranslation(language, token);
    });

    const { html } = mjml(mjmlEmail, { minify: true });

    return {
      subject: getTranslation(language, 'email_subject'),
      to: 'help@abi-and-haroen.fr', // email,
      from: {
        name: 'Abi & Haroen',
        email: 'mail@abi-and-haroen',
      },
      text: 'and easy to do anywhere, even with Node.js', // @TODO
      html,
    };
  });

  // await sgMail.send(emails, true);
}

main().catch(console.error);
