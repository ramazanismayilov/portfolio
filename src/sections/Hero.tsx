import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import profileImg from '../assets/img/profile.jpg'; 

const Hero = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/username' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com/in/username' },
    { icon: <FiTwitter />, url: 'https://twitter.com/username' },
    { icon: <FiMail />, url: 'mailto:your.email@example.com' },
  ];

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-green-50 opacity-90"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Sol Tərəf */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl text-center md:text-left"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium text-green-600 bg-green-50 rounded-full mb-6">
              Hello, I'm a Full Stack Developer
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              I build <span className="gradient-text">digital experiences</span> that matter
            </h1>

            <p className="text-xl text-gray-600 mb-10">
              I'm a passionate developer who loves to create beautiful, functional, and user-centered digital experiences. With a strong foundation in modern web technologies, I bring ideas to life through clean and efficient code.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-12">
              <a
                href="#projects"
                className="btn btn-primary px-8 py-4 text-lg font-semibold"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="btn bg-white text-gray-800 border-2 border-gray-200 hover:border-green-500 px-8 py-4 text-lg font-semibold hover:shadow-md"
              >
                Contact Me
              </a>
            </div>

            <div className="flex justify-center md:justify-start space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-green-600 transition-colors duration-200 text-xl"
                  whileHover={{ y: -3 }}
                  aria-label={social.url.split('/').pop()}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Sağ Tərəf */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34,197,94,0.5)' }}
            className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden cursor-pointer mx-auto md:mx-0"
          >
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
