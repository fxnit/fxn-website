import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "FXN IT - Fix IT Right. Build IT Bright.",
  description: "FXN IT delivers Infrastructure, DevOps, Cloud, and AI-ready systems with productized service packages called WeGot. From Dubai to global reach.",
  keywords: "FXN IT, fxnit, WeGot, InfraFix, CloudFix, AI-Ready Infra, Infrastructure consulting, Cloud computing, DevOps, Kubernetes, MLOps, Dubai IT consulting",
  authors: [{ name: "FXN IT" }],
  creator: "FXN IT",
  publisher: "FXN IT",
  robots: "index, follow",
  openGraph: {
    title: "FXN IT - Fix IT Right. Build IT Bright.",
    description: "Infrastructure, DevOps, Cloud, and AI-ready systems with WeGot solutions",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-white text-gray-900`}
        suppressHydrationWarning={true}
      >
        <div suppressHydrationWarning={true}>
          {children}
        </div>
      </body>
    </html>
  );
}
