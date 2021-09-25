# Information

The demo has been developed in **React** using **Next.js** and **Typescript**, styling with **TailwindCSS** and storing the data in **Supabase** including realtime integration. It was used **Jest** and **React Testing Library** for unit testing and **Cypress** for integration and E2E testing.

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
