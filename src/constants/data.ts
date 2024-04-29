import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitImage2,
  check,
  chromecast,
  disc02,
  discord,
  discover1,
  discover2,
  discover3,
  figma,
  file02,
  framer,
  homeSmile,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  searchMd,
  slack,
  sliders04,
  tab1,
  tab2,
  tab3,
  tab4,
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

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const tabContent = [
  {
    id: 1,
    img: tab1,
    title: "Sign up",
    text: "Create an account with Brainwave - AI chat app by providing your name, email address, and password. Once you sign up, you can start exploring the app.",
    btnText: "Connect Now",
  },
  {
    id: 2,
    img: tab2,
    title: "Connect with AI chatbot",
    text: "Connect with the AI chatbot to start the conversation. The chatbot uses natural language processing to understand your queries and provide relevant responses.",
    btnText: "Connect Now",
  },
  {
    id: 3,
    img: tab3,
    title: "Get Personalized Advices",
    text: "Based on the conversation with the AI chatbot, you will receive personalized recommendations related to your queries. The chatbot is trained to understand your preferences and provide customized suggestions.",
    btnText: "Connect Now",
  },
  {
    id: 4,
    img: tab4,
    title: "Explore and Engage",
    text: "Explore the recommendations provided by the AI chatbot and engage with the app. You can ask questions, provide feedback, and share your experience with the chatbot.",
    btnText: "Connect Now",
  },
];

export const generativeContents = [
  {
    id: 1,
    symbol: check,
    text: "Photo generating",
  },
  {
    id: 2,
    symbol: check,
    text: "Photo photo enhance",
  },
  {
    id: 3,
    symbol: check,
    text: "Seamless intergration",
  },
];

export const videoIcons = [
  { id: 1, symbol: recording03 },
  { id: 2, symbol: recording01 },
  { id: 3, symbol: disc02, active: true },
  { id: 4, symbol: chromecast },
  { id: 5, symbol: sliders04 },
];

export const pricing = [
  {
    id: 1,
    titleColor: "text-primary-2",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    btnText: "Get Started",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: 2,
    title: "Premium",
    titleColor: "text-primary-1",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    btnText: "Get Started",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: 3,
    title: "Enterprise",
    titleColor: "text-primary-3",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    btnText: "Contact us",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];
