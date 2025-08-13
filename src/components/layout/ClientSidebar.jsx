import { useState } from "react";
import {
  HiBriefcase,
  HiDocumentText,
  HiMail,
  HiMenu,
  HiMoon,
  HiNewspaper,
  HiSun,
} from "react-icons/hi";
import { HiUser } from "react-icons/hi2";

const ClientSidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeItem, setActiveItem] = useState("about");

  const menuItems = [
    { id: "about", icon: HiUser, label: "ABOUT" },
    { id: "resume", icon: HiDocumentText, label: "RESUME" },
    { id: "projects", icon: HiBriefcase, label: "PROJECTS" },
    { id: "articles", icon: HiNewspaper, label: "ARTICLES" },
    { id: "contact", icon: HiMail, label: "CONTACT" },
  ];

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 via-transparent to-green-500/20 rounded-full blur-xl"></div>
        <div className="relative bg-black/80 backdrop-blur-md border border-green-500/30 rounded-full px-4 py-6 shadow-2xl">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeItem === item.id;

                return (
                  <div key={item.id} className="relative group">
                    <button
                      onClick={() => setActiveItem(item.id)}
                      className={`flex flex-col items-center p-3 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-green-500/30 text-green-400"
                          : "hover:bg-white/10 text-gray-400 hover:text-white"
                      }`}
                    >
                      <IconComponent className="w-6 h-6 mb-1" />
                      <span className="text-xs font-medium tracking-wide">
                        {item.label}
                      </span>
                    </button>
                    {isActive && (
                      <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-green-400 rounded-full"></div>
                    )}
                    <div className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2 bg-black/90 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                      {item.label}
                      <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-black/90"></div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-8 h-px bg-gray-600"></div>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-3 hover:bg-yellow-500/20 rounded-full transition-all duration-300 group"
            >
              {isDarkMode ? (
                <HiSun className="w-6 h-6 text-yellow-400 group-hover:text-yellow-300" />
              ) : (
                <HiMoon className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSidebar;
