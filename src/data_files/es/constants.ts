import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Hotel San José del Valle",
  tagline: "La mejor opción para tu estancia profesional.",
  description: "Somos un hotel de negocios con una ubicación privilegiada en el corazón de la ciudad. Ofrecemos habitaciones cómodas y modernas, un restaurante de primera categoría y salas de reuniones completamente equipadas. ¡Reserva ahora!",
  description_short: "Somos un hotel de negocios con una ubicación privilegiada en el corazón de la ciudad.",
  url: "https://screwfast.uk",
  author: "LalaWeen",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "es-MX",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Hotel San José del Valle`,
  description: "Somos un hotel de negocios con una ubicación privilegiada en el corazón de la ciudad. Ofrecemos habitaciones cómodas y modernas, un restaurante de primera categoría y salas de reuniones completamente equipadas. ¡Reserva ahora!",
  image: ogImageSrc,
};
