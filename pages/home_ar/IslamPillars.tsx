import Image from "next/image";

export default function IslamPillars() {
  return (
    <section
      className="relative py-16 text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/backgrounds/pillars_bg.png')" }}
    >
      <div className="lg:container mx-auto">
        <div className="absolute inset-0 bg-cblue opacity-90"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-cgreen">أركان الإسلام</h2>

          <p className="text-white text-center mt-4 max-w-4xl lg:text-xl mx-auto px-5">
            هي الأعمال الظاهرة التي يقوم بها العبد طاعةً لله تعالى، وهي
            فرائض. وأركان الإسلام كما ورد عن النبي صلى الله عليه وسلم:
            <br />
            "بُنِي الإسلامُ على خمسٍ: شَهادةِ أن لا إلهَ إلا اللهُ وأنَّ
            محمدًا رسولُ اللهِ، وإقامِ الصلاةِ، وإيتاءِ الزّكاةِ، والحجِّ،
            وصومِ رمضانَ"
          </p>

          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 px-6 mt-8 text-white">
            <Pillar
              name="الشّهادة"
              description='هي أول أركان الإسلام الخمسة، ومعنى الشهادتين: أن يشهد المسلم بشهادتي الإسلام قائلاً بلسانه موقنًا بقلبه: "أشهد أن لا إله إلا الله، وأشهد أن محمدًا رسول الله".'
              icon="shahada.svg"
            />
            <Pillar
              name="الصّلاة"
              description="وهي عمود الدّين، وأوّل ما يُحاسَب عليه العبد المسلم يوم القيامة هو الصّلاة، فإن صَلحت صَلح سائر العمل والعبادة، والصّلاة هي الصلة بين العبد وربّه. ومعنى ركن إقامة الصلاة أن يعتقد الإنسان اعتقاداً جازماً أنّ الله قد أوجب وفرض على كلّ مسلمٍ بالغٍ عاقلٍ أهلٍ للتكليف خمس صلواتٍ مفروضةٍ في اليوم واللّيلة."
              icon="salah.svg"
            />
            <Pillar
              name="الصّوم"
              description="الصيام رابع أركان الإسلام الخمسة، وقصد به صيام شهر رمضان من كل عام، ولا يدخل فيه صيام النوافل، ويُعرّف الصّيام؛ بأنّه الإمساك عن جميع المُفطرات من الفجر الصادق إلى غروب الشمس؛ بقصد التقرّب إلى الله وطاعته، والتزام أمره -سبحانه- وتعالى."
              icon="sawm.svg"
            />
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-12 px-6 md:px-1 mt-8 text-white">
            <Pillar
              name="الزّكاة"
              description="الزّكاة ثالث أركان الإسلام الخمسة، وهي حقٌّ واجبٌ في المال في أحوال خاصّةٍ في توقيتٍ مُحدَّدٍ، والزّكاة هي المقدار الواجب إخراجه من أموال المسلمين لمُستحقّيه، ويكون ذلك في المال الذي بلغ النِّصاب الشرعيّ مُحدّد المقدار في الشريعة الإسلاميّة بنظامٍ دقيقٍ وبشروطٍ مُعيّنةٍ."
              icon="zakat.svg"
              minHeight={80}
            />
            <Pillar
              name="الحج"
              description= "آخر أركان الإسلام هو الحجّ الذي فرضه الله تعالى على المسلمين، وذلك لقوله تعالى: (وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا وَمَنْ كَفَرَ فَإِنَّ اللَّهَ غَنِيٌّ عَنِ الْعَالَمِينَ) [آل عمران: 97]."
              icon="hajj.svg"
              minHeight={80}
            />
          </div>
        </div>
      </div>

      <div className="w-full h-[124.71px] absolute z-10 bg-[#183966] blur-lg"></div>
    </section>
  );
}

export function Pillar({
  name,
  description,
  icon,
  minHeight,
}: {
  name: string;
  description: string;
  icon: string;
  minHeight?: number;
}) {
  const min = minHeight ? `min-h-[${minHeight}px]` : "min-h-[115px]";

  return (
    <div className="flex flex-col items-center text-white p-3 md:p-6 max-w-lg mx-auto rounded">
      <div className={`flex-shrink-0 mb-2 ${min}`}>
        <Image
          className="mx-auto"
          src={`/icons/${icon}`}
          alt="Icon"
          width={60}
          height={60}
        />
      </div>

      <div className="text-center">
        <h3 className="text-2xl lg:text-3xl font-bold text-cgreen mx-4 mb-4">
          {name}
        </h3>
        <p className="mx-auto max-w-sm md:text-lg xl:text-xl">{description}</p>
      </div>
    </div>
  );
}
