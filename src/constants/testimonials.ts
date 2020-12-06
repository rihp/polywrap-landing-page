export interface Testimonial {
  logo: string;
  description: string;
  persona: string;
  url: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    logo: "./logos/gnosisGray.png",
    persona: "Team Gnosis",
    description: `Web3api will make it easy for everyone to build on top of Gnosis
    technologies and interact with our contracts and interfaces. This will
    help us achieve our vision of building open platforms and removing
    gatekeepers`,
    url: "https://gnosis.io/"
  },
];
