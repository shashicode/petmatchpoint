import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import Navbar from "./navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dog Buying, Selling, Adoption, and Pet Toys | PetMatchPoint.com',
  description: 'Explore a wide range of dogs for sale, adoption opportunities, and high-quality pet toys on our website. Find your perfect canine companion today.',
  keywords: 'dog buying, dog selling, dog adoption, pet toys, canine companions, adopt a dog, buy a dog, dog breeders, dog toys, pet supplies',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=''><Navbar />{children}<Analytics /></body>
    </html>
  )
}
