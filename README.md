# Wedding website

A website for our wedding, using the following stuff:

- SendGrid for emails
- mjml for email bulletproofing
- Netlify for hosting
- React for "templating"
- Reach router for different paths
- Airtable as a data store
- TypeScript via checkJS (easier for setup)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Environment variables

For properly running this app you will need to set the environment variables in `.env`

```
AIRTABLE_API_KEY= # retrieve from airtable.com/account
AIRTABLE_BASE= # retrieve from airtable.com/api
SENDGRID_API_KEY= # retrieve from sendgrid.com/settings/api_keys
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn emails`

Sends RSVP emails (for now), using SendGrid. Make sure you are using Node v12 here.
