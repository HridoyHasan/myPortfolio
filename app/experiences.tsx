// components/experiences.tsx
import { useState } from 'react';

const experiences = [
  {
    title: "SQA Engineer",
    company: "Finix Code",
    year: "October 2023 - Present",
    description: "",
    responsibilities: [
      "Perform different types of testing to maintain product quality.",
      "Create and Execute Test Plans, Test Cases using different tools.",
      "Identifying, Documenting, and Reporting Bugs and Errors.",
    ],
  },
  {
    title: "SQA Engineer",
    company: "Catch The Review LLC",
    year: "August 2021 - September 2023",
    description: "",
    responsibilities: [
   
       "Create and Execute Test Plans, Test Cases using different tools.",
       "Identifying, Documenting, and Reporting Bugs and Errors.",
       "Perform different types of testing to deliver high quality products.",
       "Automation: Implements test automation using Jmeter and Postman."
    ],
  },
  {
    title: "Officer",
    company: "bKash",
    year: "October 2020 – July 2021",
    description: "",
    responsibilities: [
      "Understand user needs and ensure a seamless user experience.",
      "Responded to customers’ fraudulent complaints and took appropriate actions.",
      "Escalate customer issues to appropriate teams."
    ],
  }
];

export default function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  return (
    <section className="flex flex-col -mt-4 md:space-x-4 md:flex-row py-10">
      {/* Left: Experience List */}
      <div className="md:w-1/2 ml-4 -mt-4">
        {experiences.map((experience, index) => (
          <div
            key={index}
            onClick={() => setSelectedExperience(experience)} // Set the clicked experience as selected
        className={`cursor-pointer p-4 my-4 rounded-lg hover:bg-gray-800 hover:text-white transition duration-200 ease-in-out ${
          selectedExperience === experience ? 'bg-[#ffffffe0] bg-opacity-50 text-black' : 'bg-[#00000028] text-white'
        }`}
          >
            <h3 className="text-lg font-serif font-bold">{experience.title}</h3>
            <p className="text-sm font-serif">{experience.company}</p>
            <p className="text-xs font-serif text-gray-500">{experience.year}</p>
            <p className="text-xs font-serif font-bold mt-1">{experience.description}</p>
          </div>
        ))}
      </div>
      <div className="hidden md:block w-px bg-gray-400 h-auto mx-4"></div>
      {/* Right: Responsibilities */}
      <div className="md:w-1/9 bg-gray-transparent text-white">
        <h3 className="text-xl font-bold mb-4">{selectedExperience.title}</h3>
        <p className="text-sm mb-2">{selectedExperience.company}</p>
        <p className="text-sm mb-4">{selectedExperience.year}</p>
        <ul className="list-disc list-inside">
          {selectedExperience.responsibilities.map((responsibility, index) => (
            <li key={index} className="mb-2">{responsibility}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
