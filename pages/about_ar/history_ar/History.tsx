import Timeline from "./Timeline";

export default function History() {
  return (
    <section
      className="relative bg-cover bg-center py-28 "
      style={{ backgroundImage: "url('/backgrounds/timeline_bg_1.png')" }}
    >
      <div className="absolute inset-0 bg-[#0D2853] opacity-95"></div>
      <div className="relative z-10 text-white text-center p-6">
        <h2 className="text-3xl font-bold text-cgreen block">OUR HISTORY</h2>
        <div className="mt-6 mx-auto max-w-7xl text-justify lg:text-center md:text-lg xl:text-xl">
          Since 2012, Ahdaf Charity Endowment has been steadfast in addressing
          the pressing challenges in Northern Lebanon, particularly in education
          and community development. Recognizing the region’s struggles across
          various sectors, we embarked on a transformative mission to empower
          individuals, foster resilience, and drive meaningful change. Our
          journey began with a vision to elevate educational standards and
          cultivate a culture of growth. By investing in the youth, we aim to
          nurture proactive leaders capable of uplifting their communities and
          addressing societal challenges. Our initiatives focus on shaping a
          generation that not only excels academically but also contributes
          significantly to their community’s progress.
        </div>

        <h2 className="text-3xl font-bold text-cgreen block my-8">
          MILESTONES OF AHDAF CHARITY ENDOWMENT
        </h2>
        <Timeline
          achievements={[
            {
              year: 2012,
              title: "Launch of Alemni Foundation",
              description:
                "Our journey began with a vision to elevate educational standards and cultivate a culture of growth. By investing in the youth, we aim to nurture proactive leaders capable of uplifting their communities and addressing societal challenges. Our initiatives focus on shaping a generation that not only excels academically but also contributes significantly to their community’s progress. ",
            },
            {
              year: 2013,
              title: "Launch of Eshraqa Academy",
              description:
                "In 2013, we proudly established Eshraqa Academy, a comprehensive initiative designed to support children and teens. Through academic retention programs, recreational activities, and psycho-social support, Eshraqa Academy addressed both the academic and emotional needs of students, creating a solid foundation for their future.",
            },
            {
              year: 2015,
              title:
                "Establishment of Ajwad The Lebanese Centre for School Development",
              description:
                "In 2015, we launched the services of Ajwad Centre to enhance private education in Northern Lebanon. This pioneering institution introduced active learning curricula and modern teaching methodologies and shifted educational practices from traditional approaches to more dynamic and effective methods. ",
            },
            {
              year: 2022,
              title: "Founding of Ahdaf School",
              description:
                "A Response to Crisis In 2022, as Lebanon’s economic crisis deepened, we responded by founding Ahdaf School. This initiative provides families with an affordable and supportive educational environment rooted in Islamic values. Despite the challenges, Ahdaf School ensures access to quality education, embodying our unwavering commitment to the community.",
            },
            {
              year: 2023,
              title: "Eshraqat Elem Independent Vision",
              description:
                "In 2023, Eshraqat Elem emerged as a visionary initiative with its own strategy and objectives. By focusing on academic support and technical skill development, it empowers high school students from both public and private schools in Northern Lebanon. With their enhanced competencies, students from Eshraqat Elem are prepared to thrive in an ever-evolving world.",
            },
            {
              year: 2024,
              title: " Launch of Alemni Club",
              description:
                "Later in 2024, we expanded our reach by establishing Alemni Club, a dedicated space for undergraduate students. Alemni Club fosters academic excellence and personal growth, offering facilities for studying and engagement in extracurricular activities such as chess, debate clubs and reading groups. It serves as a sanctuary for young minds to thrive and connect.",
            },
          ]}
        />
        <h2 className="text-3xl font-bold text-cgreen block my-8 uppercase">
          Ahdaf Charity Endowment Today
        </h2>
        <div className="mt-6 mx-auto max-w-7xl text-justify lg:text-center md:text-lg xl:text-xl">
          Through these milestones, Ahdaf Charity Endowment has consistently
          demonstrated its unwavering dedication to educational excellence and
          community empowerment in Northern Lebanon. Guided by a clear vision
          and a strong sense of purpose, we continue to drive transformative
          change. We invite you to join us in shaping a brighter future for the
          region- one initiative at a time.
        </div>
      </div>
    </section>
  );
}
