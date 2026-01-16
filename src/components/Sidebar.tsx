import React, { useState } from "react";
import { type NavItem } from "../types/navigation";

interface SidebarProps {
  navItems: NavItem[];
  profileName: string;
  profileTitle: string;
  profileImage: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  navItems,
  profileName,
  profileTitle,
  profileImage,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const backgroundColor = "bg-gray-950";
  const textColor = "text-gray-200";
  const highlightColor = "text-cyan-400";
  const sidebarWidth = "w-64";

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-40 p-2 rounded bg-cyan-600 text-white md:hidden hover:bg-cyan-700 transition"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      <aside
        className={`
          fixed top-0 left-0 h-full ${sidebarWidth} 
          ${backgroundColor} ${textColor}
          p-6 z-30 shadow-2xl
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:shadow-xl
        `}
      >
        {/* ... Área do Perfil (Mantida) ... */}
        <div className="flex flex-col items-center mb-10 mt-6">
          <div
            className="rounded-full p-1 border-2 border-cyan-400 mb-4"
            style={{ width: "120px", height: "120px" }}
          >
            <img
              src={profileImage}
              alt={profileName}
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-bold text-white mb-1">{profileName}</h2>
          <p className={`text-sm ${highlightColor} font-medium`}>
            {profileTitle}
          </p>
        </div>

        <nav>
          <ul>
            {navItems.map((item) => {
              return (
                <li key={item.id} className="mb-4">
                  {item.isMainSection ? (
                    <a
                      href={item.href}
                      onClick={toggleSidebar}
                      className={`uppercase text-xs tracking-widest ${highlightColor} font-semibold block mb-2 mt-4 hover:text-white transition duration-150`}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <a
                      href={item.href}
                      onClick={toggleSidebar}
                      className={`
                        block text-base font-medium transition-colors duration-150 
                        text-gray-400 hover:text-white 
                      `}
                    >
                      {item.name.toUpperCase()}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};
