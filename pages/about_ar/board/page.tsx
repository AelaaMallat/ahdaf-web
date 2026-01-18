"use client";

import React, { useState } from "react";

type Person = {
  id: number;
  name: string;
  status: string;
  photo: string;
  bio: string | string[];
};

const people: Person[] = [
  {
    id: 1,
    name: "السّيدة أماني دبليز",
    status: "مديرة أكاديميّة إشراقة و مدرسة أهداف",
    photo: "/images/board/person1.jpg",
    bio: [
      "تشغلُ السّيدة أماني دبليز منصب مديرة أكاديميّة إشراقة ومدرسة أهداف، تتمتعُ بخبرةٍ تربويّةٍ تزيد عن عشرين عامًا في مجال التّعليم. على مدار مسيرتها المهنيّة، أثبتتْ كفاءة ًقياديّةً استثنائيّةً، ومعرفةً تربويّةً عميقةً، والتزامًا راسخًا بتمكين الطّلّاب والمعلمين على حدّ سواء.",
      "تحمل السّيدة دبليز شهادة البكالوريوس في العلوم التّربويّة، مما يُتيح لها الجمع بين الأسس الأكاديميّة المتينة والخبرة العمليّة الواسعة. بدأت رحلتها المهنيّة في مراحل رياض الأطفال والتّعليم الابتدائيّ، حيث كرست جهودها لتنمية حبّ الاستكشاف والابداع والتّعلم في نفوس الأطفال. وتُعرف بابداعها وطموحها واجتهادها وتفانيها المستمر للعمل برؤيةٍ واضحةٍ ونزاهةٍ عاليةٍ.",
      "وبفضل قيادتها، شهدت أكاديميّة إشراقة ومدرسة أهداف تحت إدارتها نموًا ملحوظًا، وأصبحتا من المؤسسات التّعليميّة الرّائدة الّتي تُعرَف بتميّزها الأكاديميّ، وممارساتها التّربويّة المبتكرة، ونهجها الشّامل في تطوير الطّلّاب. ",
      "ترتكز فلسفتها التّعليميّة على الإيمان بأنّ التّعليم لا يقتصر على نقل المعرفة، بل يشمل بناء الشّخصيّة، وتعزيز الثّقة بالنّفس، وإطلاق الطّاقات الكامنة لدى الطّالب. ومن خلال قيادتها، تواصلُ السّيدة دبليز إحداث تأثير إيجابيّ ملموس في المجتمع التّربويّ الّذي تخدمه."
    ],
  },
  {
    id: 2,
    name: "السّيد ربيع ضناوي",
    status: "مدير أكاديميّة إشراقة علم",
    photo: "/images/board/person2.jpg",
    bio: [
      "انضم السيّد ربيع ضناوي إلى وقف أهداف الخيريّ عام 2019، حيث بدأ مسيرته كمدرّس لمادتيّ العلوم والكيمياء في أكاديميّة إشراقة، واستمرَّ في هذا الدّور حتّى عام 2024. خلال هذه الفترة، ساهم في تدعيم المهارات التّعليميّة وتعزيز القيم التّربويّة لدى الطّلّاب.",
      "في عام 2023، تولّى منصب مسؤول قسم اللّوجستيات والمشتريات في مؤسسات وقف أهداف الخيريّ، حيث أدار العمليات الحيويّة لضمان كفاءة الأداء واستدامة الموارد. وفي عام 2024، عُيّن مديرًا لنادي \"علمني للشباب الجامعيّ\"، وهو المنصب الّذي يشغله حتّى اليوم، إلى جانب قيادته لأكاديمية إشراقة علم منذ تأسيسها في العام نفسّه.",
      "كرّس السّيد ربيع جهوده لتعزيز قدرات الشّباب الثّانويّ والجامعيّ، مُركّزًا على تحسين المنظومة القِيميّة والأخلاقيّة، والاهتمام بالجوانب التّعليميّة والتّربويّة والنّفسيّة. يحمل شهادة الماجستير في علوم جهاز المناعة من كليّة العلوم في الجامعة اللّبنانية (2017)، مما يعكس اهتمامه العميق بالبحث العلميّ والتّطوير المعرفيّ.",
      "يؤمن السّيد ربيع بأهميّة بناء جيل واعٍ ومتمكّن، ويعمل باستمرار على تصميم وتنفيذ برامج تعليميّة وتربويّة تُسهم في تطوير المهارات الشّخصيّة والمهنيّة لدى الشّباب."
    ]
  },
  {
    id: 3,
    name: "السّيدة نجاح وهبي",
    status: "مديرة مؤسّسة علمني",
    photo: "/images/board/person3.jpg",
    bio: [
      "تتمتّعُ  الدّكتورة نجاح وهبي بخبرةٍ واسعةٍ في مجالات التّعليم والتّنمية والعمل في القطاع غير الرّبحيّ. تشغل حاليًا منصب مديرة مؤسسة \"علّمني\"، وهي منظمة تُعنى بدعم طلّاب الجامعيين الطّامحين من خلال تقديم منح ماليّة وبرامج تنمويّة تعزّز القيم والمهارات الحياتيّة والقياديّة، تمكّنهم من بناء شخصياتهم والمساهمة الفاعلة في مجتمعاتهم.",
      "انضمت نجاح  إلى مؤسسة \"علّمني\" في عام 2023 ثمَّ تولّتْ منصب المديرة في عام 2024، حيث قادتْ جهود المؤسسة نحو توسيع آفاق النّمو والابتكار وتعزيز التّأثير الإيجابيّ لدى الشّباب. يستندُ أسلوبها القياديّ إلى التّعاون والشّموليّة، مع إيمانٍ عميقٍ بأنَّ التّعليم المرتكز على القيم هو مفتاح التّغيير المجتمعيّ الحقيقيّ.",
      "تحملُ الدّكتورة نجاح درجة الدّكتوراه، مما يُضفي على قيادتها بُعدًا استراتيجيًّا، ودقة تحليليّة، وقدرة على اتخاذ قراراتٍ مبنيّةٍ على دراسات. قادت مبادرات في جامعات ومدارس ومنظمات غير حكوميّة، وأسهمت في تطوير آليّات اختيار الطّلّاب وبرامج تنميتهم لاكتشاف ورعاية المواهب الواعدة.",
      "خلال مسيرتها المهنيّة، نمت خبرة الدّكتورة نجاح بسبب شغفها بالتّعليم وتنميّة المجتمعات. وقد ساهمت في برامج لبناء القدرات والتّعليم الرّقميّ، واكتسبت خبرة واسعة في العمل مع متعلّمين وزملاء من مختلف الأعمار والخلفيات واللّغات والثّقافات. كما تعاونتْ عن كَثب مع التّربويّين وصُنّاع السّياسات ومنظمات الشّباب لتعزيز تعليم شموليّ قائم على القِيم وينظر إلى المستقبل.",
      "تؤمن نجاح إيمانًا راسخًا بقدرة الشّباب على إحداث التّغيير الإيجابيّ، وتتمثّل رؤيتها لمؤسسة \"علّمني\" في ترسيخ ثقافة التّعاون والابتكار خطوة أساسيّة لمجتمع أفضل وأكثر ازدهارًا، مُؤكدّة أنّ التّعليم المدعوم بالقِيم هو السّبيل لتحقيق هذا الهدف."
    ]
  },
];

const BoardPageAr: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  return (
    <div dir="rtl" className="min-h-screen flex items-center justify-center bg-gray-100 pt-20 pb-4">
      <div className="w-full max-w-6xl p-8 m-2 bg-white rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-center text-[#102F5C] mb-4">مجلس الإدارة</h1>
        <p className="text-center text-gray-700 max-w-4xl mx-auto mb-12">
        تحت قيادة الرئيس التنفيذي السيد محمد مطرجي، يضطلع مجلس الإدارة في وقف أهداف الخيري بدور محوري في ضمان التطبيق الفعّال للسياسات التي يعتمدها مجلس الأمناء. ويتألف المجلس من مدراء الأقسام في المؤسسة، الذين يعملون بتنسيق وتعاون لدعم جهود فريق العمل والمتطوعين. ويتيح هذا الهيكل التنظيمي اعتماد نهج استراتيجي متكامل في أعمالنا الخيرية، بما ينسجم مع الرؤية والرسالة التي وضعها مجلس الأمناء.
        </p>

        <div className="flex justify-center gap-8 flex-wrap">
          {people.map((p) => (
            <div
              key={p.id}
              className="w-64 h-96 bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden flex flex-col items-center p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={p.photo}
                alt={p.name}
                className="w-48 h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#102F5C] text-center mb-2">{p.name}</h3>
              <p className="text-sm text-gray-600 text-center mb-4 flex-grow">{p.status}</p>
              <button
                onClick={() => setSelectedPerson(p)}
                className="cursor-pointer hover:text-[#1e5a96] transition-colors"
              >
                <svg className="w-6 h-6 text-[#102F5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal/Popup */}
      {selectedPerson && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn"
          onClick={() => setSelectedPerson(null)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl max-w-3xl w-full overflow-y-auto animate-expandToSmall"
            onClick={(e) => e.stopPropagation()}
            dir="rtl"
          >
            <div className="p-8">
              {/* Content */}
              <div className="flex gap-6 mb-6">
                {/* Image */}
                <div className="flex-shrink-0">
                  <img
                    src={selectedPerson.photo}
                    alt={selectedPerson.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                </div>

                {/* Name and Status */}
                <div className="flex-1 text-right">
                  <h2 className="text-3xl font-bold text-[#102F5C] mb-2">{selectedPerson.name}</h2>
                  <p className="text-lg text-gray-600">{selectedPerson.status}</p>
                </div>
              </div>

              {/* Bio */}
              <div className="text-gray-700 leading-relaxed text-right">
                {Array.isArray(selectedPerson.bio) ? (
                  selectedPerson.bio.map((paragraph, index) => (
                    <p key={index} className="mb-4 text-justify">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-justify">{selectedPerson.bio}</p>
                )}
              </div>
            </div>

            <style>{`
              @keyframes fadeIn {
                from {
                  opacity: 0;
                }
                to {
                  opacity: 1;
                }
              }

              @keyframes expandToSmall {
                from {
                  max-height: 150vh;
                  opacity: 0;
                  transform: scaleY(1);
                }
                to {
                  max-height: 90vh;
                  opacity: 1;
                  transform: scaleY(1);
                }
              }

              .animate-fadeIn {
                animation: fadeIn 0.5s ease-out;
              }

              .animate-expandToSmall {
                animation: expandToSmall 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                transform-origin: center;
              }
            `}</style>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoardPageAr;
