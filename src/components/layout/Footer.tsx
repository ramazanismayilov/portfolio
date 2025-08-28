import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { socialLinkData } from '../../data/socialLink';
import { menuData } from '../../data/menu';

const Footer = () => {
  const contactData = [
    {
      icon: FiMail,
      label: "Email",
      value: "ramazanismayilovh@gmail.com",
      href: "mailto:ramazanismayilovh@gmail.com",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Baku, Azerbaijan",
      href: "https://maps.app.goo.gl/pATHP5bvpjurLpBL7",
      target: "_blank",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+994 50-572-18-98",
      href: "tel:+994505721898",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-green-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent"></div>
      </div>
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-400">Ramazan İsmayılov</h3>
                <div className="flex items-center text-emerald-300 text-sm font-medium">
                  <FaCode className="mr-2" />
                  Full Stack Developer
                </div>
              </div>
              <p className="text-gray-300 mb-8 md:max-w-sm lg:max-w-md leading-relaxed">
                Passionate about creating innovative solutions and enhancing user experiences
                through modern web technologies and clean code practices.
              </p>
              <div className="flex space-x-3">
                {socialLinkData.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      className={`text-gray-400 ${social.color} text-xl transition-all duration-300 p-3 rounded-xl border border-gray-700 hover:border-emerald-500/50`}
                      whileHover={{ y: -3, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.1, delay: index * 0.1 }}
                    >
                      <Icon />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold mb-6 text-white flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full mr-3"></span>
                Quick Links
              </h4>
              <ul className="space-y-4">
                {menuData.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-emerald-400 transition-all duration-300 flex items-center group py-2 px-3 rounded-lg hover:bg-emerald-500/10"
                    >
                      <span className="w-1 h-1 bg-emerald-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-xl font-bold mb-6 text-white flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full mr-3"></span>
                Get in Touch
              </h4>
              <ul className="space-y-5">
                {contactData.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.li
                      className="flex items-start group"
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 group-hover:border-emerald-400/50 transition-all duration-300 mr-4">
                        <Icon className="text-emerald-400" size={16} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1 font-medium">{item.label}</p>
                        <a
                          href={item.href}
                          target={item.target || "_self"}
                          className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-sm"
                        >
                          {item.value}
                        </a>
                      </div>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;