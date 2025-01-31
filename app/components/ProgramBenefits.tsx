"use client"

import { motion } from "framer-motion"
import { Brain, HeartPulse, Sparkles } from "lucide-react"

interface ProgramBenefitsProps {
  language: "ar" | "en"
}

const content = {
  ar: {
    title: "هذا البرنامج مناسب لك إذا:",
    points: [
      {
        text: "تشعر بأن الوقت قد حان للتخلص من ألم الماضي",
        icon: <Sparkles className="w-8 h-8" />,
      },
      {
        text: "تبحث عن توجيه احترافي لتحقيق التوازن العاطفي",
        icon: <HeartPulse className="w-8 h-8" />,
      },
      {
        text: "ملتزم بالاستثمار في صحتك النفسية والعاطفية",
        icon: <Brain className="w-8 h-8" />,

      }
    ]
  },
  en: {
    title: "This program is right for you if:",
    points: [
      {
        text: "You feel it's time to let go of past pain",
        icon: <Sparkles className="w-8 h-8" />,

      },
      {
        text: "You seek professional guidance for emotional balance",
        icon: <HeartPulse className="w-8 h-8" />,

      },
      {
        text: "You're committed to investing in your mental health",
        icon: <Brain className="w-8 h-8" />,

      }
    ]
  }
}

export default function ProgramBenefits({ language }: ProgramBenefitsProps) {
  return (
    <section className="relative min-h-[500px] bg-gradient-to-br from-blue-50 to-indigo-50 py-20 overflow-hidden">
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-800">
            {content[language].title}
          </h2>

          <div className="space-y-8">
            {content[language].points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`flex ${language === 'ar' ? 'flex-row-reverse' : ''} items-center gap-6 p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full">
                  {point.icon}
                </div>
                <div className={`flex-1 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  <p className="text-xl font-medium text-gray-800">
                    {point.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}