import ProgramInfo from "@components/ProgramInfo_ar";
import { InfoCardProps } from "@components/ProgramInfo_ar";

export default function Page() {
  const sampleData: InfoCardProps = {
    title: "مؤسسة علمني",
    text: "تٌعنى مؤسسة \"علّمني\" بدعم طلاب المرحلة الجامعية من الأسر المتعففة، عبر تقديم منح دراسية شاملة تشمل الرسوم الجامعية، والدعم النفسي والاجتماعي. لا تقتصر مهمتها على الجانب الأكاديمي، بل تمتد لتشمل بناء شخصية الطالب وتنمية مهاراته القيادية والاجتماعية، من خلال ورش عمل ومبادرات اجتماعية على مختلف الاصعدة، لقاءات توجيهية، ومتابعة فردية مستمرة. تسعى \"علّمني\" إلى تخريج جيل جامعي واعٍ، مثقّف، ومؤمن برسالته في خدمة مجتمعه، ليكون نموذجًا يُحتذى في التميّز العلمي والالتزام الأخلاقي، وقادرًا على إحداث تغيير إيجابي في بيئته ومحيطه.",
    images: [
      "/images/programs/alemni_1.png",
      "/images/programs/alemni_2.png",
      "/images/programs/alemni_3.png",
    ], 

    links: [
      {
        name: "Alemni – علّمني",
        url: "https://www.facebook.com/Alemni.Ahdaf",
        icon: "facebook",
      },
      {
        name: "alemni_foundation",
        url: "https://www.instagram.com/alemni_foundation/",
        icon: "instagram",
      },
      {
        name: "alemni foundation",
        url: "https://www.linkedin.com/company/alemni-foundation/",
        icon: "linkedin",
      },
      {
        name: "https://alemni-foundation.com/",
        url: "https://alemni-foundation.com/",
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
