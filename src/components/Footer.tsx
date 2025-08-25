import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/username' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com/in/username' },
    { icon: <FiTwitter />, url: 'https://twitter.com/username' },
    { icon: <FiMail />, url: 'mailto:your.email@example.com' },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">John Doe</h3>
            <p className="text-gray-400 mb-6">
              A passionate Full Stack Developer dedicated to creating beautiful, functional, and user-centered digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-xl transition-colors duration-200"
                  whileHover={{ y: -3 }}
                  aria-label={social.url.split('/').pop()}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  onClick={scrollToTop}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <FiMail className="mr-3 mt-1 text-green-400" />
                <a href="mailto:your.email@example.com" className="hover:text-white transition-colors duration-200">
                  your.email@example.com
                </a>
              </li>
              <li className="flex items-start">
                <FiMapPin className="mr-3 mt-1 text-green-400" />
                <span>San Francisco, CA</span>
              </li>
              <li className="flex items-start">
                <FiPhone className="mr-3 mt-1 text-green-400" />
                <a href="tel:+15551234567" className="hover:text-white transition-colors duration-200">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors z-50 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <FiArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
