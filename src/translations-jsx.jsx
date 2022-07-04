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
  home_dresscode: (
    <>
      <h2>Dresscode</h2>
      <p>
        We expect the weather in Carcassonne to be quite hot. That's why we
        understand it definitely if you would want to pick a less formal outfit.
      </p>
      <p>
        However, you definitely wouldn't be the only one being in a suit or
        dress! We would appreciate it if men could wear a shirt.
      </p>
    </>
  ),
  home_gifts: (
    <>
      <h2>Gifts</h2>
      <p>
        We've long been thinking what gifts to suggest you get us, but we still
        don't know what's best. We like experiences, and fun time with our
        friends above all. Of course, if you want to give something, we'll be
        very grateful!
      </p>
    </>
  ),
  home_timing: (
    <>
      <h2>Timing</h2>
      <p>
        <a
          href="webcal://p53-caldav.icloud.com/published/2/NTkwNDA4OTAzNTkwNDA4OUdDaF75R5TLhDwOtMjIgqlTK26031Z1N5Nj1DpWdkPuhtLhX-MDHL-Gys1q2-Y-BBfDw-wTLnOreT-qToDKO4k"
          target="_blank"
          rel="noopener noreferrer"
        >
          You can follow the online calendar we created via this link.
        </a>
      </p>
      <p>On Sunday you can come as well, including using the swimming pool!</p>
      <div className="narrow-center">
        <section>
          <h3>Saturday 30 July</h3>
          <ul className="subtle-list">
            <li>13:15-14:00 — Ceremony</li>
            <li>14:00-14:30 — Group Pictures</li>
            <li>14:30-17:30 — Outdoor Activities</li>
            <li>17:30-19:45 — Dinner</li>
            <li>19:45-20:30 — Party Games</li>
            <li>20:30-04:00 — Dancing</li>
          </ul>
        </section>
        <section>
          <h3>Sunday 31 July</h3>
          <p></p>
          <ul className="subtle-list">
            <li>11:30-15:00 — Quality Time</li>
          </ul>
        </section>
      </div>
    </>
  ),
  form_food: 'Choice of plate',
  form_rsvp_couscous: 'couscous royal',
  form_rsvp_tajine_poulet: 'chicken tajine olives/lemons',
  form_rsvp_tajine_agneau: 'lamb tajine almonds/prunes',
  form_rsvp_tajine_legumes: 'vegetable tajine',
  confirmation_subtext: (
    <>
      <p>
        Thank you for confirming your attendance through the previous messages.
        We're very excited to welcome you in Carcassonne!
      </p>
      <p>
        We'd like to know which food you'd like to have, as well as any other
        things you think we should know.
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
  home_dresscode: (
    <>
      <h2>Dresscode</h2>
      <p>
        We verwachten dat het warm zal zijn in Carcassonne. Daarom verstaaan we
        het zeker als je een minder formele outfit wil kiezen.
      </p>
      <p>
        Desalniettemin zou je ook niet de enige persoon in kostuum of jurk zijn!
        We zouden het leuk vinden als je toch een hemd zou kiezen.
      </p>
    </>
  ),
  home_gifts: (
    <>
      <h2>Cadeaus</h2>
      <p>
        We hebben lang nagedacht over welke cadeaus we willen, maar weten niet
        wat op te lijsten. We houden van belevingen en goede ervaringen met
        jullie allemaal. Natuurlijk als je een iets wil given zullen we zeer
        dankbaar zijn!
      </p>
    </>
  ),
  home_timing: (
    <>
      <h2>Planning</h2>
      <p>
        <a
          href="webcal://p53-caldav.icloud.com/published/2/NTkwNDA4OTAzNTkwNDA4OUdDaF75R5TLhDwOtMjIgqlTK26031Z1N5Nj1DpWdkPuhtLhX-MDHL-Gys1q2-Y-BBfDw-wTLnOreT-qToDKO4k"
          target="_blank"
          rel="noopener noreferrer"
        >
          Je kan deze kalender ook toevoegen via deze link.
        </a>
      </p>
      <p>Op de zondag kan je ook langskomen, er is ook een zwembad!</p>
      <div className="narrow-center">
        <section>
          <h3>zaterdag 30 juli</h3>
          <ul className="subtle-list">
            <li>13:15-14:00 — Ceremonie</li>
            <li>14:00-14:30 — Groepsfoto's</li>
            <li>14:30-17:30 — Buitenactiviteiten</li>
            <li>17:30-19:45 — Eten</li>
            <li>19:45-20:30 — Feestspelen</li>
            <li>20:30-04:00 — Dansen</li>
          </ul>
        </section>
        <section>
          <h3>zondag 31 juli</h3>
          <ul className="subtle-list">
            <li>11:30-15:00 — Kwaliteitstijd</li>
          </ul>
        </section>
      </div>
    </>
  ),
  form_food: 'Keuze gerecht',
  form_rsvp_couscous: 'couscous royal',
  form_rsvp_tajine_poulet: 'tajine poulet olives/citrons',
  form_rsvp_tajine_agneau: 'tajine agneau amandes/pruneaux',
  form_rsvp_tajine_legumes: 'tajine legumes',
  confirmation_subtext: (
    <>
      <p>
        Bedankt om je aanwezigheid op onze trouw te bevestigen via de vorige
        berichten. We zijn in de wolken om jullie te ontvangen in Carcassonne!
      </p>
      <p>
        We zullen je graag vragen wat je wilt eten, en of we nog iets anders qua
        informatie moeten weten.
      </p>
    </>
  ),
};
