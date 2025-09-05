import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPackage, FiStar, FiDownload, FiGitBranch, FiExternalLink } from 'react-icons/fi';

const Package = () => {
  const packages = [
    {
      name: "@ri-dev/react-cursor-kit",
      description:
        "A customizable React cursor component with smooth animations and interactive hover effects to enhance user experience",
      downloads: "350+",
      version: "1.0.0",
      category: "Custom cursor",
      link: "https://www.npmjs.com/package/@ri-dev/react-cursor-kit",
      color: "from-emerald-400 to-green-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardHover = { scale: 1.02, transition: { duration: 0.3 } };

  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (pkgName: string) => {
    navigator.clipboard.writeText(`npm install ${pkgName}`);
    setCopied(pkgName);
    setTimeout(() => setCopied(null), 2000); 
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-green-50/30 min-h-screen relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 bg-green-100 px-6 py-2 rounded-full mb-6">
            <FiPackage className="w-5 h-5 text-green-600" />
            <span className="text-green-700 font-medium">Open Source Contributions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-green-500">NPM Packages</span>
          </h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { label: "Total Downloads", value: "350+", icon: FiDownload },
            { label: "Active Packages", value: "1", icon: FiPackage },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-100 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={cardHover}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${pkg.color}`}></div>
                  <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    {pkg.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{pkg.description}</p>
              </div>
              <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative">
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-2">
                    <FiDownload className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">{pkg.downloads}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiGitBranch className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">v{pkg.version}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap relative">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCopy(pkg.name)}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium cursor-pointer relative"
                  >
                    copy install
                    {copied === pkg.name && (
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-90">
                        Copied!
                      </span>
                    )}
                  </motion.button>
                  <motion.a
                    href={pkg.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
                  >
                    <FiExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
              <div
                className={`absolute inset-0 bg-gradient-to-r ${pkg.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`}
              ></div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in collaborating?</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              I'm always open to contributing to open source projects and creating innovative solutions. 
              Let's build something amazing together!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
              href='https://github.com/ramazanismayilov'
              target='_blank'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors"
              >
                View on GitHub
              </motion.a>
              
              <motion.a
              href='https://www.npmjs.com/~ramazanismayilov'
              target='_blank'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Follow on NPM
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 right-16 w-32 h-32 bg-emerald-200/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-300/20 rounded-full blur-lg"></div>
    </section>
  );
};

export default Package;
