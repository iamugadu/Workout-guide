import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {  
  hi: {
    translation: {
      title: "शुरुआती वर्कआउट गाइड",
      subtitle: "एक योजना चुनें और आगे बढ़ें!",
      tabs: { full: "पूरा शरीर", upper: "ऊपरी शरीर", lower: "निचला शरीर", stretch: "स्ट्रेचिंग" },
      content: {
        full: ["जंपिंग जैक्स", "बर्पीज़", "माउंटेन क्लाइंबर्स", "प्लैंक"],
        upper: ["पुश-अप्स", "बाइसेप कर्ल्स", "शोल्डर प्रेस", "ट्राइसेप डिप्स"],
        lower: ["स्क्वैट्स", "लंजेस", "ग्लूट ब्रिजेस", "काफ़ रेज़ेस"],
        stretch: ["गर्दन घुमाना", "हैमस्ट्रिंग स्ट्रेच", "क्वाड स्ट्रेच", "चाइल्ड पोज़"]
      },
      footer: "@ 2025 शुरुआती वर्कआउट गाइड",
      language: "भाषा"
    }
  },
  zh: {
    translation: {
      title: "初学者锻炼指南",
      subtitle: "选择一个计划，动起来！",
      tabs: { full: "全身", upper: "上半身", lower: "下半身", stretch: "拉伸" },
      content: {
        full: ["开合跳", "波比跳", "登山者", "平板支撑"],
        upper: ["俯卧撑", "二头肌弯举", "肩部推举", "三头肌下压"],
        lower: ["深蹲", "弓步", "臀桥", "提踵"],
        stretch: ["颈部环绕", "腘绳肌拉伸", "股四头肌拉伸", "儿童式"]
      },
      footer: "@ 2025 初学者锻炼指南",
      language: "语言"
    }
  },
    en: {  
       translation: {
      title: "Beginner Workout Guide",
      subtitle: "Pick a plan and move!",
      tabs: { full: "Full Body", upper: "Upper Body", lower: "Lower Body", stretch: "Stretching" },
      content: {
        full: ["Jumping Jacks", "Burpees", "Mountain Climbers", "Plank"],
        upper: ["Push-ups", "Bicep Curls", "Shoulder Press", "Tricep Dips"],
        lower: ["Squats", "Lunges", "Glute Bridges", "Calf Raises"],
        stretch: ["Neck Rolls", "Hamstring Stretch", "Quad Stretch", "Child’s Pose"]
      },
            footer: "@ 2025 Beginner Workout Guide",
            language: "Language"
        }
    },
  ru: {  
    translation: {
      title: "Гид по тренировкам для начинающих",
      subtitle: "Выберите план и двигайтесь!",
      tabs: { full: "Всё тело", upper: "Верхняя часть", lower: "Нижняя часть", stretch: "Растяжка" },
      content: {
        full: ["Прыжки на месте", "Бёрпи", "Альпинисты", "Планка"],
        upper: ["Отжимания", "Сгибания рук на бицепс", "Жим над головой", "Отжимания на трицепс"],
        lower: ["Приседания", "Выпады", "Ягодичный мостик", "Подъёмы на носки"],
        stretch: ["Круговые движения шеей", "Растяжка задней поверхности бедра", "Растяжка квадрицепса", "Поза ребёнка"]
      },
      footer: "@ 2025 Гид по тренировкам для начинающих",
      language: "Язык"
    }
  },
  fr: {
    translation: {
      title: "Guide d'entraînement pour débutants",
      subtitle: "Choisissez un programme et bougez !",
      tabs: { full: "Corps entier", upper: "Haut du corps", lower: "Bas du corps", stretch: "Étirements" },
      content: {
        full: ["Jumping Jacks", "Burpees", "Mountain Climbers", "Planche"],
        upper: ["Pompes", "Curls biceps", "Développé épaules", "Dips triceps"],
        lower: ["Squats", "Fentes", "Pont fessier", "Élévations mollets"],
        stretch: ["Roulis du cou", "Étirement ischio-jambiers", "Étirement quadriceps", "Posture de l'enfant"]
      },
      footer: "@ 2025 Guide d'entraînement pour débutants",
      language: "Langue"
    }
  }
};
i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
});

export default i18n;