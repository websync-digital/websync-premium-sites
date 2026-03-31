"use client";

import Script from 'next/script';

const SchemaOrg = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WebSync Digital",
    "alternateName": "WebSync Nigeria",
    "url": "https://websyncdigital.com.ng",
    "logo": "https://websyncdigital.com.ng/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+2349111719701",
      "contactType": "customer service",
      "areaServed": "NG",
      "availableLanguage": "en"
    },
    "founder": [
      {
        "@type": "Person",
        "name": "West Taylor",
        "jobTitle": "CEO & Founder"
      },
      {
        "@type": "Person",
        "name": "Nwora Ebuka",
        "alternateName": "King Austin",
        "jobTitle": "COO & Co-Founder"
      }
    ],
    "sameAs": [
      "https://wa.me/2349111719701",
      "https://instagram.com/websyncdigital",
      "https://linkedin.com/company/websyncdigital"
    ],
    "description": "WebSync Digital is Nigeria's elite digital asset agency, providing premium bespoke web design and branding for SMEs at an affordable ₦9,999/month subscription."
  };

  const personWestSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "West Taylor",
    "jobTitle": "CEO & Founder of WebSync Digital",
    "worksFor": {
      "@type": "Organization",
      "name": "WebSync Digital",
      "url": "https://websyncdigital.com.ng"
    },
    "description": "West Taylor is a visionary leader and the Founder of WebSync Digital, recognized for engineering elite digital ecosystems and democratizing high-end web design for Nigerian SMEs. Known for his mission to scale the African enterprise via world-class technical infrastructure.",
    "url": "https://websyncdigital.com.ng/west",
    "mainEntityOfPage": "https://websyncdigital.com.ng/west",
    "knowsAbout": ["Digital Transformation", "Nigerian SME Growth", "Bespoke Web Engineering", "Strategic Leadership"],
    "sameAs": [
      "https://wa.me/2349111719701",
      "https://websyncdigital.com.ng"
    ]
  };

  const personKingSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nwora Ebuka",
    "alternateName": "King Austin",
    "jobTitle": "COO of WebSync Digital",
    "worksFor": {
      "@type": "Organization",
      "name": "WebSync Digital",
      "url": "https://websyncdigital.com.ng"
    },
    "description": "Operations and technical architecture expert, co-founder of WebSync Digital, driving seamless scalability for Nigerian SMEs.",
    "url": "https://websyncdigital.com.ng/#founders",
    "mainEntityOfPage": "https://websyncdigital.com.ng/#founders"
  };

  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "Solutions",
        "url": "https://websyncdigital.com.ng/#pricing"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "Pricing",
        "url": "https://websyncdigital.com.ng/#pricing"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "Work",
        "url": "https://websyncdigital.com.ng/#metrics"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Vision",
        "url": "https://websyncdigital.com.ng/#founders"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": "Founder - West Taylor",
        "url": "https://websyncdigital.com.ng/west"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 6,
        "name": "Contact",
        "url": "https://wa.me/2349111719701"
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://websyncdigital.com.ng"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Pricing & Plans",
        "item": "https://websyncdigital.com.ng/#pricing"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Founder - West Taylor",
        "item": "https://websyncdigital.com.ng/west"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Terms of Service",
        "item": "https://websyncdigital.com.ng/terms"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Privacy Policy",
        "item": "https://websyncdigital.com.ng/privacy"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Connect on WhatsApp",
        "item": "https://wa.me/2349111719701"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a website cost with WebSync Digital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WebSync Digital offers a premium ₦9,999 monthly subscription with zero setup fees, covering design, hosting, and unlimited updates."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to launch a website?",
        "acceptedAnswer": {
          "@type": {
            "@type": "Answer",
            "text": "Our elite technical team guarantees a fast launch within 7 to 14 days for most professional digital assets."
          }
        }
      }
    ]
  };

  const blogCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "WebSync Digital Intelligence Hub",
    "description": "Premium insights and digital growth strategies for the Nigerian SME market.",
    "url": "https://websyncdigital.com.ng/blog",
    "publisher": {
      "@type": "Organization",
      "name": "WebSync Digital",
      "url": "https://websyncdigital.com.ng"
    }
  };

  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="schema-west"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personWestSchema) }}
      />
      <Script
        id="schema-king"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personKingSchema) }}
      />
      <Script
        id="schema-nav"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationSchema) }}
      />
      <Script
        id="schema-bread"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-blog-collection"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogCollectionSchema) }}
      />
    </>
  );
};

export default SchemaOrg;
