"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Hero from "./components/Hero"
import ProgramSlides from "./components/ProgramSlides"
import FreeOfferings from "./components/FreeOfferings"
import SuccessStories from "./components/SuccessStories"
import CallToAction from "./components/CallToAction"
import FAQ from "./components/FAQ"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Bubbles from "./components/Bubbles"
import { LanguageSwitch } from "./components/LanguageSwitch"
import Timeline from "./components/Timeline"
import ProgramBenefits from "./components/ProgramBenefits"

export default function Home() {
  const [language, setLanguage] = useState<"ar" | "en">("ar")

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-blue-50 to-teal-50 text-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Bubbles count={20} colors={["#bfdbfe", "#93c5fd", "#60a5fa"]} />
      </div>
      <LanguageSwitch language={language} setLanguage={setLanguage} />
      <div className="relative z-10">
        <Hero language={language} />
        <Timeline language={language} />
        <FreeOfferings language={language} />
        <ProgramBenefits language={language} />
        <SuccessStories language={language} />
        <CallToAction language={language} />
        <FAQ language={language} />
        <Contact language={language} />
        <Footer language={language} />
      </div>
    </motion.div>
  )
}

