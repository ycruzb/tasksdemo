# Information

The demo has been developed in **React** using **Next.js** and **Typescript**, styling with **TailwindCSS**, storing the data in **Supabase** including real time integration and deployed with CI/CD on **Vercel**. It was used **Jest** and **React Testing Library** for unit testing and **Cypress** for integration and E2E testing.

## Live demo

You can open two browsers and try to add a new task on one of them and will see how the new task is added at the same time on both browsers being updated at real time.

[https://tasksdemo.vercel.app/](https://tasksdemo.vercel.app/)

# Installation

1. Clone the repo

2. Install dependencies (must have Node.js installed) running the command inside the project folder

`npm i`

or

`yarn`

3. Create a file **.env.local** in order to manage the environment variables with this structure:

`NEXT_PUBLIC_SUPABASE_URL=your_supabase_url`

`NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key`

# Run unit tests

`npm run test`

or

`yarn test`

# Run E2E tests

`npm run cypress`

or

`yarn cypress`
