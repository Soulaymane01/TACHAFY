"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Smile, LifeBuoy,User  } from "lucide-react"  // Icons that better match the content
import Bubbles from "./Bubbles"

interface FreeOfferingsProps {
  language: "ar" | "en"
}

const content = {
  ar: {
    title: "ماذا ستحقق من هذا البرنامج؟",
    offerings: [
      {
        title: "التحرر من الأعباء العاطفية التي كانت تُقيدك",
        description: "سوف تجد نفسك متحررًا من الضغوط العاطفية التي كانت تقيدك.",
        details: "هذه الجلسات ستساعدك على إطلاق مشاعر القيد العاطفي وتحقيق توازن داخلي.",
        icon: <Heart className="w-12 h-12 text-red-600 mb-4" />,  // Icon for emotional freedom
      },
      {
        title: "سلام داخلي وثقة متجددة بالنفس",
        description: "ستكتسب إحساسًا جديدًا بالسلام الداخلي وثقة في نفسك.",
        details: "من خلال العمل المشترك، ستتطور علاقتك بنفسك مما يضمن لك سلامًا دائمًا.",
        icon: <Smile className="w-12 h-12 text-yellow-600 mb-4" />,  // Icon for inner peace
      },
      {
        title: "تقنيات علاجية سترافقك مدى الحياة",
        description: "ستتعلم تقنيات علاجية تبقى معك طول حياتك.",
        details: "مع التمارين اليومية، ستكتسب مهارات نفسية تساعدك على التعامل مع تحديات الحياة.",
        icon: <LifeBuoy className="w-12 h-12 text-green-600 mb-4" />,  // Icon for therapeutic techniques
      },
      {
        title: "دعم شخصي يضمن نجاح رحلتك العلاجية",
        description: "ستحصل على دعم مستمر من محترفين لضمان نجاح رحلتك العلاجية.",
        details: "يتم توفير متابعة ودعم شخصي دائم لتسريع نجاحك وتحقيق أهدافك.",
        icon: <User  className="w-12 h-12 text-blue-600 mb-4" />,  // Icon for personal support
      },
    ],
  },
  en: {
    title: "What will you achieve from this program?",
    offerings: [
      {
        title: "Emotional Freedom",
        description: "You will find yourself free from the emotional burdens that once held you back.",
        details: "These sessions will help release emotional restraints and bring you inner balance.",
        icon: <Heart className="w-12 h-12 text-red-600 mb-4" />,  // Icon for emotional freedom
      },
      {
        title: "Inner Peace and Renewed Self-Confidence",
        description: "You will gain a new sense of inner peace and confidence in yourself.",
        details: "Through collaborative work, your relationship with yourself will improve, ensuring lasting peace.",
        icon: <Smile className="w-12 h-12 text-yellow-600 mb-4" />,  // Icon for inner peace
      },
      {
        title: "Therapeutic Techniques for Life",
        description: "You will learn therapeutic techniques that stay with you for life.",
        details: "With daily exercises, you will gain psychological skills to handle life's challenges.",
        icon: <LifeBuoy className="w-12 h-12 text-green-600 mb-4" />,  // Icon for therapeutic techniques
      },
      {
        title: "Personal Support Ensuring Your Healing Journey Success",
        description: "You will receive continuous support from professionals to ensure the success of your healing journey.",
        details: "Personalized follow-up and support will be provided to accelerate your success and achieve your goals.",
        icon: <User  className="w-12 h-12 text-blue-600 mb-4" />,  // Icon for personal support
      },
    ],
  },
}

export default function FreeOfferings({ language }: FreeOfferingsProps) {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-blue-100 py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Bubbles count={15} colors={["#bfdbfe", "#a5f3fc", "#e0f2fe"]} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">
          {content[language].title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content[language].offerings.map((offering, index) => (
            <div key={index}>
              <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform perspective-1000">
                <CardContent className="p-6 flex flex-col items-center">
                  {offering.icon}
                  <h3 className="text-xl font-bold mb-2">{offering.title}</h3>
                  <p className="text-lg text-center mb-4">{offering.description}</p>
                  <div className="text-sm text-gray-600 text-center overflow-hidden">
                    {offering.details}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
