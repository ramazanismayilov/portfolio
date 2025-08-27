import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiInstagram, FiDownload, FiSend } from 'react-icons/fi';
import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';

const Hero: React.FC = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/ramazanismayilov', label: 'GitHub' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/ramazan-ismayilov', label: 'LinkedIn' },
    { icon: <FiInstagram />, url: 'https://www.instagram.com/r.ismayilof', label: 'Instagram' },
    { icon: <FiMail />, url: 'mailto:ramazanismayilovh@gmail.com', label: 'Email' },
  ];

  const floatingIcons = [
    { icon: <FaCode />, delay: 0, x: 100, y: 50 },
    { icon: <FaLaptopCode />, delay: 0.5, x: -80, y: 80 },
    { icon: <FaRocket />, delay: 1, x: 150, y: -30 },
  ];

  return (
    <section id="about" className="relative h-auto flex items-center justify-center overflow pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50/50 to-green-100/30"></div>
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity }
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-green-400/20 to-green-600/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ rotate: -360, y: [0, -20, 0] }}
          transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, y: { duration: 3, repeat: Infinity } }}
          className="absolute bottom-32 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-lg"
        />
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4 + index, repeat: Infinity, delay: item.delay }}
            className="absolute hidden lg:block text-green-400/30 text-3xl"
            style={{ left: `calc(50% + ${item.x}px)`, top: `calc(50% + ${item.y}px)` }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-green-200 text-green-600 px-6 py-3 rounded-full text-sm font-medium mb-3 shadow-lg"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Hello, I'm a Full Stack Developer
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl font-bold mb-6"
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
              className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl"
            >
              I have over <span className="font-semibold text-green-600">1 year of experience</span> in programming.
              I have contributed to the development of <span className="font-semibold">ERP and CRM systems</span>,
              payment integrations, and multi-role platforms. I am eager to learn, quick to adapt to new technologies,
              and an active team player focused on creating <span className="font-semibold text-green-600">innovative solutions</span>.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start"
            >
              <a download href="pdf/ramazan-ismayilov.pdf"
                className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FiDownload className="group-hover:animate-bounce" />
                Download CV
              </a>
              <a href="#contact"
                className="group bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 hover:border-green-500 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FiSend className="group-hover:animate-bounce" />
                Contact Me
              </a>
            </motion.div>
            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <a key={index} href={social.url} target="_blank"
                  className="group w-12 h-12 bg-white hover:bg-green-500 border border-gray-200 hover:border-green-500 rounded-full flex items-center justify-center text-gray-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="text-lg group-hover:animate-bounce transition-transform duration-300">{social.icon}</span>
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
                className="absolute -inset-4 border-2 border-dashed border-green-300/50 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 border border-dotted border-green-400/30 rounded-full"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white"
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
                className="absolute -top-6 -right-8 bg-white border border-green-200 px-4 py-2 rounded-full shadow-lg"
              >
                <span className="text-sm font-semibold text-green-600">Angular</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute bottom-6 -right-10 bg-white border border-green-200 px-4 py-2 rounded-full shadow-lg"
              >
                <span className="text-sm font-semibold text-green-600">React</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-8 -left-6 bg-white border border-green-200 px-4 py-2 rounded-full shadow-lg"
              >
                <span className="text-sm font-semibold text-green-600">Node.js</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-8 -left-10 bg-white border border-green-200 px-4 py-2 rounded-full shadow-lg"
              >
                <span className="text-sm font-semibold text-green-600">NestJS</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-8 h-12 border-2 border-green-500 rounded-full flex justify-center cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-green-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;