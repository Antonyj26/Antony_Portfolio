import React from "react";

interface EducationCardProps {
  course: string;
  institution: string;
  status: string;
  descriptionPoints: string[];
  certificateLink?: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  course,
  institution,
  status,
  descriptionPoints,
  certificateLink,
}) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-xl border-l-4 border-cyan-500 mb-8 transition-shadow duration-300 hover:shadow-cyan-500/20">
    <div className="flex justify-between items-start mb-3">
      <div>
        <h3 className="text-xl font-bold text-white">{course}</h3>
        <p className="text-sm text-cyan-400 font-medium">
          {institution} | {status}
        </p>
      </div>
    </div>

    <ul className="list-disc ml-5 space-y-2 text-gray-300 mb-4">
      {descriptionPoints.map((point, index) => (
        <li key={index} className="text-sm">
          {point}
        </li>
      ))}
    </ul>

    {certificateLink && (
      <div className="pt-3 border-t border-gray-700">
        <a
          href={certificateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-sm font-medium rounded-lg text-white bg-cyan-600 hover:bg-cyan-700 transition duration-300"
        >
          Ver Certificado
        </a>
      </div>
    )}
  </div>
);

const myEducation: EducationCardProps[] = [
  {
    course: "Mentoria e Estudo Acompanhado em Back-end Java",
    institution: "Desenvolvedor Sênior",
    status: "Em Andamento",
    descriptionPoints: [
      "Estudo aprofundado na linguagem Java com foco em APIs, Orientação a Objetos (POO) e Spring Boot.",
      "Aprendizagem de boas práticas, padrões de projeto e arquitetura de sistemas escaláveis sob mentoria de um profissional sênior.",
      "Desenvolvimento prático e resolução de problemas complexos na stack Java.",
    ],
    certificateLink: "",
  },
  {
    course: "Tecnologia em Análise e Desenvolvimento de Sistemas",
    institution: "UFBRA",
    status: "Cursando",
    descriptionPoints: [
      "Formação focada em desenvolvimento de software, banco de dados, gestão de projetos e análise de requisitos.",
    ],
    certificateLink: "",
  },
  {
    course: "Trilha Full-Stack",
    institution: "Rocketseat",
    status: "Concluído",

    descriptionPoints: [
      "Domínio de fundamentos e conceitos avançados de HTML, CSS e JavaScript.",
      "Desenvolvimento Back-end com Node.js (incluindo APIs e Express).",
      "Desenvolvimento Front-end com React e uso de TypeScript.",
      "Tecnologias de suporte: Banco de dados, Docker, Testes automatizados e Tailwind CSS.",
      "Habilidades em Git/GitHub e deploy de aplicações.",
    ],
    certificateLink:
      "https://app.rocketseat.com.br/certificates/c4d9822a-0a02-4191-865d-5efb81a9764c",
  },
];

export const Formacao: React.FC = () => {
  return (
    <section id="formacao" className="py-16">
      <h1 className="text-4xl font-bold text-white border-b border-gray-700 pb-4 mb-6">
        Formação Acadêmica & Profissional
      </h1>
      <p className="text-gray-400 text-lg mb-10">
        Minhas qualificações formais e especializações em desenvolvimento.
      </p>

      <div className="max-w-4xl mx-auto md:mx-0">
        {myEducation.map((education, index) => (
          <EducationCard key={index} {...education} />
        ))}
      </div>
    </section>
  );
};
