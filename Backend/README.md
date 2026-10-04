# Backend deployment

Deploy this folder as the backend service's root directory.

- Build command: `npm run build`
- Start command: `npm start`
- Runtime: Node.js 20.19 or newer

The repository includes a Render Blueprint at `../render.yaml`. To apply it to
an existing Render service, update the service from the Blueprint or set its
Root Directory to `Backend`, Build Command to `npm install && npm run build`,
and Start Command to `npm start`. Do not use `npm build`; npm scripts require
the `run` subcommand.

The service listens on `PORT` (default `5000`). Set `MONGO_URI` in the hosting
provider's environment settings to enable MongoDB; `MONGO_DB` optionally selects
the database (default `sample_mflix`). The current API routes do not require the
database, so the service can start without `MONGO_URI`.

Set `CORS_ORIGIN` to the frontend origin allowed to call this API. It defaults to
`*`; for a single deployed frontend, set it to that origin, for example
`https://example.com`.

Copy `.env.example` to `.env` for local development. Do not commit production
credentials.
