//  import { Component } from "react";

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

function ContentfulFetcher(query: string): Promise<any> {
    //console.log("Heyo, we're about to query the text from Contentful: ~ ")

    return window
    .fetch(process.env.REACT_APP_CMS_SITE as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": process.env.REACT_APP_CMS_TOKEN as string,
      },
      body: JSON.stringify({ "query":query }),
    })
    .then((response) => response.json());
}

export {ContentfulFetcher}
//export default CommonComponentsMain