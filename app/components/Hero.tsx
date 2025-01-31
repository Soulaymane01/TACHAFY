"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronDown } from "lucide-react"

interface HeroProps {
  language: "ar" | "en"
}

const content = {
  ar: {
    title: "إستعد نفسك الآن",
    subtitle: "دليلك الكامل لتشافي العميق من الصدمات",
    description:"و علاج نفسك بنفسك",
    cta: "ابدأ الآن",
  },
  en: {
    title: "Prepare Yourself Now",
    subtitle: "Your Complete Guide to Overcoming Pain",
    description:
      "You are one step away from increasing your self-confidence and reaching the peace of mind you are looking for",
    cta: "Start Now",
  },
}

export default function Hero({ language }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-400 text-white min-h-screen flex items-center">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-30">
        <source src="/ocean-background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-blue-800/30" />
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            {content[language].title}
          </motion.h1>
          <motion.h2
            className="text-3xl md:text-4xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {content[language].subtitle}
          </motion.h2>
          <motion.h3
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {content[language].description}
          </motion.h3>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-100 text-lg px-8 py-6 rounded-full shadow-lg transition duration-300"
            >
              {content[language].cta}
              <ArrowLeft className={`${language === "ar" ? "mr-2" : "ml-2"} h-5 w-5`} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
      >
        <ChevronDown className="w-10 h-10 text-white" />
      </motion.div>
    </section>
  )
}

