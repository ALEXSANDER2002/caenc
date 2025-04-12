import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import BottomNavigation from "@/components/bottom-navigation"
import DesktopNavigation from "@/components/desktop-navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { Alice as Rawline } from "next/font/google"
import { Montserrat } from "next/font/google"
import PWAInstallPrompt from "@/components/pwa-install-prompt"
import FirstVisitDetector from "@/components/first-visit-detector"

const rawline = Rawline({
  subsets: ["latin"],
  variable: "--font-rawline",
  display: "swap",
  weight: "400",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "CAENC - Centro Acadêmico de Engenharia da Computação",
  description: "Aplicativo oficial do Centro Acadêmico de Engenharia da Computação",
  manifest: "/manifest.json",
  themeColor: "#071D41",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "CAENC App",
  },
  formatDetection: {
    telephone: true,
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="application-name" content="CAENC App" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CAENC App" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#071D41" />
        <meta name="msapplication-tap-highlight" content="no" />

        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/caencss-logo-mobile.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/icon-167x167.png" />

        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="CAENC App" />
        <meta name="twitter:description" content="Aplicativo oficial do Centro Acadêmico de Engenharia da Computação" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CAENC App" />
        <meta property="og:description" content="Aplicativo oficial do Centro Acadêmico de Engenharia da Computação" />
        <meta property="og:site_name" content="CAENC App" />
      </head>
      <body className={`${rawline.variable} ${montserrat.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex flex-col min-h-screen bg-gov-gray-50">
            <header className="bg-gradient-to-r from-gov-blue-900 to-gov-blue-800 text-white py-2 px-4 text-center text-sm font-medium shadow-sm">
              Faculdade de Engenharia da Computação
            </header>
            <main className="flex-1 container mx-auto px-4 pb-20 lg:pb-8 lg:pt-4">{children}</main>
            <BottomNavigation />
            <DesktopNavigation />
            <PWAInstallPrompt />
            <FirstVisitDetector />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'