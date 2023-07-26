import NavBar from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'Findesign',
  description: 'Share your design with everyone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        
        {/* <NavBar/> */}

        <main>

        {children}
        </main>
        
        <Footer/>
        
        </body>
    </html>
  )
}
