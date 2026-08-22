> **NB: THIS IS NOW AN ARCHIVED REPOSITORY, NEW SOURCE FOR HULENS CMS IS LOCATED UNDER `apps/cms` at [github.com/Stiftelsen-Hulen/hulen.no](https://github.com/Stiftelsen-Hulen/hulen.no)

# hulen_sanity

This repo contains the CMS backend for [hulen.no](hulen.no). It is made with (sanity.io)[sanity.io], which delivers and manages content for the frontend application in a separate repository (found [here](https://github.com/Stiftelsen-Hulen/hulen_frontend/)).

Sanity CMS relies on npm, typescript and react. Currently this repo uses:
- Node 22+
- React 19+
- Typescript 5+
- Sanity 5+

## Getting started

It is recommended to use a node version manager to make sure you use either node v20 or v22. E.G NVM [More info here](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)
1. Install Node.js
2. Clone the repository
```bash
git clone https://github.com/Daedalusish/hulen_sanity.git
```
3. Install the dependencies
```bash
npm install
```
4. Copy the example envfile:
```bash
cp .env.example .env
```
5. Edit the credentials in `.env`. 
Edit the `.env` file.  

   Replace the placeholders with the appropriate credentials. SANITY_STUDIO_PROJECT_ID is found by logging in to [Sanity.io](https://www.sanity.io), navigate to the **Projects**, select the **Hulen** project and copy the **PROJECT ID**.  

6. Run the project
```bash
npm run dev
```
7. Log in to your account to access the Sanity Studio.

## Information
### Translation objects
This project uses translation object to enable both english and norwegian content field in the CMS. Recommended reading on [localization](https://www.sanity.io/docs/studio/localization), this project uses **translated fields**.  
(See [Special types](#special-types) for more info).

### How to use Sanity Studio
### Managing content
Create a document by selecting a document type, filling in the required fields and publish. Once published, the data is available to be queried using [GROQ queries](https://www.sanity.io/docs/groq-reference).

### Vision Tool
With the [Vision plugin](https://www.sanity.io/docs/content-lake/the-vision-plugin) the GROQ queries can be tested.

### Deploying changes
After making changes to schemas you have to deploy them using the *Sanity Command Line Interface*. You can test changes locally first by running:
```bash
npm run dev
``` 
**Then when you are satisfied and they work do, this to deploy them.**
1. Install sanity-cli globally:
```bash
npm install --global sanity@latest
```
2. Login into you sanity account:
```bash
sanity login
```
3. Deploy changes with (in project repo):
```bash
sanity deploy
``` 
or
```bash
npm run deploy
```

### Schemas
In the `schemas/` directory, the content types for the pages are located. Each schema requires `name`, `type`, and `fields`. These schemas define the structure of your content, which will be displayed in the content editor in Sanity Studio. Check out the [Sanity documentation](https://www.sanity.io/docs/document-type), to learn more.


### Odd behaviour
If you publish data changes the studio will react with a *unknown field not found* error or similar. This usually means that you have not deployed the code changes (refer to section above).

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
Maintained by:
* Nikolai Hansen Gangstø
* Erik Grunnaleite Ingebrigtsen
* Halvor Brunt

First developed by;
* Johnny Bjånesøy
