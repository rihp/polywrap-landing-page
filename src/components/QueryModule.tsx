import { Component } from "react";

require('dotenv').config();
console.log("MY_VARIABLE: " + process.env.REACT_APP_CMS_TOKEN);

/* 
class CommonComponentsMain extends Component {
    render() {
        return (
            <div>
                Class-Based component named as "CommonComponents"
            </div>
        )
    }
} */

function ContentfulFetcher(query: string) {
    //console.log("Heyo, we're about to query the text from Contentful: ~ ")

    window
    .fetch(process.env.REACT_APP_CMS_SITE as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": process.env.REACT_APP_CMS_TOKEN as string,
      },
      body: JSON.stringify({ "query":query }),
    })
    .then((response) => response.json())
    .then(({ data, errors }) => {
      if (errors) {
        console.log("There was an error with the query:");
        console.error(errors);
      }
    
    //console.log("This is probably working. Try making logging the results of a new query on right here")
    console.log("in the module", data)    
    return data
    });
}

export {ContentfulFetcher}
//export default CommonComponentsMain