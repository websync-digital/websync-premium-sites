import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "West Taylor | CEO & Founder of WebSync Digital",
  description: "Visionary entrepreneur and software engineer West Taylor, architecting high-impact digital solutions and AI infrastructure for the Nigerian market.",
  alternates: {
    canonical: "https://websyncdigital.com.ng/west",
  },
  openGraph: {
    title: "West Taylor | Founder of WebSync Digital",
    description: "Architecting the future of accessible high-level technology for Nigerian SMEs. Founder and CEO of WebSync Digital.",
    url: "https://websyncdigital.com.ng/west",
    siteName: "WebSync Digital",
    locale: "en_NG",
    type: "profile",
    firstName: "West",
    lastName: "Taylor",
    username: "west_taylor_",
    images: [
      {
        url: "https://websyncdigital.com.ng/assets/west-portrait.png",
        width: 1200,
        height: 1500,
        alt: "West Taylor - Founder and CEO of WebSync Digital",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "West Taylor | Expert Digital Architect",
    description: "CEO of WebSync Digital, specializing in AI architecture and SME growth.",
    images: ["https://websyncdigital.com.ng/assets/west-portrait.png"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "West Taylor",
  "jobTitle": "Founder and CEO",
  "worksFor": {
    "@type": "Organization",
    "name": "WebSync Digital",
    "url": "https://websyncdigital.com.ng"
  },
  "url": "https://websyncdigital.com.ng/west",
  "image": "https://websyncdigital.com.ng/assets/west-portrait.png",
  "sameAs": [
    "https://www.instagram.com/west_taylor_?igsh=Y2J1b3BvdDlnODAy",
    "https://websyncdigital.com.ng"
  ],
  "description": "West Taylor is a visionary entrepreneur and software engineer, architecting the future of accessible high-level technology and AI infrastructure. He is the founder and CEO of WebSync Digital.",
  "knowsAbout": ["Mixture of Experts Architecture", "Software Engineering", "Web Development", "Artificial Intelligence Infrastructure"]
};

export default function WestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="west-person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {children}
    </>
  );
}
