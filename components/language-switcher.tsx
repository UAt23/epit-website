'use client'

import { useLanguage } from '@/contexts/language-context'
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

const languages = [
  { code: 'tr', name: 'Türkçe' },
  { code: 'en', name: 'English' },
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const switchLanguage = (newLocale: 'tr' | 'en') => {
    setLanguage(newLocale)
    localStorage.setItem('preferredLanguage', newLocale)
    // Force a page refresh to update all components
    window.location.reload()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="hover:bg-[#3a3a3a] h-12 w-12 lg:h-10 lg:w-10"
        >
          <Globe className="h-7 w-7 lg:h-6 lg:w-6" />
          <span className="sr-only">Switch Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-[#1a1a1a]/95 border-[#2a2a2a] min-w-[150px]"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => switchLanguage(lang.code as 'tr' | 'en')}
            className={cn(
              'text-[#a3a3a3] hover:text-[#e5e5e5] hover:bg-[#3a3a3a] cursor-pointer py-3 text-base',
              language === lang.code && 'text-[#e5e5e5] bg-[#3a3a3a]'
            )}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 