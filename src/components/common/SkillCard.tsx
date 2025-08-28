import { motion } from 'framer-motion';

const SkillCard = ({ name = '', icon = '' }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
        >
            <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center group-hover:from-green-100 group-hover:to-green-200 transition-all duration-300">
                    <img width={32} src={`icon/${icon}`} alt={name} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                    {name}
                </span>
            </div>
        </motion.div>
    );
};
export default SkillCard