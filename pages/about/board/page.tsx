"use client";

import React, { useState } from "react";
import Image from "next/image";

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
    name: "Ms. Amani Dabliz",
    status: "Director of Eshraqa Academy & Ahdaf School",
    photo: "/images/board/person1.jpg",
    bio: [
      "Amani Dabliz is the Director of Eshraqa Academy and Ahdaf School, with over 20 years of experience in the field of education. Throughout her career, she has demonstrated exceptional leadership, deep pedagogical knowledge, and a steadfast dedication to empowering both students and teachers.",
      "Holding a Bachelor’s degree in Educational Sciences, Ms. Dabliz combines strong academic foundations with practical expertise. She began her professional journey in the kindergarten and elementary cycles, where she cultivated a passion for nurturing curiosity, creativity, and a lifelong love of learning in young minds. Known for her creativity, ambition, hard work, and unwavering dedication, Ms. Dabliz leads with vision and integrity. Under her direction, Eshraqa Academy and Ahdaf School have flourished as institutions recognized for their academic excellence, innovative practices, and holistic commitment to student development.",
      "Her educational philosophy centers on the belief that teaching is not merely about transferring knowledge—it is about shaping character, inspiring confidence, and unlocking human potential. Through her leadership, Ms. Dabliz continues to influence and elevate the educational community she serves.",
    ],
  },
  {
    id: 2,
    name: "Mr. Rabih Al Dannaoui",
    status: "Director of Eshraqat Elem",
    photo: "/images/board/person2.jpg",
    bio: ["Mr. Rabih Al Dannaoui is the Academic Director of Eshraqat Elm Academy. He has been a valuable member of Ahdaf Charitable Endowment since 2019. Mr. Rabih began his journey as a Science and Chemistry teacher at Eshraqat Elem Academy, a role he fulfilled until 2024. During this period, he contributed to strengthening students’ learning skills and promoting educational values.",
           "In 2023, Mr. Rabih assumed the role of Head of Logistics and Procurement at Ahdaf Charitable Endowment, where he managed vital operations to ensure efficiency and sustainability of resources.",
           "In 2024, he was appointed as a Director of Alemni Club for university youth, a position he holds up to this day, alongside with his leadership of Eshraqat Elem Academy since its founding in the same year.",
           "Mr. Rabih has dedicated his efforts to empowering secondary and university students and enhancing their capabilities, focusing on fostering their moral and ethical development, and paying close attention to their educational development, personal growth, and psychological needs.",
           "He holds a Master degree in Immunology from the Faculty of Sciences at the Lebanese University in 2017, which reflects his deep interest in scientific research and cognitive development.",
           "Mr. Rabih believes in the importance of building a conscious and empowered generation and works continuously to design and implement educational programs that contribute to developing the personal and professional skills of young people."
    ]
  },
  {
    id: 3,
    name: "Ms. Najah Wehbi",
    status: "Director of Alemni Foundation",
    photo: "/images/board/person3.jpg",
    bio: ["Najah has a wealth of experience in the education, development, and nonprofit sectors. She is the Director of Alemni, an organization dedicated to supporting ambitious university students through financial aid and developmental programs that strengthen values, life skills, and leadership — empowering them to build themselves and contribute meaningfully to their communities.",
           "Since joining Alemni in 2023 and becoming Director in 2024, Najah has driven the organization’s mission to expand opportunities for youth growth, innovation, and impact. Her leadership is rooted in collaboration, inclusivity, and a belief that education guided by strong values transforms society.",
           "Najah holds a PhD, bringing strategic insight, analytical rigor, and evidence-based decision-making to her leadership. She has led initiatives across universities, schools, and NGOs, including shaping student selection and development processes to identify and nurture high-potential talent.",
           "Throughout her career, Najah has been driven by a passion for education and community development. She has supported programs in capacity building and digital learning, gaining experience working with learners and colleagues of diverse ages, backgrounds, languages, and cultures. Her work has involved close collaboration with educators, policymakers, and youth organizations to foster inclusive, values-driven, and forward-looking education.",
           "Najah is deeply committed to empowering young people to become agents of positive change. Her vision for Alemni is rooted in collaboration, innovation, and a firm belief that education — when guided by strong values and opportunity — is the foundation for a better and more prosperous society."
    ]
  },
];

const BoardPage: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20 pb-4">
      <div className="w-full max-w-6xl p-8 m-2 bg-white rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-center text-[#102F5C] mb-4">Board of Directors</h1>
        <p className="text-center text-gray-700 max-w-4xl mx-auto mb-12">
          Under the leadership of CEO, Mr. Mohamad Matraji, 
          the Board of Directors at Ahdaf Charity Endowment 
          plays a vital role in ensuring that the policies 
          established by our Board of Trustees are effectively 
          implemented. The Board of Directors is composed of 
          departmental directors from across Ahdaf Charity Endowment, 
          working collaboratively to support the efforts of our staff 
          and volunteers. This structure enables us to maintain a cohesive 
          and strategic approach to our charitable endeavors, aligning with 
          the vision and mission set forth by our Board of Trustees.
        </p>

        <div className="flex justify-center gap-8 flex-wrap">
          {people.map((p) => (
            <div
              key={p.id}
              className="w-64 h-96 bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden flex flex-col items-center p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={p.photo}
                alt={p.name}
                width={192}
                height={192}
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
          >
            <div className="p-8">
              {/* Content */}
              <div className="flex gap-6 mb-6">
                {/* Image */}
                <div className="flex-shrink-0">
                  <Image
                    src={selectedPerson.photo}
                    alt={selectedPerson.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                </div>

                {/* Name and Status */}
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-[#102F5C] mb-2">{selectedPerson.name}</h2>
                  <p className="text-lg text-gray-600">{selectedPerson.status}</p>
                </div>
              </div>

              {/* Bio */}
              <div className="text-gray-700 leading-relaxed">
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


export default BoardPage;