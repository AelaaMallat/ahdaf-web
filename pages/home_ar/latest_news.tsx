import React from "react";
const AhdafNews: React.FC = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/images/latest_news.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // Ensures the image covers the entire section
        backgroundPosition: "center", // Centers the image
      }}
    >
      <div
        className="w-full h-40 items-center justify-center absolute"
        style={{
          WebkitMask: `url(/images/seperator.svg)`,
          WebkitMaskRepeat: "repeat-x",
          WebkitMaskPosition: "center",
          WebkitMaskSize: "auto 100%",
          mask: `url(/images/seperator.svg)`,
          maskRepeat: "repeat-x",
          maskPosition: "center",
          maskSize: "auto 100%",
          backgroundColor: "#102F5C",
          imageRendering: "crisp-edges",
        }}
      ></div>
      <div className="overflow-x-hidden">
        <div className="p-8 pt-48  md:px-28 right-0 max-w-xl bg-white/80">
          <h1 className="text-center md:text-right text-green-500 font-bold text-4xl ">
            آخر الأخبار
          </h1>
          <h3 className="text-xl font-bold text-[#102F5C] mt-8">
            وقف أهداف الخيري
          </h3>
          <p className="text-[#041231] mt-2 text-justify">
            في أجواء من الإيجابية، نظَّم وقف أهداف الخيري لقاءً طيباً صباح الأحد، 23 شباط 2025، شكر فيه فريق العمل والدَّاعمين لجهودهم في سبيل نهضة المجتمع، وليكون التعليم قضية محورية تحظى باهتمام الجميع وتعلق عليها الآمال والطموحات.
          </p>
          <p className="text-[#041231] mt-2 text-justify">
            افتُتح اللقاء بتلاوة عطرة من القرآن الكريم وتلتها كلمة ألقاها الشيخ محمد مطرجي المدير التنفيذي لوقف أهداف الخيري الذي اكد فيها على أهمية تظافر الجهود لخدمة المجتمع.
          </p>
          <p className="text-[#041231] mt-2 text-justify">
            وشهد اللقاء عرضًا مرئيًا تناول أبرز برامج ومشاريع وقف "أهداف" الخيري، حيث برزت فيه رؤية "نطوِّر الإنسان ليُطوِّر العالم"، وقد استُعرضت الإنجازات والتطلعات المستقبلية بروح من التفاؤل والثقة بإمكانية تحقيق المزيد من التأثير الإيجابي.
          </p>
          <p className="text-[#041231] mt-2 text-justify">
            واختُتم اللقاء بترويقة ودية أتاحت للحاضرين تبادل الأفكار والتجارب في جوٍّ تعاوني، وسط وصلات إنشادية عذبة قدّمها المقرئ الشيخ عبدالمطلب خلوف.
          </p>
          <p className="text-[#041231] mt-2 text-justify">
            بهذه الروح وبقلوب مفعمة بالأمل، يستعد فريق العمل ورجال الأعمال لاستقبال شهر رمضان الكريم، عاقدين العزم على مواصلة الجهود والمساهمة في بناء مجتمع أكثر تكافلًا.
          </p>
          <p className="text-[#041231] mt-2 text-justify">
            وقف "أهداف" يتوجه بالشكر لكل من شارك في هذا اللقاء وأسهم في إنجاحه، سائلين الله أن يديم الخير ويبارك في مساعي الجميع.
          </p>
        </div>
      </div>
    </section>

  );
};

export default AhdafNews;
