import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitImage2,
  discover1,
  discover2,
  discover3,
  file02,
  homeSmile,
  notification2,
  notification3,
  notification4,
  plusSquare,
  searchMd,
  yourlogo,
} from "../assets";

export const navigation = [
  { id: 1, name: "Features", url: "#feature" },
  { id: 2, name: "Pricing", url: "#pricing" },
  { id: 3, name: "How to use", url: "#howtouse" },
  { id: 4, name: "Roadmap", url: "#roadmap" },
  { id: 5, name: "New Acount", url: "#newaccount", onlyMobile: true },
  { id: 6, name: "Sign in", url: "#signin", onlyMobile: true },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
export const notificationImages = [notification4, notification3, notification2];
export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "assets/benefit/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const discovers = [
  {
    id: 1,
    title: "Unlock the power of AI",
    text: " BrainWave unlock the potential of Al-powered applications",
    btnText: "See how it works",
    mainImg: discover1,
    cardText: "Code generation",
  },
  {
    id: 2,
    title: "Transform Your converations with AI",
    text: " BrainWave unlock the potential of Al-powered applications",
    btnText: "See how it works",
    mainImg: discover2,
    cardText: "Education Feedback",
  },
  {
    id: 3,
    title: "Discover the benefits of AI chat",
    text: " BrainWave unlock the potential of Al-powered applications",
    btnText: "See how it works",
    mainImg: discover3,
    cardText: "video generation",
  },
];
