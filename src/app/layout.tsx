import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
    title: "Websyncdigital | Launch Your Premium Business Website for ₦6,999",
    description: "Scale your business with a luxury website designed and managed by Vibe Coders. Get professional hosting and 24/7 support for just ₦6,999/month. No setup fees. Live in 7–14 days.",
    authors: [{ name: "Websyncdigital" }],
    icons: {
        icon: "/favicon.png",
    },
    openGraph: {
        title: "Websyncdigital | Launch Your Premium Business Website for ₦6,999",
        description: "Scale your business with a luxury website designed and managed by Vibe Coders. Get professional hosting and 24/7 support for just ₦6,999/month. No setup fees. Live in 7–14 days.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // Schema data from original index.html
    const schemaData = [
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Websyncdigital",
            "url": "https://websyncdigital.com.ng",
            "logo": "https://websyncdigital.com.ng/favicon.png",
            "sameAs": [
                "https://facebook.com/websyncdigital",
                "https://twitter.com/websyncdigital",
                "https://instagram.com/websyncdigital",
                "https://linkedin.com/company/websyncdigital"
            ],
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+2347043576814",
                "contactType": "customer service",
                "areaServed": ["NG", "Lagos", "Abuja", "Port Harcourt", "Anambra"],
                "availableLanguage": "English"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Websyncdigital",
            "image": "https://websyncdigital.com.ng/favicon.png",
            "telephone": "+2347043576814",
            "email": "digitalwebsync@gmail.com",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Awka",
                "addressRegion": "Anambra",
                "addressCountry": "NG"
            },
            "priceRange": "₦6,999/month",
            "areaServed": [
                { "@type": "City", "name": "Lagos" },
                { "@type": "City", "name": "Abuja" },
                { "@type": "City", "name": "Port Harcourt" },
                { "@type": "City", "name": "Awka" },
                { "@type": "State", "name": "Anambra" }
            ],
            "url": "https://websyncdigital.com.ng"
        },
        {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "West",
            "jobTitle": "Founder & CEO",
            "affiliation": {
                "@type": "Organization",
                "name": "Websyncdigital"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "King Austin",
            "jobTitle": "Co-Founder & COO",
            "affiliation": {
                "@type": "Organization",
                "name": "Websyncdigital"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Will Websyncdigital have access to my money?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. Websyncdigital only receives your subscription payment after you authorize it securely through your bank."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why do I need to verify with BVN?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "BVN is used only to confirm identity. It cannot be used to debit your account."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Will this debit my account automatically?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes — once monthly for your subscription, until you cancel."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is my bank supported?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "All major Nigerian banks supported by Monnify."
                    }
                }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Websyncdigital",
            "url": "https://websyncdigital.com.ng",
            "description": "Premium Websites. One Small Monthly Fee. Built and managed by Vibe Coders.",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "All",
            "offers": {
                "@type": "Offer",
                "price": "6999.00",
                "priceCurrency": "NGN"
            },
            "potentialAction": [
                { "@type": "ViewAction", "name": "Pricing Plans", "target": "https://websyncdigital.com.ng/#pricing" },
                { "@type": "ViewAction", "name": "How It Works", "target": "https://websyncdigital.com.ng/#how-it-works" },
                { "@type": "ViewAction", "name": "Portfolio", "target": "https://websyncdigital.com.ng/#portfolio" },
                { "@type": "ViewAction", "name": "About Us", "target": "https://websyncdigital.com.ng/#about" }
            ]
        }
    ];

    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
            </head>
            <body className="font-sans antialiased">
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
