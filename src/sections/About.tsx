import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'GraphQL',
    'Docker',
    'AWS',
    'Git',
    'CI/CD',
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">About</span> Me
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-green-600 opacity-20">ABOUT</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a passionate Full Stack Developer with a love for creating beautiful, functional, and user-centered digital experiences. With a strong foundation in both front-end and back-end development, I bring ideas to life through clean, efficient, and maintainable code.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My journey in web development started several years ago, and since then, I've had the privilege of working with various technologies and frameworks. I'm constantly learning and staying up-to-date with the latest industry trends to ensure my skills remain relevant and effective.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities. I believe in writing clean, efficient, and maintainable code while following best practices and design patterns.
              </p>

              <div>
                <h4 className="text-lg font-semibold mb-4">Here are a few technologies I've been working with recently:</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
