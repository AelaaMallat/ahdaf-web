import Link from "next/link";
import Image from "next/image";

export default function HomePrograms() {
  return (
    <section className="py-16 text-center bg-white px-4 lg:container mx-auto">
      <h2 className="text-3xl font-bold text-cgreen">برامجنا</h2>
      <p className="text-black text-center mt-4 max-w-4xl mx-auto text-d lg:text-xl">
        All the coordinated set of activities, projects, or services carried out
        by AHDAF organization to support educational needs.
      </p>

      <div className="grid grid-cols-1 text-right md:grid-cols-3 gap-6 mt-8">
        <ProgramCard
          title="إشراقة علم"
          description=" نجذب الطلاب المرحلة الثانوية الطموحين والمثابرين ليحققوا من خلال برامجنا وبيئتنا كفايات ومستويات متقدمة في التعلم والمهارات والقيم التي تخولهم الولوج للمرحلة الجامعية. "
          logo="/logos/isharket-elem-logo.svg"
          goto="/programs/eshraqat-elem"
        />
        <ProgramCard
          title="مؤسسة علّمني"
          description="تقدم مؤسسة علّمني منحاً ماليةً للطلاب الذين يحتاجون إلى الدعم لمتابعة تعليمهم العالي. بالإضافة إلى ذلك، توفر المؤسسة برامج تدريبية وفرص للتطوير الشخصي والفكري ومبادرات تطوعية، وأنشطة إجتماعية تهدف إلى بناء شخصية متكاملة ونظام قيم لدى الشباب."
          logo="/logos/Alemni-logo.svg"
          goto="/programs/alemni"
        />
        <ProgramCard
          title="أكاديميةإشراقة"
          description="نستقبل تلاميذ المدارس من الساعة الثالثة حتى الساعة السابعة مساءً، لدعمهم علمياً مع فريق من التربويين
            المتخصصين، وكل ذلك في بيئة إيجابية تساهم في تطوير مهاراتهم وترسيخ قيمهم وتعزيز طموحهم.
"
          logo="/logos/Eshraqa-logo.svg"
          goto="/programs/eshraqa"
        />
      </div>
      <div className="grid grid-cols-1 text-right md:grid-cols-2 gap-6 mt-8">
        <ProgramCard
          title="المركز اللبناني لتطوير المدارس"
          description="مكرّس لتطوير المدارس في لبنان من خلال ممارسات تربوية مبتكرة، بهدف الارتقاء بجودة التعليم وتعزيز تجربة التعلّم لدى الطلاب."
          logo="/logos/ajwad-logo.svg"
          goto="/programs/ajwad"
        />
        <ProgramCard
          title="مدرسة أهداف"
          description="نوفر بيئة تعليمية حاضنة ترتكز على التعلّم النشط وغرس القيم الراسخة بين الطلاب، مع اعتماد أساليب تدريس حديثة تعزز الإبداع والتفكير النقدي."
          logo="/logos/ahdaf-school-logo.svg"
          goto="/programs/ahdaf-school"
        />
      </div>
    </section>
  );
}

interface ProgramCardProps {
  title: string;
  description: string;
  logo: string;
  goto: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  logo,
  goto,
}) => {
  return (
    <div className="bg-cwhite rounded-2xl shadow-lg p-6 flex flex-col gap-4 w-full max-w-lg transition-transform duration-300 hover:scale-105 mx-auto mb-10">
      <div className="flex flex-1 flex-row justify-between items-center gap-4">
        <div className="flex flex-col space-y-2 flex-grow">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-md md:text-lg xl:text-xl text-gray-700 text-justify">
            {description}
          </p>
        </div>
        <div className="flex-shrink-0">
          <Image
            src={logo}
            alt={`${title} Logo`}
            width={100}
            height={93}
            className="object-contain"
          />
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <Link
          href={goto}
          className="bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-300 hover:bg-red-700"
        >
          MORE
        </Link>
      </div>
    </div>
  );
};
