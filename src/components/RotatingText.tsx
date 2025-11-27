import React, { useState, useEffect } from "react";

const WORDS = [
  "EXPERIÊNCIA",
  "TECNOLOGIA",
  "DESENVOLVIMENTO",
  "WEB",
  "REACT",
  "JAVA",
  "NODE.JS",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "BANCO DE DADOS",
  "FULL-STACK",
  "FRONT-END",
  "BACK-END",
];

export const RotatingText: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % WORDS.length);
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-8 md:h-10 overflow-hidden">
      <h2
        key={WORDS[index]}
        className="text-2xl md:text-3xl font-bold text-cyan-400 transform transition-transform duration-500 ease-in-out"
      >
        {WORDS[index]}
      </h2>
    </div>
  );
};
