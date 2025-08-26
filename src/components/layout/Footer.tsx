import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiPhone, FiMapPin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/ramazanismayilov' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/ramazan-ismayilov' },
    { icon: <FiInstagram />, url: 'https://www.instagram.com/r.ismayilof' },
    { icon: <FiMail />, url: 'mailto:ramazanismayilovh@gmail.com' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Ramazan İsmayılov</h3>
            <p className="text-gray-600 mb-6 md:max-w-sm lg:max-w-md">
              Full Stack Developer with passion for creating innovative solutions and enhancing user experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-green-600 text-xl transition-colors duration-200 p-2 rounded-lg hover:bg-green-50"
                  whileHover={{ y: -3 }}
                  aria-label={social.url.split('/').pop()}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-600 hover:text-green-600 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-600 hover:text-green-600 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-green-600 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Contact Info</h4>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start group">
                <div className="p-2 rounded-lg bg-green-100 group-hover:bg-green-200 transition-colors duration-200 mr-3">
                  <FiMail className="text-green-600" size={16} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <a href="mailto:ramazanismayilovh@gmail.com" className="hover:text-green-600 transition-colors duration-200">
                    ramazanismayilovh@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="p-2 rounded-lg bg-green-100 group-hover:bg-green-200 transition-colors duration-200 mr-3">
                  <FiMapPin className="text-green-600" size={16} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Location</p>
                  <span>Baku, Azerbaijan</span>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="p-2 rounded-lg bg-green-100 group-hover:bg-green-200 transition-colors duration-200 mr-3">
                  <FiPhone className="text-green-600" size={16} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <a href="tel:+994505721898" className="hover:text-green-600 transition-colors duration-200">
                    +994 50-572-18-98
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;