export const personal = {
  name: "Barath R",
  title: "Software Developer",
  tagline: "Full-Stack · AI/NLP Research · Native Android",
  description: "A curious, problem-solving, creation-driven developer with 2.5+ years building production-grade systems at AU-KBC Research Centre, Anna University. I don't just write code — I build things that matter.",
  email: "barathbabu659@gmail.com",
  phone: "+91 88388 08641",
  location: "Chennai, India · Open to Pan India + Remote",
  github: "https://github.com/Barath-babu-R",
  linkedin: "https://www.linkedin.com/in/barath-r-18b2581b1",
  portfolio: "https://barath-r-portfolio.netlify.app",
}

export const stats = [
  { num: "2.5+", label: "Years Experience" },
  { num: "100+", label: "Researchers Served" },
  { num: "6+", label: "Projects Delivered" },
  { num: "1", label: "Live Play Store App" },
]

export const story = [
  {
    num: "01",
    icon: "🎓",
    year: "2019 — 2023",
    title: "The College Years",
    subtitle: "Where it all began",
    text: "Joined Jeppiaar Engineering College for B.E. in Computer Science. Started with curiosity - tinkering with web technologies, learning Java, building small projects. Competed in hackathons, won competitions, and discovered a love for both building products and solving research problems.",
    highlight: "CGPA 8.3 · Naan Mudhalvan Achiever",
    color: "cyan",
  },
  {
    num: "02",
    icon: "🏆",
    year: "2021 — 2023",
    title: "Hackathons & Recognitions",
    subtitle: "Proving the skills",
    text: "Won 1st place at INSTAMIND Hackathon solving a real logistics problem for DUNZO. Secured 3rd at a National Hackathon building a Waste Management Segregation system. Received IBM recognition for an IoT project. These wins shaped my problem-solving mindset.",
    highlight: "3 Major Awards · National Level",
    color: "green",
  },
  {
    num: "03",
    icon: "🔬",
    year: "Feb 2024 — Present",
    title: "AU-KBC Research Centre",
    subtitle: "Levelling up",
    text: "Joined AU-KBC Research Centre at Anna University as a Software Developer. Thrown into a world of NLP research, CRF models, and large-scale platform building. Went from writing simple web apps to architecting on-premise systems serving 100+ researchers.",
    highlight: "Led Discourse Platform · 100+ Researchers",
    color: "purple",
  },
  {
    num: "04",
    icon: "🚀",
    year: "2024 — Present",
    title: "From Research to Deployment",
    subtitle: "Real-world impact",
    text: "Co-developed Bhashayatra — taking in-house NLP research models and turning them into a real Android app on Google Play Store. Also built VisionX for a medical client using OpenCV on Android TV. Proved that research and real products can coexist.",
    highlight: "Live Play Store App · Medical Client",
    color: "orange",
  },
]

export const experience = [
  {
    date: "February 2024 — Present · 2.5+ years",
    title: "Software Developer",
    company: "AU-KBC Research Centre, Anna University — Chennai, India",
    desc: "Working at one of India's leading NLP research centres delivering across full-stack development, AI/NLP systems, and Android apps. Led the Discourse Platform — a large-scale on-premise NLP research system used by 100+ researchers. Built multilingual annotation tools, NLP chatbots with Anaphora Resolution, and deployed a production app on the Play Store.",
    tags: ["React", "Spring Boot", "WebSocket", "CRF Models", "Java Android", "Python", "SQL", "MongoDB"],
    active: true,
  },
  {
    date: "2019 — 2023",
    title: "B.E. Computer Science and Engineering",
    company: "Jeppiaar Engineering College, Anna University — Chennai",
    desc: "Built foundation in DSA, web technologies, OOP, databases, and software engineering. Self-learned through online courses and hands-on projects. Active in hackathons and technical competitions — won multiple awards at state and national level.",
    tags: ["Java", "Web Tech", "DBMS", "Hackathons", "CGPA 8.3"],
    active: false,
  },
]

export const projects = [
  {
    icon: "🧠",
    name: "Discourse Platform",
    role: "Tech Lead + Developer",
    badge: "AU-KBC · Led",
    badgeType: "research",
    desc: "A large-scale, on-premise NLP research platform built with WebSocket-driven real-time communication. Features dual-mode annotation (Manual: POS, Morph, Chunking, NER + Automatic: CRF models), Corpus Management, and a Model Development layer for training and deploying deep learning models. Supports multi-tenant access for standalone users and organisations — zero cloud dependency.",
    impact: "📊 Serving 100+ active researchers · Full NLP workflow automation",
    stack: ["React", "Spring Boot", "WebSocket", "SQL", "CRF Models", "Deep Learning"],
  },
  {
    icon: "📱",
    name: "Bhashayatra",
    role: "Android Developer",
    badge: "Live on Play Store",
    badgeType: "live",
    desc: "A production Android application supporting real-time translation and transcription across multiple Indian and regional languages. Bridges research-grade in-house AU-KBC NLP models into a consumer-facing mobile product. Successfully deployed on Google Play Store — making research accessible to real users.",
    impact: "🌍 Multiple Indian languages · Live on Play Store",
    stack: ["Java", "Native Android", "NLP Models", "REST APIs"],
  },
  {
    icon: "🩺",
    name: "VisionX",
    role: "Sole Developer",
    badge: "Client Project · Solo",
    badgeType: "client",
    desc: "A native Android TV application for a medical client. Captures raw X-ray image data via hardware cable input, applies OpenCV-based image enhancement and custom mathematical algorithms to remove salt-and-pepper noise, and displays diagnostically clear images on large TV screens in real time.",
    impact: "🏥 Real medical client · Hardware-to-display pipeline",
    stack: ["Java", "Android TV", "OpenCV", "Image Processing"],
  },
  {
    icon: "💬",
    name: "Anna University Chatbot",
    role: "Co-Developer",
    badge: "AU-KBC",
    badgeType: "research",
    desc: "A hybrid NLP-powered chatbot for Anna University answering student queries on admissions, fees, and academic details. Integrated Anaphora Resolution logic for accurate multi-turn conversations. Combines CRF model predictions with rule-based logic for a robust hybrid approach.",
    impact: "🎓 Academic query automation · Anaphora Resolution",
    stack: ["CRF Models", "Rule-based NLP", "Java", "Anaphora Resolution"],
  },
  {
    icon: "✍️",
    name: "LCAuthoring Interface",
    role: "Co-Developer",
    badge: "AU-KBC",
    badgeType: "research",
    desc: "A web-based multilingual text annotation tool supporting multiple Indian regional languages. Enables researchers to annotate plain text and CSV format datasets. Full stack with JS frontend, Java backend, and MongoDB for large-scale linguistic data storage.",
    impact: "🌐 Multiple Indian languages · Large-scale linguistic data",
    stack: ["HTML/CSS/JS", "Java", "MongoDB", "NLP Annotation"],
  },
  {
    icon: "🕸️",
    name: "Research Data Pipeline",
    role: "Developer",
    badge: "AU-KBC",
    badgeType: "research",
    desc: "Automated Python web scraping pipelines to extract and process linguistic data from diverse online sources. Feeds structured data into corpus building workflows that directly support NLP model training at the research centre.",
    impact: "📦 Automated corpus building for NLP model training",
    stack: ["Python", "Web Scraping", "Data Pipelines"],
  },
]

export const skillGroups = [
  {
    icon: "⚛️",
    title: "Frontend",
    skills: [
      { name: "React.js", pct: 88 },
      { name: "Tailwind CSS + HTML/CSS", pct: 85 },
      { name: "Three.js", pct: 70 },
    ],
    chips: ["React", "Tailwind", "Three.js", "JavaScript", "ES6+"],
  },
  {
    icon: "⚙️",
    title: "Backend",
    skills: [
      { name: "Spring Boot (Java)", pct: 87 },
      { name: "REST APIs", pct: 85 },
      { name: "WebSockets", pct: 83 },
    ],
    chips: ["Spring Boot", "Java", "REST", "WebSocket", "SQL"],
  },
  {
    icon: "🧠",
    title: "AI / NLP",
    skills: [
      { name: "CRF Models + NLP Pipelines", pct: 82 },
      { name: "Chatbot Development", pct: 80 },
      { name: "OpenCV + Image Processing", pct: 75 },
    ],
    chips: ["CRF", "NER/POS", "OpenCV", "Python", "Data Annotation"],
  },
  {
    icon: "📱",
    title: "Android Application / Database",
    skills: [
      { name: "Native Android (Java)", pct: 85 },
      { name: "MySQL + MongoDB", pct: 80 },
      { name: "Docker + Git", pct: 75 },
    ],
    chips: ["Android SDK", "MySQL", "MongoDB", "Docker", "Git", "Firebase"],
  },
]

export const awards = [
  {
    icon: "🏅",
    bg: "#fef3c7",
    title: "Naan Mudhalvan Achiever",
    desc: "Awarded by the Chief Minister of Tamil Nadu for outstanding technical achievement — one of the highest state-level recognitions for students.",
  },
  {
    icon: "🥇",
    bg: "#ecfdf5",
    title: "1st Place — INSTAMIND Hackathon",
    desc: "Solved a real-world logistics problem for DUNZO under competitive hackathon conditions against teams from across India.",
  },
  {
    icon: "🥉",
    bg: "#f0f9ff",
    title: "3rd Place — National Hackathon, JNN Institute",
    desc: "Built a Waste Management Segregation system at national level — combining IoT and software to solve a real environmental problem.",
  },
  {
    icon: "🏆",
    bg: "#ede9fe",
    title: "IBM SWMS IoT Recognition",
    desc: "Recognised by IBM for outstanding contributions to a Smart Waste Management System IoT project — industry validation early in career.",
  },
]
