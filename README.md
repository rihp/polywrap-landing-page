# landing-page

## Setup
1. `nvm install && nvm use` - Use the proper version of node.
1. `yarn` - Install all dependencies.

## Develop
`yarn dev` - Build the site, and start the development server. The dev server is hosting the site at http://localhost:3000/. Whenever changes are made, the site should automatically rebuild.

## Theme 

Color and themes should be modified from the `src/theme/index.ts` file, by updating constants.

## CMS 

Part of the content of the site is fed through a Headless CMS system. (contentful)

To be able to query the content, you must configure the correct environment variables. 
- Rename `.env.example` to `.env` and add the API keys