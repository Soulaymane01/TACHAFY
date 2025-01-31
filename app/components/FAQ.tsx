"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Bubbles from "./Bubbles"

interface FAQProps {
  language: "ar" | "en"
}

const content = {
  ar: {
    title: "بعض الأسئلة الشائعة",
    faqItems: [
      {
        question: "متى يبدأ هذا البرنامج؟",
        answer: "بمجرد اشتراكك معنا ستصلك معلومات الدخول لمحتوى البرنامج .",
      },
      {
        question: "هل ستقومون بالعمل عني؟",
        answer: "سنساعدك على العلاج العميق والفعال وسنعطيك الخطوات والتمارين التي أنت بحاجة إليها وعليك تطبيق .",
      },
      {
        question: "ماهو التنويم المغناطيسي؟",
        answer: "أدات علاجية قوية يتم من خلالها إعادة برمجة عقلك الاواعي على العلاج العميق.",
      },
      {
        question: "ماهي مدة البرنامج؟",
        answer:
          "على مدار ستة أسابيع سنعمل سويا على مساعدتك على التغلب على صدمتك النفسية إلى أن تصل إلا راحة البال و التوازن النفسي الذي تبحت عنه.",
      },
    ],
  },
  en: {
    title: "Frequently Asked Questions",
    faqItems: [
      {
        question: "When does this program start?",
        answer: "As soon as you subscribe with us, you will receive login information for the program content.",
      },
      {
        question: "Will you do the work for me?",
        answer:
          "We will help you with deep and effective treatment and give you the steps and exercises that you need, and you need to apply them.",
      },
      {
        question: "What is hypnosis?",
        answer: "A powerful therapeutic tool through which your subconscious mind is reprogrammed for deep healing.",
      },
      {
        question: "How long is the program?",
        answer:
          "Over the course of six weeks, we will work together to help you overcome your psychological trauma until you reach the peace of mind and psychological balance you are looking for.",
      },
    ],
  },
}

export default function FAQ({ language }: FAQProps) {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-blue-100 py-32 overflow-hidden">
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
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {content[language].faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{item.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

