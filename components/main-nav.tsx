'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { Logo } from './logo'
import { LanguageSwitcher } from './language-switcher'
import { useLanguage } from '@/contexts/language-context'
import { translations } from '@/lib/translations'
import { useState } from 'react'

export function MainNav() {
  const pathname = usePathname()
  const router = useRouter()
  const { language } = useLanguage()
  const t = translations[language].nav
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    {
      label: t.about,
      href: '/about',
    },
    {
      label: t.services,
      href: '/services',
    },
    {
      label: t.projects,
      href: '/projects',
    },
    {
      label: t.innovation,
      href: '/innovation',
    },
    {
      label: t.contact,
      href: '/contact',
    },
    {
      label: t.blog,
      href: '/blog',
    },
  ]

  const handleNavigation = (href: string) => {
    setIsOpen(false)
    router.push(href)
  }

  return (
    <>
      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-[#3a3a3a] h-12 w-12"
              >
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="bottom" 
              className="h-[80vh] bg-[#1a1a1a]/95 border-[#2a2a2a]"
            >
              <nav className="flex flex-col space-y-4 mt-6">
                {routes.map((route) => (
                  <button
                    key={route.href}
                    onClick={() => handleNavigation(route.href)}
                    className={cn(
                      'text-lg font-medium transition-colors px-4 py-4 rounded-md text-center',
                      pathname === route.href 
                        ? 'text-[#e5e5e5] bg-[#3a3a3a]' 
                        : 'text-[#a3a3a3] hover:text-[#e5e5e5] hover:bg-[#3a3a3a]'
                    )}
                  >
                    {route.label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <Logo />
          <LanguageSwitcher />
        </div>
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              'text-base font-medium transition-all hover:text-[#e5e5e5] hover:bg-[#3a3a3a] px-3 py-2 rounded-md',
              pathname === route.href 
                ? 'text-[#e5e5e5] bg-[#3a3a3a]' 
                : 'text-[#a3a3a3]'
            )}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </>
  )
}

