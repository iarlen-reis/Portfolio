import { Merienda, Roboto_Mono as RobotoMono } from 'next/font/google'
import Header from '@/components/header'
import type { Metadata } from 'next'
import clsx from 'clsx'
import './globals.css'

const robotoMono = RobotoMono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto-mono',
})

const merienda = Merienda({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-merienda',
})

export const metadata: Metadata = {
  title: 'Portfolio - Iarlen Reis',
  description: 'Portfólio do desenvolvedor Iarlen Reis',
  keywords: [
    'Iarlen Reis',
    'Desenvolvedor Front-end',
    'JavaScript',
    'React',
    'Next.js',
    'Portfolio',
    'TypeScript',
    'Tailwind',
    'React Native',
    'Java',
    'HTML',
    'CSS',
    'Desenvolvedor',
    'Spring Boot',
    'Spring security',
    'Salvador',
    'Brasil',
    'Bahia',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={clsx(robotoMono.className, merienda.variable)}>
        <Header />
        <main className="container mx-auto px-3">{children}</main>
      </body>
    </html>
  )
}
