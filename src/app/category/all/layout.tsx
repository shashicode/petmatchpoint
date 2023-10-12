import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Find Your Perfect Furry Companion: Pet Adoption & Rehoming | PetMatchPoint.com',
  description: 'Explore a wide selection of lovable pets for adoption and rehoming on our dedicated website. Discover the ideal four-legged friend to join your family. Avoid keywords like "dog buying" and "dog selling" to focus on promoting responsible pet ownership and adoption.',
  keywords: 'Adopt a Pet, Pet Adoption, Pet Rehoming, Rescue Pets, Furry Friends, Adoptable Dogs, Pet Adoption Center, Pet Adoption Services, Pet Adoption Agency, Pet Adoption Website, Pet Adoption Listings, Loving Pets for Adoption, Find a Pet, Pet Adoption Process, Adoptable Animals, Pet Adoption Near Me, Pet Adoption Resources, Pet Adoption Guidance, Pet Adoption Options, Pet Adoption Supportdog buying, dog selling, dog adoption, pet toys, canine companions, adopt a dog, buy a dog, dog breeders, dog toys, pet supplies',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>{children}</>
  )
}
