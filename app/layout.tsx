import './globals.css'
import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [interClassName, setInterClassName] = useState('')

  useEffect(() => {
    const loadInter = async () => {
      const inter = await Inter({ subsets: ['latin'] })
      setInterClassName(inter.className)
    }

    loadInter()
  }, [])

  return (
    <html lang="en">
      <body className={interClassName}>{children}</body>
    </html>
  )
}
