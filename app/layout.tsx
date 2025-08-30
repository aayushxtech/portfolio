import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: {
    default: "Aayush Samal - Computer Science Student & AI/ML Developer",
    template: "%s | Aayush Samal",
  },
  description:
    "Computer Science student at SRM Institute of Science and Technology, Chennai. Passionate about AI/ML development and software engineering. Exploring full-stack development, machine learning, and innovative tech solutions in Tamil Nadu, India.",
  keywords: [
    "Computer Science Student",
    "AI",
    "Machine Learning",
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Python",
    "Portfolio",
    "SRM Institute",
    "Chennai",
    "Tamil Nadu",
    "India",
    "Student Developer",
    "Tech Student Chennai",
    "AI Developer India",
  ],
  authors: [{ name: "Aayush Samal" }],
  creator: "Aayush Samal",
  publisher: "Aayush Samal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aayushxtech.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aayush Samal - Computer Science Student & AI/ML Developer",
    description:
      "Computer Science student at SRM Institute of Science and Technology, Chennai. Passionate about AI/ML development and software engineering. Exploring full-stack development, machine learning, and innovative tech solutions in Tamil Nadu, India.",
    url: "https://aayushxtech.vercel.app",
    siteName: "Aayush Samal Portfolio",
    images: [
      {
        url: "/profile-pic.jpg",
        width: 1200,
        height: 630,
        alt: "Aayush Samal - Computer Science Student & AI/ML Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayush Samal - Computer Science Student & AI/ML Developer",
    description:
      "Computer Science student at SRM Institute of Science and Technology, Chennai. Passionate about AI/ML development and software engineering. Exploring full-stack development, machine learning, and innovative tech solutions in Tamil Nadu, India.",
    images: ["/twitter-card.png"],
    creator: "@AayushxTech",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.ico",
    shortcut: "/icon.ico",
    apple: "/icon.ico",
  },
  manifest: "/manifest.json",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aayush Samal",
    jobTitle: "Computer Science Student & AI/ML Developer",
    email: "aayushxtech@gmail.com",
    description:
      "Computer Science student at SRM Institute of Science and Technology, Chennai. Passionate about AI/ML development and software engineering. Exploring full-stack development, machine learning, and innovative tech solutions in Tamil Nadu, India.",
    url: "https://aayushxtech.vercel.app",
    image: "https://aayushxtech.vercel.app/profile-pic.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    sameAs: [
      "https://github.com/aayushxtech",
      "https://linkedin.com/in/aayush-samal",
      "https://x.com/AayushxTech",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Full Stack Development",
      "React",
      "Next.js",
      "Python",
      "JavaScript",
      "TypeScript",
      "AI/ML",
      "Web Development",
      "Computer Science",
      "Software Engineering",
      "Chennai Tech Community",
      "Indian Tech Industry",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "SRM Institute of Science and Technology",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
        postalCode: "600026",
      },
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Computer Science Student",
      occupationLocation: {
        "@type": "City",
        name: "Chennai",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
    },
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Kd8euF_tCYThyxHLNGT8AfEyNpDixbWrR-wGOCv8ihs"
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VW05WCTD9X"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VW05WCTD9X');
          `}
        </Script>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WWPQDL2H');
          `}
        </Script>
        <meta name="google-site-verification" content="" />
        <meta name="msvalidate.01" content="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WWPQDL2H"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
