#!/usr/bin/env node --experimental-modules

import { promises as fs } from 'fs';
import mjml from 'mjml';
import dotenv from 'dotenv';
import Airtable from 'airtable';
import sgMail from '@sendgrid/mail';
import { getTranslation } from '../src/translations.mjs';
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
const getAdjacentFile = (name) => {
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

const tokenRegex = /{{\s*(.*)\s*}}/g;

async function main() {
  const templateEn = await readFile(getAdjacentFile('photos-en.mjml'), 'utf-8');
  const templateNl = await readFile(getAdjacentFile('photos-nl.mjml'), 'utf-8');
  const templateTxtEn = await readFile(
    getAdjacentFile('photos-en.txt'),
    'utf-8'
  );
  const templateTxtNl = await readFile(
    getAdjacentFile('photos-nl.txt'),
    'utf-8'
  );

  // @ts-ignore
  const invitations = /** @type Airtable.Table<Invitee> */ (
    await base('Invitations')
  );

  // @ts-ignore
  const rsvpBase =
    /** @type Airtable.Table<{invitation:string[], rsvp: 'yes' | 'no' | 'maybe'}> */ (
      await base('RSVP 4')
    );

  const previousRsvpBase =
    // @ts-ignore
    /** @type Airtable.Table<{invitation:string[], rsvp: 'yes' | 'no' | 'maybe'}> */ (
      await base('RSVP 3')
    );

  const rsvps = await rsvpBase.select().all();
  const previousRsvps = await previousRsvpBase.select().all();

  const alreadyInvited = rsvps.flatMap((r) =>
    r.fields.rsvp === 'yes' ? r.fields.invitation : []
  );
  const alreadyDeclined = previousRsvps.flatMap((r) =>
    r.fields.rsvp === 'no' ? r.fields.invitation : []
  );

  const invitees = await invitations.select().all();

  const emails = invitees
    .filter(({ id }) => {
      return alreadyInvited.includes(id);
    })
    .map((invitee) => {
      const { fields, id } = invitee;

      const { name, email = 'help@abi-and-haroen.fr' } = fields;
      const language = fields.language.includes('Dutch') ? 'nl' : 'en';
      const template = fields.language.includes('Dutch')
        ? templateNl
        : templateEn;
      const mjmlEmail = template.replace(tokenRegex, (_match, token) => {
        if (token === 'name') {
          return name;
        }
        if (token === 'user_id') {
          return id;
        }

        return /** @type string */ (getTranslation(language, token));
      });

      const textEmailTemplate = fields.language.includes('Dutch')
        ? templateTxtNl
        : templateTxtEn;
      const textEmail = textEmailTemplate.replace(
        tokenRegex,
        (_match, token) => {
          if (token === 'name') {
            return name;
          }
          if (token === 'user_id') {
            return id;
          }

          throw new Error('replace missing');
        }
      );

      const { html } = mjml(mjmlEmail, { minify: true });

      const subject = /**@type string */ (
        getTranslation(language, 'email_subject')
      );

      return {
        subject,
        to: {
          name,
          email,
        },
        from: {
          name: 'Abi & Haroen',
          email: 'mail@abi-and-haroen.fr',
        },
        text: textEmail,
        html,
      };
    });

  const us = emails.filter((e) => e.to.name === 'Abi & Haroen');

  console.log(us);
  console.log(emails.map((e) => e.to));

  // await sgMail.send(emails, true);
}

main().catch(console.error);
