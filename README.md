# hulen_sanity
Hulen studio contains the backend for [Hulen](hulen.no) which delivers and manages content for the frontend application in a sepatate repository (found [her](https://github.com/Daedalusish/hulen_frontend)) built in Next.js.

## Getting Started

1. Install Node Version 20. (Recommended to use NVM to do this, for more info on NVM see (https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/).

2. Clone the repository
   ```bash
   git clone https://github.com/Daedalusish/hulen_sanity.git
   ```
3. Install the dependencies
   ```bash
   npm install
   ```
4. Create a .env file in root and add the environment variables.
5. Run the project
   ```bash
   npm run dev
   ```
6. Open http://localhost:3333 with your browser to see the sanity studio.  


##
Recommended reading: https://www.sanity.io/docs/groq-data-types#c09fcac11ee6 for details on how types work and in general the sanity setup

## Special types

## localText
We instead of string, we use localText. This type makes the entry into an object for each language supported and ensures that we have multi language support where it makes sense
