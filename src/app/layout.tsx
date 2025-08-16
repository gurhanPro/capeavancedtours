import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cape Advanced Tours - Professional Cape Town Tours & Airport Transfers",
  description: "Professional tour operator in Cape Town offering airport transfers, Table Mountain tours, Cape Point excursions, and wine country visits. Available 24/7. Book your Cape Town adventure today!",
  keywords: "Cape Town tours, airport transfers, Table Mountain, Cape Point, wine tours, South Africa tourism, Western Cape tours, Cape Town transfers, sightseeing tours",
  authors: [{ name: "Cape Advanced Tours" }],
  creator: "Cape Advanced Tours",
  publisher: "Cape Advanced Tours",
  openGraph: {
    title: "Cape Advanced Tours - Your Cape Town Adventure Starts Here",
    description: "Professional tours and transfers in Cape Town. Available 24/7 for airport transfers, Table Mountain tours, Cape Point excursions, and custom experiences.",
    url: "https://capeadvancedtours.com",
    siteName: "Cape Advanced Tours",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cape Advanced Tours - Cape Town Tours and Transfers",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cape Advanced Tours - Cape Town Tours & Transfers",
    description: "Professional tour operator in Cape Town. Airport transfers, Table Mountain tours, Cape Point excursions. Available 24/7.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TourOperator",
    "name": "Cape Advanced Tours",
    "description": "Professional tour operator in Cape Town offering airport transfers, Table Mountain tours, Cape Point excursions, and wine country visits.",
    "url": "https://capeadvancedtours.com",
    "logo": "https://capeadvancedtours.com/logo.png",
    "image": "https://capeadvancedtours.com/og-image.jpg",
    "telephone": "+27839546069",
    "email": "info@capeadvancedtours.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "61 Plein St",
      "addressLocality": "Cape Town City Centre",
      "addressRegion": "Western Cape",
      "postalCode": "8000",
      "addressCountry": "ZA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-33.9249",
      "longitude": "18.4241"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$",
    "currenciesAccepted": "ZAR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-33.9249",
        "longitude": "18.4241"
      },
      "geoRadius": "100000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cape Town Tours and Transfers",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Airport Transfer Service",
            "description": "Professional airport transfers to and from Cape Town International Airport"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Table Mountain Tours",
            "description": "Guided tours to Table Mountain, one of Cape Town's most iconic attractions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cape Point Excursions",
            "description": "Full-day excursions to Cape Point and the Cape of Good Hope"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wine Country Tours",
            "description": "Tours of the famous Cape Winelands including Stellenbosch and Franschhoek"
          }
        }
      ]
    },
    "sameAs": [
      "https://wa.me/27839546069"
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Cape Tours" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
