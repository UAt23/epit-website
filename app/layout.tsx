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
          <div className="relative p-4 lg:p-6">
            {/* Floating top navigation */}
            <nav className="fixed top-4 lg:top-6 left-4 right-4 z-10">
              <div className="max-w-7xl mx-auto">
                <div className="rounded-2xl bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 shadow-2xl">
                  <div className="p-4 lg:p-6">
                    <MainNav />
                  </div>
                </div>
              </div>
            </nav>

            {/* Main content */}
            <main className="pt-32 lg:pt-36">
              <div className="max-w-7xl mx-auto">
                <div className="p-4 lg:p-8">
                  {children}
                </div>
              </div>
            </main>
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}

