import React from "react";

interface SectionPlaceholderProps {
  id: string;
  title: string;
}

export const SectionPlaceholder: React.FC<SectionPlaceholderProps> = ({
  id,
  title,
}) => {
  return (
    <section id={id} className="min-h-[800px] py-16">
      <h1 className="text-4xl font-bold text-gray-800 border-b pb-2">
        {title}
      </h1>
      <div className="bg-white p-8 rounded-xl shadow-lg mt-8 h-full flex items-center justify-center">
        <p className="text-gray-500 text-2xl">
          Conteúdo da seção "{title}" será adicionado aqui!
        </p>
      </div>
    </section>
  );
};
