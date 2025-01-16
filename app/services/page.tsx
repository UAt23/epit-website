'use client'

import { useLanguage } from '@/contexts/language-context'
import { translations } from '@/lib/translations'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function ServicesPage() {
  const { language } = useLanguage()
  const t = translations[language].services

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl lg:text-4xl font-bold mb-8 lg:mb-12 text-[#e5e5e5] industrial-border inline-block pb-4">
        {t.title}
      </h1>
      
      {t.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-8 lg:mb-12 glass-container p-4 lg:p-8">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 text-[#e5e5e5] glow-accent">
            {section.title}
          </h2>
          
          <Accordion type="single" collapsible className="space-y-3 lg:space-y-4">
            {section.subsections.map((subsection, subsectionIndex) => (
              <AccordionItem 
                key={subsectionIndex} 
                value={`section-${sectionIndex}-${subsectionIndex}`}
                className="industrial-border bg-[#2a2a2a]/30 backdrop-blur-sm"
              >
                <AccordionTrigger 
                  className="px-4 lg:px-6 py-3 lg:py-4 text-[#e5e5e5] hover:text-white transition-colors text-sm lg:text-base"
                >
                  {subsection.title}
                </AccordionTrigger>
                <AccordionContent className="px-4 lg:px-6 pb-3 lg:pb-4">
                  <ul className="list-disc list-inside space-y-2 lg:space-y-3 text-[#a3a3a3] text-sm lg:text-base">
                    {subsection.items.map((item, itemIndex) => (
                      <li 
                        key={itemIndex} 
                        className="leading-relaxed hover:text-[#e5e5e5] transition-colors"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  )
} 