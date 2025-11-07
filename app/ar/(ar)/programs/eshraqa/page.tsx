import ProgramInfo from "@components/ProgramInfo_ar";
import { InfoCardProps } from "@components/ProgramInfo_ar";

export default function Page() {
  const sampleData: InfoCardProps = {
    title: "أكاديمية إشراقة",
    text: `تُعنى "أكاديمية إشراقة" بمتابعة الطلاب في المرحلة الابتدائية والمتوسطة، بهدف الحد من ظاهرة التسرب المدرسي وتعزيز استمرارية التعليم لدى الفئات الأكثر عرضة للانقطاع. تنطلق الأكاديمية من رؤية تربوية شاملة تُركّز على دعم الطالب علميًا ونفسيًا واجتماعيًا، ضمن بيئة تعليمية آمنة ومحفّزة تُراعي احتياجاته الفردية وتُعزز ثقته بنفسه.
تقدّم الأكاديمية برامج دعم أكاديمي متكاملة تشمل تقوية المواد الأساسية، ومتابعة الأداء المدرسي، وتقديم الإرشاد التربوي، إلى جانب أنشطة تنموية تُسهم في بناء شخصية الطالب وتمكينه من تحقيق إمكاناته الكاملة. كما تُولي الأكاديمية اهتمامًا خاصًا بتوفير مناخ تربوي إيجابي يُشجّع على التعلّم، ويُعزّز روح المبادرة والانتماء.`,
    images: [
      "/images/programs/eshraqa_1.png",
      "/images/programs/eshraqa_2.png",
      "/images/programs/eshraqa_3.png",
    ], // Replace with actual image URL

    links: [
      {
        name: "Eshraqa-إشراقة ",
        url: "https://www.facebook.com/Eshraqa.Ahdaf/",
        icon: "facebook",
      },
      {
        name: "Eshraqa.ahdaf",
        url: "https://www.instagram.com/eshraqa.ahdaf/",
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
