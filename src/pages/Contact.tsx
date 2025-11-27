import React from "react";

const contactData = [
  {
    medium: "Email",
    value: "antonyjosu26@gmail.com",
    href: "mailto:antonyjosu26@gmail.com",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v.4c.5.2 1 .4 1.5.5s1 .2 1.5.3l3 2c.2.1.4.2.6.2s.4.1.6.1c.2 0 .4-.1.6-.1s.4-.1.6-.2l3-2c.5-.1 1-.2 1.5-.3s1-.3 1.5-.5V6H4zm0 2.4v11.6c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8.4c-.5.2-1 .4-1.5.5s-1 .2-1.5.3L12 12.8c-.2.1-.4.2-.6.2s-.4.1-.6.1c-.2 0-.4-.1-.6-.1s-.4-.1-.6-.2l-3-2c-.5-.1-1-.2-1.5-.3s-1-.3-1.5-.5z" />
      </svg>
    ),
  },
  {
    medium: "LinkedIn",
    value: "Antony Josué Almeida de França",
    href: "https://www.linkedin.com/in/antony-josué-almeida-de-frança-784ba4202/",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-11 19h-3V8h3v11zm-1.5-12.26c-.96 0-1.75-.8-1.75-1.79 0-1 .79-1.79 1.75-1.79 1.76 0 1.75 1.79 1.75 1.79s0 1.79-1.75 1.79zm13.5 12.26h-3V14.12c0-1.16-.02-2.66-1.62-2.66-1.62 0-1.87 1.27-1.87 2.58v4.96h-3V8h2.89v1.27h.04c.4-.76 1.4-1.62 2.8-1.62 3 0 3.56 1.97 3.56 4.54v6.81z" />
      </svg>
    ),
  },
  {
    medium: "WhatsApp",
    value: "(61) 99127-8207",
    href: "https://wa.me/5561991278207",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.6 0-12 5.4-12 12s5.4 12 12 12c6.6 0 12-5.4 12-12S18.6 0 12 0zm5.1 16.5c-.3 1.3-1.6 2.2-3.2 2.2-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2c1.3 0 2.5.6 3.3 1.6l-.8.7c-.6-.6-1.4-.9-2.5-.9-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1.1 0 2-.4 2.7-1.1l.8.7z" />
      </svg>
    ),
  },
];

export const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-16">
      <h1 className="text-4xl font-bold text-white border-b border-gray-700 pb-4 text-center mb-6">
        Vamos Conversar
      </h1>
      <p className="text-gray-400 text-lg text-center max-w-2xl mx-auto mb-10">
        Estou sempre aberto a novas oportunidades de trabalho, colaborações ou
        apenas para trocar ideias. Entre em contato através das minhas
        plataformas favoritas.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-4">
        {contactData.map((item) => (
          <a
            key={item.medium}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-6 rounded-xl shadow-xl border-t-4 border-gray-700 hover:border-cyan-500 transition-all duration-300 text-center block"
          >
            <div className="flex justify-center items-center mb-3 text-cyan-400">
              {item.icon}
            </div>

            <h3 className="text-xl font-bold text-white mb-1">{item.medium}</h3>

            <p className="text-sm text-gray-400 break-words">{item.value}</p>
          </a>
        ))}
      </div>
      <div className="pt-20 text-center text-gray-600 text-sm">
        <p>
          Desenvolvido com React, TypeScript e Tailwind CSS | ©
          {new Date().getFullYear()} Antony Josué
        </p>
      </div>
    </section>
  );
};
