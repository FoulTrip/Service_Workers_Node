import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TripCode Devs',
  description: 'Created by TripCode',
  manifest: "/manifest.json",
  icons: {
    apple: "/icon.png"
  },
  themeColor: "#000000"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}