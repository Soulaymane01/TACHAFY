"use client"

import { motion, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useEffect } from "react"
import Bubbles from "./Bubbles"

interface CallToActionProps {
  language: "ar" | "en"
}

const content = {
  ar: {
    title: "ابدأ رحلتك الآن",
    description: "لأنك تستحق السلام الداخلي",
    limitedOffer: "أماكن محدودة لضمان تجربة شخصية ومتابعة دقيقة.",
    cta: "احجز مكانك الآن",
  },
  en: {
    title: "Start Your Journey Now",
    description: "Because you deserve inner peace.",
    limitedOffer: "Limited spots to ensure a personalized experience and close follow-up.",
    cta: "Book Your Spot Now",
  },
}


export default function CallToAction({ language }: CallToActionProps) {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      scale: [1, 1.1, 1],
      transition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
    })
  }, [controls])

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Bubbles count={15} colors={["#bfdbfe", "#a5f3fc", "#e0f2fe"]} />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-6"
        >
          {content[language].title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl mb-12"
        >
          {content[language].description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-red-300 text-xl">{content[language].limitedOffer}</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 rounded-full shadow-lg transition duration-300"
          >
            {content[language].cta}
            <ArrowLeft className={`${language === "ar" ? "mr-2" : "ml-2"} h-5 w-5`} />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

