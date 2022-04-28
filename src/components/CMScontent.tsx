import {useState, useEffect} from 'react';
import {  webContent, wrapper, ContentfulFetcher } from './QueryModule';

export function queryFeaturedWrappers() {
    // GraphQL query to get data from Contentful CMS API
    const cmsQuery = `query { 
        featuredWrapperCollection(where: {featured: true}) { 
          items {
            wrapperName
            description
            featured
            thirdParty
            queriesCollection {
              items {
                filename
            featured
                appTs
                appRs
                appPy
                source
              }
            }  
            docsLink
          }
        }
      }`
    return ContentfulFetcher(cmsQuery)
}


export function fetchWrappers(cmsId: string) {
    console.log('boom.')
}



