# MBA Emmanuel — Portfolio

A responsive, accessible personal portfolio built with React, Vite, TypeScript, and GSAP.

## Local setup

```bash
pnpm install
pnpm dev
```

The local server URL will be printed by Vite.

## Validation

```bash
pnpm typecheck
pnpm lint
pnpm build
```

## Deployment

This repository is ready for Vercel:

1. Import `MBA329/portfolio` in Vercel.
2. Keep Vite as the framework preset.
3. Use `pnpm build` for the build command and `dist` for the output directory.

No environment variables are required. The contact form currently validates client input and has a clear integration point for Formspree, Resend, or a custom API.
