import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi';
import profileImg from '../../public/img/profile.png';

const Hero = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/ramazanismayilov' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/ramazan-ismayilov' },
    { icon: <FiInstagram />, url: 'https://www.instagram.com/r.ismayilof' },
    { icon: <FiMail />, url: 'mailto:ramazanismayilovh@gmail.com' },
  ];

  return (
    <section id="#" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-green-50 opacity-90"></div>
      </div>
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl text-center md:text-left"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium text-green-600 bg-green-50 rounded-full mb-6">
              Hello, I'm a Full Stack Developer
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-6 leading-tight">
              Who <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-600">am I</span> ?
            </h1>
            <p className="text-md text-gray-600 mb-10">
              I have over 1 year of experience in programming. I have contributed
              to the development of ERP and CRM systems, payment integrations,
              and multi-role platforms. I have also supported my team in both
              frontend and backend during several hackathon projects. I am eager
              to learn, quick to adapt to new technologies, and an active team
              player. My goal is to take part in innovative projects to enhance my
              professional growth and add value to the company.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-12">
              <a href="#projects" className="button">View My Work</a>
              <a href="#contact" className="button">Contact Me</a>
            </div>
            <div className="flex justify-center md:justify-start space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-green-600 transition-colors duration-200 text-xl"
                  whileHover={{ y: -6 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-64 h-64 md:w-[400px] md:h-[400px] mx-auto md:mx-0"
          >
            <img
              src={profileImg}
              alt="profileImg"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
