export const site = {
  name: "Yonathan Anosie",
  shortName: "YA",
  title: "Technical Lead",
  location: "Addis Ababa, Ethiopia",
  description:
    "Pursuit of excellence on the intersection of business and technology.",
  url: "https://yonit.dev",
  social: {
    github: "https://github.com/yonit1dev",
    linkedin: "https://linkedin.com/in/yonitanosie",
    x: "https://x.com/yonathananosie",
  },
} as const;

export const roles = [
  {
    company: "MemhirET",
    role: "Technical Director",
    location: "Addis Ababa",
    period: "2024 — present",
    products: [
      {
        name: "BridgeBook",
        description:
          "A student information system with an intelligence layer for understanding learning, finding students who need support, and helping schools act early.",
      },
      {
        name: "METT",
        description:
          "Personalized exam preparation used by more than 11,000 students, with 20,000+ downloads.",
      },
    ],
  },
  {
    company: "YOLET Labs",
    role: "Technical Lead",
    location: "Addis Ababa",
    period: "2024 — present",
    products: [
      {
        name: "Tessera",
        description:
          "A simple way for businesses to keep their books, stay compliant, and understand where they are today and where they are heading.",
      },
    ],
  },
  {
    company: "SYMVerge Platforms",
    role: "Technical Lead",
    location: "Remote, US",
    period: "2025 — present",
    products: [
      {
        name: "PrepTrack",
        description:
          "Preparation and learning for allied health, specifically radiation therapy. Curriculum, practice, mock exams, and performance analytics work together to show learners where they are and where they are heading.",
      },
      {
        name: "OMS",
        description:
          "OMS brings structure to homeschools and microschools, with intelligent analysis that helps educators see what is actually working.",
      },
    ],
  },
] as const;
