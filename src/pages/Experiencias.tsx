import React from "react";

interface ExperienceCardProps {
  role: string;
  company: string;
  type: string;
  duration: string;
  descriptionPoints: string[];
  technologies: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  role,
  company,
  type,
  duration,
  descriptionPoints,
  technologies,
}) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-xl border-l-4 border-cyan-500 mb-8 transition-shadow duration-300 hover:shadow-cyan-500/20">
    <div className="flex justify-between items-start mb-3">
      <div>
        <h3 className="text-xl font-bold text-white">{role}</h3>
        <p className="text-sm text-cyan-400 font-medium">
          {company} | {type}
        </p>
      </div>
      <p className="text-sm text-gray-500 font-light whitespace-nowrap pt-1">
        {duration}
      </p>
    </div>
    <ul className="list-disc ml-5 space-y-2 text-gray-300 mb-4">
      {descriptionPoints.map((point, index) => (
        <li key={index} className="text-sm">
          {point}
        </li>
      ))}
    </ul>

    <div className="pt-3 border-t border-gray-700">
      <span className="text-xs font-semibold uppercase text-gray-500 mr-2">
        Tech Stack:
      </span>
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="text-xs font-medium px-2 py-0.5 rounded-full bg-cyan-900/50 text-cyan-300 mr-2"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const myExperiences: ExperienceCardProps[] = [
  {
    role: "Desenvolvedor Júnior",
    company: "XPRealms",
    type: "Voluntário",
    duration: "2024",
    descriptionPoints: [
      "Desenvolvimento de módulos customizados para FoundryVTT (sistema de mesa virtual), aplicando lógica complexa em TypeScript.",
      "Suporte no desenvolvimento de novas funcionalidades, focado em otimização e manutenibilidade do código.",
      "Colaboração direta com um desenvolvedor sênior, aprendendo e aplicando boas práticas de código e arquitetura.",
    ],
    technologies: ["TypeScript", "HTML", "CSS", "FoundryVTT"],
  },
];

export const Experiencias: React.FC = () => {
  return (
    <section id="experiencias" className="py-16">
      <h1 className="text-4xl font-bold text-white border-b border-gray-700 pb-4 mb-6">
        Experiências Profissionais
      </h1>
      <p className="text-gray-400 text-lg mb-10">
        Minha jornada profissional e de desenvolvimento.
      </p>
      <div className="max-w-4xl mx-auto md:mx-0">
        {myExperiences.map((xp, index) => (
          <ExperienceCard key={index} {...xp} />
        ))}
      </div>
    </section>
  );
};
