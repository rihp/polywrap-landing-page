require('dotenv').config();
console.log("MY_VARIABLE: " + process.env.REACT_APP_CMS_TOKEN);

// TODO: supportImage is not used yet as the received data is not rightly formatted
//setSupportImage(data.webContent.supportImage)

export interface webContent {
  title: string;
  subtitle: string | null;
  callToAction: string | null;
  description: string;
}

export interface launchPartner {
  name: string;
  link: string | null;
  testimonial: string | null;
  persona: string;
  futurePromise: string;
}

export interface newTestimonial {
  name: string;
  testimonial: string;
  futurePromise: string;
  persona: string;
  link: string;
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
}

export {ContentfulFetcher}
//export default CommonComponentsMain