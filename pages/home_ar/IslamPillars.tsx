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
          <p className="text-white text-center mt-4 max-w-4xl text-d lg:text-xl mx-auto px-5">
            The Pillars of Islam are the core principles and practices that
            structure the faith of a Muslim. They serve as a framework for
            worship and a guide to living a righteous life. These pillars
            emphasize devotion, discipline, and social responsibility.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 px-6 mt-8  text-white">
            <Pillar
              name="الشّهادة"
              description="The declaration of belief in the oneness of God and that Muhammad is His messenger."
              icon="shahada.svg"
            />
            <Pillar
              name="الصّلاة"
              description="The performance of five daily prayers to connect with and worship God."
              icon="salah.svg"
            />
            <Pillar
              name="الصّوم"
              description="Abstaining from food, drink, and sins during Ramadan as an act of self-discipline and devotion."
              icon="sawm.svg"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-12 px-6 md:px-1 mt-8 text-white">
            <Pillar
              name="الزّكاة"
              description="The act of giving a portion of one’s wealth to help those in need."
              icon="zakat.svg"
              minHeight={80}
            />
            <Pillar
              name="الحج"
              description="A spiritual journey to Mecca, obligatory once in a lifetime for those who can afford it."
              icon="hajj.svg"
              minHeight={80}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[124.71px] absolute z-10 bg-[#183966] blur-lg "></div>

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
    <div className="flex flex-col items-center text-white p-3 md:p-6 max-w-lg mx-auto rounded max-w-lg">
      <div className="flex-shrink-0 mb-2 min">
        <Image
          className={`mx-auto ${min}`}
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
