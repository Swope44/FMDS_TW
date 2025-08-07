# FMDS KPI Dashboard

A responsive dashboard for displaying KPI widgets from common sources such as local sites and databases, Microsoft 365, and the Power Platform. The front end is built with React, Vite, and Tailwind CSS and runs inside a Docker container.

## Local Development

```bash
cd frontend
npm install
npm run dev
```

The development server is available at <http://localhost:5173>.

## Docker

Build and run the production build in a container:

```bash
docker compose up --build
```

The dashboard will be served at <http://localhost:8080>.

## Testing

```bash
cd frontend
npm test
```

Runs unit tests with [Vitest](https://vitest.dev).


## Design

Visual design reference: <https://www.figma.com/design/i5biCgUXghM0zp1gpOzoG8/KPI-UI?node-id=5-16&m=dev>

## Project Structure

- `frontend/` – React application source code.
- `Dockerfile` – multi-stage build to serve the compiled app with Nginx.
- `docker-compose.yml` – convenience script for local container execution.

Contributions and collaboration are welcome.
