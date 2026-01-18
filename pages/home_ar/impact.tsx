export default function Impact() {
  return (
    <section className="py-16 bg-cblue">
      <div className="lg:container text-center lg:text-right mx-auto">
        <h2 className="text-3xl lg:text-4xl mr-12 font-bold md:ml-16">
          تأثيرنا
          <span className="text-xl text-cbrown pr-3 block md:inline">
            2020-2025
          </span>
        </h2>
        <div className="flex flex-wrap justify-center mt-8 gap-12 lg:gap-24">
          <StatCard number="8500+" subtitle="مستفيد" />
          <StatCard number="850+" subtitle="منحة جامعيّة" />
          <StatCard number="350+" subtitle="تدريب مهاراتي" />
          <StatCard number="250+" subtitle="فرصة تدريب وتوظيف" />
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  number: string;
  subtitle: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, subtitle }) => {
  return (
    <div className="text-center p-4 rounded-lg flex-1 min-w-[200px] max-w-[300px]">
    <h2 className="text-6xl lg:text-7xl font-bold text-transparent stroke-text" style={{ WebkitTextStroke: '2px #28c76f' }}>
        {number}
      </h2>
      <p className="text-white text-lg lg:text-2xl font-bold mt-2">
        {subtitle}
      </p>
    </div>
  );
};
