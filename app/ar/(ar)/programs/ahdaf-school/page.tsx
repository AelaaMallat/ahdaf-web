import ProgramInfo from "@components/ProgramInfo_ar";
import { InfoCardProps } from "@components/ProgramInfo_ar";

export default function Page() {
  const sampleData: InfoCardProps = {
    title: "مدرسة أهداف",
    text: "هي نموذج تربوي حديث يجمع بين التعليم الأكاديمي الراقي والتربية القيمية المتكاملة. تعتمد المدرسة أساليب تعليم نشطة تُشرك الطالب في بناء المعرفة، وتُنمّي مهارات التفكير النقدي، الإبداع، والعمل الجماعي.  تُولي المدرسة اهتمامًا بالغًا بالجانب الأخلاقي والسلوكي، وتُعزز روح المبادرة والانتماء والمسؤولية لدى الطلاب، ضمن بيئة تعليمية آمنة وداعمة تُراعي الفروقات الفردية وتُحفّز التعلّم الذاتي. تسعى \"أهداف\" إلى تخريج طلاب متوازنين، مثقفين، ومؤهلين ليكونوا قادة في مجتمعاتهم، يحملون رسالة الوقف في بناء الإنسان وتنمية المجتمع.",
    images: [
      "/images/programs/ahdaf_school_1.png",
      "/images/programs/ahdaf_school_2.png",
      "/images/programs/ahdaf_school_3.png",
    ], // Replace with actual image URL

    links: [
      {
        name: "مدرسة أهداف",
        url: "https://www.facebook.com/AhdafSchool/",
        icon: "facebook",
      },
      {
        name: "Ahdafschool",
        url: "https://www.instagram.com/ahdafschool/",
        icon: "instagram",
      },
      {
        name: "Ahdaf School",
        url: "https://www.linkedin.com/company/ahdaf-school/",
        icon: "linkedin",
      },
      {
        name: "Ahdaf.edu.lb",
        url: "https://ahdaf.edu.lb",
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
