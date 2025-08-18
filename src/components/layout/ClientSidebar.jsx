import { useState } from "react";
import { HiBriefcase, HiDocumentText, HiMail } from "react-icons/hi";
import { HiUser } from "react-icons/hi2";
import { Link } from "react-router";

const ClientSidebar = () => {
  const [activeItem, setActiveItem] = useState("about");

  const menuItems = [
    { id: 1, path: "/", icon: HiUser, label: "ABOUT" },
    { id: 2, path: "resume", icon: HiDocumentText, label: "RESUME" },
    { id: 3, path: "projects", icon: HiBriefcase, label: "PROJECTS" },
    { id: 4, path: "contact", icon: HiMail, label: "CONTACT" },
  ];

  return (
    <div
      className="fixed left-20 top-1/2 -translate-y-1/2 z-50"
      style={{ transform: "perspective(1000px) rotateY(20deg)" }}
    >
      <div className="relative">
        <div className="relative bg-black/20 backdrop-blur-lg rounded-full shadow-2xl overflow-hidden border border-green-500/50">
          <div className="flex flex-col py-4 px-2">
            <div className="flex flex-col">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeItem === item.id;
                return (
                  <div key={item.id} className="relative group">
                    <Link
                      to={`${item.path}`}
                      onClick={() => setActiveItem(item.id)}
                      className={`flex flex-col items-center px-1 py-5 rounded-xl transition-all duration-300 ${
                        isActive
                          ? "text-[#4caf51]"
                          : "text-gray-400 hover:text-[#4caf51]"
                      }`}
                    >
                      <div className="icon">
                        <IconComponent />
                      </div>
                      <span className="text-xs font-semibold text-center tracking-wider">
                        {item.label}
                      </span>
                    </Link>
                    <div className="border-b w-full border-white/20 backdrop-blur-sm"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSidebar;
