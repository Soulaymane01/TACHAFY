"use client"

import { motion } from "framer-motion"

interface FooterProps {
  language: "ar" | "en"
}

const content = {
  ar: {
    rights: "© جميع الحقوق محفوظة.",
  },
  en: {
    rights: "© All Rights Reserved.",
  },
}

export default function Footer({ language }: FooterProps) {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <motion.p
          className="text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {content[language].rights}
        </motion.p>
      </div>
    </footer>
  )
}

