import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail className="text-2xl text-green-600" />,
      title: 'Email Me',
      description: 'ramazanismayilovh@gmail.com',
      link: 'mailto:ramazanismayilovh@gmail.com',
    },
    {
      icon: <FiMapPin className="text-2xl text-green-600" />,
      title: 'Location',
      description: 'Baku, Azerbaijan',
      link: 'https://maps.app.goo.gl/pATHP5bvpjurLpBL7',
    },
    {
      icon: <FiPhone className="text-2xl text-green-600" />,
      title: 'Call Me',
      description: '+994 50-572-18-98',
      link: 'tel:+994505721898',
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-600">Touch</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out to me. I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 text-center"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
