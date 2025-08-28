import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiMessageCircle, FiSend } from 'react-icons/fi';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail className="text-2xl" />,
      title: 'Email Me',
      description: 'ramazanismayilovh@gmail.com',
      link: 'mailto:ramazanismayilovh@gmail.com',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
    },
    {
      icon: <FiMapPin className="text-2xl" />,
      title: 'Location',
      description: 'Baku, Azerbaijan',
      link: 'https://maps.app.goo.gl/pATHP5bvpjurLpBL7',
      gradient: 'from-emerald-500 to-green-600',
      bgGradient: 'from-emerald-50 to-green-100',
    },
    {
      icon: <FiPhone className="text-2xl" />,
      title: 'Call Me',
      description: '+994 50-572-18-98',
      link: 'tel:+994505721898',
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-100/40 to-green-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"></div>
      </div>
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full mb-6">
              <FiMessageCircle className="text-white text-2xl" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            >
              Get In{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600">
                Touch
              </span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1.5 bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 mx-auto rounded-full"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out to me. I'll get back to you as soon as possible.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                className="group bg-white/80 backdrop-blur-sm border border-white/20 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 text-center relative overflow-hidden"
                whileHover={{ y: -12, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.1, delay: index * 0.15 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg relative z-10`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                > {item.icon}</motion.div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 font-medium">{item.description}</p>
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ rotate: -45 }}
                  whileHover={{ rotate: 0 }}><FiSend className="text-emerald-500" /></motion.div>
              </motion.a>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl shadow-xl p-8 max-w-2xl mx-auto text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                ><FiSend className="text-xl" /></motion.div>
                <h3 className="text-2xl font-bold mb-3">Ready to start a project?</h3>
                <p className="text-emerald-100 mb-6 text-lg">Let's discuss how we can bring your ideas to life</p>
                <motion.a
                  href="mailto:ramazanismayilovh@gmail.com"
                  className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                ><FiMail className="mr-2 text-lg" />Send me an email</motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;