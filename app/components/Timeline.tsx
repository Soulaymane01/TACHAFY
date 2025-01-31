type TimelineEvent = {
    date: string;
    date_ar: string; // Arabic date
    title: string;
    title_ar: string; // Arabic title
    description: string;
    description_ar: string; // Arabic description
  };
  
  type TimelineProps = {
    language: "ar" | "en";
  };
  
  const timelineEvents: TimelineEvent[] = [
    {
      date: "Phase 1",
      date_ar: "المرحلة الأولى",
      title: "Cleansing Negative Energy & Restoring Inner Peace (First Month)",
      title_ar: "تنظيف الطاقة السلبية واستعادة السلام الداخلي (الشهر الأول)",
      description: `3 deep sessions to cleanse negative energy and release trapped emotions.
                  3 educational workshops to learn effective techniques for achieving inner peace.
                  Daily meditation exercises to maintain mental clarity and emotional balance.`,
      description_ar: `3 جلسات عميقة لتنظيف الطاقة السلبية وتحرير المشاعر العالقة.
                      3 ورش تعليمية لتعلم تقنيات فعالة للوصول إلى السلام الداخلي.
                      تمارين تأمل يومية للحفاظ على صفاء ذهنك وتوازن روحك.`,
    },
    {
      date: "Phase 2",
      date_ar: "المرحلة الثانية",
      title: "Emotional Liberation (Second Month)",
      title_ar: "التحرر العاطفي (الشهر الثاني)",
      description: `3 deep healing sessions to break old emotional attachments.
                  3 educational workshops to learn advanced therapeutic techniques that grant emotional freedom.
                  Daily exercises to enhance emotional resilience and reinforce psychological independence.`,
      description_ar: `3 جلسات علاجية عميقة لتفكيك التعلقات العاطفية القديمة.
                      3 ورش تعليمية لتعلّم تقنيات علاجية متقدمة تمنحك حرية المشاعر.
                      تمارين يومية لتعزيز مرونتك العاطفية وترسيخ الاستقلال النفسي.`,
    },
    {
      date: "Phase 3",
      date_ar: "المرحلة الثالثة",
      title: "Overcoming Remaining Challenges & Building a Healing Mindset (Third Month)",
      title_ar: "تجاوز التحديات المتبقية وبناء عقلية شافية (الشهر الثالث)",
      description: `3 intensive sessions to address and release remaining emotional challenges.
                  3 workshops to learn how to build a healthy mindset based on healing.
                  Daily practices to establish a lifestyle that fosters recovery and inner peace.`,
      description_ar: `3 جلسات مكثفة للتعامل مع التحديات العاطفية المتبقية وتحريرها.
                      3 ورش تعليمية لتعلّم كيفية بناء عقلية صحية تعتمد على الشفاء.
                      ممارسات يومية لتثبيت نمط حياة يعزز التعافي والسلام الداخلي.`,
    },
    {
      date: "Phase 4",
      date_ar: "المرحلة الرابعة",
      title: "Personal Support & Follow-Up (Months 4-6)",
      title_ar: "دعم ومتابعة شخصية (الأشهر 4-6)",
      description: `One session every two weeks (6 personal sessions) to track your healing progress and ensure continued success.
                  Monthly masterclasses to enhance healing.`,
      description_ar: `جلسة كل أسبوعين (6 جلسات شخصية) لمتابعة تقدمك العلاجي وضمان استمرارية نجاحك.
                      ماستركلاس شهري لتعزيز التشافي.`,
    },
  ];
  
  export default function Timeline({ language }: TimelineProps) {
    return (
      <div className="relative container mx-auto px-6 flex flex-col space-y-8">
        <div className="absolute z-0 w-2 h-full bg-gray-200 left-17 md:mx-auto md:right-0 md:left-0"></div>
        {timelineEvents.map((event, index) => (
          <div key={index} className="relative z-10">
            <div className="timeline-container">
              <div className="timeline-pointer" aria-hidden="true"></div>
              <div className="bg-white p-6 rounded-md shadow-md">
                <span className="font-bold text-blue-500 text-sm tracking-wide">
                  {language === "ar" ? event.date_ar : event.date}
                </span>
                <h1 className="text-2xl font-bold pt-1">
                  {language === "ar" ? event.title_ar : event.title}
                </h1>
                <ul className="pt-1 list-inside list-disc">
                  {(language === "ar" ? event.description_ar : event.description)
                    .split("\n")
                    .map((sentence, idx) => (
                      <li key={idx} className="text-base">
                        {sentence}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  