'use client';

import { Geist, Geist_Mono, Merriweather } from "next/font/google";
import "./globals.css";
import { UserRoleProvider } from "@/contexts/UserRoleContext";
import { RoleSelectionModal } from "@/components/modals/RoleSelectionModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BuukClub",
    url: "https://buukclub.com",
    logo: "https://buukclub.com/logo.png",
    description: "A premium platform for book enthusiasts and authors.",
  };

  return (
    <html lang="en">
      <head>
        <title>BuukClub | The Premium Book Club Experience</title>
        <meta name="description" content="Join the most exclusive community for book lovers. Track your reading, discover new favorites, and connect with fellow readers." />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} antialiased bg-background text-foreground paper-texture`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <UserRoleProvider>
          <RoleSelectionModal />
          {children}
        </UserRoleProvider>
      </body>
    </html>
  );
}
