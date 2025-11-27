import React from "react";

import CssIcon from "../assets/css.svg";
import DockerIcon from "../assets/docker.svg";
import ExpressIcon from "../assets/express.svg";
import GitIcon from "../assets/git.svg";
import GithubIcon from "../assets/github.svg";
import HtmlIcon from "../assets/html.svg";
import InsomniaIcon from "../assets/insomnia.svg";
import JavaIcon from "../assets/java.svg";
import JavascriptIcon from "../assets/javascript.svg";
import JestIcon from "../assets/jest.svg";
import NodeIcon from "../assets/node.svg";
import PostgresqlIcon from "../assets/postgresql.svg";
import ReactIcon from "../assets/react.svg";
import TailwindIcon from "../assets/tailwind.svg";
import TypescriptIcon from "../assets/typescript.svg";
import MysqlIcon from "../assets/mysql.svg";

const stacks = [
  { name: "TypeScript", icon: TypescriptIcon },
  { name: "Java", icon: JavaIcon },
  { name: "React", icon: ReactIcon },
  { name: "Node.js", icon: NodeIcon },
  { name: "Express", icon: ExpressIcon },
  { name: "JavaScript", icon: JavascriptIcon },
  { name: "HTML5", icon: HtmlIcon },
  { name: "CSS3", icon: CssIcon },
  { name: "Tailwind CSS", icon: TailwindIcon },
  { name: "PostgreSQL", icon: PostgresqlIcon },
  { name: "MySQL", icon: MysqlIcon },
  { name: "Docker", icon: DockerIcon },
  { name: "Git", icon: GitIcon },
  { name: "GitHub", icon: GithubIcon },
  { name: "Jest", icon: JestIcon },
  { name: "Insomnia", icon: InsomniaIcon },
];

export const Conhecimentos: React.FC = () => {
  return (
    <section id="conhecimentos" className="py-16">
      <h1 className="text-4xl font-bold text-white border-b border-gray-700 pb-4 mb-6">
        Habilidades & Conhecimentos
      </h1>
      <p className="text-gray-400 text-lg mb-10">
        Minha stack full-stack principal, incluindo linguagens, frameworks,
        bancos de dados e ferramentas de desenvolvimento.
      </p>
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl">
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-8 xl:grid-cols-10 gap-x-6 gap-y-10 justify-items-center">
          {stacks.map((stack) => (
            <div key={stack.name} className="flex flex-col items-center group">
              <img
                src={stack.icon}
                alt={stack.name}
                className="w-16 h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <p className="text-xs text-gray-400 mt-2 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-8 group-hover:translate-y-16">
                {stack.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
