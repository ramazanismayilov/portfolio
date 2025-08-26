import { motion } from 'framer-motion';

const SkillCard = ({ name, icon }: { name: string; icon: string }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-lg p-4 hover:shadow-md transition-all duration-200 cursor-pointer group"
        >
            <div className="flex items-center space-x-3">
                <img width={25} src={`../../public/icon/${icon}`} alt="" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors duration-200">
                    {name}
                </span>
            </div>
        </motion.div>
    );
};

export default SkillCard