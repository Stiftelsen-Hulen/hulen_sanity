# hulen_sanity
Hulen studio contains the backend for [Hulen](hulen.no) made with Sanity.io with TypeScript which delivers and manages content for the frontend application in a separate repository (found [here](https://github.com/Daedalusish/hulen_frontend)).

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
4. Create a `.env` file in the root directory and add the environment variables.
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


## Contact
Johnny Bjånesøy
