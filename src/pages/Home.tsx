import React from "react";
import { RotatingText } from "../components/RotatingText";

export const Home: React.FC = () => {
  return (
    <section id="home" className="py-16 text-white">
      <header className="mb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 uppercase">
          É TUDO SOBRE
        </h1>
        <div className="flex justify-center h-10">
          <RotatingText />
        </div>
      </header>
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl border-l-8 border-cyan-500 max-w-4xl mx-auto hover:border-cyan-500 transition duration-300">
        <h2 className="text-3xl font-semibold mb-4 text-white">
          Minha Jornada
        </h2>
        <p className="leading-relaxed text-lg text-gray-300">
          Desenvolvedor Full Stack com experiência prática na criação de
          aplicações completas, desde o front-end até o back-end. Ao longo dos
          últimos anos, venho me aprofundando em tecnologias modernas,
          construindo projetos reais e aprimorando minha capacidade de resolver
          problemas com código limpo, organizado e escalável.
        </p>
      </div>
      <div className="mt-12 text-center">
        <a
          href="#portfolio"
          className="inline-block px-10 py-4 text-lg font-bold rounded-xl text-white bg-cyan-600 hover:bg-cyan-700 transition duration-300 shadow-lg transform hover:scale-105"
        >
          Ver Meus Projetos
        </a>
      </div>
    </section>
  );
};
