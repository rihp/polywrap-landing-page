import {useState, useEffect} from 'react';
import {  webContent, wrapper, newWrappersList, ContentfulFetcher } from './QueryModule';

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

export async function fetchWrappers() {
    const response = await queryFeaturedWrappers()
    //console.log (">---> response of queryFeaturedWrappers()", response)
    const wrappersList = response.data.featuredWrapperCollection.items

    let newWrappersList: newWrappersList[] = [];
    wrappersList.forEach((wrapper: wrapper) => {
        wrapper.queriesCollection.items.forEach((item) => {
            
            // Check if this is a featured wrapper or not
            if (item.featured){
                
                // If it is, add the relevant data to the array `newWrappersList`
                newWrappersList.push({
                    wrapperName: wrapper.wrapperName,
                    description: wrapper.description,
                    featured: wrapper.featured,
                    thirdParty: wrapper.thirdParty,
                    docsLink: wrapper.docsLink,
                    query: {
                        featured: item.featured,
                        source: item.source,
                        snippets: [
                            { filename: item.filename + '.js', language: 'javascript', snippet: item.appJs || '' },
                            { filename: item.filename + '.ts', language: 'typescript', snippet: item.appTs || '' },
                            { filename: item.filename + '.py', language: 'python', snippet: item.appPy || '' },
                            { filename: item.filename + '.rs', language: 'rust', snippet: item.appRs || '' },
                        ]
                    }
                });
            }
        });
    });
    
    // This would return an array with the organized wrappers
    return newWrappersList
}
