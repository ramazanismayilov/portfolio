import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiSend, FiBriefcase, FiMapPin, FiHome, FiArrowUpRight } from 'react-icons/fi';
import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';

const Hero: React.FC = () => {
  const contactLinks = [
    { icon: <FiGithub />, label: 'GitHub', url: 'https://github.com/ramazanismayilov' },
    { icon: <FiLinkedin />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/ramazan-ismayilov' },
    { icon: <FiMail />, label: 'Email', url: 'mailto:ramazanismayilovh@gmail.com' },
  ];

  const profileStats = [
    { icon: <FiBriefcase />, label: 'Experience', value: '2+ Years' },
    { icon: <FiHome />, label: 'Current Position', value: 'Middle Frontend Developer' },
    { icon: <FiMapPin />, label: 'Location', value: 'Baku, Azerbaijan' },
  ];

  const floatingIcons = [
    { icon: <FaCode />, delay: 0, x: 100, y: 50 },
    { icon: <FaLaptopCode />, delay: 0.5, x: -80, y: 80 },
    { icon: <FaRocket />, delay: 1, x: 150, y: -30 },
  ];

  return (
    <section id="about" className="relative h-auto flex items-center justify-center pt-20 sm:pt-24 md:pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50/50 to-green-100/30"></div>
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity }
          }}
          className="absolute top-10 right-10 sm:top-20 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-r from-green-400/20 to-green-600/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ rotate: -360, y: [0, -20, 0] }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity }
          }}
          className="absolute bottom-16 left-5 sm:bottom-32 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-lg"
        />
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4 + index, repeat: Infinity, delay: item.delay }}
            className="absolute hidden lg:block text-green-400/30 text-2xl lg:text-3xl"
            style={{ left: `calc(50% + ${item.x}px)`, top: `calc(50% + ${item.y}px)` }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-green-200 text-green-600 px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 shadow-lg"
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
              Hello, I'm a Full Stack Developer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            >
              Who{" "}
              <span className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 bg-clip-text text-transparent inline">
                am I?
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-2xl"
            >
              I'm Ramazan, a <span className="font-semibold text-green-600">Full-Stack Developer</span> with
              <span className="font-semibold"> over 2 years of experience</span>, specializing in
              <span className="font-semibold text-green-600"> Angular, React, and Node.js (Express.js, NestJS)</span>.
              I have developed enterprise ERP systems and worked on projects involving
              multi-role architectures, payment integrations, and
              <span className="font-semibold"> SİMA token-based authentication with secure document signing</span>.
              Beyond my professional experience, I am passionate about hackathons and programming competitions.
              I was a <span className="font-semibold text-green-600">WorldSkills Web Technologies finalist</span>,
              ranking <span className="font-semibold">5th among 130 participants</span>.
              I enjoy learning new technologies, solving complex problems, and building efficient,
              scalable, and user-friendly applications.
              I thrive in collaborative environments where I can share knowledge, contribute to innovative
              projects, and continuously grow as a software developer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12 justify-center lg:justify-start"
            >
              <a
                download
                href="pdf/ramazan-ismayılov.pdf"
                className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
              >
                <FiDownload className="group-hover:animate-bounce text-sm sm:text-base" />
                Download CV
              </a>
              <a
                href="#contact"
                className="group bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 hover:border-green-500 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
              >
                <FiSend className="group-hover:animate-bounce text-sm sm:text-base" />
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 border border-dashed border-green-300/40 rounded-3xl pointer-events-none"
              />

              <div className="relative bg-white/90 backdrop-blur-sm border border-green-100 rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-5 sm:px-7 sm:py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white text-lg font-bold">
                      RI
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm sm:text-base leading-tight">Ramazan Ismayilov</p>
                      <p className="text-green-50/90 text-xs sm:text-sm">Developer Profile</p>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-5 sm:px-7 sm:py-6 space-y-4 sm:space-y-5">
                  {profileStats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 rounded-lg bg-green-50 text-green-600 flex items-center justify-center text-sm sm:text-base">
                        {stat.icon}
                      </span>
                      <div>
                        <p className="text-[11px] sm:text-xs uppercase tracking-wide text-gray-400 font-medium">
                          {stat.label}
                        </p>
                        <p className="text-sm sm:text-base font-semibold text-gray-800">
                          {stat.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}

                  <div className="pt-3 sm:pt-4 border-t border-gray-100">
                    <p className="text-[11px] sm:text-xs uppercase tracking-wide text-gray-400 font-medium mb-2 sm:mb-3">
                      Contact
                    </p>
                    <div className="space-y-2">
                      {contactLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          className="group flex items-center justify-between px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg bg-gray-50 hover:bg-green-50 transition-colors duration-300"
                        >
                          <span className="flex items-center gap-2.5 text-sm sm:text-base text-gray-700 group-hover:text-green-600 font-medium">
                            <span className="text-gray-400 group-hover:text-green-600 transition-colors duration-300">
                              {link.icon}
                            </span>
                            {link.label}
                          </span>
                          <FiArrowUpRight className="text-gray-300 group-hover:text-green-500 transition-colors duration-300" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-green-500 rounded-full flex justify-center cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-0.5 h-2 sm:w-1 sm:h-3 bg-green-500 rounded-full mt-1.5 sm:mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;