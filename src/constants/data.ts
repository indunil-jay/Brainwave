import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitImage2,
  check,
  check2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  discover1,
  discover2,
  discover3,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  loading1,
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
  telegram,
  testimonial01,
  testimonial02,
  testimonial03,
  testimonial04,
  twitter,
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
  work01,
  work02,
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

export const testimonialcards = [
  {
    id: 1,
    image: testimonial02,
    logo: yourlogo,
    name: "Jane Doe",
    occupation: "Ux designer",
    testimonial:
      "Brainwave has revolutionized the way I interact with digital assistants. The AI chatbot is able to understand my preferences and provide customized suggestions that are tailored to my needs. The app is user-friendly and intuitive, making it a joy to use.",
  },

  {
    id: 2,
    image: testimonial01,
    logo: yourlogo,
    name: "Jane Smith",
    occupation: "Ux designer",
    testimonial:
      "I was blown away by the accuracy and speed of the AI chatbot on Brainwave. It was able to understand my queries and provide relevant recommendations in seconds.",
  },
  {
    id: 3,
    image: testimonial03,
    logo: yourlogo,
    name: "Alexa Curz",
    occupation: "Ux designer",
    testimonial:
      "I was blown away by the accuracy and speed of the AI chatbot on Brainwave. It was able to understand my queries and provide relevant recommendations in seconds.",
  },
  {
    id: 4,
    image: testimonial04,
    logo: yourlogo,
    name: "Miller Oxze",
    occupation: "Ux designer",
    testimonial:
      "Brainwave has revolutionized the way I interact with digital assistants. The AI chatbot is able to understand my preferences and provide customized suggestions that are tailored to my needs. The app is user-friendly and intuitive, making it a joy to use.",
  },
];

export const works = [
  {
    id: "1",
    title: "Voice Recognition",
    description:
      "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    icon: check2,
    iconText: "Done",
  },
  {
    id: "2",
    title: "Gamification",
    description:
      "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    icon: loading1,
    iconText: "In Progress",
    img: work01,
  },
  {
    id: "3",
    title: "Chatbot customization",
    description:
      "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    icon: check2,
    iconText: "Done",
    img: work02,
  },
  {
    id: "4",
    title: "Integration with APIs",
    description:
      "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    icon: loading1,
    iconText: "In Progress",
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const featureOptions1 = [
  {
    id: 1,
    icon: check,
    option: "Seamless Integration",
    description:
      "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter",
  },
  {
    id: 2,
    icon: check,
    option: "Smart Automation",
  },
  {
    id: 3,
    icon: check,
    option: "Top-notch Security",
  },
];

export const testimonailcards = [
  {
    id: 1,
    description:
      " I have been using Brainwave for several months and have been impressed with its capabilities. The AI chatbot is able to understand complex queries and provide accurate recommendations, making my life easier and more productive. I would recommend this app to anyone looking for a reliable and efficient AI assistant.",
    userImg: user1,
    username: "Jane Smith",
    occupation: "Ux Designer",
  },

  {
    id: 2,
    description:
      "As a developer, I rely on AI tools to streamline my workflow. Brainwave has been an indispensable tool for me. Its intuitive interface and powerful features have significantly boosted my productivity. I highly recommend it to fellow developers.",
    userImg: user2,
    username: "John Doe",
    occupation: "Software Developer",
  },
  {
    id: 3,
    description:
      "Brainwave has revolutionized the way I manage my schedule. As a busy entrepreneur, staying organized is crucial, and this AI app has made it effortless. Its smart scheduling capabilities have saved me countless hours. I can't imagine my life without it now.",
    userImg: user3,
    username: "Emily Johnson",
    occupation: "Entrepreneur",
  },
  {
    id: 4,
    description:
      "I'm constantly amazed by the accuracy of Brainwave's predictive analytics. As a data scientist, I rely on data-driven insights to make informed decisions, and Brainwave never disappoints. Its advanced algorithms have helped me uncover valuable insights that have significantly impacted my projects.",
    userImg: user4,
    username: "Michael Brown",
    occupation: "Data Scientist",
  },
  {
    id: 5,
    description:
      "Being a student, I often find myself overwhelmed with assignments and deadlines. Brainwave has become my go-to study buddy. Its AI-powered study planner has helped me stay organized and focused. Thanks to Brainwave, managing my academic workload has become much more manageable.",
    userImg: user5,
    username: "Sarah Miller",
    occupation: "Student",
  },
  {
    id: 6,
    description:
      "As a customer service representative, I interact with numerous customers daily. Brainwave's AI chatbot has been a game-changer for me. It handles customer queries efficiently, allowing me to focus on providing excellent service. Thanks to Brainwave, our customer satisfaction rates have soared.",
    userImg: user6,
    username: "Alex Clark",
    occupation: "Customer Service Representative",
  },
];

export const roadmapItems = [
  {
    icon: check,
    id: 1,
    date: "APR 2023",
    title: "Define the problem",
    description:
      "Identify the problem that your chat AI app will solve. Determine the target audience and their needs.",
  },
  {
    icon: check,
    id: 2,
    date: "JUN 2023",
    title: "Gather data",
    description:
      "Gather data that will help you understand the target audience and their needs. This can include user surveys, feedback, and other sources of data.",
  },
  {
    icon: check,
    id: 3,
    date: "JUL 2023",
    title: "Design the chatbot",
    description:
      "Design the chatbot that will be the backbone of your app. Determine the features and functionalities that it needs to have.",
  },
  {
    icon: check,
    id: 4,
    date: "AUG 2023",
    title: "Train the chatbot",
    description:
      "Train the chatbot using the data that you have gathered. This will help it understand the target audience and provide accurate recommendations.",
  },
  {
    icon: check,
    id: 5,
    date: "SEP 2023",
    title: "Build the app",
    description:
      "Test the app to ensure that it meets the requirements and provides accurate recommendations.",
  },
  {
    icon: check,
    id: 6,
    date: "NOV 2023",
    title: "Test the app",
    description:
      "Test the app to ensure that it meets the requirements and provides accurate recommendations.",
  },
  {
    icon: sliders04,
    id: 7,
    date: "DEC 2023",
    title: "Launch the app",
    description:
      "Launch the app and promote it through various channels, such as social media, email marketing, and paid advertising.",
  },
  {
    icon: sliders04,
    id: 8,
    date: "FEB 2024",
    title: "Collect feedback",
    description:
      "Collect feedback from users to improve the app and make it more user-friendly.",
  },
  {
    icon: sliders04,
    id: 9,
    date: "MAR 2024",
    title: "Update the app",
    description:
      "Update the app regularly to ensure that it remains relevant and provides accurate recommendations.",
  },
  {
    icon: sliders04,
    id: 10,
    date: "MAY 2024",
    title: "Add more features",
    description:
      "After launching the app and collecting feedback, add more features to the chatbot to make it more useful and engaging for users. These features can include integration with other apps, voice recognition, and more customization options.",
  },
];
