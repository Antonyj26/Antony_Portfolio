import React from "react";

const myInterests = [
  {
    category: "Lógica e Estratégia",
    icon: "🎮",
    description:
      "Hobbies que aprimoram o raciocínio rápido e a capacidade de planejamento a longo prazo.",
    items: [
      "Jogos de Estratégia (RPG e Simulação): Foco em otimização de recursos e tomada de decisão sob pressão.",
      "Acompanhamento de Novas Tecnologias: Curiosidade e aprendizado contínuo sobre IA, Cloud Computing e tendências de mercado.",
    ],
  },
  {
    category: "Criatividade e Foco",
    icon: "🎸",
    description:
      "Atividades que exigem disciplina, paciência e atenção aos detalhes.",
    items: [
      "Música e Violão: Desenvolvimento da coordenação, ritmo e concentração, essenciais para padrões de código.",
    ],
  },
  {
    category: "Equilíbrio Pessoal",
    icon: "👨‍👩‍👧‍👦",
    description:
      "Valorização do bem-estar e das relações interpessoais, buscando um equilíbrio saudável.",
    items: [
      "Tempo de Qualidade em Família: Priorização de relações e bem-estar, reforçando a importância do trabalho em equipe e comunicação clara.",
    ],
  },
  {
    category: "Aprendizado Contínuo",
    icon: "📚",
    description:
      "Atividades que reforçam disciplina, organização e evolução constante, essenciais para crescimento na área de tecnologia.",
    items: [
      "Estudo Guiado com Desenvolvedor Sênior: Prática semanal de Java, com exercícios e desafios para consolidar fundamentos de orientação a objetos.",
      "Projetos Pessoais: Criação de aplicações reais usando Node.js, React, TypeScript e PostgreSQL para aprofundar conceitos e testar novas ferramentas.",
    ],
  },
  {
    category: "Produtividade e Organização",
    icon: "🧠",
    description:
      "Práticas que ajudam a manter foco, clareza mental e tomada de decisão eficiente.",
    items: [
      "Planejamento e Documentação: Hábito de estruturar tarefas, anotar aprendizados e organizar projetos (como ocorreu no Helpdesk e no Gerenciador de Tarefas).",
      "Melhoria Contínua: Interesse em revisar código, otimizar lógicas e aprender novas abordagens mais performáticas.",
    ],
  },
  {
    category: "Comunicação e Colaboração",
    icon: "💬",
    description:
      "Atividades que fortalecem habilidades interpessoais e colaborativas no ambiente de desenvolvimento.",
    items: [
      "Troca de Conhecimento: Discussões técnicas, busca por feedback de desenvolvedores seniores e colaboração em pequenos projetos.",
      "Facilidade em Explicar Problemas: Prática constante de relatar bugs, justificar decisões e escrever mensagens claras em commits.",
    ],
  },
];

interface InterestCardProps {
  category: string;
  icon: string;
  description: string;
  items: string[];
}

const InterestCard: React.FC<InterestCardProps> = ({
  category,
  icon,
  description,
  items,
}) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-xl border-t-4 border-cyan-500 flex flex-col h-full">
    <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
      <span className="text-3xl mr-3">{icon}</span> {category}
    </h3>
    <p className="text-gray-400 text-sm mb-4">{description}</p>
    <ul className="list-disc ml-5 space-y-2 text-gray-300 flex-grow">
      {items.map((item, index) => (
        <li key={index} className="text-sm">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export const Interesses: React.FC = () => {
  return (
    <section id="interesses" className="py-16">
      <h1 className="text-4xl font-bold text-white border-b border-gray-700 pb-4 mb-6">
        Interesses Pessoais
      </h1>
      <p className="text-gray-400 text-lg mb-10">
        Fora do código, dedico meu tempo a atividades que aprimoram minhas
        habilidades de lógica, foco e criatividade.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {myInterests.map((interest, index) => (
          <InterestCard key={index} {...interest} />
        ))}
      </div>
    </section>
  );
};
