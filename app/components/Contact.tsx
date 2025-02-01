"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"
import Bubbles from "./Bubbles"

interface ContactProps {
  language: "ar" | "en"
}

const content = {
  ar: {
    title: "اتصل بنا",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
  },
  en: {
    title: "Contact Us",
    email: "Email",
    phone: "Phone Number",
  },
}

export default function Contact({ language }: ContactProps) {
  return (
    <section className="relative bg-white py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Bubbles count={10} colors={["#bfdbfe", "#a5f3fc", "#e0f2fe"]} />
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
        <div className="max-w-md mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg">
              <CardContent className="p-8 flex flex-col items-center">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Mail className="w-12 h-12 text-blue-600 mb-4" />
                </motion.div>
                <p className="mb-4 text-lg text-center md:text-left">
                  {content[language].email}:{" "}
                  <a href="mailto:example@example.com" className="text-blue-600 hover:underline">
                    Info@chaimaetouhami.com
                  </a>
                </p>
                <motion.div whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }}>
                  <Phone className="w-12 h-12 text-blue-600 mb-4" />
                </motion.div>
                <p className="text-lg text-center md:text-left">
                  {content[language].phone}: <span className="text-blue-600">+212653939456</span>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
