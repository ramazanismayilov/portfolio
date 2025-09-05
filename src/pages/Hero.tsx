import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiInstagram, FiDownload, FiSend } from 'react-icons/fi';
import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';
import { RiNpmjsFill } from "react-icons/ri";

const Hero: React.FC = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/ramazanismayilov', label: 'GitHub' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/ramazan-ismayilov', label: 'LinkedIn' },
    { icon: <FiInstagram />, url: 'https://www.instagram.com/r.ismayilof', label: 'Instagram' },
    { icon: <RiNpmjsFill />, url: 'https://www.npmjs.com/~ramazanismayilov', label: 'NPM' },
    { icon: <FiMail />, url: 'mailto:ramazanismayilovh@gmail.com', label: 'Email' },
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
              I'm Ramazan. I have <span className='font-semibold'>over a year of experience</span> in programming as a
              <span className="font-semibold text-green-600"> Software Developer</span>, experienced in both
              frontend (React, Angular) and backend (Node.js, Express.js, NestJS) technologies.
              Currently pursuing a degree in <span className="font-semibold text-green-600">Computer Science</span>,
              I've contributed to various team projects and startup initiatives, gaining valuable experience in creating user-focused products and effective collaboration.
              My goal is to innovate, grow as a developer, and make meaningful contributions in the tech industry.
              I am eager to learn, quick to adapt to new technologies, and an active team player focused on creating innovative solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12 justify-center lg:justify-start"
            >
              <a
                download
                href="pdf/ramazan-ismayilov.pdf"
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

            <motion.div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  className="group w-10 h-10 sm:w-12 sm:h-12 bg-white hover:bg-green-500 border border-gray-200 hover:border-green-500 rounded-full flex items-center justify-center text-gray-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="text-sm sm:text-lg group-hover:animate-bounce transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1.5 sm:-inset-2 md:-inset-3 lg:-inset-4 border-2 border-dashed border-green-300/50 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 sm:-inset-4 md:-inset-6 lg:-inset-8 border border-dotted border-green-400/30 rounded-full"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden shadow-2xl border-3 sm:border-4 lg:border-6 xl:border-8 border-white"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-green-400/20 to-transparent"></div>
                <img
                  src="/img/profile.png"
                  alt="Ramazan Ismayilov - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-500/10 via-transparent to-green-600/10"></div>
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-2 -right-3 sm:-top-3 sm:-right-4 md:-top-4 md:-right-6 lg:-top-6 lg:-right-8 bg-white border border-green-200 px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 rounded-full shadow-lg"
              >
                <span className="text-xs sm:text-xs md:text-sm font-semibold text-green-600">Angular</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute bottom-2 -right-4 sm:bottom-3 sm:-right-6 md:bottom-4 md:-right-8 lg:bottom-6 lg:-right-10 bg-white border border-green-200 px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 rounded-full shadow-lg"
              >
                <span className="text-xs sm:text-xs md:text-sm font-semibold text-green-600">React</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-3 -left-2 sm:-top-4 sm:-left-3 md:-top-6 md:-left-4 lg:-top-8 lg:-left-6 bg-white border border-green-200 px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 rounded-full shadow-lg"
              >
                <span className="text-xs sm:text-xs md:text-sm font-semibold text-green-600">Node.js</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-3 -left-4 sm:-bottom-4 sm:-left-6 md:-bottom-6 md:-left-8 lg:-bottom-8 lg:-left-10 bg-white border border-green-200 px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 rounded-full shadow-lg"
              >
                <span className="text-xs sm:text-xs md:text-sm font-semibold text-green-600">NestJS</span>
              </motion.div>
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