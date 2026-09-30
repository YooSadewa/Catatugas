# Catatugas

Catatugas is an npm-workspaces monorepo containing the API and web applications.

## Setup

Install dependencies from the repository root:

```bash
npm install
```

## Development

Run either application from the root:

```bash
npm run dev:api
npm run dev:web
```

Run each command in its own terminal when developing both applications together.

## Checks

```bash
npm run build
npm run lint
npm test
```

These commands run the corresponding scripts in each workspace that defines them.
