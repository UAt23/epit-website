'use client'

import { useLanguage } from '@/contexts/language-context'
import { translations } from '@/lib/translations'

export default function Home() {
  const { language } = useLanguage()
  const t = translations[language].home

  return (
    <div className="p-24">
      <h1 className="text-4xl font-bold">{t.welcome}</h1>
      <p className="mt-4 text-lg text-gray-700">
        {t.subtitle}
      </p>
    </div>
  )
}

