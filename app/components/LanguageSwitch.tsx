'use client'

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"

type Language = 'ar' | 'en'

interface LanguageSwitchProps {
  language: Language
  setLanguage: (lang: Language) => void
}

export function LanguageSwitch({ language, setLanguage }: LanguageSwitchProps) {
  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar')
  }

  return (
    <Button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-white/20 hover:bg-white/30 text-white"
    >
      {language === 'ar' ? 'English' : 'العربية'}
    </Button>
  )
}

