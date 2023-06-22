import './globals.css'
import { useEffect } from 'react'
import { Inter } from 'next/font/google'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const loadInter = async () => {
      const inter = await Inter({ subsets: ['latin'] })
      document.body.classList.add(inter.className)
    }

    loadInter()

    return () => {
      document.body.classList.remove('inter')
    }
  }, [])

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
