# Vision Backend

A professional Node.js & TypeScript backend with robust CI/CD and automated testing.

[![CircleCI](https://circleci.com/gh/CYNTHia-com/vision-backend.svg?style=svg)](https://circleci.com/gh/CYNTHia-com/vision-backend)
[![Coverage Status](https://coveralls.io/repos/github/CYNTHia-com/vision-backend/badge.svg?branch=main)](https://coveralls.io/github/CYNTHia-com/vision-backend?branch=main)

## Overview
This project features a complete backend infrastructure with:
- **TypeScript** for type safety
- **Express** for API routing
- **Jest + SWC** for lightning-fast testing
- **CircleCI** for automated pipelines
- **Coveralls** for code coverage tracking

## Getting Started

### Installation
```bash
npm install
```

### Running the App
```bash
# Development mode with hot-reload
npm run dev

# Production build
npm run build
npm start
```

## Testing & Quality
We maintain a high bar for code quality with automated gates:

| Command | Description |
|---------|-------------|
| `npm test` | Run all unit and integration tests |
| `npm run test:coverage` | Run tests and generate a coverage report (thresholds enforced) |
| `npm run lint` | Check for code style and quality issues |
| `npm run format` | Automatically fix formatting with Prettier |

## CI/CD Pipeline
The project is integrated with **CircleCI**. The pipeline automatically:
1. Validates code style (Linting)
2. Executes the full test suite
3. Verifies the TypeScript build
4. Reports coverage to **Coveralls**

---
### Setup Instructions for Coveralls
To see your coverage live:
1. Log in to [Coveralls.io](https://coveralls.io/) with your GitHub account.
2. Enable the `vision-backend` repository.
3. Copy your **Repo Token**.
4. Go to your CircleCI project settings → **Environment Variables**.
5. Add a variable named `COVERALLS_REPO_TOKEN` with your token.
