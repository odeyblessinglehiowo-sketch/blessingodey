import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blessingodey.com"),

  title: "Blessing Odey Lehiowo | Web Developer",

  description:
    "I design and develop modern, responsive, and high-performing websites and web applications for businesses, organizations, and brands.",

  keywords: [
    "Blessing Odey",
    "Blessing Odey Lehiowo",
    "Blessing",
    "Odey",
    "Lehiowo",
    "Blessing Odey Web Developer",
    "Web Developer",
    "Web Developer Nigeria",
    "Frontend Developer",
    "Frontend Web Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "WordPress Developer",
    "Website Developer",
    "Web Designer",
    "Designer",
    "Developer",
    "Web Applications",
    "Business Websites",
    "OdeyForge Technologies",
  ],

  authors: [
    {
      name: "Blessing Odey Lehiowo",
      url: "https://blessingodey.com",
    },
  ],

  creator: "Blessing Odey Lehiowo",

  alternates: {
    canonical: "https://blessingodey.com",
  },

  openGraph: {
    type: "website",
    url: "https://blessingodey.com",
    title: "Blessing Odey Lehiowo | Web Developer",
    description:
      "I design and develop modern, responsive, and high-performing websites and web applications using Next.js, React, TypeScript, Tailwind CSS, and WordPress.",
    siteName: "Blessing Odey Lehiowo",
    images: [
      {
        url: "/images/blessingb.webp",
        width: 1200,
        height: 630,
        alt: "Blessing Odey Lehiowo | Web Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Blessing Odey Lehiowo | Web Developer",
    description:
      "I design and develop modern, responsive, and high-performing websites and web applications using Next.js, React, TypeScript, Tailwind CSS, and WordPress.",
    images: ["/images/blessingb.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}