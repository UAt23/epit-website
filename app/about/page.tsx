'use client'

import { useLanguage } from '@/contexts/language-context'
import { translations } from '@/lib/translations'

export default function AboutPage() {
  const { language } = useLanguage()
  const t = translations[language].about

  return (
    <div className="p-24">
      <h1 className="text-4xl font-bold mb-6">{t.title}</h1>
      <p className="text-lg text-gray-700">
        {t.description}
      </p>
    </div>
  )
} 