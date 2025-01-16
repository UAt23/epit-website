import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MainNav } from '@/components/main-nav'
import { LanguageProvider } from '@/contexts/language-context'
import { BackgroundDots } from '@/components/background-dots'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EPIT Website',
  description: 'İnşaat Mühendisliği Uygulaması',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={`${inter.className} min-h-screen text-slate-200`}>
        <BackgroundDots />
        <LanguageProvider>
          <div className="flex flex-col lg:flex-row relative">
            <aside className="w-full lg:w-64 h-auto lg:h-screen fixed top-0 z-10 glass-container border-b lg:border-b-0 lg:border-r border-slate-800/50">
              <div className="p-4 lg:p-6">
                <MainNav />
              </div>
            </aside>
            <main className="w-full lg:ml-64 mt-24 lg:mt-0">
              <div className="p-4 lg:p-8">
                {children}
              </div>
            </main>
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}

