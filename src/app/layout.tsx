import { ReactNode } from 'react';
import { Inter } from 'next/font/google'
import Navbar from './components/Nabvar/Navbar';
import './globals.css'
interface LayoutProps {
  children: ReactNode;
}

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="flex flex-col min-h-screen">
          <header>
            <Navbar />
          </header>
          <main className="flex-grow mt-28">{children}</main>
          <footer className="mt-30">
          </footer>
        </div>
      </body>
    </html>
  );
}