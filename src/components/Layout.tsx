import AntonyProfileImage from "../assets/Antony.png";

import React from "react";
import { Sidebar } from "./Sidebar";
import { sidebarNavItems } from "../types/navigation";

import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { Contact } from "../pages/Contact";
import { Conhecimentos } from "../pages/Conhecimentos";
import { Experiencias } from "../pages/Experiencias";
import { Formacao } from "../pages/Formacao";
import { Interesses } from "../pages/Interesses";

const profileData = {
  name: "Antony Almeida",
  title: "Desenvolvedor Full-Stack",
  image: AntonyProfileImage,
};

export const Layout: React.FC = () => {
  const backgroundColor = "bg-gray-900";
  const baseContentClasses = "md:pl-64 min-h-screen";

  return (
    <div className={`flex ${backgroundColor}`}>
      <Sidebar
        navItems={sidebarNavItems}
        profileName={profileData.name}
        profileTitle={profileData.title}
        profileImage={profileData.image}
      />
      <div className={`flex-1 ${baseContentClasses}`}>
        <main className="max-w-5xl mx-auto w-full px-4 md:px-8">
          <Home /> <Conhecimentos />
          <Experiencias />
          <Projects />
          <Formacao /> <Interesses />
          <Contact />
        </main>
      </div>
    </div>
  );
};
