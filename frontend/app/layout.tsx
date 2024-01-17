import "@/styles/globals.css"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BookStore App',
  description: 'bookstore that understands you',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html lang="en">
      <head />
      <body className={inter.className}>{children}</body>
    </html>
    </>
  )
}
