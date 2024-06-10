# React + TypeScript + Vite

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## ASSUMPTIONS AND TECHNICAL DECISIONS
### ASSUMPTIONS
- The application is part of an e-commerce page,the page itself the product page
- The be build with base React without frameworks like Next or Remixjs
- The app users might want to share URL of there product selections

### TECHNICAL DECISIONS
- Use Shadcn/UI for reusable components
- Filters/options selected by app user to be stored in Redux store and URL as well