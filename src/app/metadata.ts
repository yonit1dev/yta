import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yonathan | Discovering Tech and Business",
  description: "Personal page of Yonathan, sharing experiences",
  keywords: [
    "software engineer",
    "technical director",
    "web development",
    "Ethiopia",
    "EdTech",
  ],
  authors: [{ name: "Yonathan Tessema" }],
  openGraph: {
    title: "Yonathan | Discovering Tech and Business",
    description: "Personal page of Yonathan, sharing experiences",
    url: "https://yonit.dev",
    siteName: "Yonathan Tessema",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Yonathan Tessema",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yonathan | Discovering Tech and Business",
    description: "Personal page of Yonathan, sharing experiences",
    creator: "@yonathananosie",
    images: ["/og.jpg"],
  },
};
