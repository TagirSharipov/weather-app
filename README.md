This is a coding task project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
I decided not to proceed with the job offer because the company's budget was under my demand. However, I did the task in order to become familiar with the new 13th version of NextJS (beta at the moment of writing this text) where Server Components and React 18 features were implemented.

## Task
Create a web application based on **NextJS 13** (make sure to *use the new “**app”** folder*) with TypeScript

This application **must expose 3 pages**:

- First page must be SSG (Static Site Generation) and show the build date timestamp.
- The second page must be SSR (Server Side Rendered) and should query the weather api with a default location eg: Rome, and show a daily forecast for the next 7 days.
- The third page must be a Client Side and should expose the preloaded data of the weather in Rome and with an input allow the user to ask the weather for a specific city, and show a daily forecast for the next 7 days.

The dev must create components, hooks and use standard css modules to style components.

**NB: As weather service [this one](https://www.weatherapi.com/signup.aspx) in free mode can be used**
## Installation

To install the necessary dependencies, run:
```bash
npm install
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
