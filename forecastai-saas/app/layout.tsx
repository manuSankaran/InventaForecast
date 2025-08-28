import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ForecastAI - AI-Powered Demand Forecasting',
  description: 'Transform your business with AI-powered demand forecasting. Reduce inventory costs, prevent stockouts, and boost revenue with our advanced machine learning platform.',
  keywords: 'demand forecasting, AI, machine learning, inventory management, supply chain, predictive analytics',
  authors: [{ name: 'ForecastAI Team' }],
  openGraph: {
    title: 'ForecastAI - AI-Powered Demand Forecasting',
    description: 'Transform your business with AI-powered demand forecasting.',
    url: 'https://forecastai.com',
    siteName: 'ForecastAI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ForecastAI - AI-Powered Demand Forecasting',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ForecastAI - AI-Powered Demand Forecasting',
    description: 'Transform your business with AI-powered demand forecasting.',
    images: ['/og-image.png'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
