require('dotenv').config();
console.log("MY_VARIABLE: " + process.env.REACT_APP_CMS_TOKEN);

// TODO: supportImage is not used yet as the received data is not rightly formatted
//setSupportImage(data.webContent.supportImage)

export interface webContent {
  title: string;
  subtitle: string | null;
  callToAction: string | null;
  description?: string | null;
  supportImage?: any | null;
}

export interface polywrapFeature extends webContent{
  slug: string; 
}

export interface launchPartner {
  name: string;
  link: string | null;
  testimonial: string | null;
  persona: string;
  futurePromise: string;
}

export interface Testimonial {
  name: string;
  testimonial: string | null;
  //futurePromise: string;
  persona: string;
  link: string | null | undefined;
  logo: string;
}

export interface Asset {
  name: string;
}

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

    // Could be useful to add some error handling 
    // if response.json.error != undefined, console.log(response.json.error)
}

export {ContentfulFetcher}
//export default CommonComponentsMain