import './globals.css'
import { Inter } from 'next/font/google'
import Nav from "./components/Nav.jsx"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Seguimiento',
  description: 'Sistema de seguimiento de postventa',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
      <Nav/>
      {children}
      </body>
    </html>
  )
}
