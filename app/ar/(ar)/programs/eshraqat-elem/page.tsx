import ProgramInfo from "@components/ProgramInfo_ar";
import { InfoCardProps } from "@components/ProgramInfo_ar";

export default function Page() {
  const sampleData: InfoCardProps = {
    title: "إشراقة علم",
    text: 'إشراقة علم" هي مبادرة تعليمية تنموية تستهدف طلاب المرحلة الثانوية في المدارس الرسمية والخاصة، وتسعى إلى تمكينهم أكاديميًا ومهنيًا عبر برامج متكاملة تُراعي احتياجاتهم وتطلعاتهم المستقبلية. يرتكز البرنامج على تقديم دعم أكاديمي نوعي يُعزّز التحصيل العلمي للطلاب، إلى جانب تنظيم دورات متخصصة في بناء القدرات الشخصية والقيادية، مما يُسهم في تطوير مهارات التفكير النقدي، التواصل الفعّال، والعمل الجماعي. كما يتضمن البرنامج توجيهًا جامعيًا دقيقًا يساعد الطالب على اكتشاف ميوله الأكاديمية والمهنية، واختيار التخصص الجامعي الأنسب له بناءً على قدراته واهتماماته. تهدف "إشراقة علم" إلى إعداد جيل من الشباب الواثق، القادر على اتخاذ قراراته التعليمية والمهنية بوعي، والمجهّز بالمهارات والكفايات التي تؤهله للنجاح في مراحل التعليم العالي، والانخراط الفاعل في سوق العمل والمجتمع. ',
    images: [
      "/images/programs/eshrakat_elem_1.png",
      "/images/programs/eshrakat_elem_2.png",
      "/images/programs/eshrakat_elem_3.png",
    ], // Replace with actual image URL

    links: [
      {
        name: "Eshraqat Elem-إشراقة علم",
        url: "https://www.facebook.com/share/1JNWfoKrvd/",
        icon: "facebook",
      },
      {
        name: "Eshraqatelem",
        url: "https://www.instagram.com/eshraqatelem?igsh=cmVjMnp1cHVkaHg0",
        icon: "instagram",
      },
    ],
  };
  return (
    <div className="">
      <ProgramInfo {...sampleData} />
    </div>
  );
}
