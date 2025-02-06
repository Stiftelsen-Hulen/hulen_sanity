# hulen_sanity
Hulen studio contains the backend for [Hulen](hulen.no) made with Sanity.io with TypeScript which delivers and manages content for the frontend application in a separate repository (found [here]([https://github.com/Daedalusish/hulen_frontend](https://github.com/Stiftelsen-Hulen/hulen_frontend))).

## Getting Started

1. Install Node.js (V20).
It is recommended to use Node Version Manager (NVM) to do this, for more info on NVM see (https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/).

2. Clone the repository
   ```bash
   git clone https://github.com/Daedalusish/hulen_sanity.git
   ```
3. Install the dependencies
   ```bash
   npm install
   ```
4. Steps to create the .env file with environment variables
   - Copy the `.env.example` file
      ```bash
         cp .env.example .env
      ```
   - Edit the `.env` file and replace the placeholders with the appropriate credentials. SANITY_STUDIO_PROJECT_ID is found by logging in to [Sanity.io](https://www.sanity.io), navigate to the **Projects**, select the **Hulen** project and copy the **PROJECT ID**.
5. Run the project
   ```bash
   npm run dev
   ```
6. Open http://localhost:3333 in your browser.
7. Log in to your account to access the Sanity Studio.


## How to make schemas

In the `schemas/` directory, the content types for the pages are located. Each schema requires `name`, `type`, and `fields`. These schemas define the structure of your content, which will be displayed in the content editor in Sanity Studio. Check out the [Sanity documentation](https://www.sanity.io/docs/document-type), to learn more.

## How to use Sanity Studio

### Managing content
Create a document by selecting a document type, filling in the required fields and publish. Once published, the data is available to be queried using [GROQ queries](https://www.sanity.io/docs/groq-reference).

### Vision
In the Vision plugin the GROQ queries can be tested.

## Special types
The project defines some custom data types.

* localeString

Replaces string with `localeText`. This type makes the entry into an object for each language supported and ensures that we have multi language support where it makes sense.

* localeBlock

A `textBlock` supporting each language.

* localeImage

Object with an image and altText.

* imageWithLocaleAlt

Image with altText for each language.

## Deploying code & scheme changes
When new code changes and schemes have been merged to the code base it does not go live immediately. You need to be logged in with the sanity CLI and use it to deploy the changes.

1. Install sanity CLI: See sanity's [docs](https://www.sanity.io/docs/cli).
```bash
npm install --global sanity@latest
```

2. Login with your github account in the sanity CLI. (Github account associated with the sanity studio):
```bash
$ sanity login
...
  Google
> GitHub
  E-mail / password
```

3. Deploy it live with the npm CLI command:
```bash
npm run deploy
```

## Odd behaviour
If you publish data changes the studio will react with a *unknown field not found* error or similar. This usually means that you have not deployed the code changes (refer to section above).


## Contact
Maintained by:
* Nikolai Hansen Gangstø
* Erik Grunnaleite Ingebrigtsen
* Halvor Brunt

First developed by;
* Johnny Bjånesøy
