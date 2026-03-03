## Accessing the demo
Goto https://jesswilk-co.github.io/tmv-form-demo

## Running the project locally

Install dependencies (including esbuild) and build:

```bash
npm install
npm run build
```

This will create a `dist` folder containing `index.html` and `out.js`. You can serve this folder with any static file server to preview the production build.

## Deployment

Deployment to GitHub Pages is handled automatically via a GitHub Actions workflow:

- On pushes to the `main` branch, GitHub Actions runs `npm install` and `npm run build`.
- The contents of the `dist` directory (only `index.html` and `out.js`) are uploaded as a GitHub Pages artifact.
- A separate deploy job publishes that artifact to GitHub Pages, serving the demo at the URL above.
