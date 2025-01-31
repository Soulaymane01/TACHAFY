"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Bubbles from "./Bubbles"

interface ProgramSlidesProps {
  language: "ar" | "en"
}

const slides = [
  { text: "إستراتيجية علاجية مشخصة لك بناءا على متطلباتك و إحتياجاتك.", price: "150 $" },
  { text: "تتعلم كيف تعالج نفسك بنفسك من خلال التمارين اليومية.", price: "200 $" },
  { text: "التحرر من المشاعر السلبية و المشاكل النفسية.", price: "200 $" },
  { text: "حصة علاجية بالتنويم المغناطيسي لتتعلم كيف تتعامل مع مشاكلك النفسية.", price: "200 $" },
  { text: "حصة علاجية بالتنويم المغناطيسي لرفع تقديرك الذاتي.", price: "200 $" },
  { text: "حصة علاجية بالتنويم المغناطيسي لرفع ثقتك بنفسك.", price: "200 $" },
  { text: "فهم نفسك ومشاعرك من خلال تقنية التدوين الموجه.", price: "120 $" },
  { text: "حصة كوتشينغ مجانية لبناء أسلوب حياة يلائمك لإعادة بناء نفسك من جديد.", price: "150 $" },
  { text: "تمارين يومية مسجلة لتتعلم كيف تعالج نفسك بنفسك.", price: "100 $" },
  { text: "متابعة ودعم يومي طيلة أيام البرنامج.", price: "100 $" },
  { text: "زيادة وعيك الذاتي من خلال التتبع اليومي للصحتك النفسية.", price: "100 $" },
]

const content = {
  ar: {
    title: "على ماذا ستحصل داخل هذا البرنامج ؟",
    next: "التالي",
    previous: "السابق",
  },
  en: {
    title: "What will you get in this program?",
    next: "Next",
    previous: "Previous",
  },
}

export default function ProgramSlides({ language }: ProgramSlidesProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          nextSlide()
          return 0
        }
        return Math.min(oldProgress + 1, 100)
      })
    }, 50)

    return () => {
      clearInterval(timer)
    }
  }, [currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setProgress(0)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setProgress(0)
  }

  return (
    <section ref={sectionRef} className="relative bg-white py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Bubbles count={5} colors={["#e0e7ff", "#ddd6fe", "#c7d2fe"]} speed={0.5} containerRef={sectionRef} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-blue-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {content[language].title}
        </motion.h2>
        <div className="relative h-96 flex items-center justify-center">
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute right-0 z-10 rounded-full bg-white/80 hover:bg-white"
            aria-label="Previous slide"
          >
            {content[language].previous}
          </Button>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-2xl"
            >
              <Card className="bg-gradient-to-br from-blue-100 to-blue-200 shadow-xl overflow-hidden">
                <CardContent className="p-8 relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-xl mb-6">{slides[currentSlide].text}</p>
                  </motion.div>
                  <motion.div
                    className="text-right"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="text-3xl font-bold text-blue-600">{slides[currentSlide].price}</span>
                  </motion.div>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-2 bg-blue-200"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                  >
                    <motion.div className="h-full bg-blue-500" style={{ width: `${progress}%` }} />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute left-0 z-10 rounded-full bg-white/80 hover:bg-white"
            aria-label="Next slide"
          >
            {content[language].next}
          </Button>
        </div>
      </div>
    </section>
  )
}

