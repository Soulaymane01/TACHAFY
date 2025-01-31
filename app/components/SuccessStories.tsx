"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"
import Bubbles from "./Bubbles"

interface SuccessStoriesProps {
  language: "ar" | "en"
}

const content = {
  ar: {
    title: "بعض قصص النجاح",
    next: "التالي",
    successStories: [
      {
        text: "كان رائعًا ومذهلًا .. شيماء شخص ماهر وموهوب للغاية، جعلتني أكتشف العديد من مهارات ومسارات التفكير العقلي، بفضلها أشعر الآن بتحسن كبير تجاه نفسي وأعرف كيف أتعامل مع الأفكار السلبية بشكل جيد. أوصي الجميع بتجربة ذلك مع شيماء وأضمن أنك لن تندم أبدًا.",
        rating: 5,
      },
      {
        text: "جلسة اليوم كانت الأفضل من بين كل الجلسات السابقة .. إنها تلخص كل سيناريوهات الاسترخاء الممكنة التي يمكنني تخيلها. يمكنني القول بعمق أن هذه الجلسات التنويمية مع شيماء التهامي هي شيء ضروري للجميع",
        rating: 5,
      },
      {
        text: "تجربتي مع الانسجام كانت مثل شخص يصنع كوبًا جميلًا .. تبدأ من الطين وهو عيوبي، قلبي أو عقلي .. لم يكن هناك فهم ولا خط .. كل يوم كان علي أن أشكل قلبي من الانكسار إلى فهم كل قطعة من الطاقة السيئة، الأفكار الخاطئة، المشاعر السيئة، التوتر .. كل يوم المزيد من الشفاء مع القليل من التمارين لخلق الفرح والراحة والقبول ومعرفة من أنا وما أحتاج أن أكون .. نموت كل يوم بابتسامة مع معرفة أنني مقبول ولا أحتاج إلى أن أكون خجولاً ..",
        rating: 4,
      },
    ],
  },
  en: {
    title: "Some Success Stories",
    next: "Next",
    successStories: [
      {
        text: "It was so great and awesome .. Chaimae is a very skillful and talented person, she made me discover many mental thinking skills and paths, thanks to her I'm now feeling way better about myself and I know how to handle negative thoughts well. I recommend everyone to at least try it with Chaimae and I guarantee that you will never regret it.",
        rating: 5,
      },
      {
        text: "Today's session was the best of all the previous ones .. it concludes all the possible relaxing scenarios I could have imagined. I can deeply say that these Hypno sessions with Chaimae Touhami are a Must for anyone",
        rating: 5,
      },
      {
        text: "My harmony experience has been like a person making a beautiful cup.. you start from the clay that's my imperfections, heart or mind to say... it had no understanding no lining... everyday had to mold my heart from breaking into understanding every piece of bad energy, wrong thoughts, bad vibes, stress... everyday more of healing with a little bit of exercise into creation of joy, comfort, acceptance and knowing who I am and what I need to be... I grew each day with a smile knowing I'm accepted and don't need to be shy..",
        rating: 4,
      },
    ],
  },
}

export default function SuccessStories({ language }: SuccessStoriesProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextStory = () => {
    setActiveIndex((prev) => (prev + 1) % content[language].successStories.length)
  }

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
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 flex flex-col items-center">
                  <Quote className="w-12 h-12 text-blue-600 mb-4" />
                  <p className="text-lg italic text-center mb-4">
                    {content[language].successStories[activeIndex].text}
                  </p>
                  <div className="flex items-center justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i < content[language].successStories[activeIndex].rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex justify-center">
            <motion.button
              onClick={nextStory}
              className="bg-blue-600 text-white px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content[language].next}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

