import Image from "next/image";

export function Program({
  title,
  logo,
  width,
  height,
}: {
  title: string;
  logo: string;
  width?: number;
  height?: number;
}) {
  return (
    <div className="flex-1 max-w-[200px] mx-auto my-6">
      <div className="min-h-[5rem] flex justify-center items-center">
        <Image
          className="center block mx-auto brightness-0 invert "
          src={logo}
          alt={title}
          width={width || 120}
          height={height || 120}
        />
      </div>

      <h3 className=" font-bold uppercase mt-4">{title}</h3>
    </div>
  );
}

export default function About() {
  return (
    <section
      className="relative bg-cover bg-center pt-20 pb-6 md:py-28 "
      style={{ backgroundImage: "url('/backgrounds/about_us_bg.png')" }}
    >
      <div className="absolute inset-0 bg-[#0D2853] opacity-90"></div>
      <div className="relative z-10 text-white text-center p-8">
        <h2 className="text-3xl font-bold text-cgreen block">من نحن؟</h2>
        <div className="mt-6 mx-auto max-w-[640px] text-justify lg:text-center md:text-lg xl:text-xl">
          نحن &quot;أهداف&quot;، مجموعة من أبناء شمال لبنان، 
          تربويّون، رجال أعمال، وعاملون في مختلف المجالات، 
          جمعتنا رغبة صادقة في تغييرواقعنا ومجتمعاتنا. 
        </div>

        {/* Three Benefits */}
        <div className="flex flex-col md:flex-row gap-14 text-white mt-16 text-left px-6 md:px-10 ">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-cbrown  block text-center">
              مهمتنا
            </h3>
            <p className="text-justify lg:text-center md:text-lg xl:text-xl max-w-lg mx-auto">
              نحن نعمل معاً من خلال التطوع وبناء المؤسسات لجعل شمال لبنان - 
              شعبه وقيمه واقتصاده وبيئته وبنيته التحتية - مصدر إلهام للعالم.
            </p>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-cbrown  block text-center">
              رؤيتنا
            </h3>
            <p className="text-justify lg:text-center md:text-lg xl:text-xl max-w-sm mx-auto">
              نحن نعمل على تطوير الفرد من أجل تطوير العالم
            </p>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-cbrown  block text-center">
              قيمنا
            </h3>
            <p className="text-justify lg:text-center md:text-lg xl:text-xl max-w-sm mx-auto">
              الشفافية - المعاصرة - التميز - الرعاية - الإصلاح.
            </p>
          </div>
        </div>

        <h2 className="text-3xl mt-16 font-bold text-cgreen block">كلمة الرّئيس التنفيذي لوقف أهداف الخيري:</h2>
        <div className="mt-6 mx-auto max-w-[640px] text-justify lg:text-center md:text-lg xl:text-xl">
            <div className="text-justify">
                بسم الله الرحمن الرحيم
                <br /><br />

                الحمد لله الذي أمر بالبر والإحسان، 
                وجعل التكافل بين الناس من أسباب التقدم والعمران، 
                والصلاة والسلام على سيدنا محمد وعلى آله وصحبه الكرام.
                <br /><br/>

                إن العمل الوقفي هو ميزة للحضارة الإسلامية عبر التاريخ، حيث كان 
                الوقف يضمن استمرار المبادرات والمشاريع الخيرية التي تنهض 
                بأصحاب الحاجة وتكفل التوازن الاجتماعي بين الغني والفقير، 
                فتحقق بذلك وصية الرسول ﷺ حيث قال &quot;فأعْلِمْهُمْ أنَّ اللَّهَ افْتَرَضَ 
                عليهم صَدَقَةً تُؤْخَذُ مِن أغْنِيائِهِمْ فَتُرَدُّ في فُقَرائِهِمْ&quot; رواه مسلم
                <br /><br />

                ويكون أمر الله تعالى &quot;وَتَعَاوَنُوا عَلَى 
                الْبِرِّ وَالتَّقْوَىٰ&quot; سبباً في استكمال عناصر القوة والانتقال 
                من الاستهلاك إلى الإنتاج، فنضمن عدم الانقطاع لمصادر 
                الخير، في الدنيا والآخرة معاً، حيث قال رسول الله ﷺ: 
                &quot;إِذَا مَاتَ ابْنُ آدَمَ انْقَطَعَ عَمَلُهُ إِلَّا مِنْ ثَلَاثٍ: صَدَقَةٍ جَارِيَةٍ، 
                أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ&quot; رواه مسلم.
                من هذا المنطلق، تأسس وقف أهداف الخيري 
                ليكون مساهما في نشر العلم والتنمية، وكانت رؤيتنا: 
                &quot;نطور الإنسان ليطور العالم&quot;. فمنذ اللحظة الأولى، التزمنا بأن 
                يكون الوقف جسراً يعبر به أبناء المجتمع نحو التمكين 
                والمعرفة، واضعين التعليم والتدريب في صميم رسالتنا.
                <br/><br/>

                على مدى السنوات الماضية، لمسنا أثر العطاء في حياة المستفيدين، فرأينا شبابًا ارتقوا بالعلم والمعرفة ليصبحوا فاعلين في تخصصاتهم ومجالاتهم، وأفرادًا انتقلوا من الحاجة إلى الإنتاج، فأسهموا في نهضة مجتمعاتهم. 
                لقد كانت برامج الوقف  بمثابة بذور خير، أينعت بعطاء المحسنين وثمرة الجد والاجتهاد، فتحولت الأحلام إلى واقع، والمواهب إلى نجاحات تُسهم في بناء وطن أكثر ازدهارًا.
                <br/><br/>

                إننا في وقف أهداف الخيري نؤمن بأن الاستثمار في الإنسان هو الاستثمار الأهم، وأن النهضة الحقيقية تبدأ بتطوير العقول وتوسيع الآفاق. وسنمضي بعون الله ثم بدعم شركائنا، من أفراد ومؤسسات، في تحقيق رؤيتنا ورسالتنا، ساعين إلى تمكين الأفراد بالعلم والمعرفة، ليكونوا روادًا للتغيير الإيجابي في مجتمعاتهم.
                نسأل الله أن يجعل هذا الوقف صدقةً جاريةً لكل من ساهم فيه، وأن يبارك في الجهود المبذولة لتحقيق رسالتنا النبيلة.

            </div>
        </div>

        <h2 className="text-3xl font-bold text-cgreen block mt-16">
          برامجنا
        </h2>
        <div className="mt-6 mx-auto text-center flex flex-col md:flex-row flex-1 gap-4 justify-center">
          <Program title="أجود" logo="/logos/ajwad-logo.svg" />
          <Program
            title="أهداف"
            logo="/logos/ahdaf-school-logo.svg"
            width={80}
            height={80}
          />
          <Program title="إشراقة" logo="/logos/Eshraqa-logo.svg" />
          <Program title="إشراقة علم" logo="/logos/isharket-elem-logo.svg" />
          <Program title="علمني" logo="/logos/Alemni-logo.svg" />
        </div>
      </div>
    </section>
  );
}
