import type React from "react"
import type { Metadata } from "next"
import { Poppins, Merriweather } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { AuthProvider } from "@/lib/auth-context"
import "./globals.css"
import "./globals.css";
import Footer from "@/components/footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Green Whirl - Affordable Homes in Amazing Locations",
    template: "%s | Green Whirl",
  },
  description:
    "Discover your perfect home with Green Whirl. We offer a selection of affordable homes in amazing locations, perfect for married couples looking for comfort and quality.",
  keywords:
    "affordable homes, real estate, married couples, comfortable living, home buying, property listings, Green Whirl",
  authors: [{ name: "Green Whirl Team" }],
  creator: "Green Whirl",
  publisher: "Green Whirl",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://greenwhirl.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://greenwhirl.com",
    title: "Green Whirl - Affordable Homes in Amazing Locations",
    description:
      "Discover your perfect home with Green Whirl. We offer a selection of affordable homes in amazing locations, perfect for married couples.",
    siteName: "Green Whirl",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Green Whirl - Affordable Homes for Couples",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Whirl - Affordable Homes in Amazing Locations",
    description:
      "Discover your perfect home with Green Whirl. Affordable homes in amazing locations for married couples.",
    images: ["/og-image.jpg"],
    creator: "@greenwhirl",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Green Whirl",
              description:
                "Real estate company specializing in affordable homes for married couples in amazing locations",
              url: "https://greenwhirl.com",
              logo: "https://greenwhirl.com/logo.png",
              image: "https://greenwhirl.com/og-image.jpg",
              telephone: "(555) 123-4567",
              email: "info@greenwhirl.com",
              areaServed: [
                "Maple Heights",
                "Riverside District",
                "Oak Valley",
                "Meadowbrook",
                "Heritage Hills",
                "Downtown Core",
              ],
              serviceType: [
                "Real Estate Sales",
                "Property Listings",
                "Home Buying Assistance",
                "Real Estate Consultation",
              ],
              priceRange: "$265,000 - $340,000",
              foundingDate: "2020",
              sameAs: ["https://facebook.com/greenwhirl", "https://instagram.com/greenwhirl"],
            }),
          }}
        />
      </head>
      <body className={`font-serif ${poppins.variable} ${merriweather.variable}`}>
        <AuthProvider>
          <Suspense fallback={null}>
            {children}
            <Footer />
            <Analytics />
          </Suspense>
        </AuthProvider>
      </body>
    </html>
  );
}
