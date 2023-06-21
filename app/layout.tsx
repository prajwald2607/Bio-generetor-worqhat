import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface LayoutProps {
  children: React.ReactNode;
  metadata: {
    title: string;
    description: string;
  };
}

export default function Layout({ children, metadata }: LayoutProps) {

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
