import Container from '@/components/Container'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Serkan Yalçınkaya',
  description: 'My portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          <Navbar/>

          {children}
        </Container>
      </body>
    </html>
  )
}
