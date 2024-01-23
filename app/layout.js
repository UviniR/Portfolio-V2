import siteMetaData from "@data/siteMetaData";
import styles from "@styles/globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(siteMetaData.url),
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  title: {
    template: `%s - Name ${siteMetaData.year}`,
    default: siteMetaData.title,
  },
  description: siteMetaData.description,
  keywords: ['', '', '', '', siteMetaData.year, '', ``],
  authors: [{ name: 'Your Name (Name)', url: siteMetaData.url }],
  openGraph: {
    title: {
      template: `%s - Name ${siteMetaData.year}`,
      default: siteMetaData.title,
    },
    description: siteMetaData.description,
    url: '/',
    siteName: siteMetaData.title,
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: `%s - Name ${siteMetaData.year}`,
      default: siteMetaData.title,
    },
    description: siteMetaData.description,
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: false,
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
        <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Rancho&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap" rel="stylesheet"></link>
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="icon" type="image/png" href="/logo.png" />
      </head>
      <body>{children}</body>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></Script>
    </html>
  );
}


