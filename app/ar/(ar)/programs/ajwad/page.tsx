import ProgramInfo from "@components/ProgramInfo_ar";
import { InfoCardProps } from "@components/ProgramInfo_ar";

export default function Page() {
  const sampleData: InfoCardProps = {
    title: "مركز أجود",
    text: "هو مركز اللبناني لتطوير المدارس يعمل على رفع جودة التعليم في المدارس، من خلال تقديم خدمات استشارية وتدريبية متخصصة، وتصميم أنظمة تعليمية حديثة تُسهم في تحسين الأداء الإداري والتربوي. يُعنى المركز بتطوير المناهج، تدريب الكوادر التعليمية، وتطبيق أدوات تقييم فعّالة تُساعد في قياس الأثر وتحسين النتائج. كما يُقدّم حلولًا تقنية وإدارية تُعزز كفاءة المدرسة وتُهيّئها لتكون بيئة تعليمية محفّزة وآمنة.  يؤمن \"أجود\" بأن الاستثمار في تطوير المدارس هو استثمار في الإنسان، وأن جودة التعليم هي حجر الأساس في بناء مجتمع متماسك ومزدهر.",
    images: [
      "/images/programs/ajwad_1.png",
      "/images/programs/ajwad_2.png",
      "/images/programs/ajwad_3.png",
    ], // Replace with actual image URL

    links: [
      {
        name: "'المركز اللبناني لتطوير المدارس 'أجود",
        url: "https://www.facebook.com/AjwadEducation/",
        icon: "facebook",
      },
      {
        name: "Ajwadeducation",
        url: "https://www.instagram.com/ajwadeducation/",
        icon: "instagram",
      },
      {
        name: "Ajwad",
        url: "https://www.linkedin.com/company/ajwad/",
        icon: "linkedin",
      },
      {
        name: "Ajwadeducation.com",
        url: "https://Ajwadeducation.com",
        icon: "url",
      },
    ],
  };
  return (
    <div className="">
      <ProgramInfo {...sampleData} />
    </div>
  );
}
