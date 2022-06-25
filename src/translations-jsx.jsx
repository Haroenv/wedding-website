import React from 'react';
import { Link } from '@reach/router';
import { getMailTo } from './util';

export const English = {
  std_form_message_submitted: (
    <>
      Submission received. Find all information on the{' '}
      <Link to="/">home page</Link>
    </>
  ),
  std_paragraphs: (
    <>
      <p>
        We are very pleased to welcome you in{' '}
        <q>
          <a href="https://lacavedesanges.fr">La Cave des Anges</a>
        </q>{' '}
        in sunny Carcassonne.
      </p>
      <p>
        Please confirm your availability and any food restrictions in the
        following form:
      </p>
    </>
  ),
  home_getting_married: 'are getting married',
  home_postponed: (
    <>
      <p>
        We have decided to postpone our wedding until it's safe for everyone to
        travel.
      </p>
      <p>We will keep you updated when we reschedule!</p>
    </>
  ),
  home_location: 'in La Cave des Anges, Carcassonne',
  home_getting_there: (
    <>
      <h2>Getting there</h2>
      <p>Carcassonne is reachable by airplane, train or via road.</p>
      <hr className="flourish" />
      <p>The venue is a 5 minute drive from the city centre.</p>
      <p>
        Unfortunately, it's not possible to walk to the venue. We therefore
        suggest you take a taxi, or drive, since there's parking at the venue.
      </p>
      <hr className="flourish" />
      <p>The address of the venue is:</p>
      <address>
        La Cave des Anges,
        <br />
        Domaine de Maran,
        <br />
        11570 Cavanac
      </address>
      <p>
        Note: it's possible that a GPS or Google Maps will send you to the wrong
        place, please make sure you check with the location on{' '}
        <a href="https://lacavedesanges.fr">the venue's site</a>.
      </p>
    </>
  ),
  home_practical: (
    <>
      <h2>Practical information</h2>
      <p>Welcoming everyone from 11.30 AM.</p>
      <p>No curfew, party all night!</p>
      <p>
        More info to come, but don't hesitate to{' '}
        <a href={getMailTo('I have a practical question')}>reach out</a> if you
        have any questions.
      </p>
    </>
  ),
};

export const Dutch = {
  std_form_message_submitted: (
    <>
      Bericht ontvangen! Vind alle praktische informatie op de{' '}
      <Link to="/">hoofdpagina</Link>
    </>
  ),
  std_paragraphs: (
    <>
      <p>
        We zijn zeer blij om jullie in{' '}
        <q>
          <a href="https://lacavedesanges.fr">La Cave des Anges</a>
        </q>
        , Carcassonne uit te nodigen.
      </p>
      <p>
        Laat ons weten of je er kan zijn, en of je bepaalde restricties hebt in
        het formulier:
      </p>
    </>
  ),
  home_getting_married: 'gaan trouwen',
  home_postponed: (
    <>
      <p>
        We hebben beslist om onze trouw uit te stellen tot het veilig is voor
        iedereen om te reizen.
      </p>
      <p>We houden jullie op de hoogte wanneer we herplannen!</p>
    </>
  ),
  home_location: 'in La Cave des Anges, Carcassonne',
  home_getting_there: (
    <>
      <h2>Vervoer</h2>
      <p>Carcassonne is berijkbaar via trein, auto, of zelfs vliegtuig.</p>
      <hr className="flourish" />
      <p>Onze locatie is ca. 5km van de stadskern.</p>
      <p>
        Jammer is het niet mogelijk is om te voet naar de locatie te komen. We
        stellen jullie daarvoor om een taxi te regelen, of met de auto,
        aangezien er parking is.
      </p>
      <hr className="flourish" />
      <p>Het adres is:</p>
      <address>
        La Cave des Anges,
        <br />
        Domaine de Maran,
        <br />
        11570 Cavanac
      </address>
      <p>
        Let op: het is mogelijk dat je GPS of Google Maps niet de exact juiste
        plaats heeft. Controleer op de{' '}
        <a href="https://lacavedesanges.fr">locatie's website</a> om zeker te
        zijn.
      </p>
    </>
  ),
  home_practical: (
    <>
      <h2>Praktische informatie</h2>
      <p>We verwelkomen iedereen vanaf 11u30.</p>
      <p>
        Er is geen strikt einduur, dus we kunnen de hele nacht door feesten!
      </p>
      <p>
        We zullen meer informatie informatie geven eens de datum dichterbij is,
        maar twijfel niet om{' '}
        <a href={getMailTo('Ik heb een praktische vraag')}>
          ons te contacteren
        </a>{' '}
        als je vragen hebt.
      </p>
    </>
  ),
};
