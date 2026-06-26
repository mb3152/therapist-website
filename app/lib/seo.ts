import type { Metadata } from "next";

function normalizeSiteUrl(value: string) {
  return value.replace(/\/+$/, "");
}

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteConfig = {
  url: normalizeSiteUrl(configuredSiteUrl || "https://rachelzagtherapy.com"),
  name: "Rachel Zagarino, LMFT",
  practiceName: "Rachel Zagarino Therapy",
  description:
    "Therapy in Jenkintown, PA for individuals, couples, children, adolescents, and families with Rachel Zagarino, LMFT.",
  socialImage: "/images/opt-c.jpg",
  locale: "en_US",
  serviceArea: "Jenkintown, PA",
};

export const therapyServices = [
  {
    title: "Family Therapy",
    description:
      "Rachel works with the entire family system to understand relational dynamics and navigate challenges together. Her approach empowers families to overcome systemic barriers and build stronger, more connected relationships.",
  },
  {
    title: "Couples Therapy",
    description:
      "Rachel supports couples in deepening their understanding of each other and strengthening their relational bond. Sessions focus on improving communication, rebuilding trust, and developing tools for lasting connection.",
  },
  {
    title: "Individual Therapy",
    description:
      "Rachel works with adults, children, and adolescents ages 7 and older, creating a supportive space to explore emotions, relationships, life transitions, stress, anxiety, trauma, and personal growth. Her approach helps clients better understand themselves, build resilience, and develop tools for navigating challenges with greater clarity and confidence.",
  },
  {
    title: "Child Therapy",
    description:
      "Rachel works with children through Play Therapy to support a variety of concerns, including trauma, anxiety, and behavioral concerns.",
  },
  {
    title: "Parent and Caregiver Support",
    description:
      "Rachel helps parents and caregivers develop tools, guidance, and support for navigating challenges within the family system.",
  },
];

export const serviceQuestions = [
  {
    question: "Do you work with children and adolescents?",
    answer:
      "Yes. Rachel works with children ages 7 and older, adolescents, and their families, including through Play Therapy and parent or caregiver support.",
  },
  {
    question: "Do you offer couples therapy?",
    answer:
      "Yes. Couples therapy focuses on communication, trust, relational patterns, and tools for building a stronger connection.",
  },
  {
    question: "Where is the practice located?",
    answer:
      "Rachel's therapy practice is based in Jenkintown, PA, serving individuals, couples, children, adolescents, and families in the surrounding area.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Rachel does not take insurance directly, but she can provide superbills for possible insurance reimbursement.",
  },
];

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: siteConfig.socialImage,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.socialImage],
    },
  };
}

export function siteJsonLd() {
  const practiceId = absoluteUrl("/#practice");
  const personId = absoluteUrl("/#rachel-zagarino");
  const websiteId = absoluteUrl("/#website");

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": websiteId,
      name: siteConfig.name,
      url: absoluteUrl("/"),
      publisher: {
        "@id": practiceId,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": practiceId,
      name: siteConfig.practiceName,
      url: absoluteUrl("/"),
      image: absoluteUrl(siteConfig.socialImage),
      description: siteConfig.description,
      priceRange: "$135-$150 per session",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jenkintown",
        addressRegion: "PA",
        postalCode: "19046",
        addressCountry: "US",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Jenkintown",
        },
        {
          "@type": "AdministrativeArea",
          name: "Montgomery County, PA",
        },
      ],
      founder: {
        "@id": personId,
      },
      makesOffer: therapyServices.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          areaServed: siteConfig.serviceArea,
          provider: {
            "@id": practiceId,
          },
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": personId,
      name: "Rachel Zagarino",
      honorificSuffix: "LMFT",
      jobTitle: "Licensed Marriage and Family Therapist",
      image: absoluteUrl("/images/IMG_6910.jpeg"),
      worksFor: {
        "@id": practiceId,
      },
    },
  ];
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function servicesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Therapy services in Jenkintown, PA",
    itemListElement: therapyServices.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@id": absoluteUrl("/#practice"),
        },
        areaServed: siteConfig.serviceArea,
      },
    })),
  };
}

export function serviceQuestionsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: serviceQuestions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
