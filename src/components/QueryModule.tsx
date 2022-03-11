import React, { Component } from "react";

require('dotenv').config();
console.log("MY_VARIABLE: " + process.env.REACT_APP_CMS_TOKEN);

const cmsQuery = `query { 
    launchPartners(id:"4NuUSkl1u6JPVA7QNiM4iS") { 
     name
     link 
     testimonial
     persona
     futurePromise
   } 
 }`;


class CommonComponentsMain extends Component {
    render() {
        return (
            <div>
                Class-Based component named as "CommonComponents"
            </div>
        )
    }


}

function CommonOne() {
    console.log("Heyo, welcome to the jungle ~")

    window
    .fetch(process.env.REACT_APP_CMS_SITE as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": process.env.REACT_APP_CMS_TOKEN as string,
      },
      body: JSON.stringify({ "query":cmsQuery }),
    })

    .then((response) => response.json())
    .then(({ data, errors }) => {
      if (errors) {
        console.log("There was an error with the query:");
        console.error(errors);
      }
    
    console.log("This is probably working. Try making logging the results of a new query on right here")
    console.log(data)
    //   setTitle(data.webContent.title);
    //   setSubtitle(data.webContent.subtitle)
    //   setDescription(data.webContent.description)
    //   // TODO: supportImage is not used yet as the received data is not rightly formatted
    //   //setSupportImage(data.webContent.supportImage)
    //   setCTA2(data.webContent.callToAction)

    });
    return 'this is a string'
}

function CommonTwo() {
    return 'this is a string'
}

function CommonThree() {
    return 'this is a string'
}

export {CommonOne, CommonTwo, CommonThree}
export default CommonComponentsMain