import React from "react";

import HelpdeskImage from "../assets/helpdesk.png";
import AdivinheImage from "../assets/advinhe.png";
import SorteadorImage from "../assets/sorteador.png";
import QuizImage from "../assets/quiz.png";

interface ProjectData {
  title: string;
  description: string;
  technologies: { name: string; color: string }[];
  liveLink?: string;
  githubLink?: string;
  githubBackendLink?: string;
  image?: string;
}

const ProjectCard: React.FC<ProjectData> = ({
  title,
  description,
  technologies,
  liveLink,
  githubLink,
  githubBackendLink,
  image,
}) => (
  <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-2xl hover:shadow-cyan-500/30 transition-shadow duration-500 overflow-hidden flex flex-col">
    <div className="h-40 bg-gray-700 flex items-center justify-center text-gray-400">
      {image ? (
        <img
          src={image}
          alt={`Mockup do projeto ${title}`}
          className="w-full h-full object-cover"
        />
      ) : liveLink ? (
        <div className="text-gray-400 text-lg">[Mockup em breve]</div>
      ) : (
        <div className="flex flex-col items-center text-cyan-400">
          <svg
            className="w-12 h-12 mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            ></path>
          </svg>
          <span className="text-base font-medium">Foco em Back-end</span>
        </div>
      )}
    </div>
    <div className="p-6 flex-grow flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2 mb-4 mt-3">
        {technologies.map((tech) => (
          <span
            key={tech.name}
            className={`text-xs font-medium px-3 py-1 rounded-full ${tech.color} text-white`}
          >
            {tech.name}
          </span>
        ))}
      </div>
      <div className="flex gap-4 pt-4 border-t border-gray-700">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-cyan-600 hover:bg-cyan-700 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
          >
            Live Demo
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white border border-gray-600 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
          >
            {githubBackendLink ? "GitHub Front" : "GitHub"}
          </a>
        )}
        {githubBackendLink && (
          <a
            href={githubBackendLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white border border-gray-600 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
          >
            GitHub Back
          </a>
        )}
      </div>
    </div>
  </div>
);

const projectList: ProjectData[] = [
  {
    title: "Helpdesk – Full-Stack System",
    description:
      "Sistema completo para abertura e gerenciamento de chamados. Demonstra proficiência Full-Stack, arquitetura de API REST, autenticação JWT, e uso de Docker.",
    technologies: [
      { name: "React", color: "bg-blue-600" },
      { name: "Node.js/Express", color: "bg-green-600" },
      { name: "PostgreSQL/Prisma", color: "bg-indigo-600" },
      { name: "Docker", color: "bg-teal-600" },
      { name: "TypeScript", color: "bg-blue-500" },
    ],
    liveLink: "https://helpdesk-theta-opal.vercel.app",
    githubLink: "https://github.com/Antonyj26/helpdesk",
    githubBackendLink: "https://github.com/Antonyj26/helpdesk-api",
    image: HelpdeskImage,
  },
  {
    title: "Gerenciador de Tarefas – OrgaTask (API)",
    description:
      "API REST robusta focada em segurança e persistência de dados. Implementa autenticação JWT, Prisma ORM e testes unitários com Jest.",
    technologies: [
      { name: "Node.js/Express", color: "bg-green-600" },
      { name: "PostgreSQL/Prisma", color: "bg-indigo-600" },
      { name: "Jest + Supertest", color: "bg-red-600" },
      { name: "Docker", color: "bg-teal-600" },
    ],
    liveLink: undefined,
    githubLink: "https://github.com/Antonyj26/orgatask-api",
    image: undefined,
  },
  {
    title: "Adivinhe – Jogo de Adivinhação de Palavras",
    description:
      "Jogo web interativo que demonstra manipulação de estado complexo e lógica Front-end pura, utilizando React.",
    technologies: [
      { name: "React", color: "bg-blue-600" },
      { name: "TypeScript", color: "bg-blue-500" },
      { name: "Vite", color: "bg-purple-600" },
    ],
    liveLink: "https://adivinhe-theta.vercel.app",
    githubLink: "https://github.com/Antonyj26/adivinhe",
    image: AdivinheImage,
  },
  {
    title: "Agendamento Pet Shop (CRUD Simples)",
    description:
      "CRUD básico para agendamento, focado na manipulação de dados locais e ferramentas de build modernas, como Webpack e Babel.",
    technologies: [
      { name: "HTML/CSS/JS", color: "bg-yellow-600" },
      { name: "json-server", color: "bg-gray-500" },
      { name: "Webpack/Babel", color: "bg-orange-600" },
    ],
    liveLink: undefined,
    githubLink: "https://github.com/Antonyj26/Agendamento-Petshop",
    image: undefined,
  },
  {
    title: "Sorteador de Números (Web App)",
    description:
      "Aplicação web simples para sorteio de números aleatórios dentro de um intervalo definido pelo usuário. Focado na lógica JavaScript fundamental.",
    technologies: [
      { name: "HTML/CSS", color: "bg-orange-600" },
      { name: "JavaScript", color: "bg-yellow-600" },
    ],
    liveLink: "https://sorteador-de-numeros-alpha-seven.vercel.app",
    githubLink: "https://github.com/Antonyj26/Sorteador-de-numeros",
    image: SorteadorImage,
  },
  {
    title: "Quiz Friends (Em Desenvolvimento)",
    description:
      "Plataforma de quizzes com React + TypeScript. Demonstra a organização de código em projetos React maiores. (Status: Em andamento)",
    technologies: [
      { name: "React", color: "bg-blue-600" },
      { name: "TypeScript", color: "bg-blue-500" },
      { name: "Vite", color: "bg-purple-600" },
    ],
    liveLink: undefined,
    githubLink: "https://github.com/Antonyj26/quiz-friends",
    image: QuizImage,
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="portfolio" className="py-16">
      <h1 className="text-4xl font-bold text-white border-b border-gray-700 pb-4 mb-6">
        Projetos em Destaque
      </h1>

      <p className="text-gray-400 text-lg mb-10">
        Aqui estão alguns dos meus projetos que demonstram minha capacidade de
        construir desde o zero até a produção.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};
